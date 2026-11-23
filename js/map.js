(function (L) {
  L.initMap = function () {
    const m = L.config.map, box = document.getElementById("mapBox"), btn = document.getElementById("dirBtn");
    const hasCoords = typeof m.lat === "number" && typeof m.lng === "number";
    if (hasCoords) {
      const d = 0.004, bbox = [m.lng - d, m.lat - d, m.lng + d, m.lat + d].join(",");
      const f = document.createElement("iframe");
      f.title = "Map"; f.loading = "lazy"; f.referrerPolicy = "no-referrer";
      f.src = "https://www.openstreetmap.org/export/embed.html?bbox=" + bbox + "&layer=mapnik&marker=" + m.lat + "," + m.lng;
      box.replaceChildren(f);
    }
    function link() {
      const q = hasCoords ? m.lat + "," + m.lng : encodeURIComponent(L.text().venueName + " " + L.text().venueAddress);
      btn.href = "https://www.google.com/maps/search/?api=1&query=" + q;
    }
    link(); document.addEventListener("luma:lang", link);
  };
})(window.LUMA);
