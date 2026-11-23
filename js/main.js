(function (L) {
  document.addEventListener("DOMContentLoaded", () => {
    L.initLang();
    const im = document.getElementById("heroImg");
    im.addEventListener("error", () => im.closest(".hero-photo").classList.add("missing"));
    im.src = L.config.media.hero;
    L.initCountdown(); L.initGallery(); L.initMap(); L.initMusic(); L.initEnvelope();
    const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("seen"); io.unobserve(e.target); } }), { threshold: 0.15 }) : null;
    document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("seen")));
  });
})(window.LUMA);
