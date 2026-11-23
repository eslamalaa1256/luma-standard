(function (L) {
  L.initEnvelope = function () {
    const stage = document.getElementById("stage"), env = document.getElementById("envelope"), seal = document.getElementById("seal");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let busy = false;
    function finish() {
      stage.classList.add("done"); document.body.classList.remove("lock");
      document.getElementById("invitation").hidden = false;
      setTimeout(() => { stage.hidden = true; }, 900);
      const h = document.querySelector("#hero h1"); h.tabIndex = -1; h.focus({ preventScroll: true });
    }
    function open() {
  if (busy) return;
busy = true;
seal.disabled = true;
if (L.playMusic) {
  L.playMusic();
}

  // Start invitation music on the same user interaction
  if (L.playMusic) {
    L.playMusic();
  }     // blocks double triggering
      if (reduce) { finish(); return; }
      env.classList.add("crack");                              // seal reacts and breaks
      setTimeout(() => env.classList.add("flap"), 650);        // flap rotates back in 3D
      setTimeout(() => env.classList.add("flap-back"), 1050);  // flap passes behind the card
      setTimeout(() => env.classList.add("rise"), 1400);       // card slides out
      setTimeout(() => env.classList.add("present"), 2400);    // card fills the view
      setTimeout(finish, 3300);                                // full invitation
    }
    seal.addEventListener("click", open);
    env.addEventListener("click", (e) => { if (!seal.contains(e.target)) open(); });
    document.body.classList.add("lock");
  };
})(window.LUMA);
