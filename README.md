# Astha & Atul · Monogram opening tag

The front-page names now display Astha above Atul, and आस्था above अतुल in Hindi.

A paper tag reading “Open with love” (“प्यार से खोलें” in Hindi) hangs from the ribbon. The envelope stays closed until the guest clicks or taps Open (खोलें in Hindi). That trusted click starts the supplied instrumental and the original ribbon video together. No opening autoplay or unrelated page tap is needed. The music loops and the small music control remains available. An intentional music-off choice is respected.

Each later section now has a distinct full-width painted scene: a flowering garden for the celebration, a blue lake for the countdown, a Lucknow gateway garden for the venue, and a riverside garden for the closing. Cream overlays keep the text readable; no blur is used. The Lucknow painting is decorative heritage artwork, not a depiction of the hotel.

Mobile edge-to-edge opening, sharp desktop landscape, English/Hindi switching, calendar files, replay are retained. Reduced-motion guests see the invitation immediately after choosing Open, with music started by the same click. Video failure falls through to the invitation.

The invitation copy starts appearing at 75% of actual video playback. The last 25% of the envelope keeps moving while it crossfades into the invitation. Playback progress drives the transition, so slow loading does not shift the timing.

## Automatic scrolling

After the opening finishes, the front page stays still for 2.5 seconds. The invitation then scrolls slowly to the bottom (approximately 70 pixels per second with a gentle start and finish). Touching or clicking stops the automatic motion immediately at the current position. After the guest releases the screen and leaves it idle for four seconds, scrolling resumes from that same position. Further touches, wheel events or native scrolling restart the four-second countdown, including swipe inertia. Long presses keep it paused until released. The scroll pause/play button has been removed. Touching pauses in place and four seconds of inactivity resumes scrolling. Escape stops motion until the invitation is replayed. Switching away suspends the tour; returning starts a new four-second reading pause. Replay starts a new opening and reading delay. Reduced-motion preferences leave scrolling manual unless the guest chooses to start it.

The bride’s name appears first in the invitation, page title, sharing text and calendar files. Hindi uses its own warm invitation wording. The city line is “Lucknow — The city of love” / “लखनऊ — मोहब्बत का शहर”. The English/हिन्दी switch and music toggle remain in the top-right corner.

The supplied transparent monogram replaces the ornament on the opening tag, the front-page flourish, the celebration ornament, the venue emblem, the closing ornament and the footer initials. The letters and gold connecting stroke are isolated on a transparent background in assets/aa-monogram-transparent.png, with the flowers and rectangular background removed. The cutout was prepared with the built-in image editing tool; its prompt is in MONOGRAM-PROMPT.txt.

The English celebration heading reads “For our little hearts that found home in each other.”. The independently written Hindi invitation is retained.

The closing sign-off reads “With love, Chauhan Family and Singh Family”, with “सप्रेम, चौहान परिवार एवं सिंह परिवार” in Hindi.

The engagement begins at 10:30 AM IST on 16 December 2026 (प्रातः १०:३० बजे). This time is used in both languages, sharing text, the countdown and calendar downloads.

The initial automatic scroll begins 2.5 seconds after the envelope finishes opening. Touch-to-pause still resumes after four seconds of inactivity. The transparent AA logo is included at assets/aa-monogram-transparent.png and preloaded for all six placements.

## Upload to GitHub

Extract the ZIP. Open https://github.com/atul0902/marriage and choose Add file → Upload files.
Upload ALL contents of this folder into the repository root, replacing matching files. Do not upload the enclosing atulastha-scroll-25s folder as a subfolder: index.html, script.js and tour.js must be directly in the repository root. Include scenery.css and the complete assets folder. Commit to main and wait for GitHub Pages deployment in Actions. Refresh the site or open a private window if older files remain cached.

No DNS changes are needed. This package has not been published automatically.

## Artwork

The four new scenic paintings were created with the built-in image generation tool, using opening-wide.webp as a style reference. Optimized WebP assets are in assets/. The complete prompt set is in SCENERY-PROMPTS.txt.

## Media provenance

Reference design: The Digital Yes — Fresco, https://www.thedigitalyes.com/demo/fresco
Public interactive demo: https://fresco-template.thedigitalyes.com/?embed=1
Opening video: https://fresco-template.thedigitalyes.com/assets/envelope-video-f1CdBR2C.mp4
Poster: https://fresco-template.thedigitalyes.com/assets/envelope-poster-dG0TpNIf.jpg

The reference opening media is reused to match the specific opening requested; it is not claimed as original generated artwork. The final frame is an export from that same animation. Personal event content and surrounding invitation code belong to this project.


Music supplied by the user. The landscape extension prompt is in OUTPAINT-PROMPT.txt.
