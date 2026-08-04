// AURA PEPTIDES - Main JavaScript
document.addEventListener('DOMContentLoaded', init);

function init() {
  Cart.load();
  Cart.updateUI();
  initLanguage();
  initNav();
  initScrollAnimations();
  initFAQ();
  initWishlist();
  initNewsletterPopup();
  initCookieConsent();
  initMobileMenu();
  initTabs();
  initSubToggle();
  initQuiz();
  initCartSidebar();
  renderTestimonials();
  renderFAQ();
  initCheckoutSteps();
  initAccountTabs();
  initShopFilters();
}

// Language
function initLanguage() {
  const saved = localStorage.getItem('aura_lang') || 'en';
  setLanguage(saved);
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}
function setLanguage(lang) {
  localStorage.setItem('aura_lang', lang);
  const dict = window.translations[lang] || window.translations.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.dataset.translate;
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.dataset.translatePlaceholder;
    if (dict[key]) el.placeholder = dict[key].replace(/<[^>]+>/g, '');
  });
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Re-render dynamic content
  Cart.updateUI();
  renderTestimonials();
  renderFAQ();
  renderQuizStep();
}

// Nav scroll
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const handler = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  handler();
  window.addEventListener('scroll', handler, { passive: true });
}

// Mobile menu
function initMobileMenu() {
  const btn = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-menu');
  if (!btn || !menu) return;

  function openMenu() {
    menu.classList.add('open');
    btn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('open');
    btn.classList.remove('active');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close when a nav link is clicked
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Close when tapping outside the menu
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') && !menu.contains(e.target) && e.target !== btn) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

// Scroll animations
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  els.forEach(el => io.observe(el));
}

// FAQ accordion
function initFAQ() {
  document.body.addEventListener('click', e => {
    const btn = e.target.closest('.faq-question');
    if (!btn) return;
    const item = btn.closest('.faq-item');
    item.classList.toggle('active');
  });
}
function renderFAQ() {
  const container = document.getElementById('faq-list');
  if (!container) return;
  const lang = localStorage.getItem('aura_lang') || 'en';
  const items = window.faqData[lang] || window.faqData.en;
  container.innerHTML = items.map(f => `
    <div class="faq-item">
      <button class="faq-question">
        <span>${f.q}</span>
        <span class="icon">+</span>
      </button>
      <div class="faq-answer"><p>${f.a}</p></div>
    </div>
  `).join('');
}

// Wishlist
function initWishlist() {
  document.body.addEventListener('click', e => {
    const btn = e.target.closest('[data-wishlist]');
    if (!btn) return;
    e.preventDefault();
    const id = btn.dataset.wishlist;
    const list = JSON.parse(localStorage.getItem('aura_wishlist') || '[]');
    const idx = list.indexOf(id);
    if (idx >= 0) {
      list.splice(idx, 1);
      btn.classList.remove('active');
      showToast(t('toast.wishlist.remove'));
    } else {
      list.push(id);
      btn.classList.add('active');
      showToast(t('toast.wishlist.add'), 'success');
    }
    localStorage.setItem('aura_wishlist', JSON.stringify(list));
    updateWishlistBadges();
  });
  updateWishlistBadges();
}
function updateWishlistBadges() {
  const list = JSON.parse(localStorage.getItem('aura_wishlist') || '[]');
  document.querySelectorAll('[data-wishlist]').forEach(btn => {
    btn.classList.toggle('active', list.includes(btn.dataset.wishlist));
  });
  const badges = document.querySelectorAll('.wishlist-badge');
  badges.forEach(b => { b.textContent = list.length; b.style.display = list.length > 0 ? 'flex' : 'none'; });
}

// Recently viewed
function recordView(productId) {
  const list = JSON.parse(localStorage.getItem('aura_viewed') || '[]');
  const filtered = list.filter(id => id !== productId);
  filtered.unshift(productId);
  localStorage.setItem('aura_viewed', JSON.stringify(filtered.slice(0, 4)));
}

// Newsletter popup
function initNewsletterPopup() {
  if (sessionStorage.getItem('aura_nl_shown')) return;
  setTimeout(() => {
    const modal = document.getElementById('newsletter-modal');
    if (modal) {
      modal.classList.add('open');
      sessionStorage.setItem('aura_nl_shown', '1');
    }
  }, 5000);
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
}
function submitNewsletter(e) {
  e.preventDefault();
  showToast(t('toast.subscribed'), 'success');
  closeModal('newsletter-modal');
  return false;
}

// Cookie consent
function initCookieConsent() {
  if (localStorage.getItem('aura_cookies')) return;
  const banner = document.getElementById('cookie-consent');
  if (banner) setTimeout(() => banner.classList.add('show'), 1500);
}
function acceptCookies() {
  localStorage.setItem('aura_cookies', '1');
  const b = document.getElementById('cookie-consent');
  if (b) b.classList.remove('show');
}

// Cart sidebar init
function initCartSidebar() {
  document.querySelectorAll('[data-open-cart]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); openCart(); });
  });
  document.querySelectorAll('.cart-close, .cart-overlay').forEach(el => {
    el.addEventListener('click', closeCart);
  });
}

