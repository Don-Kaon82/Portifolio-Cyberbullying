document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('nav.links');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      btn.setAttribute('aria-expanded', expanded);
    });
  }
});
