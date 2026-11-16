# Atul & Astha — mobile invitation with satin ribbon

Engagement: 16 December 2026, 11 AM IST, Golden Tulip Hotel, Lucknow.

Tap the satin bow to untie the ribbon and reveal the invitation. Mobile-first typography, 44–50px touch targets, compressed responsive WebP artwork, keyboard focus management and reduced-motion support are included. No installation or build is needed.

## Update your existing GitHub site

1. Extract the ZIP.
2. Open https://github.com/atul0902/marriage and choose Add file → Upload files.
3. Upload index.html, style.css, script.js and the assets folder from this package to the repository root. Replace the existing files with the same names; do not upload the enclosing folder or ZIP itself. Drag the assets folder to preserve its paths.
4. Commit to main. GitHub Pages will redeploy automatically using your existing main / (root) configuration.
5. After the deployment finishes in Actions, refresh atulastha.com. If your phone still shows the old version, try a private browser tab or clear that site's cached files.

There are NO DNS changes for this update. Keep your existing Namecheap records and GitHub Pages custom domain. CNAME is included with the same atulastha.com value. The calendar file is unchanged.

Required new assets: assets/lucknow-640.webp, assets/lucknow-1024.webp and assets/chikankari.svg. Old PNG files may remain in GitHub; this version does not request them.

## Files

- index.html — invitation content and satin ribbon markup
- style.css — responsive layout, silk appearance and release animation
- script.js — opening/replay, countdown, optional music and sharing
- engagement.ics — calendar download
- assets/ — responsive artwork and motif
- CNAME — existing custom domain

The current artwork was edited with built-in ImageGen; its prompt is retained in artwork-prompt-lucknow.txt. WebP versions are compressed exports of that artwork. The ribbon is made with CSS, with no video download or animation library.

The opening/replay was checked in the browser, with no horizontal overflow at 320, 375, 390, 430, 768 and 1440 pixels. This does not replace a physical iPhone/Android device check. The website itself has not been republished to GitHub by creating this package.
