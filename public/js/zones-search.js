(function () {
  function normalize(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  document.querySelectorAll('[data-zones-filter]').forEach(function (wrap) {
    var input = wrap.querySelector('.zones-search');
    var list = wrap.querySelector('.zones-pills');
    var empty = wrap.querySelector('.zones-search-empty');
    if (!input || !list) return;

    var links = Array.prototype.slice.call(list.querySelectorAll('.zone'));

    input.addEventListener('input', function () {
      var q = normalize(input.value.trim());
      var matches = 0;

      links.forEach(function (link) {
        var match = !q || normalize(link.textContent).indexOf(q) !== -1;
        link.classList.toggle('zone-match', !!q && match);
        link.classList.toggle('zone-dim', !!q && !match);
        link.hidden = false;
        if (match) matches++;
      });

      if (empty) empty.hidden = matches > 0 || !q;
    });
  });
})();
