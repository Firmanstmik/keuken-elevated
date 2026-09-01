/**
 * Download high-priority official assets from keuken-centrum.nl
 * and mirror to WP theme + React src/assets.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const ASSETS = [
  {
    url: 'https://keuken-centrum.nl/__l5e/assets-v1/2f3a17ca-beba-4c65-839d-76d2531cb05a/logo-keuken-centrum-transparent.png',
    name: 'logo-keuken-centrum-transparent.png',
  },
  {
    url: 'https://keuken-centrum.nl/__l5e/assets-v1/01fdb991-f5a1-49e8-afa6-bbe34fe11f90/logo-keuken-centrum-footer.png',
    name: 'logo-keuken-centrum-footer.png',
  },
  {
    url: 'https://keuken-centrum.nl/__l5e/assets-v1/764cb01b-6524-43b8-bfdf-29362ecc48dd/keukenspecialist.png',
    name: 'keukenspecialist.png',
  },
  {
    url: 'https://keuken-centrum.nl/__l5e/assets-v1/90249382-8752-40a6-8420-4f0f32a1b54e/cbw-erkend.png',
    name: 'cbw-erkend.png',
  },
  {
    url: 'https://keuken-centrum.nl/__l5e/assets-v1/0cd4baa0-3d8a-44fb-88a0-cc32ff503457/showroom-elegant-samenspel-nieuw.jpg',
    name: 'showroom-elegant-samenspel.jpg',
  },
];

const targets = [
  path.join(root, 'wordpress/keuken-centrum/assets/img'),
  path.join(root, 'src/assets'),
];

for (const dir of targets) {
  fs.mkdirSync(dir, { recursive: true });
}

for (const asset of ASSETS) {
  const res = await fetch(asset.url);
  if (!res.ok) {
    console.error(`FAIL ${asset.name}: HTTP ${res.status}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  for (const dir of targets) {
    const dest = path.join(dir, asset.name);
    fs.writeFileSync(dest, buf);
    console.log(`saved ${dest} (${buf.length} bytes)`);
  }
}

console.log('\nDone.');
