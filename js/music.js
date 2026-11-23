
(function (L) {
  L.initMusic = function () {
    const btn = document.getElementById("musicBtn");
    const src = L.config.media.music;

    if (!src) return;

    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = "none";

    let started = false;

    function updateButton() {
      btn.classList.toggle("on", !audio.paused);
      btn.setAttribute("aria-pressed", String(!audio.paused));
    }

    L.playMusic = function () {
      if (started && !audio.paused) return;

      audio.play()
        .then(() => {
          started = true;
          updateButton();
        })
        .catch((error) => {
          console.warn("Music playback failed:", error);
        });
    };

    audio.addEventListener("pause", updateButton);
    audio.addEventListener("play", updateButton);
    audio.addEventListener("error", () => {
      btn.hidden = true;
    });

    btn.hidden = false;

    btn.addEventListener("click", () => {
      if (audio.paused) {
        L.playMusic();
      } else {
        audio.pause();
      }
    });
  };
})(window.LUMA);
