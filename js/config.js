/* ==========================================================
   LUMA STANDARD - CUSTOMER CONFIGURATION
   Edit ONLY this file (and replace media in /assets) to make a new invitation.
   All values below are DEMO content.
   ========================================================== */
window.LUMA_CONFIG = {
  defaultLang: "ar",            // "ar" or "en": language shown first
  allowLangToggle: true,

  // Event: wall-clock time in the time zone below
  event: {
    dateTime: "2027-06-18T18:30:00",  // YYYY-MM-DDTHH:MM:SS
    timeZone: "Africa/Cairo",          // any IANA zone, e.g. "Asia/Riyadh"
  },

  // Media: paths relative to index.html
  media: {
    hero: "assets/images/hero/hero.jfif",
    gallery: [   // add or remove as many as you like
      "assets/images/gallery/gallery-1.jfif",
      "assets/images/gallery/gallery-2.jfif",
      "assets/images/gallery/gallery-3.jfif",
      "assets/images/gallery/gallery-4.jfif",
      "assets/images/gallery/gallery-5.jfif",
      "assets/images/gallery/gallery-6.jfif",
      "assets/images/gallery/gallery-7.jfif",
      "assets/images/gallery/gallery-8.jfif"
    ],
    music: "assets/audio/wedding-song.mp3",   // e.g. "assets/audio/music.mp3". Empty = music button hidden
  },

  // Venue map. Keep lat/lng as null until you have the real coordinates
  map: { lat: null, lng: null },

  // Text per language
  content: {
    ar: {
      names: ["سارة", "عمر"],
      intro: "بقلوب ممتلئة بالفرح، ندعوكم",
      messageTitle: "دعوة زفاف",
      message: "يسعدنا أن نشارككم أجمل لحظات حياتنا، ونتشرف بحضوركم حفل زفافنا، ليكتمل فرحنا بدعواتكم ووجودكم بيننا.",
      dateText: "الجمعة، ١٨ يونيو ٢٠٢٧",
      timeText: "٦:٣٠ مساءً",
      venueName: "اسم القاعة (نموذج)",
      venueAddress: "العنوان الكامل للقاعة (نموذج)، المدينة",
      closing: "شكراً لأنكم جزء من حكايتنا.",
      signoff: "سارة وعمر"
    },
    en: {
      names: ["Sara", "Omar"],
      intro: "With full hearts, we invite you",
      messageTitle: "Wedding Invitation",
      message: "We would be honoured to share the most beautiful moment of our lives with you, and to celebrate our wedding together with the people we love.",
      dateText: "Friday, 18 June 2027",
      timeText: "6:30 PM",
      venueName: "Venue Name (demo)",
      venueAddress: "Full venue address (demo), City",
      closing: "Thank you for being part of our story.",
      signoff: "Sara & Omar"
    }
  }
};
