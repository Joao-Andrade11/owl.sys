/* aplica tema e idioma salvos antes do primeiro paint (movido do inline p/ CSP) */
(function () {
  var el = document.documentElement;
  el.classList.remove("no-js");
  try {
    var t = localStorage.getItem("theme");
    if (!t && window.matchMedia("(prefers-color-scheme: light)").matches) t = "light";
    el.setAttribute("data-theme", t || "dark");
    var lg = localStorage.getItem("lang");
    if (lg && lg !== "pt") el.setAttribute("data-lang", lg);
  } catch (e) {
    el.setAttribute("data-theme", "dark");
  }
})();
