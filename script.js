const cover=document.getElementById('cover');
const openButton=document.getElementById('open');
const pageContent=[document.querySelector('header'),document.querySelector('main'),document.querySelector('footer')];
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let opening=false,openingTimer;
function lockPage(locked){document.body.classList.toggle('cover-active',locked);pageContent.forEach(el=>{el.inert=locked})}
function showInvitation(){if(opening)return;opening=true;openButton.disabled=true;cover.classList.add('is-opening');openingTimer=setTimeout(()=>{cover.hidden=true;cover.setAttribute('aria-hidden','true');lockPage(false);document.querySelector('.monogram').focus({preventScroll:true});opening=false},reducedMotion.matches?0:1750)}
function replayInvitation(){clearTimeout(openingTimer);window.scrollTo({top:0,behavior:'instant'});opening=false;openButton.disabled=false;cover.hidden=false;cover.removeAttribute('aria-hidden');cover.classList.remove('is-opening');lockPage(true);openButton.focus({preventScroll:true})}
lockPage(true);
openButton.addEventListener('click',showInvitation);
document.getElementById('replay').addEventListener('click',replayInvitation);
cover.addEventListener('keydown',event=>{if(event.key==='Tab'){event.preventDefault();openButton.focus()}if(event.key==='Escape')showInvitation()});
openButton.focus({preventScroll:true});
let audioContext,masterGain,musicPlaying=false,musicTimer;
const sound=document.getElementById('sound');
function setSoundState(){sound.setAttribute('aria-pressed',String(musicPlaying));sound.setAttribute('aria-label',musicPlaying?'Pause gentle background music':'Play gentle background music');sound.querySelector('.sound-label').textContent=musicPlaying?'Music on':'Music off';}
function playPhrase(){if(!musicPlaying)return;const notes=[261.63,329.63,392,523.25,440,349.23,293.66,392];notes.forEach((freq,i)=>{const t=audioContext.currentTime+i*.85;const osc=audioContext.createOscillator();const gain=audioContext.createGain();osc.type='sine';osc.frequency.value=freq;gain.gain.setValueAtTime(0,t);gain.gain.linearRampToValueAtTime(.09,t+.06);gain.gain.exponentialRampToValueAtTime(.001,t+2.8);osc.connect(gain);gain.connect(masterGain);osc.start(t);osc.stop(t+3)});musicTimer=setTimeout(playPhrase,6800)}
async function toggleMusic(){try{if(!audioContext){const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio){sound.querySelector('.sound-label').textContent='Unavailable';return}audioContext=new Audio();masterGain=audioContext.createGain();masterGain.gain.value=.35;masterGain.connect(audioContext.destination)}musicPlaying=!musicPlaying;if(musicPlaying){await audioContext.resume();playPhrase()}else{clearTimeout(musicTimer);await audioContext.suspend()}setSoundState()}catch{musicPlaying=false;setSoundState()}}
sound.addEventListener('click',toggleMusic);
const eventTime=new Date('2026-12-16T11:00:00+05:30').getTime();
function tick(){const delta=Math.max(0,eventTime-Date.now());const total=Math.floor(delta/1000);const values={days:Math.floor(total/86400),hours:Math.floor(total/3600)%24,minutes:Math.floor(total/60)%60,seconds:total%60};Object.entries(values).forEach(([id,value])=>document.getElementById(id).textContent=String(value).padStart(2,'0'));if(delta===0)document.getElementById('countdown-note').textContent='Our beautiful beginning · 16 December 2026'}tick();setInterval(tick,1000);
document.getElementById('share').addEventListener('click',async()=>{const url=window.location.href.split('#')[0];const status=document.getElementById('share-status');try{if(navigator.share){await navigator.share({title:'Atul & Astha — Our Engagement',text:'Celebrate with us on 16 December 2026, 11 AM, at Golden Tulip Hotel, Lucknow.',url})}else if(navigator.clipboard){await navigator.clipboard.writeText(url);status.textContent='Invitation link copied.'}else{status.textContent=url}}catch(error){if(error.name!=='AbortError')status.textContent='You can share this invitation using the link in your address bar.'}});
document.addEventListener('visibilitychange',()=>{if(audioContext&&musicPlaying){if(document.hidden)audioContext.suspend();else audioContext.resume()}});
