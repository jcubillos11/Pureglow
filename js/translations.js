// PUREGLOW - Bilingual translations (EN / ES)
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.blog': 'Journal',
    'nav.quiz': 'Find Your Protocol',
    'nav.account': 'Account',
    'nav.wishlist': 'Wishlist',
    'nav.cart': 'Cart',

    // Hero
    'hero.eyebrow': 'Premium Peptide Science',
    'hero.title': 'Elevate your <em>wellness ritual</em>',
    'hero.sub': 'Results backed by science. Purity you can feel. Your glow, every day.',
    'hero.cta1': 'Shop Collection',
    'hero.cta2': 'Find Your Protocol',

    // Sections
    'featured.eyebrow': 'Bestsellers',
    'featured.title': 'The Essentials',
    'featured.sub': 'Three formulations. Endless possibilities. Discover the peptides trusted by thousands of women worldwide.',
    'why.eyebrow': 'Why PureGlow',
    'why.title': 'Uncompromising standards',
    'why.q': 'Results Backed by Science',
    'why.q.d': 'Every formulation tested and validated in independent laboratories.',
    'why.l': 'Purity You Can Feel',
    'why.l.d': 'Every batch verified for purity, potency and safety.',
    'why.p': 'Clinical-Grade Quality',
    'why.p.d': 'Guaranteed 99%+ purity across our entire collection.',
    'why.s': 'Fast, Discreet Shipping',
    'why.s.d': 'Discreet 2–3 day delivery in temperature-controlled packaging.',
    'why.t': 'Trusted by Thousands',
    'why.t.d': 'Loved by 25,000+ customers across 40 countries.',
    'why.c': 'Secure Checkout',
    'why.c.d': 'SSL-encrypted payments and 100% satisfaction guarantee.',

    'life.eyebrow': 'The PureGlow Philosophy',
    'life.title': 'Beauty begins <em>within</em>.',
    'life.sub': 'True elegance is a ritual. Every drop, every dose, every moment — designed to honor the extraordinary woman you already are.',
    'life.cta': 'Read Our Story',

    'bundles.eyebrow': 'Curated Sets',
    'bundles.title': 'The Bundle Edit',
    'bundles.sub': 'Save more when you build your complete protocol.',
    'bundle.save': 'Save',
    'bundle.b1': 'Radiant Skin Duo',
    'bundle.b1.d': 'GHK-Cu 50mg + BAC Water 3mL',
    'bundle.b2': 'Metabolic Reset Duo',
    'bundle.b2.d': 'Retatrutide 10mg + BAC Water 3mL',
    'bundle.b3': 'Complete Wellness',
    'bundle.b3.d': 'GHK-Cu + Retatrutide + BAC Water',

    'quiz.eyebrow': 'Personalized For You',
    'quiz.title': 'Find your <em>perfect protocol</em>',
    'quiz.sub': 'A 60-second quiz to discover which peptides align with your goals.',
    'quiz.cta': 'Take the Quiz',

    'testi.eyebrow': 'Loved By Thousands',
    'testi.title': 'Real people. Real results.',

    'social.eyebrow': '@pureglow_col',
    'social.title': 'Follow the ritual',

    // Products
    'p.ghkcu.name': 'GHK-Cu 50mg',
    'p.ghkcu.tag': 'The Skin & Hair Essential',
    'p.ghkcu.desc': 'Premium copper peptide for radiant skin, healthier hair and cellular renewal.',
    'p.reta.name': 'Retatrutide 10mg',
    'p.reta.tag': 'Metabolic Wellness',
    'p.reta.desc': 'Advanced metabolic peptide for body composition and wellness support.',
    'p.bac.name': 'BAC Water 3mL',
    'p.bac.tag': 'Sterile Reconstitution',
    'p.bac.desc': 'Sterile bacteriostatic water for laboratory and research reconstitution.',

    // Product actions
    'p.add': 'Add to Cart',
    'p.buy': 'Buy Now',
    'p.quick': 'Quick View',
    'p.onetime': 'One-Time Purchase',
    'p.sub': 'Subscribe & Save 15%',
    'p.subprice': 'per delivery',
    'p.freq': 'Delivery every',
    'p.freq30': '30 days',
    'p.freq60': '60 days',
    'p.freq90': '90 days',
    'p.qty': 'Quantity',
    'p.instock': 'In Stock — Ships in 24 hours',

    // Tabs
    'tab.desc': 'Description',
    'tab.benefits': 'Benefits',
    'tab.usage': 'Usage',
    'tab.ingredients': 'Ingredients',
    'tab.shipping': 'Shipping',
    'tab.fbt': 'Frequently Bought Together',
    'tab.reviews': 'Customer Reviews',

    // Cart
    'cart.title': 'Your Bag',
    'cart.empty': 'Your bag is currently empty.',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.free': 'Free',
    'cart.tax': 'Tax',
    'cart.total': 'Total',
    'cart.checkout': 'Checkout',
    'cart.continue': 'Continue Shopping',
    'cart.remove': 'Remove',
    'cart.discount': 'Discount code',
    'cart.apply': 'Apply',
    'cart.upsell.title': 'Complete your ritual',
    'cart.upsell.desc': 'Add BAC Water 3mL for reconstitution — required for use.',
    'cart.upsell.add': 'Add BAC Water',

    // Checkout
    'co.contact': 'Contact',
    'co.shipping': 'Shipping',
    'co.payment': 'Payment',
    'co.confirm': 'Confirmation',
    'co.email': 'Email address',
    'co.first': 'First name',
    'co.last': 'Last name',
    'co.address': 'Address',
    'co.city': 'City',
    'co.zip': 'Postal code',
    'co.country': 'Country',
    'co.card': 'Card number',
    'co.expiry': 'MM / YY',
    'co.cvc': 'CVC',
    'co.place': 'Place Order',
    'co.summary': 'Order summary',

    // Newsletter
    'nl.title': 'Join the PureGlow Circle',
    'nl.sub': 'Sign up for 10% off your first order and early access to new drops.',
    'nl.placeholder': 'Your email address',
    'nl.cta': 'Unlock 10% Off',
    'nl.thanks': 'Welcome — check your inbox.',

    // Footer
    'f.shop': 'Shop',
    'f.about': 'About',
    'f.help': 'Help',
    'f.newsletter': 'Newsletter',
    'f.newsletter.sub': 'Rituals, science and early access delivered monthly.',
    'f.privacy': 'Privacy Policy',
    'f.terms': 'Terms of Service',
    'f.rights': '© 2026 PureGlow. All rights reserved.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.sub': 'Everything you need to know about our peptides, shipping and process.',

    // Cookies
    'cookie.text': 'We use cookies to elevate your experience. By continuing you agree to our privacy policy.',
    'cookie.accept': 'Accept',

    // Toasts
    'toast.added': 'Added to your bag',
    'toast.removed': 'Removed from bag',
    'toast.wishlist.add': 'Added to wishlist',
    'toast.wishlist.remove': 'Removed from wishlist',
    'toast.discount.ok': 'Discount applied',
    'toast.discount.bad': 'Invalid discount code',
    'toast.subscribed': 'Subscribed — thank you',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.shop': 'Tienda',
    'nav.about': 'Nosotros',
    'nav.testimonials': 'Testimonios',
    'nav.faq': 'Preguntas',
    'nav.contact': 'Contacto',
    'nav.blog': 'Blog',
    'nav.quiz': 'Encuentra tu Protocolo',
    'nav.account': 'Cuenta',
    'nav.wishlist': 'Favoritos',
    'nav.cart': 'Carrito',

    'hero.eyebrow': 'Ciencia Peptídica Premium',
    'hero.title': 'Eleva tu <em>ritual de bienestar</em>',
    'hero.sub': 'Resultados respaldados por la ciencia. Pureza que puedes sentir. Tu glow, cada día.',
    'hero.cta1': 'Ver Colección',
    'hero.cta2': 'Tu Protocolo',

    'featured.eyebrow': 'Más Vendidos',
    'featured.title': 'Los Esenciales',
    'featured.sub': 'Tres formulaciones. Posibilidades infinitas. Descubre los péptidos que miles de mujeres eligen.',
    'why.eyebrow': 'Por Qué PureGlow',
    'why.title': 'Estándares sin compromiso',
    'why.q': 'Resultados Respaldados por la Ciencia',
    'why.q.d': 'Cada fórmula probada y validada en laboratorios independientes.',
    'why.l': 'Pureza que Puedes Sentir',
    'why.l.d': 'Cada lote verificado en pureza, potencia y seguridad.',
    'why.p': 'Calidad Clínica',
    'why.p.d': 'Pureza garantizada del 99%+ en toda nuestra colección.',
    'why.s': 'Envío Rápido y Discreto',
    'why.s.d': 'Entrega discreta en 2-3 días con embalaje refrigerado.',
    'why.t': 'Confianza de Miles',
    'why.t.d': 'Elegido por más de 25.000 clientes en 40 países.',
    'why.c': 'Pago Seguro',
    'why.c.d': 'Pagos cifrados SSL y garantía de satisfacción total.',

    'life.eyebrow': 'La Filosofía PureGlow',
    'life.title': 'La belleza comienza <em>desde dentro</em>.',
    'life.sub': 'La elegancia verdadera es un ritual. Cada gota, cada dosis, cada momento — diseñado para honrar a la mujer extraordinaria que ya eres.',
    'life.cta': 'Nuestra Historia',

    'bundles.eyebrow': 'Sets Seleccionados',
    'bundles.title': 'La Edición Bundle',
    'bundles.sub': 'Ahorra más al construir tu protocolo completo.',
    'bundle.save': 'Ahorra',
    'bundle.b1': 'Dúo Piel Radiante',
    'bundle.b1.d': 'GHK-Cu 50mg + BAC Water 3mL',
    'bundle.b2': 'Dúo Reset Metabólico',
    'bundle.b2.d': 'Retatrutide 10mg + BAC Water 3mL',
    'bundle.b3': 'Wellness Completo',
    'bundle.b3.d': 'GHK-Cu + Retatrutide + BAC Water',

    'quiz.eyebrow': 'Personalizado Para Ti',
    'quiz.title': 'Encuentra tu <em>protocolo perfecto</em>',
    'quiz.sub': 'Un quiz de 60 segundos para descubrir qué péptidos se alinean con tus objetivos.',
    'quiz.cta': 'Hacer el Quiz',

    'testi.eyebrow': 'Amado por Miles',
    'testi.title': 'Personas reales. Resultados reales.',

    'social.eyebrow': '@pureglow_col',
    'social.title': 'Sigue el ritual',

    'p.ghkcu.name': 'GHK-Cu 50mg',
    'p.ghkcu.tag': 'Esencial Piel y Cabello',
    'p.ghkcu.desc': 'Péptido de cobre premium para una piel radiante, cabello sano y renovación celular.',
    'p.reta.name': 'Retatrutide 10mg',
    'p.reta.tag': 'Bienestar Metabólico',
    'p.reta.desc': 'Péptido metabólico avanzado para composición corporal y bienestar.',
    'p.bac.name': 'BAC Water 3mL',
    'p.bac.tag': 'Reconstitución Estéril',
    'p.bac.desc': 'Agua bacteriostática estéril para reconstitución en laboratorio.',

    'p.add': 'Añadir al Carrito',
    'p.buy': 'Comprar Ahora',
    'p.quick': 'Vista Rápida',
    'p.onetime': 'Compra Única',
    'p.sub': 'Suscríbete y Ahorra 15%',
    'p.subprice': 'por envío',
    'p.freq': 'Envío cada',
    'p.freq30': '30 días',
    'p.freq60': '60 días',
    'p.freq90': '90 días',
    'p.qty': 'Cantidad',
    'p.instock': 'En Stock — Envío en 24h',

    'tab.desc': 'Descripción',
    'tab.benefits': 'Beneficios',
    'tab.usage': 'Uso',
    'tab.ingredients': 'Ingredientes',
    'tab.shipping': 'Envío',
    'tab.fbt': 'Comprado Junto',
    'tab.reviews': 'Reseñas',

    'cart.title': 'Tu Bolsa',
    'cart.empty': 'Tu bolsa está vacía.',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Envío',
    'cart.free': 'Gratis',
    'cart.tax': 'IVA',
    'cart.total': 'Total',
    'cart.checkout': 'Finalizar Compra',
    'cart.continue': 'Seguir Comprando',
    'cart.remove': 'Eliminar',
    'cart.discount': 'Código de descuento',
    'cart.apply': 'Aplicar',
    'cart.upsell.title': 'Completa tu ritual',
    'cart.upsell.desc': 'Añade BAC Water 3mL para reconstitución — necesario para el uso.',
    'cart.upsell.add': 'Añadir BAC Water',

    'co.contact': 'Contacto',
    'co.shipping': 'Envío',
    'co.payment': 'Pago',
    'co.confirm': 'Confirmación',
    'co.email': 'Correo electrónico',
    'co.first': 'Nombre',
    'co.last': 'Apellido',
    'co.address': 'Dirección',
    'co.city': 'Ciudad',
    'co.zip': 'Código postal',
    'co.country': 'País',
    'co.card': 'Número de tarjeta',
    'co.expiry': 'MM / AA',
    'co.cvc': 'CVC',
    'co.place': 'Realizar Pedido',
    'co.summary': 'Resumen del pedido',

    'nl.title': 'Únete al Círculo PureGlow',
    'nl.sub': 'Regístrate y obtén 10% en tu primer pedido más acceso anticipado.',
    'nl.placeholder': 'Tu correo electrónico',
    'nl.cta': 'Obtener 10%',
    'nl.thanks': 'Bienvenida — revisa tu correo.',

    'f.shop': 'Tienda',
    'f.about': 'Nosotros',
    'f.help': 'Ayuda',
    'f.newsletter': 'Newsletter',
    'f.newsletter.sub': 'Rituales, ciencia y acceso anticipado cada mes.',
    'f.privacy': 'Política de Privacidad',
    'f.terms': 'Términos de Servicio',
    'f.rights': '© 2026 PureGlow. Todos los derechos reservados.',

    'faq.title': 'Preguntas Frecuentes',
    'faq.sub': 'Todo lo que necesitas saber sobre nuestros péptidos, envíos y procesos.',

    'cookie.text': 'Usamos cookies para elevar tu experiencia. Al continuar aceptas nuestra política.',
    'cookie.accept': 'Aceptar',

    'toast.added': 'Añadido a la bolsa',
    'toast.removed': 'Eliminado de la bolsa',
    'toast.wishlist.add': 'Añadido a favoritos',
    'toast.wishlist.remove': 'Eliminado de favoritos',
    'toast.discount.ok': 'Descuento aplicado',
    'toast.discount.bad': 'Código no válido',
    'toast.subscribed': 'Suscrita — gracias',
  }
};

