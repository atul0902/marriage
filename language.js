/* Complete, reviewed local copy: no translation service or visitor data upload. */
(()=>{
const copy=[
 ['#open-label','Open','खोलें'],
 ['#open-caption','with love','प्यार से'],
 ['.hero .lucknow-welcome','TOGETHER WITH OUR FAMILIES','सप्रेम सगाई निमंत्रण'],
 ['.hero .invite-line','With love, we invite you<br>to celebrate our engagement','सगाई की इस मंगल बेला में<br>सपरिवार पधारकर आशीर्वाद दें।'],
 ['.hero h1','Astha <span>&</span> Atul','आस्था <span>और</span> अतुल'],
 ['.hero-date','16 DECEMBER 2026','१६ दिसम्बर २०२६'],
 ['.hero-time','11:00 AM <span>·</span> Golden Tulip Hotel','प्रातः ११:०० बजे <span>·</span> गोल्डन ट्यूलिप होटल'],
 ['.hero-location','Lucknow <span class="location-dot">·</span> The city of love','लखनऊ <span class="location-dot">·</span> मोहब्बत का शहर'],
 ['.intro > .eyebrow','THE BEGINNING OF OUR FOREVER','सगाई का शुभ अवसर'],
 ['.intro h2','<em>For our warm little hearts</em>','स्नेह भरा निमंत्रण<br><em>आपके नाम</em>'],
 ['.intro .body-copy','A promise, a ring, and a lifetime of little moments.<br>We would love for you to be part of the first.','आस्था और अतुल के सगाई समारोह में<br>आप सपरिवार सादर आमंत्रित हैं।<br>पधारकर इस शुभ अवसर की शोभा बढ़ाएँ<br>और दोनों को अपना आशीर्वाद दें।'],
 ['.event-details > div:first-child .eyebrow','THE DAY','शुभ दिन'],
 ['.event-details > div:first-child p','Wednesday','बुधवार'],
 ['.event-details > div:first-child > span:last-child','16 December 2026','१६ दिसम्बर २०२६'],
 ['.event-details > div:last-child .eyebrow','THE TIME','शुभ समय'],
 ['.event-details > div:last-child p','11:00 AM','प्रातः ११:०० बजे'],
 ['.event-details > div:last-child > span:last-child','Indian Standard Time','भारतीय मानक समय'],
 ['a[download]','Add to your calendar <span aria-hidden="true">↗</span>','अपने कैलेंडर में जोड़ें <span aria-hidden="true">↗</span>'],
 ['.countdown-section .eyebrow','EVERY MOMENT BRINGS US CLOSER','मिलन की शुभ घड़ी की प्रतीक्षा'],
 ['.countdown-section h2','Until we celebrate','बस, अब आपका इंतज़ार है'],
 ['#days + span','DAYS','दिन'],['#hours + span','HOURS','घंटे'],['#minutes + span','MINUTES','मिनट'],['#seconds + span','SECONDS','सेकंड'],
 ['#countdown-note','A little closer to forever.','आप आएँगे, तभी महफ़िल सजेगी।'],
 ['.venue > .eyebrow','A CELEBRATION IN THE HEART OF LUCKNOW','आपके स्वागत को आतुर हैं हम'],
 ['.venue h2','Meet us in <em>Lucknow</em>','शुभ समारोह का <em>स्थल</em>'],
 ['.venue-label','THE ENGAGEMENT','सगाई समारोह'],
 ['.venue h3','Golden Tulip Hotel','गोल्डन ट्यूलिप होटल'],
 ['.venue address','Station Rd, Udaiganj, Husainganj<br>Lucknow, Uttar Pradesh 226001','स्टेशन रोड, उदयगंज, हुसैनगंज<br>लखनऊ, उत्तर प्रदेश २२६००१'],
 ['.venue-time','16 December 2026 <span>·</span> 11:00 AM','१६ दिसम्बर २०२६ <span>·</span> प्रातः ११:०० बजे'],
 ['.venue .button','Get directions <span aria-hidden="true">↗</span>','रास्ता देखें <span aria-hidden="true">↗</span>'],
 ['.closing > .eyebrow','THE JOY WILL BE GREATER WITH YOU THERE','आपकी उपस्थिति ही हमारा सौभाग्य है'],
 ['.closing h2','Come for the celebration.<br><em>Stay for the memories.</em>','पधारिएगा ज़रूर,<br><em>खुशियों में चार चाँद लगाइएगा।</em>'],
 ['.closing > p:not([class])','Your presence and blessings mean the world to us.','स्नेह, शुभकामनाओं और आशीर्वाद सहित<br>इस नए सफ़र की शुरुआत में हमारा साथ दीजिए।'],
 ['.signature','With love,<br><span>Astha & Atul</span>','आपके आगमन की प्रतीक्षा में,<br><span>आस्था एवं अतुल</span>'],
 ['#share','Share the invitation <span aria-hidden="true">↗</span>','आमंत्रण साझा करें <span aria-hidden="true">↗</span>'],
 ['footer > span','16 DECEMBER 2026 · LUCKNOW','१६ दिसम्बर २०२६ · लखनऊ'],
 ['#replay','Replay the invitation opening','आमंत्रण फिर से खोलें']
];
const messages={
 openingPrompt:['Select the hanging Open tag to unwrap your invitation with music.','संगीत के साथ आमंत्रण खोलने के लिए लटकते टैग को छुएँ।'],
 musicEnabledWaiting:['Music is enabled; your browser may require a tap before playing sound.','संगीत चालू है; आवाज़ शुरू करने के लिए ब्राउज़र में एक बार छूना आवश्यक हो सकता है।'],
 opening:['Unwrapping your invitation…','आपका आमंत्रण खुल रहा है…'],ready:['Your invitation is ready.','आपका आमंत्रण तैयार है।'],
 musicPlaying:['Background music is playing.','पृष्ठभूमि में संगीत बज रहा है।'],musicWaiting:['Music will start after your first tap or scroll.','संगीत शुरू करने के लिए स्क्रीन को एक बार छुएँ।'],musicPaused:['Background music paused.','संगीत रोक दिया गया है।'],
 musicOn:['Music enabled','संगीत चालू है'],musicPlay:['Play music','संगीत चलाएँ'],musicPauseLabel:['Turn background music off','संगीत बंद करें'],musicPlayLabel:['Turn background music on','संगीत चालू करें'],
 elapsed:['Our beautiful beginning · 16 December 2026','हमारी खूबसूरत शुरुआत · १६ दिसम्बर २०२६'],
 copied:['Invitation link copied.','आमंत्रण का लिंक कॉपी हो गया।'],shareFallback:['You can share this invitation using the link in your address bar.','इस आमंत्रण को साझा करने के लिए ब्राउज़र के पते वाले लिंक का उपयोग करें।'],
 shareTitle:['Astha & Atul — Our Engagement','आस्था और अतुल — हमारी सगाई'],shareText:['Celebrate with us on 16 December 2026, 11 AM, at Golden Tulip Hotel, Lucknow.','आस्था एवं अतुल के सगाई समारोह में सपरिवार पधारिए। १६ दिसम्बर २०२६, प्रातः ११:०० बजे, गोल्डन ट्यूलिप होटल, लखनऊ। आपकी उपस्थिति हमारा सौभाग्य होगी।']
};
let language='en';try{if(localStorage.getItem('invitation-language')==='hi')language='hi'}catch{}
function t(key){return messages[key]?.[language==='hi'?1:0]??key}
function status(id,key){const el=document.getElementById(id);if(el){el.dataset.messageKey=key;el.textContent=t(key)}}
function apply(next){
 language=next==='hi'?'hi':'en';const hi=language==='hi';document.documentElement.lang=language;
 copy.forEach(([selector,en,hindi])=>document.querySelectorAll(selector).forEach(el=>{el.innerHTML=hi?hindi:en}));
 document.title=hi?'आस्था और अतुल · १६ दिसम्बर २०२६':'Astha & Atul · 16 December 2026';
 document.querySelector('meta[name="description"]').content=hi?'आस्था एवं अतुल के सगाई समारोह में सपरिवार पधारकर आशीर्वाद दें। १६ दिसम्बर २०२६, प्रातः ११:०० बजे, गोल्डन ट्यूलिप होटल, लखनऊ।':'Join us to celebrate the engagement of Astha and Atul on 16 December 2026 at 11 AM, Golden Tulip Hotel, Lucknow.';
 document.querySelector('.hero-art').setAttribute('aria-label',hi?'फूलों और हाथ से चित्रित इतालवी समुद्र तट से सजा आमंत्रण':'Painted Italian coast with blossom branches and an ivory invitation center');
 document.getElementById('open-invitation').setAttribute('aria-label',hi?'प्यार से खोलें; आमंत्रण और संगीत शुरू करें':'Open with love; start your invitation and music');
 document.getElementById('countdown').setAttribute('aria-label',hi?'हमारी सगाई तक शेष समय':'Time until our engagement');
 document.querySelector('footer > a').setAttribute('aria-label',hi?'आस्था और अतुल, शुरुआत पर जाएँ':'Astha and Atul, home');
 document.querySelector('.language-switch').setAttribute('aria-label',hi?'आमंत्रण की भाषा':'Invitation language');
 document.querySelectorAll('[data-language]').forEach(button=>{button.setAttribute('aria-pressed',String(button.dataset.language===language))});
 document.querySelectorAll('[data-message-key]').forEach(el=>{el.textContent=t(el.dataset.messageKey)});
 const calendar=document.querySelector('a[download]');calendar.href=hi?'engagement-hi.ics':'engagement.ics';calendar.download=hi?'आस्था-अतुल-सगाई.ics':'Astha-and-Atul-Engagement.ics';
 try{localStorage.setItem('invitation-language',language)}catch{}
 window.dispatchEvent(new CustomEvent('invitation-language-change'));
}
window.InvitationLanguage={get language(){return language},t,status,number:value=>new Intl.NumberFormat(language==='hi'?'hi-IN-u-nu-deva':'en-IN',{minimumIntegerDigits:2,useGrouping:false}).format(value),set:apply};
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>apply(button.dataset.language)));
apply(language);
})();
