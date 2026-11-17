/* Complete, reviewed local copy: no translation service or visitor data upload. */
(()=>{
const copy=[
 ['.hero .lucknow-welcome','TOGETHER WITH OUR FAMILIES','परिवार सहित स्नेहिल आमंत्रण'],
 ['.hero .invite-line','With love, we invite you<br>to celebrate our engagement','हमारी सगाई के शुभ अवसर पर<br>आप सादर आमंत्रित हैं।'],
 ['.hero h1','Atul <span>&</span> Astha','अतुल <span>और</span> आस्था'],
 ['.hero-date','16 DECEMBER 2026','१६ दिसम्बर २०२६'],
 ['.hero-time','11:00 AM <span>·</span> Golden Tulip Hotel','प्रातः ११:०० बजे <span>·</span> गोल्डन ट्यूलिप होटल'],
 ['.hero-location','Lucknow <span class="location-dot">·</span> The city of tehzeeb','लखनऊ <span class="location-dot">·</span> तहज़ीब का शहर'],
 ['.intro > .eyebrow','THE BEGINNING OF OUR FOREVER','जीवन भर के साथ की शुरुआत'],
 ['.intro h2','Two hearts.<br><em>One beautiful beginning.</em>','दो दिल।<br><em>एक खूबसूरत शुरुआत।</em>'],
 ['.intro .body-copy','A promise, a ring, and a lifetime of little moments.<br>We would love for you to be part of the first.','एक वादा, एक अंगूठी और जीवन भर का साथ।<br>इस शुभ शुरुआत में आपका साथ पाकर हमें खुशी होगी।'],
 ['.event-details > div:first-child .eyebrow','THE DAY','शुभ दिन'],
 ['.event-details > div:first-child p','Wednesday','बुधवार'],
 ['.event-details > div:first-child > span:last-child','16 December 2026','१६ दिसम्बर २०२६'],
 ['.event-details > div:last-child .eyebrow','THE TIME','शुभ समय'],
 ['.event-details > div:last-child p','11:00 AM','प्रातः ११:०० बजे'],
 ['.event-details > div:last-child > span:last-child','Indian Standard Time','भारतीय मानक समय'],
 ['a[download]','Add to your calendar <span aria-hidden="true">↗</span>','अपने कैलेंडर में जोड़ें <span aria-hidden="true">↗</span>'],
 ['.countdown-section .eyebrow','EVERY MOMENT BRINGS US CLOSER','हर पल हमें इस शुभ दिन के करीब ला रहा है'],
 ['.countdown-section h2','Until we celebrate','खुशियों के इस दिन तक'],
 ['#days + span','DAYS','दिन'],['#hours + span','HOURS','घंटे'],['#minutes + span','MINUTES','मिनट'],['#seconds + span','SECONDS','सेकंड'],
 ['#countdown-note','A little closer to forever.','जीवन भर के साथ की ओर एक और कदम।'],
 ['.venue > .eyebrow','A CELEBRATION IN THE HEART OF LUCKNOW','लखनऊ में खुशियों का उत्सव'],
 ['.venue h2','Meet us in <em>Lucknow</em>','मिलते हैं <em>लखनऊ में</em>'],
 ['.venue-label','THE ENGAGEMENT','सगाई समारोह'],
 ['.venue h3','Golden Tulip Hotel','गोल्डन ट्यूलिप होटल'],
 ['.venue address','Station Rd, Udaiganj, Husainganj<br>Lucknow, Uttar Pradesh 226001','स्टेशन रोड, उदयगंज, हुसैनगंज<br>लखनऊ, उत्तर प्रदेश २२६००१'],
 ['.venue-time','16 December 2026 <span>·</span> 11:00 AM','१६ दिसम्बर २०२६ <span>·</span> प्रातः ११:०० बजे'],
 ['.venue .button','Get directions <span aria-hidden="true">↗</span>','रास्ता देखें <span aria-hidden="true">↗</span>'],
 ['.closing > .eyebrow','THE JOY WILL BE GREATER WITH YOU THERE','आपके आने से हमारी खुशियाँ और बढ़ जाएँगी'],
 ['.closing h2','Come for the celebration.<br><em>Stay for the memories.</em>','खुशियों में शामिल हों।<br><em>यादें साथ लेकर जाएँ।</em>'],
 ['.closing > p:not([class])','Your presence and blessings mean the world to us.','आपकी उपस्थिति और आशीर्वाद हमारे लिए अनमोल हैं।'],
 ['.signature','With love,<br><span>Atul & Astha</span>','स्नेह सहित,<br><span>अतुल और आस्था</span>'],
 ['#share','Share the invitation <span aria-hidden="true">↗</span>','आमंत्रण साझा करें <span aria-hidden="true">↗</span>'],
 ['footer > a','A <i>&</i> A','अ <i>और</i> आ'],
 ['footer > span','16 DECEMBER 2026 · LUCKNOW','१६ दिसम्बर २०२६ · लखनऊ'],
 ['#replay','Replay the invitation opening','आमंत्रण फिर से खोलें']
];
const messages={
 opening:['Unwrapping your invitation…','आपका आमंत्रण खुल रहा है…'],ready:['Your invitation is ready.','आपका आमंत्रण तैयार है।'],
 musicPlaying:['Background music is playing.','पृष्ठभूमि में संगीत बज रहा है।'],musicWaiting:['Music will start after your first tap or scroll.','संगीत शुरू करने के लिए स्क्रीन को एक बार छुएँ।'],musicPaused:['Background music paused.','संगीत रोक दिया गया है।'],
 musicOn:['Music on','संगीत चालू है'],musicPlay:['Play music','संगीत चलाएँ'],musicPauseLabel:['Pause background music','संगीत रोकें'],musicPlayLabel:['Play background music','संगीत चलाएँ'],
 elapsed:['Our beautiful beginning · 16 December 2026','हमारी खूबसूरत शुरुआत · १६ दिसम्बर २०२६'],
 copied:['Invitation link copied.','आमंत्रण का लिंक कॉपी हो गया।'],shareFallback:['You can share this invitation using the link in your address bar.','इस आमंत्रण को साझा करने के लिए ब्राउज़र के पते वाले लिंक का उपयोग करें।'],
 shareTitle:['Atul & Astha — Our Engagement','अतुल और आस्था — हमारी सगाई'],shareText:['Celebrate with us on 16 December 2026, 11 AM, at Golden Tulip Hotel, Lucknow.','१६ दिसम्बर २०२६ को प्रातः ११:०० बजे गोल्डन ट्यूलिप होटल, लखनऊ में हमारे सगाई समारोह में सादर आमंत्रित हैं।']
};
let language='en';try{if(localStorage.getItem('invitation-language')==='hi')language='hi'}catch{}
function t(key){return messages[key]?.[language==='hi'?1:0]??key}
function status(id,key){const el=document.getElementById(id);if(el){el.dataset.messageKey=key;el.textContent=t(key)}}
function apply(next){
 language=next==='hi'?'hi':'en';const hi=language==='hi';document.documentElement.lang=language;
 copy.forEach(([selector,en,hindi])=>document.querySelectorAll(selector).forEach(el=>{el.innerHTML=hi?hindi:en}));
 document.title=hi?'अतुल और आस्था · १६ दिसम्बर २०२६':'Atul & Astha · 16 December 2026';
 document.querySelector('meta[name="description"]').content=hi?'अतुल और आस्था के सगाई समारोह में सादर आमंत्रित हैं। १६ दिसम्बर २०२६, प्रातः ११:०० बजे, गोल्डन ट्यूलिप होटल, लखनऊ।':'Join us to celebrate the engagement of Atul and Astha on 16 December 2026 at 11 AM, Golden Tulip Hotel, Lucknow.';
 document.querySelector('.hero-art').setAttribute('aria-label',hi?'फूलों और हाथ से चित्रित इतालवी समुद्र तट से सजा आमंत्रण':'Painted Italian coast with blossom branches and an ivory invitation center');
 document.getElementById('countdown').setAttribute('aria-label',hi?'हमारी सगाई तक शेष समय':'Time until our engagement');
 document.querySelector('footer > a').setAttribute('aria-label',hi?'अतुल और आस्था, शुरुआत पर जाएँ':'Atul and Astha, home');
 document.querySelector('.language-switch').setAttribute('aria-label',hi?'आमंत्रण की भाषा':'Invitation language');
 document.querySelectorAll('[data-language]').forEach(button=>{button.setAttribute('aria-pressed',String(button.dataset.language===language))});
 document.querySelectorAll('[data-message-key]').forEach(el=>{el.textContent=t(el.dataset.messageKey)});
 const calendar=document.querySelector('a[download]');calendar.href=hi?'engagement-hi.ics':'engagement.ics';calendar.download=hi?'अतुल-आस्था-सगाई.ics':'Atul-and-Astha-Engagement.ics';
 try{localStorage.setItem('invitation-language',language)}catch{}
 window.dispatchEvent(new CustomEvent('invitation-language-change'));
}
window.InvitationLanguage={get language(){return language},t,status,number:value=>new Intl.NumberFormat(language==='hi'?'hi-IN-u-nu-deva':'en-IN',{minimumIntegerDigits:2,useGrouping:false}).format(value),set:apply};
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>apply(button.dataset.language)));
apply(language);
})();