const faqData = {
  en: [
    { q: 'What are peptides?', a: 'Peptides are short chains of amino acids that act as signaling molecules in the body. They can support skin health, hair regeneration, metabolic function and overall wellness.' },
    { q: 'How long until I see results?', a: 'Most customers report noticeable results within 4–8 weeks of consistent use. Individual results vary based on lifestyle, dose and protocol.' },
    { q: 'Are your peptides third-party tested?', a: 'Yes. Every single batch is independently tested for purity (99%+), potency and sterility. Certificates of Analysis are available on request.' },
    { q: 'How are the products shipped?', a: 'All products ship in insulated, temperature-controlled packaging with cold packs to preserve peptide integrity. Standard delivery is 2–3 business days.' },
    { q: 'Do you offer subscriptions?', a: 'Yes. Subscribe & Save gives you 15% off every delivery, plus the flexibility to pause, skip or cancel anytime from your account.' },
    { q: 'What is your return policy?', a: 'Due to the nature of the products we do not accept returns of opened items. Unopened, unused products may be returned within 14 days.' },
    { q: 'Do you ship internationally?', a: 'We currently ship to 40+ countries. Shipping costs and delivery times are calculated at checkout based on destination.' },
    { q: 'How should I store peptides?', a: 'Store unreconstituted vials in a cool, dark place. After reconstitution with BAC water, refrigerate at 2–8°C and use within 30 days.' },
    { q: 'Are peptides safe?', a: 'When sourced from reputable labs and used correctly, peptides have an excellent safety profile. Always consult a qualified healthcare professional before starting any new protocol.' },
    { q: 'Do I need BAC water?', a: 'Yes. Bacteriostatic water is required to reconstitute lyophilized peptides. We recommend adding a 3mL vial to every peptide order.' },
  ],
  es: [
    { q: '¿Qué son los péptidos?', a: 'Los péptidos son cadenas cortas de aminoácidos que actúan como moléculas de señalización en el cuerpo. Pueden apoyar la salud de la piel, la regeneración del cabello, la función metabólica y el bienestar general.' },
    { q: '¿Cuánto tardaré en ver resultados?', a: 'La mayoría de clientas notan resultados visibles entre 4–8 semanas de uso constante. Los resultados individuales varían según estilo de vida, dosis y protocolo.' },
    { q: '¿Vuestros péptidos están testados por terceros?', a: 'Sí. Cada lote se testa de forma independiente en pureza (99%+), potencia y esterilidad. Los certificados de análisis están disponibles bajo petición.' },
    { q: '¿Cómo se envían los productos?', a: 'Todos los productos se envían en embalaje aislado con control de temperatura y bloques fríos para preservar la integridad. Envío estándar 2–3 días laborales.' },
    { q: '¿Ofrecéis suscripción?', a: 'Sí. Suscríbete y Ahorra te da 15% de descuento en cada envío, con flexibilidad para pausar, saltar o cancelar cuando quieras desde tu cuenta.' },
    { q: '¿Cuál es la política de devoluciones?', a: 'Por la naturaleza del producto no aceptamos devoluciones de artículos abiertos. Los productos sin abrir pueden devolverse en un plazo de 14 días.' },
    { q: '¿Enviáis internacionalmente?', a: 'Actualmente enviamos a más de 40 países. Los costes y tiempos de envío se calculan en el checkout según el destino.' },
    { q: '¿Cómo debo almacenar los péptidos?', a: 'Guarda los viales sin reconstituir en un lugar fresco y oscuro. Tras reconstituir con BAC water, refrigera a 2–8°C y usa en 30 días.' },
    { q: '¿Son seguros los péptidos?', a: 'Cuando provienen de laboratorios de confianza y se usan correctamente, los péptidos tienen un excelente perfil de seguridad. Consulta siempre con un profesional sanitario.' },
    { q: '¿Necesito BAC water?', a: 'Sí. El agua bacteriostática es necesaria para reconstituir péptidos liofilizados. Recomendamos añadir un vial de 3mL a cada pedido.' },
  ]
};

