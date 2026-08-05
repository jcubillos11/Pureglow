// PUREGLOW - Multi-currency
// COP is the source of truth. USD and GBP are calculated daily from COP via live rates.

const FALLBACK_RATES = { USD: 1, COP: 4350, GBP: 0.79 };
const CURRENCY_SYMBOLS = { USD: '$', COP: 'COP $', GBP: '£' };
const RATE_TTL_MS = 60 * 60 * 1000;

// Fixed COP prices — keyed by the HTML data-usd-price value
const FIXED_COP = {
  149.99: 445000,
  184.99: 545000,
  14.50:  35000,
};

const Currency = {
  current: 'USD',
  rates: { ...FALLBACK_RATES },

  load() {
    this.current = localStorage.getItem('aura_currency') || 'USD';
    this._loadCachedRates();
    this._fetchRates();
  },

  save() {
    localStorage.setItem('aura_currency', this.current);
  },

  _loadCachedRates() {
    try {
      const cached = JSON.parse(localStorage.getItem('aura_fx_cache') || 'null');
      if (cached && Date.now() - cached.ts < RATE_TTL_MS) {
        this.rates = cached.rates;
      }
    } catch (e) {}
  },

  _fetchRates() {
    try {
      const cached = JSON.parse(localStorage.getItem('aura_fx_cache') || 'null');
      if (cached && Date.now() - cached.ts < RATE_TTL_MS) return;
    } catch (e) {}

    fetch('https://open.er-api.com/v6/latest/USD')
      .then(r => r.json())
      .then(data => {
        if (data && data.rates) {
          this.rates = {
            USD: 1,
            COP: data.rates.COP || FALLBACK_RATES.COP,
            GBP: data.rates.GBP || FALLBACK_RATES.GBP,
          };
          localStorage.setItem('aura_fx_cache', JSON.stringify({ ts: Date.now(), rates: this.rates }));
          this.updatePrices();
        }
      })
      .catch(() => {});
  },

  // Convert a fixed COP amount to the target currency using live rates
  _fromCOP(copAmount) {
    const copPerUSD = this.rates.COP || FALLBACK_RATES.COP;
    if (this.current === 'COP') {
      return 'COP $' + Math.round(copAmount).toLocaleString('es-CO');
    }
    if (this.current === 'USD') {
      return '$' + (copAmount / copPerUSD).toFixed(2);
    }
    if (this.current === 'GBP') {
      return '£' + (copAmount / copPerUSD * this.rates.GBP).toFixed(2);
    }
  },

  format(usdAmount) {
    const fixedCOP = FIXED_COP[usdAmount];

    // Products with a fixed COP price — all currencies derived from COP
    if (fixedCOP !== undefined) {
      return this._fromCOP(fixedCOP);
    }

    // Bundles and other prices — convert from USD directly
    const copPerUSD = this.rates.COP || FALLBACK_RATES.COP;
    if (this.current === 'COP') {
      return 'COP $' + Math.round(usdAmount * copPerUSD).toLocaleString('es-CO');
    }
    if (this.current === 'USD') {
      return '$' + usdAmount.toFixed(2);
    }
    if (this.current === 'GBP') {
      return '£' + (usdAmount * this.rates.GBP).toFixed(2);
    }
    return '$' + usdAmount.toFixed(2);
  },

  set(code) {
    this.current = code;
    this.save();
    this.updatePrices();
    document.querySelectorAll('.currency-btn').forEach(b => b.classList.toggle('active', b.dataset.currency === code));
  },

  updatePrices() {
    document.querySelectorAll('[data-usd-price]').forEach(el => {
      el.textContent = this.format(parseFloat(el.dataset.usdPrice));
    });
    if (typeof Cart !== 'undefined') Cart.updateUI();
  },
};

if (typeof window !== 'undefined') window.Currency = Currency;
