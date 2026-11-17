const cover=document.getElementById('cover');
const openingVideo=document.getElementById('opening-video');
const pageContent=[document.querySelector('main'),document.querySelector('footer')];
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const tour=new InvitationTour();
let opening=false,runId=0,fallbackTimer=0,fadeAnimation=null;
function lockPage(locked){document.body.classList.toggle('cover-active',locked);pageContent.forEach(el=>{el.inert=locked})}
function jumpToTop(){document.documentElement.classList.add('motion-immediate');window.scrollTo(0,0);requestAnimationFrame(()=>document.documentElement.classList.remove('motion-immediate'))}
async function finishOpening(reason='ended'){
 if(!opening)return;
 const id=runId;opening=false;clearTimeout(fallbackTimer);
 openingVideo.pause();document.body.classList.add('invitation-visible');cover.dataset.openingState=reason;
 try{if(!reducedMotion.matches&&cover.animate){fadeAnimation=cover.animate([{opacity:1},{opacity:0}],{duration:350,fill:'forwards'});await fadeAnimation.finished.catch(()=>{})}}finally{
  if(id!==runId)return;
  cover.hidden=true;lockPage(false);document.getElementById('opening-status').textContent='Your invitation is ready.';
  // Motion is requested by the first scroll gesture, never by a timer.
  tour.arm();
 }
}
async function startOpening(){
 const id=++runId;tour.stop('idle');opening=true;cover.hidden=false;
 if(fadeAnimation){fadeAnimation.cancel();fadeAnimation=null}
 document.body.classList.remove('invitation-visible');lockPage(true);jumpToTop();
 document.getElementById('opening-status').textContent='Unwrapping your invitation…';
 cover.dataset.openingState='loading';
 openingVideo.muted=true;openingVideo.defaultMuted=true;openingVideo.playsInline=true;
 openingVideo.defaultPlaybackRate=1.3;openingVideo.playbackRate=1.3;
 if(reducedMotion.matches){finishOpening('reduced-motion');return}
 try{
  openingVideo.currentTime=0;
  fallbackTimer=setTimeout(()=>{if(id===runId)finishOpening('timeout')},20000);
  await openingVideo.play();
  if(id===runId&&opening)cover.dataset.openingState='playing';
 }catch(error){if(id===runId)finishOpening('autoplay-unavailable')}
}
openingVideo.addEventListener('ended',()=>finishOpening('ended'));
openingVideo.addEventListener('error',()=>finishOpening('media-unavailable'));
document.getElementById('replay').addEventListener('click',startOpening);
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&opening)finishOpening('skipped')});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&tour.state==='running')tour.stop('paused')});
if('scrollRestoration' in history)history.scrollRestoration='manual';
startOpening();
// The selected instrumental loops for the visit. Audible autoplay is attempted;
// mobile browsers that require activation are unlocked by the first real gesture.
const music=document.getElementById('background-music');
const sound=document.getElementById('sound');
const musicStatus=document.getElementById('music-status');
let musicWanted=true,musicAttempt=null;
music.loop=true;music.volume=.55;
function renderMusic(){
 const playing=!music.paused&&!music.ended;
 sound.setAttribute('aria-pressed',String(playing));
 sound.setAttribute('aria-label',playing?'Pause background music':'Play background music');
 sound.querySelector('.sound-label').textContent=playing?'Music on':'Play music';
}
function startMusic(){
 if(!musicWanted||!music.paused)return Promise.resolve();
 if(musicAttempt)return musicAttempt;
 try{
  musicAttempt=Promise.resolve(music.play()).then(()=>{
   if(!musicWanted)music.pause();
   musicStatus.textContent=musicWanted?'Background music is playing.':'';
  }).catch(()=>{
   if(musicWanted)musicStatus.textContent='Music will start after your first tap or scroll.';
  }).finally(()=>{musicAttempt=null;renderMusic()});
 }catch(error){musicAttempt=null;renderMusic()}
 return musicAttempt;
}
function unlockMusic(event){
 if(event.target?.closest?.('#sound'))return;
 if(musicWanted&&music.paused)startMusic();
}
for(const type of ['pointerdown','touchend','wheel','keydown']){
 window.addEventListener(type,unlockMusic,{passive:true});
}
sound.addEventListener('click',()=>{
 if(!music.paused){musicWanted=false;music.pause();musicStatus.textContent='Background music paused.';renderMusic()}
 else{musicWanted=true;startMusic()}
});
for(const type of ['playing','pause','ended','error'])music.addEventListener(type,renderMusic);
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&musicWanted&&music.paused)startMusic()});
renderMusic();startMusic();
const eventTime=new Date('2026-12-16T11:00:00+05:30').getTime();
function tick(){const delta=Math.max(0,eventTime-Date.now());const total=Math.floor(delta/1000);const values={days:Math.floor(total/86400),hours:Math.floor(total/3600)%24,minutes:Math.floor(total/60)%60,seconds:total%60};Object.entries(values).forEach(([id,value])=>document.getElementById(id).textContent=String(value).padStart(2,'0'));if(delta===0)document.getElementById('countdown-note').textContent='Our beautiful beginning · 16 December 2026'}tick();setInterval(tick,1000);
document.getElementById('share').addEventListener('click',async()=>{const url=window.location.href.split('#')[0];const status=document.getElementById('share-status');try{if(navigator.share){await navigator.share({title:'Atul & Astha — Our Engagement',text:'Celebrate with us on 16 December 2026, 11 AM, at Golden Tulip Hotel, Lucknow.',url})}else if(navigator.clipboard){await navigator.clipboard.writeText(url);status.textContent='Invitation link copied.'}else{status.textContent=url}}catch(error){if(error.name!=='AbortError')status.textContent='You can share this invitation using the link in your address bar.'}});

