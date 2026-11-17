# Atul & Astha — no top bar, attached instrumental, faster opening

## This revision

- Entire top navigation bar removed from the HTML. The illustration now reaches the top edge.
- Your supplied Kuch Kuch Hota Hai Instrumental.mp3 is included as assets/engagement-instrumental.mp3 and loops for the visit.
- Music is wanted on by default. The site attempts audible playback on load. Browsers that block audible autoplay require a first tap/key gesture; the site retries on that interaction. A scroll also triggers an attempt, but browsers do not all treat a wheel event as permission for audio. No website can guarantee audible autoplay before a guest interaction on every phone.
- The small music control is in the footer. A guest can pause and resume it. After pausing, later taps do not switch it back on. Music is not deliberately paused just because the guest switches tabs; the device/browser may still suspend background media.
- Same reference opening, now at 1.3x speed (about 6.2 seconds rather than 8 seconds).
- The first-scroll tour remains in place.

## Update GitHub

Extract this ZIP. Open https://github.com/atul0902/marriage → Add file → Upload files.
Upload index.html, style.css, opening.css, script.js, tour.js and the complete assets folder to the repository root, replacing existing files. Include the new assets/engagement-instrumental.mp3.
Commit to main and wait for GitHub Pages deployment in Actions. Then refresh atulastha.com (or open a private browser tab if cached).

No Namecheap/DNS changes. The domain file and calendar are unchanged. Old ribbon files may remain; this version does not load them.

## Verification

Browser checked: zero header elements, playbackRate 1.3, correct attached audio source, loop enabled, first-tap audio playback, footer pause control and no console errors. HTML/CSS/media paths and ZIP integrity checked. The supplied MP3 is copied unchanged.

The files are ready to upload; creating the ZIP does not update your live GitHub site.

## Media provenance

Reference design: The Digital Yes — Fresco, https://www.thedigitalyes.com/demo/fresco
Public interactive demo: https://fresco-template.thedigitalyes.com/?embed=1
Opening video: https://fresco-template.thedigitalyes.com/assets/envelope-video-f1CdBR2C.mp4
Poster: https://fresco-template.thedigitalyes.com/assets/envelope-poster-dG0TpNIf.jpg

The reference opening media is reused to match the specific opening requested; it is not claimed as original generated artwork. The final frame is an export from that same animation. Personal event content and surrounding invitation code belong to this project.


Music source: user-supplied Kuch Kuch Hota Hai Instrumental.mp3.
