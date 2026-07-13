/* ============================================================
   GRAVITY STREETWEAR — catalog-render.js
   Lee PRODUCTS/CATEGORIES (products.js) y arma el HTML de:
   - grid de productos en una página de categoría
   - grid de categorías en men.html / women.html
   Cada página llama a GravityCatalog.renderX() con sus parámetros.
   ============================================================ */
(function(){
  "use strict";

  function escapeHtml(str){
    return String(str || "").replace(/[&<>"']/g, function(c){
      return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c];
    });
  }

  function productCard(p){
    var thumbClass = p.image ? 'product-thumb reveal-media' : 'product-thumb placeholder';
    var thumb = p.image
      ? '<div class="' + thumbClass + '"><img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.name) + '" loading="lazy"></div>'
      : '<div class="' + thumbClass + '"><span>Foto próximamente</span></div>';
    var msg = 'Hola Gravity, me interesa "' + p.name + '" ($' + p.price + ' ' + p.currency + ').';
    var meta = '';
    if(p.colors && p.colors.length){
      meta += '<div class="product-meta"><strong>Colores:</strong> ' + escapeHtml(p.colors.join(', ')) + '</div>';
    }
    if(p.sizes){
      meta += '<div class="product-meta"><strong>Tallas:</strong> ' + escapeHtml(p.sizes) + '</div>';
    }
    return (
      '<div class="product-card">' +
        thumb +
        '<div class="product-body">' +
          '<h3>' + escapeHtml(p.name) + '</h3>' +
          '<p>' + escapeHtml(p.description || '') + '</p>' +
          meta +
          '<div class="product-price">$' + p.price + ' ' + escapeHtml(p.currency) + '</div>' +
          '<a href="#" class="btn btn-primary btn-block" data-wa="' + p.gender + '" data-wa-msg="' + escapeHtml(msg) + '">Pedir por WhatsApp</a>' +
        '</div>' +
      '</div>'
    );
  }

  function renderProductGrid(containerSelector, gender, category){
    var el = document.querySelector(containerSelector);
    if(!el) return;
    var items = PRODUCTS.filter(function(p){ return p.gender === gender && p.category === category; });
    if(!items.length){
      el.outerHTML = '<p class="empty-note">Catálogo en preparación — muy pronto vas a ver las piezas de esta categoría aquí.</p>';
      return;
    }
    el.innerHTML = items.map(productCard).join('');
    el.querySelectorAll('.product-card').forEach(function(card){
      card.classList.add('reveal');
      if(window.__gravityObserveReveal){ window.__gravityObserveReveal(card); } else { card.classList.add('in'); }
    });
    if(window.__gravityAutoStagger){ window.__gravityAutoStagger(); }
    rewireNewLinks(el);
  }

  function catCard(gender, cat, index){
    var count = PRODUCTS.filter(function(p){ return p.gender === gender && p.category === cat.slug; }).length;
    var countLabel = count ? (count + ' PIEZAS') : 'PRÓXIMAMENTE';
    return (
      '<a class="cat-card reveal" href="categoria-' + gender + '-' + cat.slug + '.html">' +
        '<span class="cat-index">' + String(index+1).padStart(2,'0') + ' / ' + countLabel + '</span>' +
        '<h3>' + escapeHtml(cat.name) + '</h3>' +
        '<p>' + escapeHtml(cat.description) + '</p>' +
        '<span class="cat-link">Ver categoría →</span>' +
      '</a>'
    );
  }

  function renderCategoryHub(containerSelector, gender){
    var el = document.querySelector(containerSelector);
    if(!el) return;
    var cats = CATEGORIES[gender] || [];
    el.innerHTML = cats.map(function(c, i){ return catCard(gender, c, i); }).join('');
    el.querySelectorAll('.cat-card').forEach(function(card){
      if(window.__gravityObserveReveal){ window.__gravityObserveReveal(card); } else { card.classList.add('in'); }
    });
    if(window.__gravityAutoStagger){ window.__gravityAutoStagger(); }
  }

  function rewireNewLinks(scope){
    (scope || document).querySelectorAll('[data-wa]').forEach(function(el){
      if(el.getAttribute('href')) return;
      var gender = el.getAttribute('data-wa');
      var phone = gender === 'women' ? CONFIG.WHATSAPP_WOMEN : CONFIG.WHATSAPP_MEN;
      var text = el.getAttribute('data-wa-msg') || 'Hola Gravity, quiero más información.';
      el.setAttribute('href', 'https://wa.me/' + phone + '?text=' + encodeURIComponent(text));
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });
  }

  function renderPageCover(gender, categorySlug){
    var cats = CATEGORIES[gender] || [];
    var cat = cats.find(function(c){ return c.slug === categorySlug; });
    if(!cat || !cat.cover) return;
    var hero = document.querySelector('.page-hero');
    if(!hero) return;
    hero.classList.add('has-cover');
    hero.style.backgroundImage =
      'url("' + cat.cover + '")';
  }

  window.GravityCatalog = {
    renderProductGrid: renderProductGrid,
    renderCategoryHub: renderCategoryHub,
    renderPageCover: renderPageCover
  };
})();
