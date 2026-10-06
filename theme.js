(function () {
  var root   = document.documentElement;
  var btn    = document.getElementById('themeBtn');
  var sun    = document.getElementById('iconSun');
  var moon   = document.getElementById('iconMoon');

  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t === 'dark')  return true;
    if (t === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function updateIcon() {
    var dark = isDark();
    sun.style.display  = dark  ? 'block' : 'none';
    moon.style.display = dark  ? 'none'  : 'block';
  }

  // Apply saved preference on load
  try {
    var saved = localStorage.getItem('shenni-theme');
    if (saved === 'dark' || saved === 'light') {
      root.setAttribute('data-theme', saved);
    }
  } catch (e) {}

  updateIcon();

  btn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    updateIcon();
    try { localStorage.setItem('shenni-theme', next); } catch (e) {}
  });
})();
