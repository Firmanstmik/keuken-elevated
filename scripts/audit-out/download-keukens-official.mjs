import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const officialDir = join(root, 'wordpress/keuken-centrum/assets/img/collections/official');
const extrasDir = join(officialDir, 'extras');
const showroomDir = join(root, 'wordpress/keuken-centrum/assets/img/showroom-keukens/official');

const assets = [
  {
    file: 'extras/keuken-indeling.jpg',
    url: 'https://keuken-centrum.nl/__l5e/assets-v1/2f12a8be-0415-4038-919c-daf12690de28/IMG_0655.jpg',
  },
  {
    file: 'extras/showroom-breed.jpg',
    url: 'https://keuken-centrum.nl/__l5e/assets-v1/9d3c9568-a1f2-4b7d-bc57-e2ffa6f950ef/IMG_0641.jpg',
  },
  {
    file: 'extras/leicht-keuken.webp',
    url: 'https://keuken-centrum.nl/__l5e/assets-v1/86f6286f-0477-4e68-895a-7df8971382af/Leicht_keuken.webp',
  },
  {
    file: 'extras/keuken-op-maat.webp',
    url: 'https://keuken-centrum.nl/__l5e/assets-v1/1d214538-0123-44a3-85fb-6f1803ed138a/IMG_0626-scaled.webp',
  },
  {
    file: 'extras/leicht-aluro-actie.jpg',
    url: 'https://keuken-centrum.nl/__l5e/assets-v1/5f930820-fb81-47dc-97bc-d951a63a12e5/IMG_0619_LEICHT_Aluro-2.jpg',
  },
  {
    file: '../showroom-keukens/official/showroom-keuken.png',
    url: 'https://keuken-centrum.nl/__l5e/assets-v1/e7f30bba-bca8-4b26-a82c-8ca276c35b3d/showroom-keuken.png',
  },
];

mkdirSync(extrasDir, { recursive: true });
mkdirSync(showroomDir, { recursive: true });

for (const asset of assets) {
  const dest = asset.file.startsWith('../')
    ? join(root, 'wordpress/keuken-centrum/assets/img', asset.file.replace('../', ''))
    : join(officialDir, asset.file);
  if (existsSync(dest)) {
    console.log('SKIP', dest);
    continue;
  }
  const res = await fetch(asset.url);
  if (!res.ok) {
    console.error('FAIL', asset.file, res.status);
    continue;
  }
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  console.log('OK', dest);
}

console.log('done');