const testimonialsData = {
  en: [
    { name: 'Carlos M.', meta: 'Retatrutide 10mg', stars: 5, photo: 'assets/images/testimonial-carlos.jpg', text: 'After 8 weeks on Retatrutide, my body composition changed completely. I feel sharper, stronger, and more confident. This is science that actually works.' },
    { name: 'Marco R.', meta: 'GHK-Cu 50mg', stars: 5, photo: 'assets/images/testimonial-marco.jpg', text: 'I was skeptical at first but the results speak for themselves. My skin texture improved noticeably and my recovery from training is so much better.' },
    { name: 'Valentina S.', meta: 'GHK-Cu 50mg', stars: 5, photo: 'assets/images/testimonial-valentina.jpg', text: 'My skin has never looked this good. The GHK-Cu changed my glow completely — friends keep asking what I am using. Pure science, pure results.' },
    { name: 'Ana L.', meta: 'GHK-Cu 50mg', stars: 5, photo: 'assets/images/testimonial-valentina.jpg', text: 'My hair thickness has genuinely transformed. I recommend this to everyone I know.' },
    { name: 'Sofia R.', meta: 'Retatrutide 10mg', stars: 5, photo: 'assets/images/testimonial-carlos.jpg', text: 'The results have exceeded every expectation. PureGlow is now a non-negotiable part of my wellness routine.' },
  ],
  es: [
    { name: 'Carlos M.', meta: 'Retatrutide 10mg', stars: 5, photo: 'assets/images/testimonial-carlos.jpg', text: 'Después de 8 semanas con Retatrutide, mi composición corporal cambió por completo. Me siento más fuerte, más lúcido y con más confianza. Esto es ciencia que funciona.' },
    { name: 'Marco R.', meta: 'GHK-Cu 50mg', stars: 5, photo: 'assets/images/testimonial-marco.jpg', text: 'Al principio era escéptico, pero los resultados hablan por sí mismos. La textura de mi piel mejoró notablemente y mi recuperación tras entrenar es mucho mejor.' },
    { name: 'Valentina S.', meta: 'GHK-Cu 50mg', stars: 5, photo: 'assets/images/testimonial-valentina.jpg', text: 'Mi piel nunca se ha visto tan bien. El GHK-Cu cambió mi glow completamente — mis amigos me preguntan qué estoy usando. Ciencia pura, resultados puros.' },
    { name: 'Ana L.', meta: 'GHK-Cu 50mg', stars: 5, photo: 'assets/images/testimonial-valentina.jpg', text: 'El grosor de mi cabello se ha transformado genuinamente. Se lo recomiendo a todos los que conozco.' },
    { name: 'Sofia R.', meta: 'Retatrutide 10mg', stars: 5, photo: 'assets/images/testimonial-carlos.jpg', text: 'Los resultados han superado todas las expectativas. PureGlow es ahora parte imprescindible de mi rutina.' },
  ]
};

