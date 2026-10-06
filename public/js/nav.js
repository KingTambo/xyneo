(function(){
  document.querySelectorAll('.has-sub').forEach(function(li){
    var t;
    li.addEventListener('mouseenter',function(){if(window.innerWidth>960){clearTimeout(t);li.classList.add('open')}});
    li.addEventListener('mouseleave',function(){if(window.innerWidth>960){t=setTimeout(function(){li.classList.remove('open')},200)}});
  });
  document.querySelectorAll('.sub-toggle').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.preventDefault();e.stopPropagation();
      var li=btn.closest('.has-sub');
      var open=li.classList.toggle('open');
      btn.setAttribute('aria-expanded',open);
    });
  });
})();
