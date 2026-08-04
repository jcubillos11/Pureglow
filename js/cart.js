// PUREGLOW - Cart system
const PRODUCTS = {
  ghkcu: { id: 'ghkcu', name: 'GHK-Cu 50mg', price: 149.99, subPrice: 119.99, image: 'product-image-ghkcu', url: 'product-ghkcu.html' },
  reta: { id: 'reta', name: 'Retatrutide 10mg', price: 184.99, subPrice: 147.99, image: 'product-image-retatrutide', url: 'product-retatrutide.html' },
  bac: { id: 'bac', name: 'BAC Water 3mL', price: 14.50, subPrice: 11.60, image: 'product-image-bacwater', url: 'product-bacwater.html' },
  bundle1: { id: 'bundle1', name: 'Radiant Skin Duo', price: 154.49, subPrice: 123.59, image: 'product-image-bundle', url: 'shop.html', originalPrice: 164.49 },
  bundle2: { id: 'bundle2', name: 'Metabolic Reset Duo', price: 189.49, subPrice: 151.59, image: 'product-image-bundle', url: 'shop.html', originalPrice: 199.49 },
  bundle3: { id: 'bundle3', name: 'Complete Wellness Bundle', price: 334.49, subPrice: 267.59, image: 'product-image-bundle', url: 'shop.html', originalPrice: 349.48 },
};

const DISCOUNT_CODES = {
  'WELCOME10': 0.10,
  'GLOW15': 0.15,
  'VIP20': 0.20,
};

