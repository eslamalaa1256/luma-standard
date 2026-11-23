(function (L) {
  // Convert a wall-clock time in an IANA zone to a UTC timestamp.
  function zonedToUtc(iso, tz) {
    const m = iso.match(/(\d+)-(\d+)-(\d+)T(\d+):(\d+)(?::(\d+))?/);
    const asUtc = Date.UTC(+m[1], m[2] - 1, +m[3], +m[4], +m[5], +(m[6] || 0));
    let guess = asUtc;
    for (let i = 0; i < 2; i++) {
      const p = new Intl.DateTimeFormat("en-US", { timeZone: tz, hourCycle: "h23", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })
        .formatToParts(new Date(guess)).reduce((o, x) => ((o[x.type] = +x.value), o), {});
      guess += asUtc - Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
    }
    return guess;
  }
  L.zonedToUtc = zonedToUtc;
  L.initCountdown = function () {
    const e = L.config.event, target = zonedToUtc(e.dateTime, e.timeZone);
    const box = document.getElementById("countdown"), done = document.getElementById("cdDone");
    const q = (u) => box.querySelector('[data-u="' + u + '"]');
    const nf = (n) => new Intl.NumberFormat(L.lang === "ar" ? "ar-EG" : "en-US", { minimumIntegerDigits: 2, useGrouping: false }).format(n);
    function tick() {
      const s = Math.floor((target - Date.now()) / 1000);
      if (s <= 0) { box.hidden = true; done.hidden = false; return; }
      box.hidden = false; done.hidden = true;
      q("d").textContent = nf(Math.floor(s / 86400)); q("h").textContent = nf(Math.floor(s / 3600) % 24);
      q("m").textContent = nf(Math.floor(s / 60) % 60); q("s").textContent = nf(s % 60);
    }
    tick(); setInterval(tick, 1000); document.addEventListener("luma:lang", tick);
  };
})(window.LUMA);
