(function (L) {
  L.initGallery = function () {
    const imgs = L.config.media.gallery.slice(), grid = document.getElementById("galleryGrid");
    const lb = document.getElementById("lightbox"), lbImg = document.getElementById("lbImg");
    let i = 0, opener = null;
    imgs.forEach((src, n) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "g-item g-" + (n % 6); b.setAttribute("aria-label", "Photo " + (n + 1));
      const im = new Image(); im.src = src; im.alt = ""; im.loading = "lazy";
      im.onerror = () => { b.classList.add("missing"); im.remove(); };
      b.appendChild(im); b.addEventListener("click", () => open(n, b)); grid.appendChild(b);
    });
    function show(n) {
      i = (n + imgs.length) % imgs.length; lbImg.classList.remove("in");
      lbImg.onload = () => lbImg.classList.add("in"); lbImg.onerror = () => lbImg.classList.add("in");
      lbImg.src = imgs[i]; document.getElementById("lbCount").textContent = (i + 1) + " / " + imgs.length;
    }
    function open(n, el) { opener = el; show(n); lb.hidden = false; document.body.classList.add("lock"); document.getElementById("lbClose").focus(); }
    function close() { lb.hidden = true; document.body.classList.remove("lock"); if (opener) opener.focus(); }
    document.getElementById("lbPrev").onclick = () => show(i - 1);
    document.getElementById("lbNext").onclick = () => show(i + 1);
    document.getElementById("lbClose").onclick = close;
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => {
      if (lb.hidden) return;
      if (e.key === "Escape") close(); else if (e.key === "ArrowLeft") show(i - 1); else if (e.key === "ArrowRight") show(i + 1);
    });
    let x0 = null;
    lb.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
    lb.addEventListener("touchend", (e) => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) show(i + (dx < 0 ? 1 : -1)); x0 = null; });
  };
})(window.LUMA);
