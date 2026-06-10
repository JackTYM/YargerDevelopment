<template>
  <div>
    <NuxtRouteAnnouncer />

    <!-- Navigation -->
    <nav :class="['nav', { scrolled }]">
      <div class="nav-inner">
        <a href="#" class="logo">
          <img src="/yarger-dev-mark-dark.svg" alt="YD" class="logo-icon" /><span>Yarger<span class="accent">Development</span></span>
        </a>
        <ul class="nav-links">
          <li v-for="link in NAV_LINKS" :key="link.href">
            <a :href="link.href" class="nav-link">{{ link.label }}</a>
          </li>
        </ul>
        <a href="#contact" class="btn-primary nav-cta">Get a Quote</a>
      </div>
    </nav>

    <!-- Hero -->
    <section class="hero grid-bg">
      <div class="glow-orb"></div>
      <div class="container hero-content">
        <p class="section-label fade-up delay-1">Full-Stack Web Developer · Est. 2019</p>
        <h1 class="hero-title fade-up delay-2">
          <span class="text-gradient">Custom websites</span><br />
          for businesses &amp;<br />
          big ideas.
        </h1>
        <p class="hero-sub fade-up delay-3">Websites that work as hard as you do.</p>
        <div class="hero-buttons fade-up delay-4">
          <a href="#contact" class="btn-primary">Request a Quote →</a>
          <a href="#work" class="btn-ghost">View My Work</a>
        </div>
        <div class="hero-stats">
          <div v-for="stat in STATS" :key="stat.label" class="stat">
            <div class="stat-num">{{ stat.num }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="section-dark">
      <div class="container">
        <p class="section-label">What I Do</p>
        <h2 class="section-title">Services built for <br /><span class="text-gradient">real results</span></h2>
        <p class="section-sub">From simple business pages to complex integrations — I build things that work, and work well.</p>
        <div class="services-grid">
          <div v-for="service in SERVICES" :key="service.title" class="card service-card">
            <div class="service-icon">{{ service.icon }}</div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-desc">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Work -->
    <section id="work" class="section-dark">
      <div class="container">
        <p class="section-label">Portfolio</p>
        <h2 class="section-title">Recent work</h2>
        <p class="section-sub">A selection of projects — from passion projects to production apps.</p>
        <div class="projects-list">
          <div v-for="(project, i) in PROJECTS" :key="project.title" class="card project-card">
            <template v-if="i % 2 !== 0">
              <div class="project-text">
                <div class="project-tags">
                  <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-desc">{{ project.desc }}</p>
                <a :href="`https://${project.url}`" target="_blank" rel="noopener noreferrer" class="btn-ghost project-link">
                  Visit {{ project.url }} ↗
                </a>
              </div>
              <div class="project-image">
                <img :src="project.img" :alt="project.title" />
              </div>
            </template>
            <template v-else>
              <div class="project-image">
                <img :src="project.img" :alt="project.title" />
              </div>
              <div class="project-text">
                <div class="project-tags">
                  <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-desc">{{ project.desc }}</p>
                <a :href="`https://${project.url}`" target="_blank" rel="noopener noreferrer" class="btn-ghost project-link">
                  Visit {{ project.url }} ↗
                </a>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="section-alt">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <div class="about-avatar-wrapper">
              <img src="/uploads/560542232_122270407970194545_3362275788361036634_n.jpg" alt="Jackson Yarger" class="about-avatar" />
              <div class="avatar-status"></div>
            </div>
            <p class="section-label">About Me</p>
            <h2 class="section-title">Hi, I'm <span class="text-gradient">Jackson</span></h2>
            <p class="about-text">
              I'm a self-taught web developer and student at Arizona State University, with 6 years of hands-on experience building real-world web applications.
            </p>
            <p class="about-text">
              I specialize in building things that <em>actually work</em> — small business sites, booking integrations, custom web tools, and passion projects that start as an idea and end up as something people actually use.
            </p>
            <p class="about-text">
              Whether you're a small business owner who needs a site that connects to your calendar, or someone with a wild idea that deserves to exist on the internet — I'm your person.
            </p>
            <div class="skills-grid">
              <div v-for="skill in SKILLS" :key="skill.name" class="skill">
                <div class="skill-name">{{ skill.name }}</div>
                <div class="skill-dots">{{ skill.dots }}</div>
              </div>
            </div>
          </div>
          <div class="about-sidebar">
            <div class="quick-facts">
              <div class="quick-facts-title">Quick Facts</div>
              <div v-for="fact in QUICK_FACTS" :key="fact.text" class="fact">
                <span class="fact-icon">{{ fact.icon }}</span>
                <span class="fact-text">{{ fact.text }}</span>
              </div>
            </div>
            <div class="about-glow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="section-dark">
      <div class="container">
        <p class="section-label">Reviews</p>
        <h2 class="section-title">What clients say</h2>
        <div class="testimonials-grid">
          <div v-for="(testimonial, i) in TESTIMONIALS" :key="i" class="card testimonial-card">
            <div class="stars">
              <span v-for="j in testimonial.rating" :key="j" class="star">★</span>
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-author">
              <div class="author-name">{{ testimonial.name }}</div>
              <div class="author-handle">{{ testimonial.handle }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="section-alt">
      <div class="container">
        <p class="section-label">Pricing</p>
        <h2 class="section-title">Simple, transparent <span class="text-gradient">pricing</span></h2>
        <p class="section-sub">No surprises. Every project starts with a clear scope and flat-rate pricing — or a custom quote for bigger builds.</p>
        <div class="pricing-grid">
          <div v-for="plan in PRICING" :key="plan.tier" :class="['pricing-card', { highlight: plan.highlight }]">
            <div v-if="plan.highlight" class="popular-badge">Most Popular</div>
            <div class="tier-name">{{ plan.tier }}</div>
            <div class="tier-price">{{ plan.price }}</div>
            <div class="tier-period">{{ plan.period }}</div>
            <p class="tier-desc">{{ plan.desc }}</p>
            <div class="tier-features">
              <div v-for="example in plan.examples" :key="example" class="feature">
                <span class="feature-check">✓</span>
                <span>{{ example }}</span>
              </div>
            </div>
            <a href="#contact" :class="plan.highlight ? 'btn-primary' : 'btn-ghost'" class="tier-cta">
              {{ plan.cta }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="section-dark">
      <div class="container faq-container">
        <p class="section-label">FAQ</p>
        <h2 class="section-title">Common questions</h2>
        <div class="faq-list">
          <div v-for="(faq, i) in FAQS" :key="i" class="faq-item" @click="toggleFaq(i)">
            <div class="faq-question">
              <span>{{ faq.q }}</span>
              <span :class="['faq-toggle', { open: openFaq === i }]">+</span>
            </div>
            <div v-if="openFaq === i" class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section-alt">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <p class="section-label">Get In Touch</p>
            <h2 class="section-title">Let's build <br /><span class="text-gradient">something great</span></h2>
            <p class="contact-desc">
              Fill out the form with your project details and I'll get back to you within 24 hours with a quote and a link to book a call.
            </p>
            <div class="contact-details">
              <div v-for="detail in CONTACT_DETAILS" :key="detail.label" class="contact-detail">
                <div class="detail-icon">{{ detail.icon }}</div>
                <div>
                  <div class="detail-label">{{ detail.label }}</div>
                  <div class="detail-value">{{ detail.value }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-form-wrapper">
            <div v-if="formSent" class="card form-success">
              <div class="success-icon">✓</div>
              <h3 class="success-title">Request Sent!</h3>
              <p class="success-text">Thanks! I'll be in touch within 24 hours with a quote and a Calendly link to book a call.</p>
            </div>
            <form v-else @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label>Your Name</label>
                  <input v-model="form.name" type="text" placeholder="Jane Smith" required />
                </div>
                <div class="form-group">
                  <label>Email Address</label>
                  <input v-model="form.email" type="email" placeholder="jane@business.com" required />
                </div>
              </div>
              <div class="form-group">
                <label>Project Type</label>
                <select v-model="form.projectType" required>
                  <option value="">Select a type...</option>
                  <option>Business Website</option>
                  <option>Calendar / Booking Integration</option>
                  <option>Custom Web App</option>
                  <option>Personal / Passion Project</option>
                  <option>Maintenance / Updates</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-group">
                <label>Estimated Budget</label>
                <select v-model="form.budget">
                  <option value="">Not sure yet</option>
                  <option>Under $200</option>
                  <option>$200 – $500</option>
                  <option>$500 – $1,000</option>
                  <option>$1,000+</option>
                </select>
              </div>
              <div class="form-group">
                <label>Project Description</label>
                <textarea v-model="form.description" placeholder="Tell me about your project — what you need, your timeline, and any examples of sites you like..." rows="5" required></textarea>
              </div>
              <div v-if="formError" class="form-error">{{ formError }}</div>
              <button type="submit" class="btn-primary form-submit" :disabled="formLoading">
                {{ formLoading ? 'Sending...' : 'Send Request & Book Meeting →' }}
              </button>
              <p class="form-note">📅 You will be brought to Calendly to schedule a quote discussion meeting.</p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-inner">
        <div>
          <div class="footer-logo">
            <img src="/yarger-dev-mark-dark.svg" alt="YD" class="logo-icon" /><span>Yarger<span class="accent">Development</span></span>
          </div>
          <div class="footer-copy">© 2026 Jackson Yarger. All rights reserved.</div>
        </div>
        <div class="footer-links">
          <a v-for="link in NAV_LINKS" :key="link.href" :href="link.href" class="footer-link">
            {{ link.label }}
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useSeoMeta({
  title: 'Yarger Development — Custom Websites & Web Apps',
  description: 'Custom websites, web apps, and integrations for small businesses and big ideas. Fast turnaround, flat-rate pricing. Phoenix, Arizona web developer.',
  ogTitle: 'Yarger Development — Custom Websites & Web Apps',
  ogDescription: 'Custom websites, web apps, and integrations for small businesses and big ideas. Fast turnaround, flat-rate pricing.',
  ogImage: 'https://yargerdevelopment.com/og-image.png',
  ogUrl: 'https://yargerdevelopment.com',
  ogType: 'website',
  twitterCard: 'summary',
  twitterTitle: 'Yarger Development — Custom Websites & Web Apps',
  twitterDescription: 'Custom websites, web apps, and integrations for small businesses and big ideas. Fast turnaround, flat-rate pricing.',
})

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

const STATS = [
  { num: '6+', label: 'Years Experience' },
  { num: '50+', label: 'Projects Built' },
  { num: '100%', label: 'Client Satisfaction' },
]

const SERVICES = [
  { icon: '◼', title: 'Business Websites', desc: 'Professional, fast-loading sites that represent your brand and convert visitors into customers.' },
  { icon: '◈', title: 'Calendar & Booking', desc: 'Seamless integrations with Google Calendar, Calendly, and custom booking flows built around your workflow.' },
  { icon: '⬡', title: 'Custom Web Apps', desc: 'From charm trackers to recipe platforms — if you can dream it, I can build it as a functional web app.' },
  { icon: '◎', title: 'SEO & Performance', desc: 'Speed optimization, metadata, sitemaps, and structure that helps you rank and load in under a second.' },
  { icon: '⬟', title: 'Maintenance & Updates', desc: 'Ongoing support to keep your site fresh, secure, and running smoothly as your business grows.' },
  { icon: '◇', title: 'Passion Projects', desc: "Got a wild idea? Let's build it. Side projects welcome — some of the best things start as a personal dream." },
]

const PROJECTS = [
  {
    title: 'Charmventory',
    url: 'charmventory.com',
    desc: 'A fully-featured charm collection tracker — inventory management, wishlist, rarity breakdowns, and a community database for Pandora enthusiasts.',
    tags: ['Web App', 'Nuxt', 'Database'],
    img: '/uploads/pasted-1777239100969-0.png',
  },
  {
    title: 'TwoTeaspoons',
    url: 'twotsps.com',
    desc: 'A personal recipe management platform with URL importing, meal planning, cookbooks, and a shopping list — minus all the life stories.',
    tags: ['Web App', 'Dark UI', 'Full Stack'],
    img: '/uploads/pasted-1777239120517-0.png',
  },
  {
    title: 'SkyBlock Creator',
    url: 'skyblock.jacktym.dev',
    desc: 'A Minecraft Hypixel SkyBlock item & recipe designer with live preview, stat editing, and PNG/JSON/command export tools.',
    tags: ['Utility', 'Game Tool', 'Canvas'],
    img: '/uploads/pasted-1777239144765-0.png',
  },
]

const SKILLS = [
  { name: 'Nuxt.js', dots: '★★★★★' },
  { name: 'Node.js', dots: '★★★★★' },
  { name: 'Databases', dots: '★★★★★' },
  { name: 'Backend', dots: '★★★★★' },
]

const QUICK_FACTS = [
  { icon: '⚡', text: 'Fast turnaround, direct communication' },
  { icon: '🤝', text: 'Flat-rate & custom project pricing' },
  { icon: '📅', text: 'Booking + calendar integrations available' },
]

const TESTIMONIALS = [
  { name: 'Herman ••••••••', handle: 'Client', text: 'Helped to host / buy domain and setup a site. Highly recommended.', rating: 5 },
  { name: 'Max •••••••', handle: 'Client', text: 'Helped with hosting and coded a project for me before! Deals were within the $100+ range — would highly recommend.', rating: 5 },
  { name: 'Jack •••••••', handle: 'Client', text: 'Good ideas and fast worker.', rating: 5 },
]

const PRICING = [
  {
    tier: 'Starter',
    price: '$100–200',
    period: 'estimate',
    desc: 'Best for passion projects, personal tools, or a simple advertisement page for your business. If you just need something clean and functional on the internet — this is your starting point.',
    examples: ['Static business / landing page', 'Personal portfolio or blog', 'Simple web app or utility', 'Basic database or form integration', 'Static deployment & domain setup'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    tier: 'Business',
    price: '$200–400',
    period: 'estimate',
    desc: 'For businesses that need more than a page — calendar booking, a CMS to manage content, or connections to your sales and scheduling tools. Built around your workflow.',
    examples: ['Calendar & booking integration', 'CMS / blogging system', 'Sales or CRM integrations', 'Multi-page business site', 'Admin panel or dashboard'],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    tier: 'Advanced',
    price: '$400+',
    period: 'custom quote',
    desc: 'Complex apps that pull data from multiple sources, process it, and display it in interesting ways. Think AI features, scrapers, aggregation engines, or full social platforms.',
    examples: ['Web scrapers & data pipelines', 'AI / LLM integrations', 'Data aggregation & visualization', 'Social features & user systems', 'Custom backend architecture'],
    cta: 'Request Quote',
    highlight: false,
  },
]

const FAQS = [
  { q: 'How long does a website take?', a: 'Starter sites are typically finished within a week. Business sites vary depending on integration complexity but are usually completed within 1–2 weeks. Advanced sites depend on scope and are scoped during our initial call. I work quickly — the main delays are usually waiting on content, feedback, or access from other projects in the queue.' },
  { q: 'How does hosting & deployment work?', a: 'There are two options: Self-Billing — you set up accounts on platforms like Cloudflare, Neon, or Vercel and add me as an admin. You pay those providers directly, keeping ongoing costs minimal. Fixed-Rate Billing — I handle everything and you pay me a flat monthly fee, tiered by site features and traffic. One bill, zero headaches.' },
  { q: 'Do you offer payment plans?', a: 'Yes! For larger projects I typically split into 50% upfront and 50% on delivery. We can discuss other arrangements during the quote process.' },
  { q: 'What do you need from me to get started?', a: 'A brief description of your project, any existing branding (logo, colors), and examples of sites you like. The more context, the better the result.' },
  { q: 'Will my site work on mobile?', a: 'Every site I build is fully responsive and tested across devices and browsers.' },
  { q: 'Can you maintain my site after launch?', a: 'Absolutely — maintenance packages are available, or I can do one-off updates as needed. Just reach out.' },
  { q: 'Do you work with existing sites?', a: 'Yes. I can redesign, expand, or integrate new features into your existing site.' },
]

const CONTACT_DETAILS = [
  { icon: '📧', label: 'Email', value: 'jackson@yargerdevelopment.com' },
  { icon: '📅', label: 'Book a Call', value: 'calendly.com/yargerdevelopment' },
  { icon: '⚡', label: 'Response Time', value: 'Within 24 hours' },
]

const scrolled = ref(false)
const openFaq = ref(null)
const formSent = ref(false)
const formLoading = ref(false)
const formError = ref('')
const form = ref({
  name: '',
  email: '',
  projectType: '',
  budget: '',
  description: '',
})

function handleScroll() {
  scrolled.value = window.scrollY > 40
}

function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}

async function handleSubmit() {
  formLoading.value = true
  formError.value = ''

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.message || 'Failed to submit')
    }

    formSent.value = true
    window.open('https://calendly.com/yargerdevelopment/30min', '_blank')
  } catch (e) {
    formError.value = e?.message || 'Something went wrong. Please try again.'
  } finally {
    formLoading.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { background: #07091a; color: #e2e8f0; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #07091a; }
::-webkit-scrollbar-thumb { background: #1e3a5f; border-radius: 3px; }
::selection { background: oklch(0.55 0.22 255 / 0.4); }

@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@keyframes shimmer { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
@keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
@keyframes pulse-ring { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 oklch(0.65 0.22 255 / 0.4); } 70% { transform: scale(1); box-shadow: 0 0 0 10px oklch(0.65 0.22 255 / 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 oklch(0.65 0.22 255 / 0); } }

.fade-up { animation: fadeUp 0.6s ease forwards; }
.delay-1 { animation-delay: 0.1s; opacity: 0; }
.delay-2 { animation-delay: 0.2s; opacity: 0; }
.delay-3 { animation-delay: 0.35s; opacity: 0; }
.delay-4 { animation-delay: 0.5s; opacity: 0; }

.grid-bg {
  background-image:
    linear-gradient(oklch(0.55 0.22 255 / 0.04) 1px, transparent 1px),
    linear-gradient(90deg, oklch(0.55 0.22 255 / 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
}

.glow-blue { filter: drop-shadow(0 0 18px oklch(0.65 0.22 255 / 0.5)); }
.text-gradient {
  background: linear-gradient(135deg, oklch(0.75 0.22 255), oklch(0.65 0.2 280), oklch(0.7 0.24 230));
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease infinite;
}

section { padding: 96px 0; }
.container { max-width: 1160px; margin: 0 auto; padding: 0 32px; }
.section-label { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: oklch(0.65 0.22 255); margin-bottom: 12px; }
.section-title { font-family: 'Plus Jakarta Sans', sans-serif; font-size: clamp(28px, 3.5vw, 46px); font-weight: 800; line-height: 1.15; margin-bottom: 20px; }
.section-sub { font-size: 17px; color: #94a3b8; max-width: 520px; line-height: 1.65; margin-bottom: 56px; }

.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: oklch(0.6 0.22 255); color: #fff;
  font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600;
  padding: 13px 28px; border-radius: 8px; border: none; cursor: pointer;
  transition: all 0.2s; text-decoration: none;
}
.btn-primary:hover { background: oklch(0.65 0.24 255); transform: translateY(-1px); box-shadow: 0 8px 24px oklch(0.6 0.22 255 / 0.35); }
.btn-ghost {
  display: inline-flex; align-items: center; gap: 8px;
  background: transparent; color: #e2e8f0;
  font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500;
  padding: 13px 28px; border-radius: 8px; border: 1px solid #1e3a5f; cursor: pointer;
  transition: all 0.2s; text-decoration: none;
}
.btn-ghost:hover { border-color: oklch(0.65 0.22 255); color: oklch(0.75 0.22 255); }

input, textarea, select {
  width: 100%; background: #0d1225; border: 1px solid #1e3a5f; color: #e2e8f0;
  font-family: 'DM Sans', sans-serif; font-size: 15px; border-radius: 8px;
  padding: 13px 16px; outline: none; transition: border-color 0.2s;
}
input:focus, textarea:focus, select:focus { border-color: oklch(0.6 0.22 255); box-shadow: 0 0 0 3px oklch(0.6 0.22 255 / 0.15); }
input::placeholder, textarea::placeholder { color: #475569; }
select option { background: #0d1225; }
label { display: block; font-size: 13px; font-weight: 500; color: #94a3b8; margin-bottom: 6px; }

.card {
  background: #0d1225; border: 1px solid #1a2744;
  border-radius: 16px; overflow: hidden; transition: all 0.3s;
}
.card:hover { border-color: oklch(0.6 0.22 255 / 0.4); transform: translateY(-3px); box-shadow: 0 16px 40px #000a; }

.accent { color: oklch(0.65 0.22 255); }
.section-dark { background: #07091a; }
.section-alt { background: #080b1e; }

/* Navigation */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  transition: all 0.3s;
  background: transparent;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: rgba(7,9,26,0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid #1a2744;
}
.nav-inner { max-width: 1160px; margin: 0 auto; padding: 0 32px; height: 68px; display: flex; align-items: center; justify-content: space-between; }
.logo { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 20px; color: #e2e8f0; text-decoration: none; letter-spacing: -0.02em; display: flex; align-items: center; gap: 10px; }
.logo-icon { height: 28px; width: auto; }
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-link { color: #94a3b8; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
.nav-link:hover { color: #e2e8f0; }
.nav-cta { padding: 10px 20px; font-size: 14px; }

/* Hero */
.hero { padding-top: 180px; padding-bottom: 120px; position: relative; overflow: hidden; }
.glow-orb {
  position: absolute; top: 30%; left: 55%; transform: translate(-50%,-50%);
  width: 600px; height: 600px; border-radius: 50%;
  background: radial-gradient(circle, oklch(0.55 0.22 255 / 0.12) 0%, transparent 70%);
  pointer-events: none;
}
.hero-content { position: relative; }
.hero-title { font-family: 'Plus Jakarta Sans', sans-serif; font-size: clamp(38px, 5vw, 68px); font-weight: 800; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 28px; max-width: 820px; }
.hero-sub { font-size: 19px; color: #94a3b8; max-width: 520px; line-height: 1.65; margin-bottom: 44px; }
.hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; }
.hero-stats { display: flex; gap: 48px; margin-top: 72px; flex-wrap: wrap; }
.stat-num { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 38px; font-weight: 800; color: oklch(0.75 0.18 255); line-height: 1; }
.stat-label { font-size: 13px; color: #64748b; margin-top: 6px; font-weight: 500; }

/* Services */
.services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
.service-card { padding: 28px; }
.service-icon { font-size: 22px; margin-bottom: 16px; color: oklch(0.65 0.22 255); }
.service-title { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 18px; margin-bottom: 10px; }
.service-desc { color: #64748b; font-size: 14px; line-height: 1.65; }

/* Work/Projects */
.projects-list { display: flex; flex-direction: column; gap: 28px; }
.project-card { display: grid; grid-template-columns: 1fr 1fr; min-height: 0; }
.project-image { overflow: hidden; background: #0a0d1f; position: relative; }
.project-image img { width: 150%; height: auto; display: block; object-position: top left; transition: transform 0.4s ease; }
.project-image:hover img { transform: scale(1.02); }
.project-text { padding: 40px 48px; display: flex; flex-direction: column; justify-content: center; }
.project-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.tag { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: oklch(0.65 0.22 255); background: oklch(0.6 0.22 255 / 0.1); padding: 4px 10px; border-radius: 4px; }
.project-title { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 30px; margin-bottom: 12px; }
.project-desc { color: #94a3b8; font-size: 15px; line-height: 1.7; margin-bottom: 24px; }
.project-link { width: fit-content; font-size: 13px; padding: 9px 18px; }

/* About */
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.about-content { display: flex; flex-direction: column; align-items: flex-start; }
.about-avatar-wrapper { margin-bottom: 32px; position: relative; display: inline-block; }
.about-avatar { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 3px solid oklch(0.6 0.22 255 / 0.5); display: block; }
.avatar-status { position: absolute; bottom: 4px; right: 4px; width: 18px; height: 18px; background: #22c55e; border-radius: 50%; border: 3px solid #080b1e; animation: pulse-ring 2s infinite; }
.about-text { color: #94a3b8; font-size: 16px; line-height: 1.8; margin-bottom: 20px; }
.skills-grid { display: flex; gap: 32px; flex-wrap: wrap; margin-top: 16px; }
.skill-name { font-size: 16px; color: #cbd5e1; margin-bottom: 8px; font-weight: 600; }
.skill-dots { font-size: 16px; color: oklch(0.65 0.22 255); letter-spacing: 4px; }
.about-sidebar { position: relative; }
.quick-facts { background: linear-gradient(135deg, #0d1225 0%, #101830 100%); border: 1px solid #1a2744; border-radius: 20px; padding: 40px; }
.quick-facts-title { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: oklch(0.65 0.22 255); margin-bottom: 24px; }
.fact { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 18px; }
.fact-icon { font-size: 16px; flex-shrink: 0; }
.fact-text { color: #94a3b8; font-size: 15px; line-height: 1.5; }
.about-glow { position: absolute; top: -20px; right: -20px; width: 80px; height: 80px; background: oklch(0.6 0.22 255 / 0.15); border-radius: 50%; filter: blur(20px); pointer-events: none; }

/* Testimonials */
.testimonials-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-top: 48px; }
.testimonial-card { padding: 32px; display: flex; flex-direction: column; }
.stars { display: flex; gap: 4px; margin-bottom: 20px; }
.star { color: oklch(0.8 0.18 80); font-size: 22px; }
.testimonial-text { color: #cbd5e1; font-size: 16px; line-height: 1.7; font-style: italic; margin-bottom: auto; padding-bottom: 24px; }
.testimonial-author { }
.author-name { font-weight: 600; font-size: 14px; }
.author-handle { font-size: 13px; color: #475569; }

/* Pricing */
.pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.pricing-card {
  background: #0d1225; border: 1px solid #1a2744;
  border-radius: 16px; padding: 32px; position: relative;
  display: flex; flex-direction: column;
}
.pricing-card.highlight {
  background: linear-gradient(160deg, #0e1730 0%, #111f3e 100%);
  border: 1px solid oklch(0.6 0.22 255 / 0.5);
  box-shadow: 0 0 40px oklch(0.55 0.22 255 / 0.15);
}
.popular-badge {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
  background: oklch(0.6 0.22 255); color: #fff;
  font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 4px 14px; border-radius: 20px;
}
.tier-name { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 15px; color: #94a3b8; margin-bottom: 8px; }
.tier-price { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 44px; margin-bottom: 4px; }
.tier-period { font-size: 13px; color: #475569; margin-bottom: 16px; }
.tier-desc { font-size: 14px; color: #64748b; line-height: 1.6; margin-bottom: 24px; min-height: 48px; }
.tier-features { border-top: 1px solid #1a2744; padding-top: 24px; margin-bottom: 28px; }
.feature { display: flex; gap: 10px; align-items: flex-start; margin-bottom: 12px; }
.feature-check { color: oklch(0.7 0.2 255); font-size: 14px; flex-shrink: 0; margin-top: 1px; }
.feature span:last-child { font-size: 14px; color: #94a3b8; }
.tier-cta { width: 100%; justify-content: center; margin-top: auto; }

/* FAQ */
.faq-container { max-width: 760px; }
.faq-list { margin-top: 48px; display: flex; flex-direction: column; gap: 8px; }
.faq-item { background: #0d1225; border: 1px solid #1a2744; border-radius: 12px; overflow: hidden; cursor: pointer; }
.faq-question { padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; }
.faq-question span:first-child { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 16px; }
.faq-toggle { color: oklch(0.65 0.22 255); font-size: 18px; transition: transform 0.2s; flex-shrink: 0; margin-left: 16px; }
.faq-toggle.open { transform: rotate(45deg); }
.faq-answer { padding: 0 24px 20px; color: #94a3b8; font-size: 15px; line-height: 1.7; }

/* Contact */
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.contact-desc { color: #94a3b8; font-size: 16px; line-height: 1.75; margin-bottom: 40px; }
.contact-details { display: flex; flex-direction: column; gap: 20px; }
.contact-detail { display: flex; gap: 16px; align-items: center; }
.detail-icon { width: 44px; height: 44px; background: oklch(0.6 0.22 255 / 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; }
.detail-label { font-size: 12px; color: #475569; margin-bottom: 2px; }
.detail-value { font-size: 15px; color: #cbd5e1; }
.contact-form { display: flex; flex-direction: column; gap: 18px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-group { }
.form-submit { width: 100%; justify-content: center; padding: 15px 28px; font-size: 16px; }
.form-submit:disabled { opacity: 0.6; cursor: not-allowed; }
.form-error { background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; padding: 12px 16px; border-radius: 8px; font-size: 14px; margin-bottom: 12px; }
.form-note { font-size: 13px; color: #94a3b8; text-align: center; padding: 4px 0; border-top: 1px solid #1a2744; padding-top: 14px; }
.form-success { padding: 48px; text-align: center; }
.success-icon { font-size: 48px; margin-bottom: 16px; }
.success-title { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 22px; margin-bottom: 12px; }
.success-text { color: #94a3b8; font-size: 15px; }

/* Footer */
.footer { background: #050711; border-top: 1px solid #0f1a2e; padding: 48px 0; }
.footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; }
.footer-logo { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 20px; margin-bottom: 6px; display: flex; align-items: center; gap: 10px; }
.footer-copy { font-size: 13px; color: #334155; }
.footer-links { display: flex; gap: 32px; }
.footer-link { font-size: 13px; color: #475569; text-decoration: none; transition: color 0.2s; }
.footer-link:hover { color: #94a3b8; }

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .project-card { grid-template-columns: 1fr; }
  .project-image { order: -1; }
  .about-grid { grid-template-columns: 1fr; gap: 48px; }
  .contact-grid { grid-template-columns: 1fr; gap: 48px; }
  .pricing-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
