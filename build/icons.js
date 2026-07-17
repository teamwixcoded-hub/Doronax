/* Simple white line-art icons (24x24 viewBox), stroke-based, no fills.
   Used in navy icon-grid sections. */

const ICONS = {
  advertising: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10v4a1 1 0 0 0 1 1h2l4 4V5L6 9H4a1 1 0 0 0-1 1Z"/><path d="M15 8a4 4 0 0 1 0 8"/><path d="M18 5a8 8 0 0 1 0 14"/></svg>`,
  consultancy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="7" width="18" height="12" rx="1.5"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></svg>`,
  furniture: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5"/><path d="M4 12h16v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z"/><path d="M5 17v3M19 17v3"/></svg>`,
  "hospitality-events": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="16" rx="1.5"/><path d="M3 10h18"/><path d="M8 3v4M16 3v4"/><path d="M8 14h2M14 14h2M8 17h2M14 17h2"/></svg>`,
  "sports-wellness": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s-7-4.35-9.5-8.5C.7 8.9 2.6 5 6.3 5 8.4 5 10.4 6.2 12 8c1.6-1.8 3.6-3 5.7-3 3.7 0 5.6 3.9 3.8 7.5C19 16.65 12 21 12 21Z"/></svg>`,
  "albion-holdings": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21h18"/><path d="M4 21V10l8-6 8 6v11"/><path d="M9 21v-6h6v6"/></svg>`,
};

const STAT_ICONS = {
  sectors: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z"/></svg>`,
  services: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  hq: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s7-5.3 7-11.5A7 7 0 0 0 5 9.5C5 15.7 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.3"/></svg>`,
};

module.exports = { ICONS, STAT_ICONS };
