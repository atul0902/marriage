# Atul & Astha — reference opening + fixed scroll tour

Engagement: 16 December 2026 · 11 AM IST · Golden Tulip Hotel, Lucknow.

## What changed

The opening now plays the actual eight-second envelope/ribbon film served by the public Fresco demo, at its original speed. It no longer tries to imitate that sequence with generated fabric pieces or CSS paper flaps. The final blank frame is retained as the invitation background, so your own names and details fade into the same scene.

It starts automatically, muted and inline, without an opening button. The invitation stays on its front page after the film ends. Replay is available in the footer. Browsers that block muted autoplay, or users who request reduced motion, receive the invitation without getting stuck behind the opening.

## First-scroll fix

The first downward wheel, swipe, keyboard scroll or native page-scroll starts a slow tour to the bottom after that gesture settles. The controller waits for touchend and native momentum; it does not prevent the initial touch gesture or cancel itself on its own scroll events.

The tour uses a numeric scrollTo call with CSS smooth-scrolling disabled while animating, avoiding mobile-browser differences with the earlier instant option. A fresh touch, mouse wheel, click or key pauses it so a guest can take control. Replay resets and re-arms it.

## Upload this revision to GitHub

Open https://github.com/atul0902/marriage → Add file → Upload files.
Upload these files to the repository root, replacing older copies:

- index.html
- style.css
- opening.css
- script.js
- tour.js (NEW — essential for the scroll fix)
- assets folder (NEW video, poster and final frame must be included)

Commit to main, wait for Pages deployment in Actions, then open atulastha.com. No Namecheap/DNS changes are needed. If an old revision remains cached, try a private browser tab. The HTML references versioned CSS and JavaScript for this update.

CNAME remains atulastha.com and the calendar is unchanged. The old ribbon.js and old generated artwork may remain in your repository; this version does not load them.

This folder and ZIP are ready for upload. Creating them does not publish to GitHub.

## Media provenance

Reference design: The Digital Yes — Fresco, https://www.thedigitalyes.com/demo/fresco
Public interactive demo: https://fresco-template.thedigitalyes.com/?embed=1
Opening video: https://fresco-template.thedigitalyes.com/assets/envelope-video-f1CdBR2C.mp4
Poster: https://fresco-template.thedigitalyes.com/assets/envelope-poster-dG0TpNIf.jpg

The reference opening media is reused to match the specific opening requested; it is not claimed as original generated artwork. The final frame is an export from that same animation. Personal event content and surrounding invitation code belong to this project.

## Verification

Seven controller integration checks cover wheel momentum, touch/pointer sequencing, native-scroll fallback, keyboard activation, stopping on new input, re-arming and reaching the exact document bottom. Browser checks additionally verify automatic video playback, completion, idle front page and continuous scroll through the full page. Physical Safari/Android touch should be reviewed before sending widely.
