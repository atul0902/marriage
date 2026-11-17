# Atul & Astha — automatic woven-ribbon opening

## This revision

- Automatically opens after the opening artwork loads, with a short pause so the tied bow is visible. There is no opening button or visible prompt.
- Original image-based ivory woven fabric with fine fibers and frayed edges replaces the shiny vector bow.
- Italian coastal fresco exterior and invitation frame replace the Lucknow painting on the opening screen. The venue remains Golden Tulip Hotel, Lucknow.
- The ribbon parts release, the upper flap lifts in perspective, and the lower front panel folds down. There are no side-opening pages.
- After opening, the front page stays still. The first downward scroll/swipe starts a slow 16–32 second scroll to the bottom. A subsequent scroll gesture, touch, click or key stops it; Escape also stops it.
- Reduced-motion preferences skip the entrance motion and guided scroll. Normal manual scrolling remains available. Music remains optional.

This is a recreation from reference footage, with original assets and code, not the original animation source.

## Update GitHub

Extract this ZIP. In https://github.com/atul0902/marriage choose Add file → Upload files.
Upload index.html, style.css, opening.css, script.js, ribbon.js and the assets folder to the repository ROOT, replacing files of the same names. Drag the assets folder itself so paths are preserved. Do not upload only the enclosing folder or ZIP.
Commit to main. Wait for GitHub Pages deployment to finish in Actions, then refresh atulastha.com. A private browser window helps if old files were cached.

No DNS changes. Keep your current Pages domain and Namecheap records. CNAME remains atulastha.com; engagement.ics is unchanged. Older PNG/WebP files may remain in the repository; this version does not reference them.

The files are ready for upload; packaging does not update the live GitHub site.

## Files and verification

index.html — content; style.css — mobile layout; opening.css — the two paper faces and fabric layers; ribbon.js — image-layer ribbon motion; script.js — automatic startup, sequencing, replay, guided scroll and existing invitation features.

Checked automatic entry, no opening button, two folds, no horizontal overflow at 320px and 390px, and first-scroll activation/stopping in the browser. Physical-device touch rendering should also be reviewed before sending to guests.

Original raster assets were created with the built-in ImageGen tool. See ASSET-PROMPTS.txt for briefs. No video of another invitation is embedded. Fabric is matte woven silk/chiffon with frayed threads; it is not a shiny satin rendering.
