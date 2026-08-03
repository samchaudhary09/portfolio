/* ==========================================================================
   Aarav.dev — Portfolio JavaScript
   Stack: Vanilla JS (no libraries)
   Modules: Loader → Particles → Cursor → Spotlight → Progress → Navbar →
            Hamburger → Typing → Scroll Spy → Reveal → Parallax → Tilt →
            Magnetic → Ripple → Counters → Skill Bars → Timeline → Form →
            Back-to-Top → Developer Data
   All scroll-driven work uses requestAnimationFrame throttling for 60fps.
   ========================================================================== */

/* =======================================================
   CHANGE YOUR PERSONAL DETAILS HERE
   Edit only this object to update the whole portfolio.
   ======================================================= */
const DEVELOPER_CONFIG = {
  name: 'Sumeet Malik',
  brand: 'Sam.dev',
  title: 'Full Stack Web Developer | WordPress Developer | Frontend Developer',
  role: 'Website Developer',
  tagline: 'Building modern, responsive and high-performance websites with beautiful user experiences and scalable web technologies.',
  location: 'Dehradun, Uttarakhand, India',
  email: 'sumeetchaudhary928@gmail.com',
  phone: '+91 9119700775',
  website: 'https://samchaudhary09.github.io/portfolio/',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  experience: '2+ Years',
  education: 'BCA — Bachelor of Computer Applications',
  languages: 'English, Hindi',
  resumePDF: 'Sumeet_Malik_Resume.pdf',
  resumeDOCX: 'Sumeet_Malik_Resume.docx',
  /* WhatsApp — wa.me link built from the number (digits only, country code) */
  whatsapp: 'https://wa.me/919119700775',
  /* Prefilled WhatsApp message used by the chat bot quick replies */
  whatsappGreeting: 'Hi Sumeet! I found your portfolio and I\'d like to discuss a project.',
  /* Contact form delivery — FormSubmit.co forwards submissions to the email
     below. First submission triggers a one-time activation email from
     FormSubmit; after that every message lands directly in the inbox. */
  formEndpoint: 'https://formsubmit.co/ajax/sumeetchaudhary928@gmail.com',
  /* Quick replies shown in the chat bot (open WhatsApp with prefilled text) */
  quickReplies: [
    { label: '💼 Business website', text: 'Hi Sumeet! I need a professional business website for my company.' },
    { label: '🛒 WooCommerce store', text: 'Hi Sumeet! I need an e-commerce / WooCommerce store built.' },
    { label: '🚀 Landing page', text: 'Hi Sumeet! I need a high-converting landing page for my campaign.' },
    { label: '🎨 Website redesign', text: 'Hi Sumeet! I need help redesigning my existing website.' },
    { label: '⚡ Speed optimization', text: 'Hi Sumeet! My website is slow — can you optimize its speed and SEO?' },
    { label: '🔧 Maintenance & support', text: 'Hi Sumeet! I need ongoing website maintenance and support.' },
    { label: '💰 Pricing & timeline', text: 'Hi Sumeet! Could you share your pricing and how long a website takes?' },
    { label: '👋 Just saying hi', text: 'Hi Sumeet! Just saying hi — love your work!' },
  ],
  /* Bot follow-up message after the visitor types a query */
  chatThanks: 'Thanks! I\'ve opened WhatsApp with your message — just hit send there and it comes straight to my phone. You can also email me anytime. 🚀',
  /* Roles cycled by the hero typing animation */
  typedRoles: [
    'Full Stack Web Developer',
    'WordPress Developer',
    'Frontend Developer',
    'Freelancer',
  ],
  /* Stats rendered in the hero strip (value is shown as-is) */
  heroStats: [
    { value: '2+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Built' },
    { value: '15+', label: 'Happy Clients' },
  ],
  /* Stats rendered in the About section (numeric counters) */
  aboutStats: [
    { value: 2, suffix: '+', label: 'Years Experience' },
    { value: 30, suffix: '+', label: 'Projects Completed' },
    { value: 15, suffix: '+', label: 'Happy Clients' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' },
  ],
};

/* =======================================================
   PROJECT DATA — used by the dedicated project detail
   pages (project.html?project=<slug>)
   ======================================================= */
const PROJECTS = [
  {
    slug: 'hp-printer-ecommerce',
    title: 'HP Inspired Printer E-Commerce Website',
    category: 'E-Commerce',
    tagline: 'A complete WooCommerce storefront for printer products — clean catalog, smooth cart and seamless checkout.',
    overview: [
      'A full e-commerce build inspired by HP\'s printer lineup. The store ships with a polished WooCommerce catalog, category filters, product search and a conversion-focused checkout flow.',
      'Custom Elementor layouts keep the storefront pixel-perfect while backend work covers inventory, coupons, shipping zones and order management.',
      'Performance was a priority from day one — Core Web Vitals and Lighthouse scores stay above 90 on desktop and mobile.',
    ],
    features: [
      'WooCommerce product catalog with filters & search',
      'Payment gateway integration',
      'Cart, coupons and order management',
      'Core Web Vitals & Lighthouse 90+',
      'Fully responsive storefront',
    ],
    stack: {
      Frontend: ['HTML5', 'CSS3', 'JavaScript', 'Elementor Pro'],
      Backend: ['PHP', 'WooCommerce', 'MySQL'],
      'Deployment & Ops': ['cPanel', 'Cloudflare', 'SSL'],
    },
    tech: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Elementor'],
    colors: ['#00D4FF', '#7B61FF'],
    demo: '#',
    github: '#',
  },
  {
    slug: 'epson-inspired-business',
    title: 'Epson Inspired Business Website',
    category: 'Corporate',
    tagline: 'A corporate business site for an Epson-inspired brand — product showcase, services and lead generation.',
    overview: [
      'A corporate website built to represent a printer/imaging brand with credibility. Clean product showcase sections, service pages and dedicated lead-generation forms.',
      'The site is structured for search from the start — semantic markup, Rank Math SEO and optimized metadata drive organic visibility.',
      'A fast, maintainable WordPress build with custom Elementor layouts means the client can update content without a developer.',
    ],
    features: [
      'Product & service showcase sections',
      'Lead generation forms',
      'Technical SEO with Rank Math',
      'Custom Elementor layouts',
      'SSL, DNS & Cloudflare setup',
    ],
    stack: {
      Frontend: ['HTML5', 'CSS3', 'JavaScript', 'Elementor Pro'],
      Backend: ['PHP', 'WordPress'],
      'Deployment & Ops': ['cPanel', 'Cloudflare', 'SSL', 'Rank Math SEO'],
    },
    tech: ['WordPress', 'Elementor Pro', 'Rank Math SEO', 'PHP'],
    colors: ['#FFC371', '#FF5F6D'],
    demo: '#',
    github: '#',
  },
  {
    slug: 'woocommerce-online-store',
    title: 'WooCommerce Online Store',
    category: 'Online Store',
    tagline: 'A full online store for a retail client — inventory, orders, coupons and a frictionless checkout flow.',
    overview: [
      'End-to-end online store for a retail business: product import, inventory management, order workflows and a checkout that just works.',
      'Built on WooCommerce with custom Elementor templates, the store handles coupons, promotions and shipping rules out of the box.',
      'Cloudflare CDN and aggressive caching push page loads under a second even with dozens of products and images.',
    ],
    features: [
      'Inventory & order management',
      'Coupons & promotions',
      'Cloudflare CDN + caching',
      'Payment gateway integration',
      '90+ PageSpeed scores',
    ],
    stack: {
      Frontend: ['HTML5', 'CSS3', 'Elementor Pro'],
      Backend: ['PHP', 'WooCommerce', 'MySQL'],
      'Deployment & Ops': ['cPanel', 'Cloudflare', 'SSL'],
    },
    tech: ['WooCommerce', 'MySQL', 'Cloudflare', 'PHP'],
    colors: ['#FF5F6D', '#FFC371'],
    demo: '#',
    github: '#',
  },
  {
    slug: 'corporate-business-website',
    title: 'Corporate Business Website',
    category: 'Corporate',
    tagline: 'A premium corporate website with company profile, team, services and contact — fully responsive.',
    overview: [
      'A polished corporate website designed to build trust: company profile, team, services, testimonials-style sections and a fully integrated contact system.',
      'Custom Elementor layouts give every page a unique, premium feel while keeping the site lightning fast to manage.',
      'Handled SSL configuration, DNS management and Cloudflare setup as part of the launch — plus a 95+ PageSpeed result on mobile.',
    ],
    features: [
      'Custom Elementor layouts',
      'Team, services & contact pages',
      'SSL & DNS management',
      '95+ PageSpeed scores',
      'Daily backups & security',
    ],
    stack: {
      Frontend: ['HTML5', 'CSS3', 'JavaScript', 'Elementor Pro'],
      Backend: ['PHP', 'WordPress'],
      'Deployment & Ops': ['cPanel', 'Cloudflare', 'SSL'],
    },
    tech: ['WordPress', 'PHP', 'Elementor Pro', 'cPanel'],
    colors: ['#7B61FF', '#8B5CF6'],
    demo: '#',
    github: '#',
  },
  {
    slug: 'react-saas-dashboard',
    title: 'React SaaS Dashboard',
    category: 'Web App',
    tagline: 'A modern SaaS dashboard with analytics charts, a clean dark UI and robust REST API integration.',
    overview: [
      'A React-based SaaS dashboard giving users real-time analytics at a glance — interactive charts, filters and role-based views.',
      'The frontend talks to a Node.js/Express API with JWT authentication, live data endpoints and clean error handling.',
      'Built with TypeScript and Tailwind CSS, the UI is component-driven, accessible and fully responsive from mobile to 4K.',
    ],
    features: [
      'REST API integration',
      'Interactive data charts',
      'JWT authentication',
      'Responsive dark UI',
      'TypeScript type safety',
    ],
    stack: {
      Frontend: ['React.js', 'TypeScript', 'Tailwind CSS'],
      Backend: ['Node.js', 'Express.js', 'MongoDB'],
      'Deployment & Ops': ['Vercel', 'Git', 'npm'],
    },
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    colors: ['#14F195', '#00D4FF'],
    demo: '#',
    github: '#',
  },
  {
    slug: 'ai-powered-portfolio',
    title: 'AI Powered Portfolio Website',
    category: 'AI Powered',
    tagline: 'This very portfolio — an AI-assisted build with premium animations, glassmorphism and config-driven content.',
    overview: [
      'Built with heavy AI assistance: prompt-engineered components, AI-generated copy and AI-assisted debugging — all reviewed and polished by a human.',
      'The architecture is fully config-driven — one config object powers every section, the resume buttons, SEO meta tags and even the JSON-LD schema.',
      'Premium touches include multi-layer parallax, glassmorphism cards, a custom cursor, particle canvas and a smooth light/dark mode.',
    ],
    features: [
      'AI-assisted development',
      'Prompt-engineered content',
      'Config-driven architecture',
      'Multi-layer parallax & particles',
      'Light / dark mode',
    ],
    stack: {
      Frontend: ['HTML5', 'CSS3', 'JavaScript'],
      'AI Tools': ['Prompt Engineering', 'AI-assisted coding', 'AI review'],
      'Deployment & Ops': ['Vercel', 'Git', 'npm'],
    },
    tech: ['HTML5', 'CSS3', 'JavaScript', 'AI Tools'],
    colors: ['#8B5CF6', '#7B61FF'],
    demo: '#',
    github: '#',
  },
];

/* Expose globally so any part of the page can read the config */
window.SITE_CONFIG = DEVELOPER_CONFIG;
window.SITE_PROJECTS = PROJECTS;

(() => {
  'use strict';

  /* Small helper: clamp a number between min and max */
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  /* Throttle helper — runs fn at most once per frame */
  const onFrame = (() => {
    let ticking = false;
    const queue = new Set();
    const tick = () => {
      queue.forEach((fn) => fn());
      queue.clear();
      ticking = false;
    };
    return (fn) => {
      queue.add(fn);
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(tick);
      }
    };
  })();

  /* Debounce helper for resize handlers */
  const debounce = (fn, wait = 150) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  };

  /* Detect touch devices — disable cursor/spotlight/parallax there */
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  /* =========================================================================
     1. PAGE LOADER — entrance animation
     ======================================================================== */
  window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.add('loaded');
        // Start entrance reveal of hero elements
        document.querySelectorAll('.hero .fade-up').forEach((el, i) => {
          setTimeout(() => el.classList.add('in-view'), 120 + i * 120);
        });
      }, 650);
    }
  });

  /* =========================================================================
     2. PARTICLE CANVAS — animated floating dots
     ======================================================================== */
  const initParticles = () => {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const colors = ['#7B61FF', '#00D4FF', '#FF5F6D', '#FFC371', '#14F195'];

    let width, height, particles = [];
    const COUNT = isTouch ? 26 : 55;
    let rafId = null;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const seed = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.2 + 0.6,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      rafId = requestAnimationFrame(draw);
    };

    /* Pause the loop when the tab is hidden (performance) */
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(draw);
      }
    });

    resize();
    draw();
    window.addEventListener('resize', debounce(resize));
  };

  /* =========================================================================
     3. CUSTOM CURSOR + 4. MOUSE SPOTLIGHT
     ======================================================================== */
  const initCursor = () => {
    if (isTouch) return;

    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    const spotlight = document.querySelector('.spotlight');

    document.body.classList.add('cursor-on');
    if (spotlight) setTimeout(() => spotlight.classList.add('visible'), 400);

    let mx = 0, my = 0;          // target position
    let rx = 0, ry = 0;          // ring (lerped) position
    let sx = 0, sy = 0;          // spotlight (lerped) position

    window.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      if (spotlight) spotlight.style.transform = `translate(${mx}px, ${my}px)`;
    });

    /* Ring trails behind — smooth lerp loop */
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      sx += (mx - sx) * 0.07;
      sy += (my - sy) * 0.07;
      if (ring) ring.style.transform = `translate(${rx}px, ${ry}px)`;
      if (spotlight) spotlight.style.transform = `translate(${sx}px, ${sy}px)`;
      requestAnimationFrame(loop);
    };
    loop();

    /* Grow ring over interactive elements */
    const interactive = 'a, button, .profile-card, input, textarea, .float-icon';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactive)) ring.classList.add('hover');
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactive)) ring.classList.remove('hover');
    });
  };

  /* =========================================================================
     5. SCROLL PROGRESS BAR + NAVBAR BEHAVIOUR
     ======================================================================== */
  const initScrollUI = () => {
    const navbar = document.getElementById('navbar');
    const progressBar = document.querySelector('.scroll-progress-bar');
    const docEl = document.documentElement;

    const update = () => {
      const scrollY = window.scrollY;

      /* Progress bar */
      const maxScroll = docEl.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
      if (progressBar) progressBar.style.width = `${progress}%`;

      /* Navbar glass state — the bar stays put; no show/hide flapping */
      if (scrollY > 40) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };

    window.addEventListener('scroll', () => {
      requestAnimationFrame(update);
    }, { passive: true });

    update();
  };

  /* =========================================================================
     6. HAMBURGER MENU
     ======================================================================== */
  const initMenu = () => {
    const burger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (!burger || !navLinks) return;

    const toggle = (open) => {
      burger.classList.toggle('active', open);
      navLinks.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
      document.body.classList.toggle('menu-open', open);
    };

    burger.addEventListener('click', () => {
      const isOpen = burger.classList.contains('active');
      toggle(!isOpen);
    });

    /* Close when a link is clicked */
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggle(false));
    });

    /* Close with Escape key */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggle(false);
    });
  };

  /* =========================================================================
     7. TYPING ANIMATION — cycles through roles from DEVELOPER_CONFIG
     ======================================================================== */
  const initTyping = () => {
    const el = document.getElementById('typed-text');
    if (!el) return;

    const words = (window.SITE_CONFIG && window.SITE_CONFIG.typedRoles.length)
      ? window.SITE_CONFIG.typedRoles
      : ['Full Stack Web Developer', 'WordPress Developer', 'Frontend Developer', 'Freelancer'];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const word = words[wordIndex];
      charIndex = deleting ? charIndex - 1 : charIndex + 1;
      el.textContent = word.slice(0, charIndex);

      let delay = deleting ? 45 : 95;

      if (!deleting && charIndex === word.length) {
        delay = 1700;                       // hold the full word
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 350;                        // pause before next word
      }
      setTimeout(tick, delay);
    };
    tick();
  };

  /* =========================================================================
     8. SCROLL SPY — highlights the active nav link
     ======================================================================== */
  const initScrollSpy = () => {
    const sections = [...document.querySelectorAll('main section[id]')];
    const links = [...document.querySelectorAll('.nav-link')];
    if (!sections.length || !links.length) return;

    const map = new Map(
      links.map((l) => {
        const href = l.getAttribute('href');
        return [href ? href.slice(1) : null, l];
      })
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove('active'));
            const link = map.get(entry.target.id);
            if (link) link.classList.add('active');
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
  };

  /* =========================================================================
     9. REVEAL ANIMATIONS — Intersection Observer, fade/scale up
     ======================================================================== */
  const initReveals = () => {
    const els = document.querySelectorAll('.fade-up');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
  };

  /* =========================================================================
     10. PARALLAX ENGINE — multi-layer scroll + mouse parallax
     ======================================================================== */
  const initParallax = () => {
    const layers = [...document.querySelectorAll('.parallax-layer')];
    if (!layers.length) return;

    /* Layer → depth mapping */
    const depth = {
      'layer-stars': 0.12,
      'layer-cubes': 0.25,
      'layer-glass': 0.35,
      'layer-waves': 0.18,
    };

    let scrollY = window.scrollY;
    let mx = 0.5, my = 0.5;        // normalized mouse pos
    let progress = 0;

    /* Scroll depth (0 → 1) across the whole page */
    const pageHeight = () => document.documentElement.scrollHeight - window.innerHeight;

    const render = () => {
      progress = pageHeight() > 0 ? scrollY / pageHeight() : 0;

      layers.forEach((layer) => {
        const d = depth[layer.classList[1]] || 0.2;
        const key = layer.className.split(' ').find((c) => c.startsWith('layer-'));

        if (key === 'layer-waves') {
          /* Waves stay pinned at the bottom of the hero */
          layer.style.transform = `translate3d(${(mx - 0.5) * -24}px, ${(my - 0.5) * -12}px, 0)`;
          return;
        }

        const translateY = (0.5 - progress) * 100 * d * 0.6;
        const translateX = (mx - 0.5) * 40 * d;
        layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });
    };

    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
      onFrame(render);
    }, { passive: true });

    /* Mouse-driven parallax (desktop only) */
    if (!isTouch) {
      window.addEventListener('mousemove', (e) => {
        mx = e.clientX / window.innerWidth;
        my = e.clientY / window.innerHeight;
        onFrame(render);
      });
    }

    /* Hero content micro-parallax */
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    if (heroContent && heroVisual) {
      const heroRender = () => {
        const heroEl = document.getElementById('home');
        if (!heroEl) return;
        const rect = heroEl.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        const offset = clamp(-center / rect.height, -0.35, 0.35);

        /* Text moves up faster than the visual → depth illusion */
        heroContent.style.transform = `translateY(${offset * 60}px)`;
        heroVisual.style.transform = `translateY(${offset * 30}px)`;
      };
      window.addEventListener('scroll', () => onFrame(heroRender), { passive: true });
      onFrame(heroRender);
    }

    render();
  };

  /* =========================================================================
     11. CARD TILT — 3D hover transform (desktop only)
     ======================================================================== */
  const initTilt = () => {
    if (isTouch) return;
    const cards = document.querySelectorAll('.tilt-card');

    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;   // 0..1
        const py = (e.clientY - rect.top) / rect.height;

        const rotateY = (px - 0.5) * 14;
        const rotateX = (0.5 - py) * 12;

        /* Snappy follow during movement */
        card.style.transition = 'transform 0.1s ease-out';
        card.style.transform =
          `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
      });

      card.addEventListener('mouseleave', () => {
        /* Smooth spring back on leave */
        card.style.transition = 'transform 0.5s var(--ease-bounce)';
        card.style.transform =
          'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        setTimeout(() => (card.style.transition = ''), 550);
      });
    });
  };

  /* =========================================================================
     12A. MAGNETIC ELEMENTS — buttons gently follow the cursor (desktop only)
     ======================================================================== */
  const initMagnetic = () => {
    if (isTouch) return;
    const els = document.querySelectorAll('.magnetic');
    if (!els.length) return;

    els.forEach((el) => {
      const strength = parseFloat(el.dataset.strength) || 0.35;

      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transition = 'transform 0.15s ease-out';
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transition = 'transform 0.5s var(--ease-bounce)';
        el.style.transform = 'translate(0, 0)';
        setTimeout(() => (el.style.transition = ''), 550);
      });
    });
  };

  /* =========================================================================
     12B. RIPPLE — click ripple on all .btn elements
     ======================================================================== */
  const initRipple = () => {
    const btns = document.querySelectorAll('.btn');
    if (!btns.length) return;

    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
      });
    });
  };

  /* =========================================================================
     15. COUNTER ANIMATION — animated statistics
     ======================================================================== */
  const initCounters = () => {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    /* easeOutCubic for a premium decelerating count */
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (el) => {
      const target = parseInt(el.dataset.target, 10) || 0;
      const duration = 1800;
      const start = performance.now();

      const step = (now) => {
        const elapsed = now - start;
        const progress = clamp(elapsed / duration, 0, 1);
        el.textContent = Math.round(ease(progress) * target);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
      };
      requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) {
      counters.forEach(animate);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => observer.observe(el));
  };

  /* =========================================================================
     16. SKILL BARS — animated width + percentage count
         NOTE: the .skill-fill starts at width:0, so it is observed via its
         .skill-bar parent (which has real width) — a zero-area target can
         never reach an intersectionRatio threshold. A forced reflow before
         setting the width guarantees the CSS transition actually plays.
     ======================================================================== */
  const initSkillBars = () => {
    const bars = document.querySelectorAll('.skill-bar');
    if (!bars.length) return;

    const reducedMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const fillBar = (bar) => {
      const fill = bar.querySelector('.skill-fill');
      if (!fill || fill.dataset.done) return;
      const target = parseInt(fill.dataset.progress, 10) || 0;

      /* Animate the percentage label next to each bar */
      const pct = bar.parentElement.querySelector('.skill-pct');
      const duration = 1400;
      const start = performance.now();

      const step = (now) => {
        const progress = clamp((now - start) / duration, 0, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        if (pct) pct.textContent = `${Math.round(eased * target)}%`;
        if (progress < 1) requestAnimationFrame(step);
        else if (pct) pct.textContent = `${target}%`;
      };

      /* Force the browser to flush the computed width:0 style first —
         without this the width assignment can skip the transition */
      void fill.getBoundingClientRect();

      if (reducedMotion) {
        fill.style.width = `${target}%`;
        if (pct) pct.textContent = `${target}%`;
      } else {
        requestAnimationFrame(step);
        fill.style.width = `${target}%`;
      }
      fill.dataset.done = '1';
    };

    if (!('IntersectionObserver' in window) || reducedMotion) {
      bars.forEach(fillBar);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fillBar(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    bars.forEach((el) => observer.observe(el));

    /* Safety net: bars already inside the viewport on load */
    const vh = window.innerHeight;
    bars.forEach((bar) => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) {
        observer.unobserve(bar);
        fillBar(bar);
      }
    });
  };

  /* =========================================================================
     17. TIMELINE — scroll-driven line fill + item reveals
     ======================================================================== */
  const initTimeline = () => {
    const timeline = document.getElementById('timeline');
    const progressEl = document.querySelector('.timeline-progress');
    if (!timeline) return;

    /* Reveal items with stagger */
    const items = timeline.querySelectorAll('.timeline-item');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in-view'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );
      items.forEach((el) => observer.observe(el));
    }

    /* Fill the line based on scroll position */
    if (!progressEl) return;
    const updateFill = () => {
      const rect = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      /* 0 when the timeline enters → 1 when its end passes the mid viewport */
      const progress = clamp((vh * 0.5 - rect.top) / (rect.height - vh * 0.5), 0, 1);
      progressEl.style.height = `${progress * 100}%`;
    };
    window.addEventListener('scroll', () => onFrame(updateFill), { passive: true });
    window.addEventListener('resize', debounce(updateFill));
    updateFill();
  };

  /* =========================================================================
     18. FORM VALIDATION + AJAX submission via FormSubmit.co
         Messages are delivered to DEVELOPER_CONFIG.formEndpoint (the
         site owner's inbox). First submission triggers a one-time
         activation email from FormSubmit — after that it just works.
     ======================================================================== */
  const initForm = () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const cfg = window.SITE_CONFIG || {};
    const endpoint = cfg.formEndpoint ||
      'https://formsubmit.co/ajax/sumeetchaudhary928@gmail.com';
    const success = document.getElementById('form-success');
    const error = document.getElementById('form-error');
    const button = form.querySelector('.btn-submit');

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const rules = [
      { id: 'form-name',    errorId: 'error-name',    test: (v) => v.trim().length >= 2 },
      { id: 'form-email',   errorId: 'error-email',   test: (v) => emailRe.test(v.trim()) },
      { id: 'form-subject', errorId: 'error-subject', test: (v) => v.trim().length >= 3 },
      { id: 'form-message', errorId: 'error-message', test: (v) => v.trim().length >= 10 },
    ];

    const showBanner = (banner, on) => {
      if (!banner) return;
      banner.classList.toggle('show', on);
    };

    const setButtonState = (state) => {
      if (!button) return;
      if (state === 'loading') {
        button.disabled = true;
        button.dataset.original = button.innerHTML;
        button.innerHTML = 'Sending...';
      } else {
        button.disabled = false;
        button.innerHTML = button.dataset.original || 'Send Message';
      }
    };

    const validateField = (rule) => {
      const input = document.getElementById(rule.id);
      const group = input.closest('.form-group');
      const valid = rule.test(input.value);
      group.classList.toggle('invalid', !valid);
      return valid;
    };

    /* Live re-validation while typing */
    rules.forEach((rule) => {
      const input = document.getElementById(rule.id);
      input.addEventListener('input', () => {
        if (input.closest('.form-group').classList.contains('invalid')) {
          validateField(rule);
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const allValid = rules.map(validateField).every(Boolean);
      if (!allValid) return;

      showBanner(error, false);
      showBanner(success, false);
      setButtonState('loading');

      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());
      /* Keep the message field label clean in the delivered email */
      payload._subject = `Portfolio message from ${payload.name} — ${payload.subject}`;
      payload._template = 'table';
      payload._captcha = 'false';
      /* Auto-reply goes to the visitor's inbox */
      payload._replyto = payload.email;

      /* Confirmation email — polite thank-you + a few promo lines */
      const cfgN = cfg.name || 'Sumeet Malik';
      const cfgB = cfg.brand || 'Sam.dev';
      payload._autoresponse = `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb;">
          <div style="background: linear-gradient(135deg, #7B61FF, #00D4FF); padding: 26px 30px; text-align: center;">
            <h1 style="margin: 0; color: #fff; font-size: 22px;">${cfgB} Studio</h1>
            <p style="margin: 6px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">Thank you for reaching out, ${payload.name}!</p>
          </div>
          <div style="padding: 28px 30px; color: #334155; font-size: 14px; line-height: 1.7;">
            <p style="margin: 0 0 14px;">Hi ${payload.name},</p>
            <p style="margin: 0 0 14px;">I've received your message and I'll get back to you within <strong>24 hours</strong>. Meanwhile, here's how I can help you grow:</p>
            <ul style="margin: 0 0 18px; padding-left: 20px;">
              <li>🏢 Business &amp; corporate websites that generate leads</li>
              <li>🛒 WooCommerce stores with a checkout that converts</li>
              <li>🚀 High-converting landing pages &amp; React frontends</li>
              <li>⚡ Speed optimization &amp; technical SEO (90+ PageSpeed)</li>
              <li>🔧 Ongoing maintenance, backups &amp; security</li>
            </ul>
            <p style="margin: 0 0 18px;">Want to talk faster? Reach me directly:</p>
            <div style="margin-bottom: 18px;">
              <a href="${cfg.whatsapp || 'https://wa.me/919119700775'}" style="display: inline-block; background: #25D366; color: #fff; text-decoration: none; padding: 11px 22px; border-radius: 999px; font-weight: 600; font-size: 13px; margin-right: 8px;">💬 Chat on WhatsApp</a>
              <a href="tel:${(cfg.phone || '').replace(/[^+\d]/g, '')}" style="display: inline-block; background: #334155; color: #fff; text-decoration: none; padding: 11px 22px; border-radius: 999px; font-weight: 600; font-size: 13px;">📞 ${cfg.phone || ''}</a>
            </div>
            <p style="margin: 0 0 18px;">Explore my work: <a href="${cfg.website || '#'}" style="color: #7B61FF; font-weight: 600;">${cfg.website || 'portfolio'}</a></p>
            <div style="border-top: 1px solid #e5e7eb; padding-top: 14px; color: #94a3b8; font-size: 12px;">
              ${cfgN} · ${cfg.location || ''} · Email: <a href="mailto:${cfg.email || ''}" style="color: #94a3b8;">${cfg.email || ''}</a>
            </div>
          </div>
        </div>`;

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then(() => {
          form.reset();
          setButtonState('idle');
          showBanner(success, true);
          setTimeout(() => showBanner(success, false), 6000);
          if (typeof window.islandStatus === 'function') {
            window.islandStatus('✅ Message sent — I\'ll reply within 24h');
          }
        })
        .catch(() => {
          setButtonState('idle');
          showBanner(error, true);
          setTimeout(() => showBanner(error, false), 8000);
          if (typeof window.islandStatus === 'function') {
            window.islandStatus('⚠️ Couldn\'t send — please try again');
          }
        });
    });
  };

  /* =========================================================================
     19. THEME TOGGLE — light / dark, persisted to localStorage
         The <head> inline script already applied the saved/system theme
         before CSS painted; here we only wire the button.
     ======================================================================== */
  const initThemeToggle = () => {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    const apply = (theme) => {
      document.documentElement.dataset.theme = theme;
      btn.setAttribute(
        'aria-label',
        theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
      );
    };

    const current = document.documentElement.dataset.theme || 'dark';
    apply(current);

    btn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      try { localStorage.setItem('sam-theme', next); } catch (err) { /* private mode */ }
      apply(next);
      if (typeof window.islandStatus === 'function') {
        window.islandStatus(next === 'light' ? '☀️ Light mode on' : '🌙 Dark mode on');
      }
    });
  };

  /* =========================================================================
     19A. CHAT BOT WIDGET — floating launcher with quick WhatsApp replies
     ======================================================================== */
  const initBotWidget = () => {
    const fab = document.getElementById('chat-fab');
    const card = document.getElementById('chat-card');
    if (!fab || !card) return;

    const cfg = window.SITE_CONFIG || {};
    const wa = cfg.whatsapp || 'https://wa.me/919119700775';
    const email = cfg.email || '';
    const phone = cfg.phone || '';

    /* Build quick replies from the config */
    const replies = document.getElementById('chat-replies');
    if (replies && Array.isArray(cfg.quickReplies)) {
      replies.innerHTML = cfg.quickReplies
        .map(
          (r) =>
            `<button type="button" class="chat-reply" data-text="${(r.text || '').replace(/"/g, '&quot;')}">${r.label}</button>`
        )
        .join('');
    }

    const openCard = (open) => {
      fab.classList.toggle('chat-open', open);
      card.classList.toggle('open', open);
      fab.setAttribute('aria-expanded', String(open));
    };

    fab.addEventListener('click', () => {
      const opening = !card.classList.contains('open');
      openCard(opening);
      if (opening && typeof window.islandStatus === 'function') {
        window.islandStatus('💬 Chat connected to WhatsApp');
      }
    });

    const closeBtn = document.getElementById('chat-close');
    if (closeBtn) closeBtn.addEventListener('click', () => openCard(false));

    /* Close with Escape */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') openCard(false);
    });

    /* Close when clicking outside */
    document.addEventListener('click', (e) => {
      if (card.classList.contains('open') &&
          !card.contains(e.target) && !fab.contains(e.target)) {
        openCard(false);
      }
    });

    /* Send a message to WhatsApp (opens chat with the query prefilled) */
    const sendToWhatsApp = (text) => {
      window.open(`${wa}?text=${encodeURIComponent(text)}`, '_blank');
    };

    const addUserBubble = (text) => {
      const bubble = document.createElement('div');
      bubble.className = 'chat-bubble chat-bubble-user';
      bubble.textContent = text;
      chatBody.appendChild(bubble);
      chatBody.scrollTop = chatBody.scrollHeight;
    };

    const addBotBubble = (text, delay = 450) => {
      setTimeout(() => {
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble chat-bubble-bot';
        bubble.innerHTML = text;
        chatBody.appendChild(bubble);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, delay);
    };

    /* Quick replies → WhatsApp chat with the prefilled message */
    card.addEventListener('click', (e) => {
      const reply = e.target.closest('.chat-reply');
      if (!reply) return;
      sendToWhatsApp(reply.dataset.text);
      addUserBubble(reply.dataset.text);
      addBotBubble(cfg.chatThanks || 'Thanks! Your message is on its way to my WhatsApp.');
      if (typeof window.islandStatus === 'function') {
        window.islandStatus('✈️ Sent — check WhatsApp');
      }
    });

    /* Free-text query input → WhatsApp + bot acknowledgement */
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');
    const chatBody = document.getElementById('chat-body');

    const sendQuery = () => {
      const text = input.value.trim();
      if (!text) return;
      sendToWhatsApp(text);
      addUserBubble(text);
      input.value = '';
      input.focus();
      addBotBubble(cfg.chatThanks || 'Thanks! Your message is on its way to my WhatsApp.');
      if (typeof window.islandStatus === 'function') {
        window.islandStatus('✈️ Sent — check WhatsApp');
      }
    };

    if (sendBtn) sendBtn.addEventListener('click', sendQuery);
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          sendQuery();
        }
      });
    }

    /* Action buttons (email / call / whatsapp) */
    const emailBtn = document.getElementById('chat-email');
    const callBtn = document.getElementById('chat-call');
    if (emailBtn && email) emailBtn.href = `mailto:${email}`;
    if (callBtn && phone) callBtn.href = `tel:${phone.replace(/[^+\d]/g, '')}`;

    const waBtn = document.getElementById('chat-whatsapp');
    if (waBtn) waBtn.href = `${wa}?text=${encodeURIComponent(cfg.whatsappGreeting || '')}`;
  };

  /* =========================================================================
     19C. DYNAMIC ISLAND WIDGET — mini live-activity pill for iOS
         Sits just below the notch / Dynamic Island, shows a live clock and
         expands with a status message on key interactions.
     ======================================================================== */
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  const initIslandWidget = () => {
    const widget = document.getElementById('island-widget');
    if (!widget) return;

    if (isIOS) document.documentElement.classList.add('ios');

    const clock = document.getElementById('island-clock');
    const msg = document.getElementById('island-msg');

    const updateClock = () => {
      if (!clock) return;
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      clock.textContent = `${hh}:${mm}`;
    };
    updateClock();
    setInterval(updateClock, 15000);

    let hideTimer = null;

    /* Expand the pill with a status message, then collapse back to the clock */
    const showStatus = (text, duration = 3200) => {
      if (!msg) return;
      msg.textContent = text;
      widget.classList.add('active');
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        widget.classList.remove('active');
        msg.textContent = 'Open to work · replies in 24h';
      }, duration);
    };

    /* Tap toggles the expansion manually */
    widget.addEventListener('click', () => {
      clearTimeout(hideTimer);
      widget.classList.toggle('active');
    });

    /* Mouse users: collapse when the pointer leaves the pill */
    widget.addEventListener('mouseleave', () => {
      widget.classList.remove('active');
    });

    /* Global hook for other modules (theme toggle, bot, form) */
    window.islandStatus = showStatus;
  };

  /* =========================================================================
     19B. PROJECT DETAIL PAGE — renders project.html?project=<slug>
     ======================================================================== */
  const initProjectPage = () => {
    const root = document.getElementById('project-detail');
    if (!root) return;

    const projects = window.SITE_PROJECTS || [];
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('project');
    const project = projects.find((p) => p.slug === slug);

    const render = (html, title) => {
      root.innerHTML = html;
      document.title = title;
      const meta = document.querySelector('meta[property="og:title"]');
      if (meta) meta.setAttribute('content', title);
      window.scrollTo({ top: 0 });
    };

    if (!project) {
      /* No/invalid slug → render the full projects listing so the page
         always works as a standalone "Projects" page */
      if (projects.length) {
        render(`
          <nav class="project-back" aria-label="Breadcrumb">
            <a href="index.html#home" class="project-back-link">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
              Back to Home
            </a>
          </nav>

          <header class="project-hero fade-up in-view">
            <span class="project-cat-static" style="--chip: #7B61FF">Portfolio</span>
            <h1 class="project-page-title">All <span class="gradient-text">Projects</span></h1>
            <p class="project-page-tagline">Everything I've designed, built and shipped — pick a project to see the full story, tech stack and features.</p>
            <div class="project-page-actions">
              <a href="contact.html" class="btn btn-primary magnetic">Start a Project</a>
              <a href="index.html#about" class="btn btn-ghost magnetic">About Me</a>
            </div>
          </header>

          <div class="projects-grid">
            ${projects.map((p, i) => `
              <article class="project-card tilt-card fade-up in-view" style="--i: ${i}">
                <div class="project-thumb" style="background: linear-gradient(135deg, ${p.colors[0]}66, rgba(15,23,42,0.9))">
                  <span class="project-cat">${p.category}</span>
                </div>
                <div class="project-body">
                  <h3 class="project-title">${p.title}</h3>
                  <p class="project-desc">${p.tagline}</p>
                  <div class="tech-badges">
                    ${p.tech.slice(0, 4).map((t) => `<span class="tech-badge">${t}</span>`).join('')}
                  </div>
                  <div class="project-actions">
                    <a href="project.html?project=${p.slug}" class="btn btn-primary btn-sm-btn">View Details</a>
                    <a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm-btn">Live Demo</a>
                  </div>
                  <a href="project.html?project=${p.slug}" class="project-learn-more">Learn More <span aria-hidden="true">→</span></a>
                </div>
              </article>`).join('')}
          </div>`,
          `${window.SITE_CONFIG.name || 'Portfolio'} | Projects`
        );
        return;
      }

      render(`
        <div class="project-notfound glass-card">
          <h1 class="project-notfound-title">Project not found</h1>
          <p class="project-notfound-text">The project you're looking for doesn't exist or was moved.</p>
          <a href="index.html#projects" class="btn btn-primary">Back to Projects</a>
        </div>`,
        'Project not found | ' + (window.SITE_CONFIG.name || 'Portfolio')
      );
      return;
    }

    const stackHtml = Object.entries(project.stack || {})
      .map(
        ([group, items]) => `
          <div class="project-stack-group">
            <h4 class="project-stack-title">${group}</h4>
            <div class="tech-badges">${items.map((t) => `<span class="tech-badge">${t}</span>`).join('')}</div>
          </div>`
      )
      .join('');

    const cfg2wa = () => (window.SITE_CONFIG.whatsapp || 'https://wa.me/919119700775') +
      `?text=${encodeURIComponent(window.SITE_CONFIG.whatsappGreeting || '')}`;

    const html = `
      <nav class="project-back" aria-label="Breadcrumb">
        <a href="project.html" class="project-back-link">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          All Projects
        </a>
      </nav>

      <header class="project-hero fade-up in-view">
        <span class="project-cat-static" style="--chip: ${project.colors[0] || '#7B61FF'}">
          ${project.category}
        </span>
        <h1 class="project-page-title">${project.title}</h1>
        <p class="project-page-tagline">${project.tagline}</p>
        <div class="project-page-actions">
          <a href="${project.demo}" target="_blank" rel="noopener" class="btn btn-primary magnetic">Live Demo</a>
          <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-ghost magnetic">GitHub</a>
          <a href="contact.html" class="btn btn-ghost magnetic">Start a Similar Project</a>
        </div>
      </header>

      <div class="project-detail-grid">
        <div class="project-detail-main">
          <section class="glass-card project-section fade-up in-view">
            <h2 class="project-section-title">About the Project</h2>
            ${project.overview.map((p) => `<p class="project-paragraph">${p}</p>`).join('')}
          </section>

          <section class="glass-card project-section fade-up in-view">
            <h2 class="project-section-title">Key Features</h2>
            <ul class="project-features">
              ${project.features.map((f) => `<li>${f}</li>`).join('')}
            </ul>
          </section>

          <section class="glass-card project-section fade-up in-view">
            <h2 class="project-section-title">Project Gallery</h2>
            <div class="project-gallery">
              ${project.colors.map((c, i) => `
                <div class="gallery-item" style="background: linear-gradient(135deg, ${c}55, rgba(15,23,42,0.9))">
                  <span class="gallery-label">${project.title.split(' ').slice(0, 2).join(' ')} preview ${i + 1}</span>
                </div>`).join('')}
            </div>
            <p class="project-gallery-note">Screenshots coming soon — open the live demo to see the full build.</p>
          </section>
        </div>

        <aside class="project-detail-side">
          <section class="glass-card project-section fade-up in-view">
            <h2 class="project-section-title">Tech Stack</h2>
            ${stackHtml}
          </section>

          <section class="glass-card project-cta fade-up in-view">
            <h3 class="project-cta-title">Like this project?</h3>
            <p class="project-cta-text">Let's build something similar — or even better — for you.</p>
            <div class="project-cta-actions">
              <a href="contact.html" class="btn btn-primary btn-sm-btn">Get in Touch</a>
              <a href="${cfg2wa()}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" class="whatsapp-icon" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z"/></svg>
                WhatsApp
              </a>
            </div>
          </section>
        </aside>
      </div>`;

    render(html, `${project.title} | ${window.SITE_CONFIG.name || 'Portfolio'}`);
  };

  /* =========================================================================
     20. BACK TO TOP FAB
     ======================================================================== */
  const initBackToTop = () => {
    const fab = document.getElementById('back-to-top');
    if (!fab) return;

    const onScroll = () => {
      fab.classList.toggle('visible', window.scrollY > 600);
    };

    window.addEventListener('scroll', () => onFrame(onScroll), { passive: true });

    fab.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    onScroll();
  };

  /* =========================================================================
     20. DEVELOPER DATA — renders every dynamic value from DEVELOPER_CONFIG
         Covers: text, links, logos, stats, resume buttons, SEO meta, JSON-LD
     ======================================================================== */
  const initDeveloperData = () => {
    const cfg = window.SITE_CONFIG || {};
    if (!cfg.name) return;

    /* --- Text content (data-dev="key") --- */
    document.querySelectorAll('[data-dev]').forEach((el) => {
      const key = el.dataset.dev;
      if (key && cfg[key] !== undefined) el.textContent = cfg[key];
    });

    /* --- Links (data-dev-href="key" + data-dev-type) --- */
    document.querySelectorAll('[data-dev-href]').forEach((el) => {
      const key = el.dataset.devHref;
      const value = cfg[key];
      if (!value) return;

      const type = el.dataset.devType || 'link';
      if (type === 'mailto') {
        el.href = `mailto:${value}`;
      } else if (type === 'tel') {
        el.href = `tel:${value.replace(/[^+\d]/g, '')}`;
      } else {
        el.href = value;
      }
    });

    /* --- Brand logo (Sam.dev → "Sam" + ".dev") everywhere --- */
    const brand = (cfg.brand || 'Sam.dev').split('.')[0];
    document.querySelectorAll('[data-dev-brand]').forEach((el) => {
      el.textContent = brand;
    });

    /* --- Dynamic document title + SEO meta tags --- */
    const primaryTitle = (cfg.title || '').split('|')[0].trim();
    document.title = `${cfg.name} | ${primaryTitle}`;

    const setMeta = (selector, attr, value) => {
      const tag = document.querySelector(selector);
      if (tag) tag.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', 'content', `${cfg.tagline} Based in ${cfg.location}.`);
    setMeta('meta[property="og:title"]', 'content', `${cfg.name} | ${primaryTitle}`);
    setMeta('meta[property="og:description"]', 'content', cfg.tagline);
    setMeta('meta[property="og:url"]', 'content', cfg.website);
    setMeta('meta[name="twitter:title"]', 'content', `${cfg.name} | ${primaryTitle}`);
    setMeta('meta[name="twitter:description"]', 'content', cfg.tagline);

    /* --- JSON-LD Person schema --- */
    const jsonld = document.getElementById('person-jsonld');
    if (jsonld) {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: cfg.name,
        jobTitle: primaryTitle,
        url: cfg.website,
        email: `mailto:${cfg.email}`,
        telephone: cfg.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: cfg.location.split(',')[0].trim(),
          addressCountry: 'IN',
        },
        sameAs: [cfg.github, cfg.linkedin].filter(Boolean),
      };
      jsonld.textContent = JSON.stringify(schema, null, 2);
    }

    /* --- Render hero stats strip --- */
    const heroStats = document.getElementById('hero-stats');
    if (heroStats && Array.isArray(cfg.heroStats)) {
      heroStats.innerHTML = cfg.heroStats
        .map(
          (s) => `
            <div class="hero-stat">
              <span class="hero-stat-num">${s.value}</span>
              <span class="hero-stat-label">${s.label}</span>
            </div>`
        )
        .join('');
    }

    /* --- Render about statistics counters --- */
    const aboutStats = document.getElementById('about-stats');
    if (aboutStats && Array.isArray(cfg.aboutStats)) {
      aboutStats.innerHTML = cfg.aboutStats
        .map(
          (s, i) => `
            <div class="stat-card glass-card fade-up" style="--i: ${i}">
              <span class="stat-num"><span class="counter" data-target="${s.value}">0</span>${s.suffix}</span>
              <span class="stat-label">${s.label}</span>
            </div>`
        )
        .join('');
    }

    /* --- Footer year --- */
    const year = document.getElementById('footer-year');
    if (year) year.textContent = new Date().getFullYear();

    /* --- Resume buttons: try PDF, fall back to DOCX --- */
    const resumeBtns = document.querySelectorAll('.resume-btn');
    if (resumeBtns.length) {
      const applyHref = (href) => {
        resumeBtns.forEach((btn) => {
          btn.href = href;
          btn.setAttribute('download', href.toLowerCase().endsWith('.pdf')
            ? 'Sumeet_Malik_Resume.pdf'
            : 'Sumeet_Malik_Resume.docx');
        });
      };

      /* HEAD request → if the PDF exists use it, otherwise use the DOCX */
      fetch(cfg.resumePDF, { method: 'HEAD' })
        .then((res) => applyHref(res.ok ? cfg.resumePDF : cfg.resumeDOCX))
        .catch(() => applyHref(cfg.resumeDOCX));
    }
  };

  /* =========================================================================
     21. CODE TABS — switch between language blocks in the Coding section
     ======================================================================== */
  const initCodeTabs = () => {
    const tabs = document.querySelectorAll('.code-tab');
    if (!tabs.length) return;

    const langLabels = { c: 'C', js: 'JavaScript', php: 'PHP' };
    const langEl = document.getElementById('code-lang');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const name = tab.dataset.tab;

        /* Toggle tab styles */
        tabs.forEach((t) => t.classList.toggle('active', t === tab));

        /* Toggle code blocks */
        document.querySelectorAll('.code-block').forEach((block) => {
          block.classList.toggle('active', block.dataset.block === name);
        });

        /* Update language chip */
        if (langEl && langLabels[name]) langEl.textContent = langLabels[name];
      });
    });
  };

  /* =========================================================================
     22. SMOOTH SCROLL — respects native CSS scroll-behavior, adds easing
         (HTML scroll-behavior handles it; this adds close-on-mobile + offset)
     ======================================================================== */
  const initSmoothScroll = () => {
    /* Offset handled via scroll-padding-top in CSS. Nothing extra needed,
       but keep links closing the mobile menu (already handled in initMenu). */
  };

  /* =========================================================================
     23. INTERACTIVE AVATAR — eyes follow the cursor, click for a reaction
     ======================================================================== */
  const initAvatar = () => {
    const avatar = document.getElementById('avatar');
    if (!avatar) return;

    const bubble = document.getElementById('avatar-bubble');
    const lines = [
      'Hi there! 👋',
      'Hiring? I\'m all ears 🎧',
      'Let\'s build something 🚀',
      'Thanks for stopping by!',
      'Remote? Absolutely! 🌍',
      'Wanna chat? Say hi! 💬',
    ];

    /* Pupils track the pointer (CSS vars drive the transform) */
    const coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    if (!coarse) {
      window.addEventListener('mousemove', (e) => {
        const rect = avatar.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = clamp((e.clientX - cx) / (rect.width * 0.75), -1, 1);
        const dy = clamp((e.clientY - cy) / (rect.height * 0.75), -1, 1);
        avatar.style.setProperty('--look-x', dx.toFixed(3));
        avatar.style.setProperty('--look-y', dy.toFixed(3));
      }, { passive: true });
    }

    /* Click → excited expression + speech bubble */
    let bubbleTimer = null;
    avatar.addEventListener('click', () => {
      avatar.classList.add('excited', 'show-bubble');
      if (bubble) bubble.textContent = lines[Math.floor(Math.random() * lines.length)];
      clearTimeout(bubbleTimer);
      bubbleTimer = setTimeout(() => {
        avatar.classList.remove('excited', 'show-bubble');
      }, 2400);
    });
  };

  /* =========================================================================
     23A. IST LIVE CLOCK — recruiter-friendly "based in India" signal
     ======================================================================== */
  const initISTClock = () => {
    const el = document.getElementById('profile-ist-clock');
    if (!el) return;

    const tick = () => {
      const now = new Date(Date.now() + 330 * 60000);   /* UTC + 5:30 */
      const hh = String(now.getUTCHours()).padStart(2, '0');
      const mm = String(now.getUTCMinutes()).padStart(2, '0');
      el.textContent = `🕐 IST ${hh}:${mm}`;
    };
    tick();
    setInterval(tick, 30000);
  };

  /* =========================================================================
     BOOT — init everything when the DOM is ready
     ======================================================================== */
  const init = () => {
    initDeveloperData();   /* must run first so rendered nodes exist below */
    initProjectPage();     /* overrides the document title on project.html */
    initParticles();
    initCursor();
    initScrollUI();
    initMenu();
    initTyping();
    initScrollSpy();
    initReveals();
    initParallax();
    initTilt();
    initMagnetic();
    initRipple();
    initCounters();
    initSkillBars();
    initTimeline();
    initForm();
    initThemeToggle();
    initIslandWidget();
    initBotWidget();
    initBackToTop();
    initCodeTabs();
    initSmoothScroll();
    initAvatar();
    initISTClock();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
