(function(){
  document.querySelectorAll('form.cform, form.sbc-form').forEach(function(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      try{
        var _tel=form.querySelector('[name="tel"],[type="tel"]');
        var _email=form.querySelector('[name="email"],[type="email"]');
        var _pRaw=_tel?_tel.value.trim():'';
        var _country='+33';
        var _p=_pRaw.replace(/[ .()-]/g,'').replace(/^00/,'+').replace(/^0/,_country);
        sessionStorage.setItem('ec_data',JSON.stringify({phone:_p,email:_email?_email.value.trim():''}));
      }catch(eec){}
      var btn=form.querySelector('[type=submit]');
      if(btn){btn.disabled=true;btn.textContent='Envoi en cours...';}
      fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}})
        .finally(function(){window.location.href='[https://www.exemple.fr/merci/]';});
    });
  });
})();
