/* ============================================================
   GRAVITY STREETWEAR — main.js
   ============================================================ */
(function(){
  "use strict";
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var nav = document.querySelector('.nav');
  function onScroll(){
    if(!nav) return;
    if(window.scrollY > 10){ nav.classList.add('scrolled'); } else { nav.classList.remove('scrolled'); }
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');
  if(toggle && links){
    toggle.addEventListener('click', function(){
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
        document.body.style.overflow = '';
      });
    });
  }

  var here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a[data-page]').forEach(function(a){
    if(a.getAttribute('data-page') === here){ a.classList.add('active'); }
  });

  var revealEls = document.querySelectorAll('.reveal');
  function observeReveal(el){
    if('IntersectionObserver' in window && !reduceMotion){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
        });
      }, { threshold:.1, rootMargin:'0px 0px -60px 0px' });
      io.observe(el);
    } else {
      el.classList.add('in');
    }
  }
  revealEls.forEach(observeReveal);
  window.__gravityObserveReveal = observeReveal;

  /* WhatsApp por género: [data-wa="men"] o [data-wa="women"], con
     [data-wa-msg] opcional para un mensaje prellenado específico. */
  function wireWhatsApp(){
    document.querySelectorAll('[data-wa]').forEach(function(el){
      var gender = el.getAttribute('data-wa');
      var phone = gender === 'women' ? CONFIG.WHATSAPP_WOMEN : CONFIG.WHATSAPP_MEN;
      var text = el.getAttribute('data-wa-msg') || 'Hola Gravity, quiero más información.';
      el.setAttribute('href', 'https://wa.me/' + phone + '?text=' + encodeURIComponent(text));
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });
    document.querySelectorAll('[data-ig]').forEach(function(el){
      var gender = el.getAttribute('data-ig');
      var url = gender === 'women' ? CONFIG.INSTAGRAM_WOMEN : CONFIG.INSTAGRAM_MEN;
      el.setAttribute('href', url);
      if(url !== '#'){ el.setAttribute('target','_blank'); el.setAttribute('rel','noopener'); }
    });
    document.querySelectorAll('[data-tt]').forEach(function(el){
      var gender = el.getAttribute('data-tt');
      var url = gender === 'women' ? CONFIG.TIKTOK_WOMEN : CONFIG.TIKTOK_MEN;
      el.setAttribute('href', url);
      if(url !== '#'){ el.setAttribute('target','_blank'); el.setAttribute('rel','noopener'); }
    });
  }
  wireWhatsApp();
})();
