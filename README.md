# LUMA STANDARD
*Make Every Moment Special.*

A bilingual (Arabic RTL / English LTR) digital wedding invitation: a 3D envelope with a cracking wax seal opens into a scrolling editorial invitation. Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Run on Windows
1. Extract the ZIP (right-click > Extract All).
2. Double-click `index.html`. It opens in your browser; no server is needed.
3. Fonts load from Google Fonts when online; offline, system fonts are used.

## Edit the invitation
Everything editable is in `js/config.js`: names, messages (Arabic and English), date/time/time zone, venue, map coordinates, image and music paths.
- **Images:** replace files in `assets/images/hero/` and `assets/images/gallery/` (same names, or update paths in config). Add any number of gallery images.
- **Music:** put an MP3 in `assets/audio/` and set `media.music`. Music never autoplays; the button appears only when a path is set.
- **Date/time:** `event.dateTime` + `event.timeZone`. The countdown uses that zone.
- **Venue/map:** edit venue text per language. Set `map.lat` and `map.lng` for an OpenStreetMap preview; without them a placeholder shows and Directions searches the venue name and address.

## Publish online
Upload the whole folder to any static host (Netlify Drop, GitHub Pages, Cloudflare Pages), keeping the structure. `index.html` must stay at the root.

## Notes
All images are labelled demo SVG placeholders. See `docs/CUSTOMIZATION.md` and `docs/PROJECT-STRUCTURE.md`.
