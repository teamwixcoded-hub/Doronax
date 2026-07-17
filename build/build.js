#!/usr/bin/env node
/* Generates every static HTML page from content/data.js.
   Run: node build/build.js */

const fs = require("fs");
const path = require("path");
const { SITE, SECTORS, CONTACT } = require("../content/data.js");
const { STAT_ICONS } = require("./icons.js");

const ROOT = path.join(__dirname, "..");

const ARROW_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const CHEVRON_SVG = `<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;
const LOGO_MARK = `<img class="logo-mark" src="assets/images/Doranax%20Albion%20Holdings%20Logo.png" alt="" aria-hidden="true" />`;
const LOGO_LOCKUP = `${LOGO_MARK}<span class="logo-text" aria-hidden="true"><span class="logo-text-main">Doronax</span><span class="logo-text-sub">Albion Holdings</span></span>`;

// Hidden fields every enquiry form needs to submit to Web3Forms: the
// account access key, a readable email subject, and a honeypot field
// Web3Forms uses to silently drop bot submissions.
function formHiddenFields(subject) {
  return `<input type="hidden" name="access_key" value="${SITE.web3formsKey}" />
      <input type="hidden" name="subject" value="${subject} enquiry — ${SITE.name} website" />
      <input type="checkbox" name="botcheck" style="display: none;" tabindex="-1" autocomplete="off" />`;
}

function head(title) {
  return `<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — ${SITE.name}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />`;
}

function header() {
  return `<header class="site-header">
    <div class="container">
      <a href="index.html" class="logo" aria-label="${SITE.name} — Home">${LOGO_LOCKUP}</a>
      <nav class="site-nav" data-site-nav>
        <a href="index.html">Home</a>
        <a href="index.html#sectors">Sectors</a>
        <a href="contact.html">Contact</a>
      </nav>
      <button type="button" class="nav-burger" data-nav-toggle aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
  <script>
  (function () {
    var toggle = document.querySelector('[data-nav-toggle]');
    var nav = document.querySelector('[data-site-nav]');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  })();
  </script>`;
}

function footer() {
  const sectorLinks = SECTORS.map((s) => `<a href="${s.slug}.html">${s.name}</a>`).join("\n          ");
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo" aria-label="${SITE.name} — Home">${LOGO_LOCKUP}</a>
        <p>${SITE.tagline}</p>
      </div>
      <div class="footer-col">
        <p class="eyebrow">Sectors</p>
        ${sectorLinks}
      </div>
      <div class="footer-col">
        <p class="eyebrow">Company</p>
        <a href="index.html">Home</a>
        <a href="contact.html">Contact</a>
        <a href="careers.html">Careers</a>
        <a href="suppliers.html">Suppliers</a>
      </div>
      <div class="footer-col">
        <p class="eyebrow">Get in Touch</p>
        <a href="mailto:${SITE.email}">${SITE.email}</a>
        <span>United Kingdom</span>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2026 ${SITE.name}. All rights reserved.</p>
      </div>
    </div>
  </footer>
  <script>
  document.querySelectorAll('[data-enquiry-form]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var status = form.querySelector('.form-status');
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      if (status) status.textContent = 'Sending…';
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      })
        .then(function (res) { return res.json(); })
        .then(function (result) {
          if (result.success) {
            form.reset();
            if (status) status.textContent = 'Thank you — your enquiry has been sent. We will be in touch shortly.';
          } else {
            if (status) status.textContent = 'Something went wrong. Please email us directly at ${SITE.email}.';
          }
        })
        .catch(function () {
          if (status) status.textContent = 'Something went wrong. Please email us directly at ${SITE.email}.';
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  });
  </script>`;
}

function page(title, body, extraScript) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  ${head(title)}
</head>
<body>
  ${header()}
  ${body}
  ${footer()}
  ${extraScript || ""}
