window.LUMA = window.LUMA || {}; window.LUMA.config = window.LUMA_CONFIG;
(function (L) {
  const UI = {
    ar: { tap: "المس الختم لفتح الدعوة", date: "التاريخ", time: "الوقت", venue: "المكان", days: "يوم", hours: "ساعة", minutes: "دقيقة", seconds: "ثانية",
      gallery: "لحظات", directions: "الاتجاهات", noMap: "تظهر الخريطة عند إضافة الإحداثيات", close: "إغلاق", prev: "السابق", next: "التالي",
      music: "الموسيقى", started: "بدأت المناسبة", langBtn: "English", location: "الموقع" },
    en: { tap: "Touch the seal to open", date: "Date", time: "Time", venue: "Venue", days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
      gallery: "Moments", directions: "Get directions", noMap: "Map appears once coordinates are added", close: "Close", prev: "Previous", next: "Next",
      music: "Music", started: "The celebration has begun", langBtn: "العربية", location: "Location" }
  };
  const C = L.config;
  L.lang = C.defaultLang === "en" ? "en" : "ar";
  L.t = (k) => UI[L.lang][k];
  L.text = () => C.content[L.lang];
  L.apply = function (lang) {
    if (lang) L.lang = lang;
    const d = document.documentElement, c = L.text();
    d.lang = L.lang; d.dir = L.lang === "ar" ? "rtl" : "ltr";
    document.title = c.names.join(L.lang === "ar" ? " و " : " & ") + " | LUMA";
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = UI[L.lang][el.dataset.i18n]));
    document.querySelectorAll("[data-c]").forEach((el) => (el.textContent = c[el.dataset.c]));
    document.querySelectorAll("[data-aria]").forEach((el) => el.setAttribute("aria-label", UI[L.lang][el.dataset.aria]));
    document.querySelectorAll("[data-name]").forEach((el) => (el.textContent = c.names[+el.dataset.name]));
    document.getElementById("langBtn").textContent = UI[L.lang].langBtn;
    document.dispatchEvent(new CustomEvent("luma:lang"));
    try { localStorage.setItem("luma-lang", L.lang); } catch (e) {}
  };
  L.initLang = function () {
    try { const s = localStorage.getItem("luma-lang"); if (s === "ar" || s === "en") L.lang = s; } catch (e) {}
    const b = document.getElementById("langBtn");
    if (!C.allowLangToggle) b.hidden = true;
    b.addEventListener("click", () => L.apply(L.lang === "ar" ? "en" : "ar"));
    L.apply();
  };
})(window.LUMA);
