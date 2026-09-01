/**
 * Download official showroom videos for PremiumShowcase section.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const VIDEOS = [
  {
    url: 'https://keuken-centrum.nl/__l5e/assets-v1/d6ef8c69-45fc-4ee0-b589-c6f9a97b5c86/nobilia-showroom.mp4',
    name: 'nobilia-showroom.mp4',
    label: 'main — Kom langs / Keuken-Centrum Utrecht showcase',
  },
  {
    url: 'https://keuken-centrum.nl/__l5e/assets-v1/b39fea8b-556f-474f-a3b8-15e177ff4886/hero-video.mp4',
    name: 'hero-video.mp4',
    label: 'thumb 1',
  },
  {
    url: 'https://keuken-centrum.nl/__l5e/assets-v1/c5792c52-a2eb-42f8-935b-7880f44ae56b/before-after-keuken.mp4',
    name: 'before-after-keuken.mp4',
    label: 'thumb 2',
  },
];

const targets = [
  path.join(root, 'src/assets'),
  path.join(root, 'wordpress/keuken-centrum/assets/video'),
];

for (const dir of targets) fs.mkdirSync(dir, { recursive: true });

for (const video of VIDEOS) {
  console.log(`Downloading ${video.label}: ${video.name}`);
  const res = await fetch(video.url);
  if (!res.ok) {
    console.error(`  FAIL HTTP ${res.status}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  for (const dir of targets) {
    const dest = path.join(dir, video.name);
    fs.writeFileSync(dest, buf);
    console.log(`  -> ${dest} (${(buf.length / 1024 / 1024).toFixed(2)} MB)`);
  }
}

console.log('Done.');