const quizData = {
  en: {
    questions: [
      { q: 'What is your primary wellness goal?', options: [
        { text: 'Radiant, youthful skin', tag: 'skin' },
        { text: 'Metabolic wellness & body composition', tag: 'metabolic' },
        { text: 'Hair thickness & regeneration', tag: 'skin' },
        { text: 'Overall longevity & vitality', tag: 'both' }
      ]},
      { q: 'What are your main skin concerns?', options: [
        { text: 'Fine lines & elasticity', tag: 'skin' },
        { text: 'Dullness & uneven tone', tag: 'skin' },
        { text: 'None — I focus on wellness', tag: 'metabolic' },
        { text: 'All of the above', tag: 'both' }
      ]},
      { q: 'What is your wellness focus right now?', options: [
        { text: 'Beauty from within', tag: 'skin' },
        { text: 'Energy & metabolism', tag: 'metabolic' },
        { text: 'Complete transformation', tag: 'both' },
        { text: 'Maintenance & prevention', tag: 'skin' }
      ]},
      { q: 'What is your experience with peptides?', options: [
        { text: 'Brand new to peptides', tag: 'skin' },
        { text: 'Some experience', tag: 'both' },
        { text: 'Advanced user', tag: 'metabolic' },
        { text: 'I have used them for years', tag: 'both' }
      ]},
      { q: 'How would you describe your lifestyle?', options: [
        { text: 'Active & health-focused', tag: 'metabolic' },
        { text: 'Beauty & self-care oriented', tag: 'skin' },
        { text: 'Balanced across everything', tag: 'both' },
        { text: 'Ready for a reset', tag: 'both' }
      ]}
    ],
    results: {
      skin: { title: 'Your Protocol: Radiant Skin', desc: 'Based on your answers, GHK-Cu 50mg is your perfect match. This copper peptide is designed for luminous skin, thicker hair and cellular renewal.', product: 'ghkcu' },
      metabolic: { title: 'Your Protocol: Metabolic Wellness', desc: 'Retatrutide 10mg is your ideal choice. This advanced peptide supports metabolic function, body composition and sustained energy.', product: 'reta' },
      both: { title: 'Your Protocol: Complete Wellness', desc: 'You are ready for the full experience. Our Complete Wellness Bundle combines GHK-Cu, Retatrutide and BAC Water — save $14.98.', product: 'bundle3' }
    }
  },
  es: {
    questions: [
      { q: '¿Cuál es tu objetivo principal de bienestar?', options: [
        { text: 'Piel radiante y juvenil', tag: 'skin' },
        { text: 'Bienestar metabólico y composición corporal', tag: 'metabolic' },
        { text: 'Grosor y regeneración del cabello', tag: 'skin' },
        { text: 'Longevidad y vitalidad general', tag: 'both' }
      ]},
      { q: '¿Cuáles son tus preocupaciones de piel?', options: [
        { text: 'Líneas finas y elasticidad', tag: 'skin' },
        { text: 'Opacidad y tono desigual', tag: 'skin' },
        { text: 'Ninguna — me centro en bienestar', tag: 'metabolic' },
        { text: 'Todas las anteriores', tag: 'both' }
      ]},
      { q: '¿Cuál es tu enfoque de bienestar ahora?', options: [
        { text: 'Belleza desde dentro', tag: 'skin' },
        { text: 'Energía y metabolismo', tag: 'metabolic' },
        { text: 'Transformación completa', tag: 'both' },
        { text: 'Mantenimiento y prevención', tag: 'skin' }
      ]},
      { q: '¿Cuál es tu experiencia con péptidos?', options: [
        { text: 'Nueva en péptidos', tag: 'skin' },
        { text: 'Algo de experiencia', tag: 'both' },
        { text: 'Usuaria avanzada', tag: 'metabolic' },
        { text: 'Los uso desde hace años', tag: 'both' }
      ]},
      { q: '¿Cómo describirías tu estilo de vida?', options: [
        { text: 'Activo y saludable', tag: 'metabolic' },
        { text: 'Belleza y autocuidado', tag: 'skin' },
        { text: 'Equilibrado en todo', tag: 'both' },
        { text: 'Lista para un reset', tag: 'both' }
      ]}
    ],
    results: {
      skin: { title: 'Tu Protocolo: Piel Radiante', desc: 'Basado en tus respuestas, GHK-Cu 50mg es tu match perfecto. Este péptido de cobre está diseñado para piel luminosa, cabello más grueso y renovación celular.', product: 'ghkcu' },
      metabolic: { title: 'Tu Protocolo: Bienestar Metabólico', desc: 'Retatrutide 10mg es tu elección ideal. Este péptido avanzado apoya la función metabólica, la composición corporal y la energía sostenida.', product: 'reta' },
      both: { title: 'Tu Protocolo: Wellness Completo', desc: 'Estás lista para la experiencia completa. Nuestro Bundle Wellness Completo combina GHK-Cu, Retatrutide y BAC Water — ahorra $14.98.', product: 'bundle3' }
    }
  }
};

if (typeof window !== 'undefined') {
  window.translations = translations;
  window.faqData = faqData;
  window.testimonialsData = testimonialsData;
  window.quizData = quizData;
}