</body>
</html>
`;
}

function backLinkLeft(href, label) {
  return `<a href="${href}" class="arrow-link arrow-link-light back-link">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
    ${label}
  </a>`;
}

function slugify(value) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function offeringHref(sector, svc, name) {
  return `${sector.slug}-${svc.slug}-${slugify(name)}.html`;
}

function suppliedVisuals(sector, svc) {
  const root = path.join(ROOT, "assets", "images");
  const sectorWords = sector.name.toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 3);
  const serviceWords = `${svc.name} ${svc.slug}`.toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 3);
  const files = [];
  function walk(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(full);
      if (!/\.(png|jpe?g|webp|gif)$/i.test(entry.name)) return;
      const lower = full.toLowerCase();
      if (/do not use|dnu|reference|screenshot|\.ds_store/.test(lower)) return;
      const score = serviceWords.reduce((n, word) => n + (lower.includes(word) ? 3 : 0), 0)
        + sectorWords.reduce((n, word) => n + (lower.includes(word) ? 1 : 0), 0);
      if (score > 0) files.push({ full, score });
    });
  }
  walk(root);
  return files.sort((a, b) => b.score - a.score).slice(0, 6)
    .map(({ full }) => path.relative(ROOT, full).split(path.sep).join("/").replace(/ /g, "%20"));
}

function suppliedVisualSection(sector, svc) {
  const visuals = suppliedVisuals(sector, svc);
  if (!visuals.length) return "";
  return `<section class="supplied-visuals"><div class="container"><div class="section-heading"><p class="eyebrow">Selected material</p><h2>From the Doranax library</h2></div><div class="supplied-visuals-grid">${visuals.map((src) => `<div class="supplied-visual" style="background-image:url('${src}')"></div>`).join("")}</div></div></section>`;
}

function pageHero(image, title, back, eyebrow) {
  return `<section class="hero page-hero" style="background-image: url('${image}')">
    <div class="container hero-inner">
      ${back}
      ${eyebrow ? `<p class="eyebrow hero-eyebrow">${eyebrow}</p>` : ""}
      <h1>${title}</h1>
    </div>
  </section>`;
}

function splitSection(heading, paragraphs, mainImage, secondaryImage, link, reverse, eyebrow, sectionClass) {
  const paras = paragraphs.map((p) => `<p>${p}</p>`).join("\n          ");
  return `<section class="split-section${sectionClass ? ` ${sectionClass}` : ""}">
    <div class="container">
      <div class="split-grid${reverse ? " reverse" : ""}">
        <div class="split-text">
          ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
          <h2>${heading}</h2>
          ${paras}
          ${link ? `<a href="${link.href}" class="arrow-link">${link.label}${ARROW_SVG}</a>` : ""}
        </div>
        <div class="split-images">
          <div class="split-image-main" style="background-image: url('${mainImage}')"></div>
          <div class="split-image-secondary" style="background-image: url('${secondaryImage}')"></div>
        </div>
      </div>
    </div>
  </section>`;
}

function buildHome() {
  const stats = SITE.stats
    .map(
      (s) => `<div class="stat">${STAT_ICONS[s.key]}<div><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div></div>`
    )
    .join("\n        ");

  const sectorEyebrow = SECTORS.map((s) => s.name).join(" &nbsp;&middot;&nbsp; ");

  const heroBody = `<section class="hero home-hero" style="background-image: url('${SITE.heroImage}')">
    <div class="container hero-inner">
      <div class="hero-content">
        <p class="eyebrow hero-eyebrow">${sectorEyebrow}</p>
        <h1>${SITE.name}</h1>
        <p>${SITE.tagline}</p>
        <a href="#sectors" class="btn">Explore Our Sectors ${ARROW_SVG}</a>
      </div>
      <div class="stat-row">
        ${stats}
      </div>
    </div>
  </section>`;

  const about = splitSection(
    "About Doronax",
    SITE.aboutParagraphs,
    SITE.aboutImage,
    SITE.aboutImageSecondary,
    { href: "contact.html", label: "More Information" },
    false,
    "About the group",
    "home-about"
  );

  // Full rows of 3 use a 2-column span each (out of a 6-col grid); a
  // trailing partial row spreads its tiles evenly across all 6 columns
  // instead of leaving a gap, so 5 sectors reads as 3-then-2-centered.
  const remainder = SECTORS.length % 3;
  const fullRowCount = SECTORS.length - remainder;
  const wideSpan = remainder > 0 ? 6 / remainder : 2;

  const tiles = SECTORS.map((s, i) => {
    const isWide = i >= fullRowCount;
    const cls = isWide ? "sector-tile wide" : "sector-tile";
    const style = isWide
      ? `background-image: url('${s.tileImage}'); grid-column: span ${wideSpan}`
      : `background-image: url('${s.tileImage}')`;
    return `<a href="${s.slug}.html" class="${cls}" style="${style}">
          <div class="sector-tile-label"><span>${s.name}</span>${ARROW_SVG}</div>
        </a>`;
  }).join("\n        ");

  const sectors = `<section class="sectors-section home-sectors" id="sectors">
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">What we do</p>
        <h2>Explore Our Sectors</h2>
      </div>
      <div class="sector-grid">
        ${tiles}
      </div>
    </div>
  </section>`;

  const pathways = `<section class="pathways-section">
    <div class="container pathways-grid">
      <article><p class="eyebrow">Careers</p><h2>Job Applications</h2><p>We welcome thoughtful applications from people who want to build lasting businesses across our sectors.</p><a href="careers.html" class="arrow-link">Send an Application ${ARROW_SVG}</a></article>
      <article><p class="eyebrow">Partnerships</p><h2>Suppliers</h2><p>We work with capable suppliers who value quality, reliability and responsible long-term relationships.</p><a href="suppliers.html" class="arrow-link">Become a Supplier ${ARROW_SVG}</a></article>
    </div>
  </section>`;

  fs.writeFileSync(path.join(ROOT, "index.html"), page("Home", heroBody + sectors + pathways + about));
}

function buildSectorPage(sector) {
  const hero = pageHero(
    sector.heroImage,
    sector.name,
    backLinkLeft("index.html", "Back to Sectors"),
    "The Doronax Group"
  );

  const intro = `<section class="split-section compact">
    <div class="container">
      <p style="color: var(--navy-soft); max-width: 720px; font-size: 1.05rem;">${sector.intro}</p>
    </div>
  </section>`;

  const serviceListings = sector.services
    .map(
      (svc) => `<a href="${sector.slug}-${svc.slug}.html" class="service-listing">
        <div class="service-listing-image" style="background-image: url('${svc.heroImage}')"></div>
        <div class="service-listing-body"><h3>${svc.name}</h3><p>${svc.intro}</p><span class="arrow-link">View Full Page ${ARROW_SVG}</span></div>
      </a>`
    )
    .join("\n        ");

  const additional = sector.additionalServices
    ? `<div class="additional-services">
        <h2>Additional Services</h2>
        <div class="additional-grid">
          ${sector.additionalServices
            .map(
              (a) => `<div class="additional-card">
            <div class="additional-image" style="background-image: url('${a.image}')"></div>
            <h3>${a.name}</h3>
            <p>${a.description}</p>
          </div>`
            )
            .join("\n          ")}
        </div>
      </div>`
    : "";

  const services = `<section class="services-section front-and-center">
    <div class="container">
      <p class="eyebrow">Our Services</p>
      <h2>Services</h2>
      <div class="service-listings-grid">
        ${serviceListings}
      </div>
      ${additional}
    </div>
  </section>`;

  const cta = `<section class="dark-section" style="padding: var(--space-4) 0; text-align: center;">
    <div class="container">
      <div class="dark-section-header" style="justify-content: center; margin-bottom: 20px; flex-direction: column;">
        <p class="eyebrow" style="color: rgba(255,255,255,0.6);">Get In Touch</p>
        <h2>Interested in working with us?</h2>
      </div>
      <p style="color: rgba(255,255,255,0.7); margin-bottom: 28px;">Get in touch to learn more about ${sector.name}.</p>
      <a href="contact.html" class="btn btn-outline">Contact Us ${ARROW_SVG}</a>
    </div>
  </section>`;

  const script = "";

  fs.writeFileSync(
    path.join(ROOT, `${sector.slug}.html`),
    page(sector.name, hero + intro + services + cta, script)
  );
}

function buildServicePage(sector, svc) {
  const hero = pageHero(
    svc.heroImage,
    svc.name,
    backLinkLeft(`${sector.slug}.html`, `Back to ${sector.name}`),
    sector.name
  );

  if (svc.comingSoon) {
    const comingSoon = `<section class="split-section coming-soon-section"><div class="container"><div class="coming-soon-card"><p class="eyebrow">${sector.name}</p><h2>${svc.name}</h2><p>This offering is being prepared. We are shaping the right scope, partners and service details before launch.</p><a href="contact.html" class="btn">Register Your Interest ${ARROW_SVG}</a></div></div></section>`;
    fs.writeFileSync(path.join(ROOT, `${sector.slug}-${svc.slug}.html`), page(`${svc.name} — ${sector.name}`, hero + comingSoon));
    return;
  }

  const body = `<section class="split-section" style="padding-bottom: 56px;">
    <div class="container">
      <div class="split-grid">
        <div class="split-text">
          <p class="eyebrow">About</p>
          <h2>${svc.name}</h2>
          <p>${svc.intro}</p>
        </div>
        <div class="split-images">
          <div class="split-image-main" style="background-image: url('${svc.gallery[0]}')"></div>
          <div class="split-image-secondary" style="background-image: url('${svc.gallery[1]}')"></div>
        </div>
      </div>
    </div>
  </section>`;

  const offerings = svc.offerings
    ? (() => {
      const productMode = svc.kind === "product";
      const supplied = productMode ? suppliedVisuals(sector, svc) : [];
      const cards = svc.offerings.map(([name, description], index) => productMode
        ? `<article class="product-card">${supplied[index] ? `<div class="product-card-image" style="background-image:url('${supplied[index]}')"></div>` : ""}<div class="product-card-body"><span class="product-status">Doranax collection</span><h3>${name}</h3><p>${description}</p></div></article>`
        : `<article class="offering-card"><h3>${name}</h3><p>${description}</p></article>`).join("\n");
      return `<section class="offerings-section ${productMode ? "product-catalog-section" : ""}"><div class="container">
        <div class="section-heading"><h2>${productMode ? "Shop the collection" : svc.kind === "products-and-services" ? "Products & Services" : "What We Offer"}</h2></div>
        <div class="${productMode ? "product-grid" : "offerings-grid"}">${cards}</div>
      </div></section>`;
    })()
    : "";

  const profile = svc.profile
    ? `<section class="profile-section"><div class="container"><div class="profile-card">
      <p class="eyebrow">${svc.profile.role}</p><h2>${svc.profile.name}</h2><p>${svc.profile.copy}</p>
    </div></div></section>`
    : "";

  const listings = svc.listings
    ? `<section class="listings-section"><div class="container">
      <div class="section-heading"><h2>Available Yachts</h2></div>
      <div class="listing-grid">${svc.listings.map(([make, name, year, length, price, location]) => `<article class="listing-card">
        <div class="listing-image" style="background-image: url('${imgForListing(make)}')"></div>
        <div class="listing-body"><p class="eyebrow">${make}</p><h3>${name}</h3><dl><div><dt>Year</dt><dd>${year}</dd></div><div><dt>Length</dt><dd>${length}</dd></div><div><dt>Location</dt><dd>${location}</dd></div></dl><p class="listing-price">${price}</p></div>
      </article>`).join("\n")}</div>
      ${svc.broker ? `<div class="broker-card"><p class="eyebrow">Yacht broker</p><h2>${svc.broker.name}</h2><p>${svc.broker.company}</p><a href="#service-enquiry" class="btn">Contact ${svc.broker.name.split(" ")[0]} ${ARROW_SVG}</a></div>` : ""}
    </div></section>`
    : "";

  const enquiry = enquirySection(svc.name);
  const suppliedVisualsBlock = suppliedVisualSection(sector, svc);

  fs.writeFileSync(
    path.join(ROOT, `${sector.slug}-${svc.slug}.html`),
    page(`${svc.name} — ${sector.name}`, hero + body + offerings + profile + listings + suppliedVisualsBlock + enquiry)
  );
}

function buildOfferingPage(sector, svc, offering) {
  const [name, description] = offering;
  const hero = pageHero(svc.heroImage, name, backLinkLeft(`${sector.slug}-${svc.slug}.html`, `Back to ${svc.name}`));
  const body = `<section class="split-section"><div class="container"><div class="split-grid">
    <div class="split-text"><p class="eyebrow">${sector.name} / ${svc.name}</p><h2>${name}</h2><p>${description}</p><p>Every engagement starts with a focused conversation about requirements, timing and the result you need. We then confirm an appropriate scope before work begins.</p><a href="#service-enquiry" class="arrow-link">Discuss Your Requirements ${ARROW_SVG}</a></div>
    <div class="split-images"><div class="split-image-main" style="background-image: url('${svc.gallery[0]}')"></div><div class="split-image-secondary" style="background-image: url('${svc.gallery[1]}')"></div></div>
  </div></div></section>`;
  const enquiry = enquirySection(name);
  fs.writeFileSync(path.join(ROOT, offeringHref(sector, svc, name)), page(`${name} — ${svc.name}`, hero + body + enquiry));
}

function enquirySection(subject) {
  return `<section class="split-section service-enquiry" id="service-enquiry"><div class="container"><p class="eyebrow">Enquire</p><h2>Contact Us About ${subject}</h2>
    <form class="contact-form" data-enquiry-form>
      ${formHiddenFields(subject)}
      <label>Full Name<input type="text" name="name" required /></label><label>Email<input type="email" name="email" required /></label><label>Phone Number<input type="tel" name="phone" /></label><label>Message<textarea name="message" rows="5" required></textarea></label>
      <button type="submit" class="btn">Submit ${ARROW_SVG}</button><p class="form-status" aria-live="polite"></p>
    </form></div></section>`;
}

function imgForListing(make) {
  return "assets/images/generated/hospitality-events-sector.png";
}

function buildContact() {
  const hero = pageHero(CONTACT.heroImage, "Contact", backLinkLeft("index.html", "Back to Home"));

  const body = `<section class="split-section contact-body">
    <div class="container">
      <p class="intro" style="color: var(--gray); max-width: 640px; font-size: 1.05rem; margin-bottom: 44px;">${CONTACT.intro}</p>

      <div class="contact-grid">
        <div class="contact-details">
          <h3>General Enquiries</h3>
          <p><a href="mailto:${SITE.email}">${SITE.email}</a></p>
          <h3>Registered Office</h3>
          <p>${SITE.name} Ltd<br />United Kingdom</p>
        </div>
        <form class="contact-form" data-enquiry-form>
          ${formHiddenFields("General")}
          <label>Name<input type="text" name="name" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Sector of Interest
            <select name="sector">
              ${SECTORS.map((s) => `<option>${s.name}</option>`).join("\n              ")}
            </select>
          </label>
          <label>Message<textarea name="message" rows="5" required></textarea></label>
          <button type="submit" class="btn">Send Enquiry ${ARROW_SVG}</button>
          <p class="form-status" aria-live="polite"></p>
        </form>
      </div>
    </div>
  </section>`;

  fs.writeFileSync(path.join(ROOT, "contact.html"), page("Contact", hero + body));
}

function buildPathwayPage(type) {
  const isCareer = type === "careers";
  const title = isCareer ? "Job Applications" : "Supplier Partnerships";
  const intro = isCareer
    ? "Tell us where your experience could contribute across Doronax Albion Holdings. Applications are reviewed against current and emerging opportunities."
    : "Introduce your organisation, capabilities and the sectors you support. We value dependable suppliers committed to quality and responsible practice.";
  const hero = pageHero(SITE.aboutImage, title, backLinkLeft("index.html", "Back to Home"));
  const body = `<section class="split-section"><div class="container contact-grid"><div class="split-text"><h2>${isCareer ? "Build with us" : "Work with our group"}</h2><p>${intro}</p><p>${isCareer ? "Please include the sector or type of role that interests you. You can add links to a CV, portfolio or professional profile in your message." : "Please include your service area, geographic coverage and a link to relevant certifications or company information."}</p></div>
    <form class="contact-form" data-enquiry-form>${formHiddenFields(title)}<label>Full Name<input type="text" name="name" required /></label><label>Email<input type="email" name="email" required /></label><label>Phone Number<input type="tel" name="phone" /></label><label>${isCareer ? "Sector / role" : "Company / service area"}<input type="text" name="topic" required /></label><label>Message<textarea name="message" rows="6" required></textarea></label><button class="btn" type="submit">${isCareer ? "Submit Application" : "Introduce Your Company"} ${ARROW_SVG}</button><p class="form-status" aria-live="polite"></p></form>
  </div></section>`;
  fs.writeFileSync(path.join(ROOT, `${type}.html`), page(title, hero + body));
}

function run() {
  // Remove legacy generated offering routes now that offerings live inline on
  // their parent service pages. This keeps the static output route set honest.
  SECTORS.forEach((sector) => sector.services.forEach((svc) => (svc.offerings || []).forEach((offering) => {
    const legacyPath = path.join(ROOT, offeringHref(sector, svc, offering[0]));
    if (fs.existsSync(legacyPath)) fs.unlinkSync(legacyPath);
  })));
  buildHome();
  SECTORS.forEach((sector) => {
    buildSectorPage(sector);
    sector.services.forEach((svc) => {
      buildServicePage(sector, svc);
      // Offerings are intentionally listed on the parent service page rather than generated as separate pages.
    });
  });
  buildContact();
  buildPathwayPage("careers");
  buildPathwayPage("suppliers");

  const serviceCount = SECTORS.reduce((n, s) => n + s.services.length, 0);
  const pageCount = 1 + SECTORS.length + serviceCount + 3;
  console.log(`Built ${pageCount} pages.`);
}

run();