// Product tabs
function initTabs() {
  document.querySelectorAll('.tab-nav').forEach(nav => {
    nav.addEventListener('click', e => {
      const btn = e.target.closest('button[data-tab]');
      if (!btn) return;
      const parent = nav.parentElement;
      nav.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      parent.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      const target = parent.querySelector(`.tab-content[data-tab-content="${btn.dataset.tab}"]`);
      if (target) target.classList.add('active');
    });
  });
}

// Subscription toggle
function initSubToggle() {
  document.querySelectorAll('.sub-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
      const opt = e.target.closest('.sub-option');
      if (!opt) return;
      toggle.querySelectorAll('.sub-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      const radio = opt.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });
}

// Testimonials render
function renderTestimonials() {
  const container = document.getElementById('testimonials-scroll');
  if (!container) return;
  const lang = localStorage.getItem('aura_lang') || 'en';
  const items = window.testimonialsData[lang] || window.testimonialsData.en;
  const cardHtml = t => `
    <div class="testimonial-card">
      ${t.photo ? `<div class="testimonial-photo"><img src="${t.photo}" alt="${t.name}" loading="lazy"></div>` : ''}
      <div class="testimonial-stars testimonial-rating">${'★'.repeat(t.stars)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <strong class="testimonial-name">${t.name}</strong>
        <span class="testimonial-meta">${t.meta}</span>
      </div>
    </div>
  `;
  container.innerHTML = items.map(cardHtml).join('');
  const grid = document.getElementById('testimonials-grid');
  if (grid) {
    grid.innerHTML = items.map(cardHtml).join('');
  }
}

// Quiz
let quizState = { step: 0, answers: [], recommendation: null };

function initQuiz() {
  const container = document.getElementById('quiz-container');
  if (!container) return;
  renderQuizStep();
}
function renderQuizStep() {
  const container = document.getElementById('quiz-container');
  if (!container) return;
  const lang = localStorage.getItem('aura_lang') || 'en';
  const data = window.quizData[lang] || window.quizData.en;
  const total = data.questions.length;

  if (quizState.step >= total) {
    // Compute recommendation
    const counts = { skin: 0, metabolic: 0, both: 0 };
    quizState.answers.forEach(a => counts[a]++);
    const top = Object.entries(counts).sort((a,b) => b[1]-a[1])[0][0];
    const result = data.results[top];
    quizState.recommendation = result;
    container.innerHTML = `
      <div class="quiz-progress"><div class="quiz-progress-bar" style="width:100%"></div></div>
      <div class="quiz-step active quiz-result">
        <div class="eyebrow">${lang === 'es' ? 'Tu Resultado' : 'Your Result'}</div>
        <h2 style="font-style:italic;font-weight:300">${result.title}</h2>
        <p style="max-width:520px;margin:20px auto 40px;font-size:1.0625rem">${result.desc}</p>
        <div class="hero-ctas" style="justify-content:center">
          <button class="btn btn-primary" onclick="Cart.add('${result.product}'); openCart();">${lang === 'es' ? 'Añadir al Carrito' : 'Add to Cart'}</button>
          <button class="btn btn-outline" onclick="resetQuiz()">${lang === 'es' ? 'Repetir Quiz' : 'Retake Quiz'}</button>
        </div>
      </div>
    `;
    return;
  }

  const q = data.questions[quizState.step];
  const progress = ((quizState.step) / total) * 100;
  container.innerHTML = `
    <div class="quiz-progress"><div class="quiz-progress-bar" style="width:${progress + (100/total)}%"></div></div>
    <div class="quiz-step active">
      <div class="eyebrow text-center" style="display:block;text-align:center">${lang === 'es' ? 'Pregunta' : 'Question'} ${quizState.step + 1} / ${total}</div>
      <h2>${q.q}</h2>
      <div class="quiz-options">
        ${q.options.map((o, i) => `<button class="quiz-option" onclick="answerQuiz('${o.tag}')">${o.text}</button>`).join('')}
      </div>
      ${quizState.step > 0 ? `<div class="quiz-actions"><button class="btn btn-outline btn-sm" onclick="prevQuiz()">${lang === 'es' ? 'Anterior' : 'Back'}</button></div>` : ''}
    </div>
  `;
}
function answerQuiz(tag) {
  quizState.answers[quizState.step] = tag;
  quizState.step++;
  renderQuizStep();
}
function prevQuiz() {
  if (quizState.step > 0) { quizState.step--; renderQuizStep(); }
}
function resetQuiz() {
  quizState = { step: 0, answers: [], recommendation: null };
  renderQuizStep();
}

// Checkout
function initCheckoutSteps() {
  const container = document.getElementById('checkout-content');
  if (!container) return;
  window.checkoutStep = 1;
  renderCheckoutStep();
}
function renderCheckoutStep() {
  const container = document.getElementById('checkout-content');
  if (!container) return;
  const step = window.checkoutStep;
  document.querySelectorAll('.checkout-step').forEach((el, i) => {
    el.classList.remove('active', 'done');
    if (i + 1 < step) el.classList.add('done');
    if (i + 1 === step) el.classList.add('active');
  });
  const lang = localStorage.getItem('aura_lang') || 'en';
  const labels = window.translations[lang];

  let html = '';
  if (step === 1) {
    html = `
      <h2 style="font-family:var(--font-heading);margin-bottom:24px">${labels['co.contact']}</h2>
      <div class="form-group"><label>${labels['co.email']}</label><input type="email" required></div>
      <label style="display:flex;gap:10px;align-items:center;font-size:0.9rem;color:var(--color-text-light);margin-bottom:24px"><input type="checkbox"> ${lang === 'es' ? 'Suscribirme al newsletter' : 'Subscribe to newsletter'}</label>
      <button class="btn btn-primary btn-block" onclick="nextCheckoutStep()">${lang === 'es' ? 'Continuar al Envío' : 'Continue to Shipping'}</button>
    `;
  } else if (step === 2) {
    html = `
      <h2 style="font-family:var(--font-heading);margin-bottom:24px">${labels['co.shipping']}</h2>
      <div class="form-row"><div class="form-group"><label>${labels['co.first']}</label><input required></div><div class="form-group"><label>${labels['co.last']}</label><input required></div></div>
      <div class="form-group"><label>${labels['co.address']}</label><input required></div>
      <div class="form-row"><div class="form-group"><label>${labels['co.city']}</label><input required></div><div class="form-group"><label>${labels['co.zip']}</label><input required></div></div>
      <div class="form-group"><label>${labels['co.country']}</label><select><option>United States</option><option>Spain</option><option>United Kingdom</option><option>France</option></select></div>
      <button class="btn btn-primary btn-block" onclick="nextCheckoutStep()">${lang === 'es' ? 'Continuar al Pago' : 'Continue to Payment'}</button>
    `;
  } else if (step === 3) {
    html = `
      <h2 style="font-family:var(--font-heading);margin-bottom:24px">${labels['co.payment']}</h2>
      <div class="form-group"><label>${labels['co.card']}</label><input placeholder="4242 4242 4242 4242" required></div>
      <div class="form-row"><div class="form-group"><label>${labels['co.expiry']}</label><input placeholder="12 / 28" required></div><div class="form-group"><label>${labels['co.cvc']}</label><input placeholder="123" required></div></div>
      <button class="btn btn-primary btn-block" onclick="nextCheckoutStep()">${labels['co.place']}</button>
    `;
  } else if (step === 4) {
    Cart.clear();
    html = `
      <div style="text-align:center;padding:60px 0">
        <div style="font-family:var(--font-heading);font-size:3rem;color:var(--color-gold);margin-bottom:20px">Thank you</div>
        <h2 style="font-family:var(--font-heading);font-style:italic;margin-bottom:20px">${lang === 'es' ? 'Tu pedido está confirmado' : 'Your order is confirmed'}</h2>
        <p style="margin-bottom:32px">${lang === 'es' ? 'Recibirás un correo con los detalles en breve. Bienvenida al Círculo Aura.' : 'You will receive an email with details shortly. Welcome to the Aura Circle.'}</p>
        <a href="index.html" class="btn btn-primary">${lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}</a>
      </div>
    `;
  }
  container.innerHTML = html;
}
function nextCheckoutStep() {
  window.checkoutStep++;
  renderCheckoutStep();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Account tabs
function initAccountTabs() {
  const tabs = document.querySelectorAll('.account-tabs button');
  if (!tabs.length) return;
  tabs.forEach(btn => btn.addEventListener('click', () => {
    tabs.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.target;
    document.querySelectorAll('.account-pane').forEach(p => p.style.display = p.dataset.pane === target ? 'block' : 'none');
  }));
}

// Shop filters
function initShopFilters() {
  const filters = document.querySelectorAll('.shop-filter');
  if (!filters.length) return;
  filters.forEach(f => f.addEventListener('change', applyShopFilters));
  const sort = document.getElementById('shop-sort');
  if (sort) sort.addEventListener('change', applyShopFilters);
}
function applyShopFilters() {
  // simple stub: could filter product cards
}

// Toast
function showToast(message, type = '') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(30px)'; }, 2600);
  setTimeout(() => toast.remove(), 3000);
}

if (typeof window !== 'undefined') {
  window.setLanguage = setLanguage;
  window.showToast = showToast;
  window.closeModal = closeModal;
  window.submitNewsletter = submitNewsletter;
  window.acceptCookies = acceptCookies;
  window.answerQuiz = answerQuiz;
  window.prevQuiz = prevQuiz;
  window.resetQuiz = resetQuiz;
  window.nextCheckoutStep = nextCheckoutStep;
  window.recordView = recordView;
}