const Cart = {
  items: [],
  discount: 0,
  discountCode: '',

  load() {
    try {
      const saved = localStorage.getItem('aura_cart');
      if (saved) {
        const data = JSON.parse(saved);
        this.items = data.items || [];
        this.discount = data.discount || 0;
        this.discountCode = data.discountCode || '';
      }
    } catch (e) { this.items = []; }
  },

  save() {
    localStorage.setItem('aura_cart', JSON.stringify({
      items: this.items,
      discount: this.discount,
      discountCode: this.discountCode,
    }));
    this.updateUI();
  },

  add(productId, options = {}) {
    const product = PRODUCTS[productId];
    if (!product) return;
    const subscription = !!options.subscription;
    const frequency = options.frequency || 30;
    const existing = this.items.find(i => i.id === productId && i.subscription === subscription);
    if (existing) {
      existing.qty += (options.qty || 1);
    } else {
      this.items.push({
        id: productId,
        name: product.name,
        price: subscription ? product.subPrice : product.price,
        image: product.image,
        qty: options.qty || 1,
        subscription,
        frequency,
      });
    }
    this.save();
    if (typeof showToast === 'function') showToast(t('toast.added'), 'success');
    if (typeof openCart === 'function' && !options.silent) openCart();
  },

  remove(index) {
    this.items.splice(index, 1);
    this.save();
    if (typeof showToast === 'function') showToast(t('toast.removed'));
  },

  updateQty(index, qty) {
    if (qty <= 0) return this.remove(index);
    this.items[index].qty = qty;
    this.save();
  },

  applyDiscount(code) {
    const upper = (code || '').toUpperCase().trim();
    if (DISCOUNT_CODES[upper]) {
      this.discount = DISCOUNT_CODES[upper];
      this.discountCode = upper;
      this.save();
      if (typeof showToast === 'function') showToast(t('toast.discount.ok'), 'success');
      return true;
    }
    if (typeof showToast === 'function') showToast(t('toast.discount.bad'), 'error');
    return false;
  },

  clearDiscount() {
    this.discount = 0;
    this.discountCode = '';
    this.save();
  },

  clear() {
    this.items = [];
    this.discount = 0;
    this.discountCode = '';
    this.save();
  },

  subtotal() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  discountAmount() {
    return this.subtotal() * this.discount;
  },

  shipping() {
    const sub = this.subtotal() - this.discountAmount();
    return sub >= 75 || sub === 0 ? 0 : 8.99;
  },

  tax() {
    return (this.subtotal() - this.discountAmount()) * 0.08;
  },

  total() {
    return this.subtotal() - this.discountAmount() + this.shipping() + this.tax();
  },

  count() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  needsBacUpsell() {
    const hasPeptide = this.items.some(i => i.id === 'ghkcu' || i.id === 'reta');
    const hasBac = this.items.some(i => i.id === 'bac' || i.id.startsWith('bundle'));
    return hasPeptide && !hasBac;
  },

  updateUI() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = this.count();
    badges.forEach(b => { b.textContent = count; b.style.display = count > 0 ? 'flex' : 'none'; });
    this.renderSidebar();
    this.renderCartPage();
  },

  renderSidebar() {
    const container = document.querySelector('.cart-items');
    if (!container) return;
    if (this.items.length === 0) {
      container.innerHTML = `<div class="cart-empty"><p>${t('cart.empty')}</p></div>`;
      const footer = document.querySelector('.cart-footer');
      if (footer) footer.style.display = 'none';
      return;
    }
    const footer = document.querySelector('.cart-footer');
    if (footer) footer.style.display = 'block';

    let html = this.items.map((item, i) => `
      <div class="cart-item">
        <div class="cart-item-image ${item.image}">${item.name}</div>
        <div>
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-variant">${item.subscription ? `${t('p.sub')} · ${item.frequency}d` : t('p.onetime')}</div>
          <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
          <div class="qty-control">
            <button onclick="Cart.updateQty(${i}, ${item.qty - 1})">−</button>
            <span>${item.qty}</span>
            <button onclick="Cart.updateQty(${i}, ${item.qty + 1})">+</button>
          </div>
          <br>
          <a href="#" class="cart-item-remove" onclick="event.preventDefault(); Cart.remove(${i})">${t('cart.remove')}</a>
        </div>
      </div>
    `).join('');

    if (this.needsBacUpsell()) {
      html += `
        <div class="cart-upsell">
          <h5>${t('cart.upsell.title')}</h5>
          <p>${t('cart.upsell.desc')}</p>
          <button class="btn btn-primary btn-sm" onclick="Cart.add('bac')">${t('cart.upsell.add')} — $14.50</button>
        </div>
      `;
    }

    container.innerHTML = html;

    const subEl = document.querySelector('.cart-footer .subtotal-val');
    const totalEl = document.querySelector('.cart-footer .total-val');
    if (subEl) subEl.textContent = '$' + this.subtotal().toFixed(2);
    if (totalEl) totalEl.textContent = '$' + this.total().toFixed(2);
  },

  renderCartPage() {
    const container = document.getElementById('cart-page-items');
    if (!container) return;
    if (this.items.length === 0) {
      container.innerHTML = `<div class="cart-empty" style="padding:80px 20px"><p style="margin-bottom:24px">${t('cart.empty')}</p><a href="shop.html" class="btn btn-primary">${t('cart.continue')}</a></div>`;
      const summary = document.getElementById('cart-summary');
      if (summary) summary.style.display = 'none';
      return;
    }
    const summary = document.getElementById('cart-summary');
    if (summary) summary.style.display = 'block';

    let html = this.items.map((item, i) => `
      <div class="cart-row">
        <div class="cart-row-image ${item.image}">${item.name}</div>
        <div>
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-variant">${item.subscription ? t('p.sub') : t('p.onetime')}</div>
          <div class="qty-control">
            <button onclick="Cart.updateQty(${i}, ${item.qty - 1})">−</button>
            <span>${item.qty}</span>
            <button onclick="Cart.updateQty(${i}, ${item.qty + 1})">+</button>
          </div>
        </div>
        <div class="cart-row-price" style="font-weight:500">$${(item.price * item.qty).toFixed(2)}</div>
        <a href="#" class="cart-row-remove cart-item-remove" onclick="event.preventDefault(); Cart.remove(${i})">${t('cart.remove')}</a>
      </div>
    `).join('');

    if (this.needsBacUpsell()) {
      html += `
        <div class="cart-upsell" style="margin-top:24px">
          <h5>${t('cart.upsell.title')}</h5>
          <p>${t('cart.upsell.desc')}</p>
          <button class="btn btn-primary btn-sm" onclick="Cart.add('bac')">${t('cart.upsell.add')} — $14.50</button>
        </div>
      `;
    }

    container.innerHTML = html;

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('sum-sub', '$' + this.subtotal().toFixed(2));
    set('sum-disc', '-$' + this.discountAmount().toFixed(2));
    set('sum-ship', this.shipping() === 0 ? t('cart.free') : '$' + this.shipping().toFixed(2));
    set('sum-tax', '$' + this.tax().toFixed(2));
    set('sum-total', '$' + this.total().toFixed(2));
    const discRow = document.getElementById('sum-disc-row');
    if (discRow) discRow.style.display = this.discount > 0 ? 'flex' : 'none';
  },
};

// Cart sidebar handlers
function openCart() {
  const sidebar = document.querySelector('.cart-sidebar');
  const overlay = document.querySelector('.cart-overlay');
  if (sidebar) sidebar.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  const sidebar = document.querySelector('.cart-sidebar');
  const overlay = document.querySelector('.cart-overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Helper: translation
function t(key) {
  const lang = localStorage.getItem('aura_lang') || 'en';
  return (window.translations && window.translations[lang] && window.translations[lang][key]) || key;
}

if (typeof window !== 'undefined') {
  window.Cart = Cart;
  window.PRODUCTS = PRODUCTS;
  window.openCart = openCart;
  window.closeCart = closeCart;
  window.t = t;
}
