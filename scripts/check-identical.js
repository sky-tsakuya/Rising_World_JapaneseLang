const fs = require('fs');
const path = require('path');

function flattenKeys(obj, parent = '', sep = '.') {
  const items = [];
  for (const [k, v] of Object.entries(obj)) {
    const newKey = parent ? `${parent}${sep}${k}` : k;
    if (typeof v === 'object' && v !== null) {
      items.push(...flattenKeys(v, newKey, sep));
    } else {
      items.push([newKey, v]);
    }
  }
  return items;
}

const enPath = path.join(__dirname, '..', 'locales', 'en.json');
const jaPath = path.join(__dirname, '..', 'locales', 'ja.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ja = JSON.parse(fs.readFileSync(jaPath, 'utf8'));

const enFlat = Object.fromEntries(flattenKeys(en));
const jaFlat = Object.fromEntries(flattenKeys(ja));

const identical = [];
for (const [k, v] of Object.entries(enFlat)) {
  if (jaFlat[k] === v) {
    identical.push(`${k}: "${v}"`);
  }
}

console.log(`\n=== 同一値キー (${identical.length}件) ===`);
identical.sort().forEach(line => console.log(line));
if (identical.length === 0) console.log('同一値キーなし');
