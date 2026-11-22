const locale=window.InvitationLanguage;
const cover=document.getElementById('cover');
const openingVideo=document.getElementById('opening-video');
const pageContent=[document.querySelector('main'),document.querySelector('footer')];
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const tour=new InvitationTour();
const openTag=document.getElementById('open-invitation');
let invitationActivated=false;
let opening=false,runId=0,fallbackTimer=0,fadeAnimation=null,revealStarted=false,revealFrame=0;
const revealProgress=.75;
function cancelRevealFrame(){
 if(revealFrame&&openingVideo.cancelVideoFrameCallback)openingVideo.cancelVideoFrameCallback(revealFrame);
 revealFrame=0;
}
function revealAtAlmostOpen(){
 if(!opening||revealStarted||!Number.isFinite(openingVideo.duration)||openingVideo.duration<=0)return;
 if(openingVideo.currentTime/openingVideo.duration<revealProgress)return;
 revealStarted=true;cancelRevealFrame();
 document.body.classList.add('invitation-visible');
 cover.dataset.openingState='revealing';
 // Keep the envelope moving while its final 25% dissolves into the invitation.
 const remainingMs=(openingVideo.duration-openingVideo.currentTime)/openingVideo.playbackRate*1000;
 if(cover.animate&&!reducedMotion.matches)fadeAnimation=cover.animate([{opacity:1},{opacity:0}],{duration:Math.max(200,remainingMs),fill:'forwards'});
}
function watchReveal(){
 if(!opening||revealStarted||!openingVideo.requestVideoFrameCallback)return;
 revealFrame=openingVideo.requestVideoFrameCallback(()=>{revealFrame=0;revealAtAlmostOpen();watchReveal()});
}
function lockPage(locked){document.body.classList.toggle('cover-active',locked);pageContent.forEach(el=>{el.inert=locked})}
function jumpToTop(){document.documentElement.classList.add('motion-immediate');window.scrollTo(0,0);requestAnimationFrame(()=>document.documentElement.classList.remove('motion-immediate'))}
async function finishOpening(reason='ended'){
 if(!opening)return;
 const id=runId;opening=false;clearTimeout(fallbackTimer);cancelRevealFrame();
 openingVideo.pause();document.body.classList.add('invitation-visible');cover.dataset.openingState=reason;
 try{if(!reducedMotion.matches&&cover.animate){if(!fadeAnimation)fadeAnimation=cover.animate([{opacity:1},{opacity:0}],{duration:350,fill:'forwards'});await fadeAnimation.finished.catch(()=>{})}}finally{
  if(id!==runId)return;
  cover.hidden=true;lockPage(false);locale.status('opening-status','ready');
  // Let guests read the cover first, then tour the invitation at an easy pace.
  if(!reducedMotion.matches){tour.autoplay(1500);if(document.hidden)tour.suspend()}else tour.stop('paused');
 }
}
async function startOpening(){
 const id=++runId;tour.stop('idle');cancelRevealFrame();revealStarted=false;opening=true;cover.hidden=false;
 if(fadeAnimation){fadeAnimation.cancel();fadeAnimation=null}
 document.body.classList.remove('invitation-visible');document.body.classList.add('opening-started');openTag.disabled=true;lockPage(true);jumpToTop();
 locale.status('opening-status','opening');
 cover.dataset.openingState='loading';
 openingVideo.muted=true;openingVideo.defaultMuted=true;openingVideo.playsInline=true;
 openingVideo.defaultPlaybackRate=1.3;openingVideo.playbackRate=1.3;
 if(reducedMotion.matches){finishOpening('reduced-motion');return}
 try{
  openingVideo.currentTime=0;
  fallbackTimer=setTimeout(()=>{if(id===runId)finishOpening('timeout')},20000);
  await openingVideo.play();
  if(id===runId&&opening){cover.dataset.openingState='playing';watchReveal()}
 }catch(error){if(id===runId)finishOpening('autoplay-unavailable')}
}
openingVideo.addEventListener('timeupdate',revealAtAlmostOpen);
openingVideo.addEventListener('ended',()=>finishOpening('ended'));
openingVideo.addEventListener('error',()=>finishOpening('media-unavailable'));
document.getElementById('replay').addEventListener('click',startOpening);
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&opening)finishOpening('skipped')});
document.addEventListener('visibilitychange',()=>{if(document.hidden)tour.suspend();else tour.restore()});
if('scrollRestoration' in history)history.scrollRestoration='manual';
cover.dataset.openingState='waiting';lockPage(true);jumpToTop();locale.status('opening-status','openingPrompt');
// The hanging tag starts sound and the film directly in the same trusted click.
const music=document.getElementById('background-music');
const sound=document.getElementById('sound');
const musicStatus=document.getElementById('music-status');
let musicWanted=true,musicAttempt=null;
music.loop=true;music.autoplay=false;music.muted=false;music.defaultMuted=false;music.volume=.55;
function renderMusic(){
 const playing=!music.paused&&!music.ended;
 // The toggle expresses the enabled preference, independently of browser permission.
 sound.setAttribute('aria-pressed',String(musicWanted));
 sound.setAttribute('aria-label',locale.t(musicWanted?'musicPauseLabel':'musicPlayLabel'));
 sound.setAttribute('aria-description',locale.t(playing?'musicPlaying':musicWanted?'musicEnabledWaiting':'musicPaused'));
 sound.dataset.playback=playing?'playing':musicWanted?'waiting':'off';
 sound.querySelector('.sound-label').textContent=locale.t(musicWanted?'musicOn':'musicPlay');
}
function startMusic(){
 if(!musicWanted||!music.paused)return Promise.resolve();
 if(musicAttempt)return musicAttempt;
 try{
  musicAttempt=Promise.resolve(music.play()).then(()=>{
   if(!musicWanted)music.pause();
   musicWanted?locale.status('music-status','musicPlaying'):(musicStatus.textContent='');
  }).catch(()=>{
   if(musicWanted)locale.status('music-status','musicWaiting');
  }).finally(()=>{musicAttempt=null;renderMusic()});
 }catch(error){musicAttempt=null;renderMusic()}
 return musicAttempt;
}
function unlockMusic(event){
 if(!invitationActivated||event.target?.closest?.('#sound, #open-invitation'))return;
 if(musicWanted&&music.paused)startMusic();
}
for(const type of ['pointerdown','touchend','wheel','keydown']){
 window.addEventListener(type,unlockMusic,{passive:true});
}
sound.addEventListener('click',()=>{
 if(musicWanted){musicWanted=false;music.pause();locale.status('music-status','musicPaused');renderMusic()}
 else{musicWanted=true;startMusic()}
});
for(const type of ['playing','pause','ended','error'])music.addEventListener(type,renderMusic);
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&invitationActivated&&musicWanted&&music.paused)startMusic()});
renderMusic();
openTag.addEventListener('click',()=>{
 if(opening||invitationActivated)return;
 invitationActivated=true;
 // No timer or await before play(): preserve the browser's user activation.
 startMusic();
 startOpening();
});
const eventTime=new Date('2026-12-16T10:30:00+05:30').getTime();
function tick(){const delta=Math.max(0,eventTime-Date.now());const total=Math.floor(delta/1000);const values={days:Math.floor(total/86400),hours:Math.floor(total/3600)%24,minutes:Math.floor(total/60)%60,seconds:total%60};Object.entries(values).forEach(([id,value])=>document.getElementById(id).textContent=locale.number(value));if(delta===0)locale.status('countdown-note','elapsed')}tick();setInterval(tick,1000);
document.getElementById('share').addEventListener('click',async()=>{const url=window.location.href.split('#')[0];const status=document.getElementById('share-status');try{if(navigator.share){await navigator.share({title:locale.t('shareTitle'),text:locale.t('shareText'),url})}else if(navigator.clipboard){await navigator.clipboard.writeText(url);locale.status('share-status','copied')}else{status.textContent=url}}catch(error){if(error.name!=='AbortError')locale.status('share-status','shareFallback')}});


window.addEventListener('invitation-language-change',()=>{renderMusic();tick()});
