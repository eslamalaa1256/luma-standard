# Preparing a new customer invitation
1. Copy the `LUMA-STANDARD` folder and rename it.
2. Put the customer's photos in `assets/images/hero/` and `assets/images/gallery/`; delete the demo SVGs.
3. Open `js/config.js` in Notepad. Update `media.hero` and the `media.gallery` list.
4. Edit `event.dateTime` and `event.timeZone`.
5. Edit `content.ar` and `content.en`: names, message, date text, time text, venue, closing. Keep date/time text consistent with step 4.
6. Add `map.lat` / `map.lng` (right-click the venue in Google Maps and copy the coordinates).
7. Optional: add an MP3 and set `media.music`.
8. Open `index.html`, tap the seal, check both languages and the gallery, then publish.
