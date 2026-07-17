#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const prohibited = [
  "Patisserie Valerie", "Jack & Beyond", "Wayback Burgers", "Junk Burgers",
  "Wicstun", "Tan's Entertainment", "weareharrison.com", "Quintessentially",
];
const pages = fs.readdirSync(root).filter((file) => file.endsWith(".html"));
const errors = [];

for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  for (const term of prohibited) if (html.toLowerCase().includes(term.toLowerCase())) errors.push(`${file}: prohibited term ${term}`);
  for (const match of html.matchAll(/href="([^"]+\.html)"/g)) {
    if (!fs.existsSync(path.join(root, match[1]))) errors.push(`${file}: missing link ${match[1]}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Validated ${pages.length} pages: no prohibited terms or broken internal links.`);
