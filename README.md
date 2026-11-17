# Desktop transition blending update

The opening keeps its original reference film. On desktop only, a synchronized, softly blurred copy of that SAME film fills the outer screen. The foreground video's left/right edges are feathered, replacing the hard rectangle against different painted colors. After the reveal, the exact original end frame is feathered over the landscape extension, keeping the central invitation's colors consistent.

Phones keep the original single-video presentation; the ambient copy has no media source and is not loaded there. Playback stays at 1.3x. The language switch and music toggle remain at the top right.

Music already attempts to start on page load. Audible autoplay is controlled by the browser: when it is blocked, a real tap/key gesture is required. This package does not claim to bypass that restriction. The attached instrumental loops after permission is available, with the existing first-interaction fallback and mute control.

Upload ALL extracted files and the assets folder to the GitHub repository root, replacing matching files. Commit to main and wait for Pages deployment. No DNS changes needed. This package has not been published automatically.

Checks: desktop playback of both video layers is synchronized; both stop at the end; feather masks applied; final scene visually reviewed. Mobile ambient layer hidden and has no source at 390px, with no horizontal overflow. No browser console errors observed.

--- Prior features, translation and asset provenance ---

# English / हिन्दी invitation + top-right music toggle

## Added in this revision

A compact EN / हिन्दी language switch and a small music on/off icon sit at the top right. There is no navigation bar. The controls are usable during the opening too.

Hindi is a complete local translation: names, date, time, address, every section, countdown labels and Devanagari digits, buttons, music/status messages, sharing text, page title, description and accessibility labels. The calendar link downloads a Hindi event when Hindi is selected. Map directions still use the precise original venue search for reliability.

English is the default for a new guest. The selected language is remembered on that browser where local storage is available. Switching languages does not reset or unmute the music. Translation happens entirely in the browser using supplied copy; no translation API or account is needed.

## Upload this version

Extract the ZIP. In https://github.com/atul0902/marriage choose Add file → Upload files.
Upload ALL extracted contents to the repository root, replacing matching files. Include the NEW language.js, language.css and engagement-hi.ics, as well as index.html, script.js, style.css, opening.css, tour.js and the complete assets folder.
Commit to main, wait for GitHub Pages deployment in Actions, then refresh atulastha.com. No DNS changes. A private browser tab helps if cached files remain.

## Checked

English → Hindi → English restoration; all body text in Hindi except the EN choice; Hindi countdown numerals; Hindi calendar selection; remembered Hindi preference after reload; mute state preserved on language change; top-right music labels translated; no horizontal overflow at 320px and 390px. No browser console errors observed.

The source and ZIP are ready to upload. They have not been automatically published to GitHub.

--- Earlier artwork, opening and music details ---

# Full-width painting update

The invitation artwork has been extended with built-in ImageGen into a landscape scene. At widths above 600px, the sky, flowers, villas, gardens and sea fill the entire first screen. The old side fade is removed. Phones keep the original portrait composition. The opening video stays the same, with extended scenery filling its outer sides on wider screens.

NEW required asset: assets/opening-wide.webp. Image-generation prompt: OUTPAINT-PROMPT.txt.

Music still attempts immediate autoplay and loops after it starts. If a browser blocks audible autoplay, it requires a real first tap/key gesture. This is a browser restriction, not something website code can reliably override. There is no claim that sound can always play before interaction. The existing first-interaction fallback and footer mute control remain.

Upload this folder's contents to the ROOT of your GitHub repository, including the complete assets folder. Replace matching HTML/CSS/JS files, commit to main and wait for GitHub Pages. No DNS changes are required. This ZIP has not been published automatically.

Verified at 1440×900: extended background covers the full viewport, the previous side mask is disabled, and no horizontal overflow. Verified at 390×844: original portrait artwork remains selected with no horizontal overflow.

--- Previous functionality and media details ---

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
