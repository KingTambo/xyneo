(function(){
  var KEYS=['utm_source','utm_medium','utm_campaign','gclid','wbraid','gbraid'];
  var p=new URLSearchParams(window.location.search);
  KEYS.forEach(function(k){if(p.get(k))sessionStorage.setItem(k,p.get(k));});
  if(!sessionStorage.getItem('last_referrer')&&document.referrer&&document.referrer.indexOf(location.hostname)===-1)
    sessionStorage.setItem('last_referrer',document.referrer);
  if(!sessionStorage.getItem('landing_page'))
    sessionStorage.setItem('landing_page',location.href);
  // Fallback UTMs : inféré depuis click IDs ou referrer quand utm_source absent
  function resolveMissingUtms(){
    if(sessionStorage.getItem('utm_source'))return;
    var gc=sessionStorage.getItem('gclid'),gb=sessionStorage.getItem('gbraid'),wb=sessionStorage.getItem('wbraid');
    if(gc||gb||wb){
      sessionStorage.setItem('utm_source','google');
      sessionStorage.setItem('utm_medium','cpc');
      sessionStorage.setItem('utm_campaign','unknown_pmax');
    }else if((sessionStorage.getItem('last_referrer')||'').indexOf('google')!==-1){
      sessionStorage.setItem('utm_source','google');
      sessionStorage.setItem('utm_medium','organic');
    }
  }
  resolveMissingUtms();
  // Champ gclid du formulaire : priorise gclid > gbraid > wbraid
  function resolvedClickId(){
    return sessionStorage.getItem('gclid')||sessionStorage.getItem('gbraid')||sessionStorage.getItem('wbraid')||'';
  }
  var ALL_KEYS=KEYS.concat(['last_referrer','landing_page']);
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('form.cform,form.sbc-form,form#real-form').forEach(function(form){
      ALL_KEYS.forEach(function(k){
        var el=form.querySelector('[name="'+k+'"]');
        if(el){var v=(k==='gclid')?resolvedClickId():sessionStorage.getItem(k);if(v)el.value=v;}
      });
    });
  });
})();
