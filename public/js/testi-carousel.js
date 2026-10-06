(function(){
  var sec=document.querySelector('.testi-sec');
  if(!sec)return;
  var track=sec.querySelector('.testi-track');
  var prev=sec.querySelector('.tc-prev');
  var next=sec.querySelector('.tc-next');
  if(!track||!prev||!next)return;
  var slides=sec.querySelectorAll('.testi-slide');
  var dots=sec.querySelectorAll('.tc-dot');
  var n=slides.length||8,idx=0;
  function vis(){return window.innerWidth>=960?3:window.innerWidth>=580?2:1;}
  function go(i){
    var v=vis(),max=Math.max(0,n-v);
    idx=Math.min(Math.max(i,0),max);
    track.style.transform='translateX(-'+idx*(100/v)+'%)';
    dots.forEach(function(d,j){d.classList.toggle('active',j===idx);});
  }
  prev.addEventListener('click',function(){go(idx-1);});
  next.addEventListener('click',function(){go(idx+1);});
  dots.forEach(function(d,j){d.addEventListener('click',function(){go(j);});});
  window.addEventListener('resize',function(){go(idx);});
})();
