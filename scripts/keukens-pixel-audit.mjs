/**
 * Keukens React↔WP geometry audit (mandatory viewport matrix).
 * Usage: node scripts/keukens-pixel-audit.mjs
 * Optional: ROUTES_FILTER=/keukens/ VIEWPORTS_FILTER=390,1440
 */
import puppeteer from 'puppeteer-core';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const REACT = process.env.REACT_BASE || 'http://localhost:8080';
const WP = process.env.WP_BASE || 'https://keuken-centrum.localclicks.nl';
const CHROME =
  process.env.CHROME_PATH ||
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const ALL_ROUTES = [
  '/keukens/',
  '/keukens/leicht/',
  '/keukens/leicht/kyoto/',
  '/keukens/leicht/bossa/',
  '/keukens/leicht/taj-mahal/',
  '/keukens/leicht/ronde-wangen/',
  '/keukens/nobilia/',
  '/keukens/ai-kuchen/',
  '/keukens/zampieri/',
  '/keukens/cucinesse/',
];

const ALL_VIEWPORTS = [
  { name: '390', width: 390, height: 844, mobile: true },
  { name: '430', width: 430, height: 844, mobile: true },
  { name: '768', width: 768, height: 1024, mobile: true },
  { name: '1024', width: 1024, height: 768, mobile: false },
  { name: '1280', width: 1280, height: 800, mobile: false },
  { name: '1440', width: 1440, height: 900, mobile: false },
  { name: '1536', width: 1536, height: 864, mobile: false },
  { name: '1920', width: 1920, height: 1080, mobile: false },
];

const ROUTES = process.env.ROUTES_FILTER
  ? ALL_ROUTES.filter((r) => r.includes(process.env.ROUTES_FILTER))
  : ALL_ROUTES;

const VIEWPORTS = process.env.VIEWPORTS_FILTER
  ? ALL_VIEWPORTS.filter((v) =>
      process.env.VIEWPORTS_FILTER.split(',').map((s) => s.trim()).includes(v.name),
    )
  : ALL_VIEWPORTS;

const TOL = {
  heroH: 10,
  h1Size: 1.5,
  h1LH: 2.5,
  containerW: 10,
  sectionH: 28,
  ctaH: 8,
  pad: 14,
};

const MEASURE_FN = () => {
  const q = (s) => document.querySelector(s);
  const qa = (s) => [...document.querySelectorAll(s)];
  const rect = (el) => {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      x: Math.round(r.x),
      y: Math.round(r.y),
      w: Math.round(r.width),
      h: Math.round(r.height),
    };
  };
  const cs = (el) => (el ? getComputedStyle(el) : null);
  const num = (v) => (v == null || v === 'normal' ? null : parseFloat(v));

  const hero = q('.brand-page-hero');
  const heroContent =
    q('.brand-page-hero__content') || q('.brand-page-hero .site-container');
  const h1 = q('.brand-page-hero h1') || q('h1');
  const h1cs = cs(h1);
  const container =
    q('.brand-page-hero .site-container') ||
    q('.site-container') ||
    q('.brand-page-hero__content');
  const cta =
    q('.brand-page-hero a.premium-pill-button') ||
    q('.brand-page-hero .premium-pill-button') ||
    q('.brand-page-hero a[href*="consultation"], .brand-page-hero a[href*="#consultation"]');

  const intro =
    q('.keukens-intro-grid') ||
    q('.brand-intro') ||
    q('.brand-series-intro');
  const brandGrid = q('.keukens-brand-grid');
  const pillars = q('.brand-pillars, .brand-pillars__grid, .keukens-value-grid');
  const series = q('.brand-series__grid');
  const seriesCard = q('.brand-series__grid .brand-series__card');
  const seriesCards = qa('.brand-series__grid .brand-series__card');
  const seriesCs = series ? getComputedStyle(series) : null;
  const seriesCardCs = seriesCard ? getComputedStyle(seriesCard) : null;
  const gallery = q('.brand-series-gallery, .brand-gallery');
  const related = q('.brand-series-related');
  const faq = q('.brand-faq');
  const faqGrid = q('.keukens-faq-grid');
  const faqItem = q('.brand-faq__item');
  const fontsOk =
    document.fonts.check('400 80px Fraunces') || document.fonts.check('80px Fraunces');
  const features = getComputedStyle(document.body).fontFeatureSettings;
  const advisors = q('.keukens-advisor-grid, .brand-advisor-grid');
  const bottom = q('.brand-showroom-cta');
  const footer = q('footer.site-footer, footer');
  const bottomNav = q(
    'nav[aria-label*="Mobiele"], nav[aria-label*="hoofdnavigatie"], .mobile-bottom-nav',
  );

  const overflow = document.documentElement.scrollWidth > window.innerWidth + 1;

  return {
    clientWidth: document.documentElement.clientWidth,
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    overflow,
    container: rect(container),
    hero: rect(hero),
    heroContent: rect(heroContent),
    heroPadTop: heroContent ? num(cs(heroContent).paddingTop) : null,
    heroPadBottom: heroContent ? num(cs(heroContent).paddingBottom) : null,
    h1: {
      text: (h1?.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80),
      size: h1cs ? num(h1cs.fontSize) : null,
      lh: h1cs ? num(h1cs.lineHeight) : null,
      ls: h1cs ? h1cs.letterSpacing : null,
      rect: rect(h1),
    },
    cta: {
      rect: rect(cta),
      label: cta
        ? (cta.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 40)
        : null,
      href: cta ? cta.getAttribute('href') : null,
    },
    sections: {
      intro: intro ? Math.round(intro.getBoundingClientRect().height) : null,
      brandGrid: brandGrid
        ? Math.round(brandGrid.getBoundingClientRect().height)
        : null,
      pillars: pillars ? Math.round(pillars.getBoundingClientRect().height) : null,
      series: series ? Math.round(series.getBoundingClientRect().height) : null,
      seriesCardCount: seriesCards.length,
      seriesCardMinH: seriesCardCs ? parseFloat(seriesCardCs.minHeight) : null,
      seriesCardH: seriesCard ? Math.round(seriesCard.getBoundingClientRect().height) : null,
      seriesCols: seriesCs ? seriesCs.gridTemplateColumns : null,
      seriesGap: seriesCs ? parseFloat(seriesCs.gap || seriesCs.rowGap) : null,
      gallery: gallery ? Math.round(gallery.getBoundingClientRect().height) : null,
      related: related ? Math.round(related.getBoundingClientRect().height) : null,
      faq: faq ? Math.round(faq.getBoundingClientRect().height) : null,
      faqGrid: faqGrid ? Math.round(faqGrid.getBoundingClientRect().height) : null,
      faqItem: faqItem ? Math.round(faqItem.getBoundingClientRect().height) : null,
      fontsOk,
      features,
      advisors: advisors
        ? Math.round(advisors.getBoundingClientRect().height)
        : null,
      bottom: bottom ? Math.round(bottom.getBoundingClientRect().height) : null,
    },
    footer: rect(footer),
    bottomNav: bottomNav ? rect(bottomNav) : null,
    heroLinks: qa('.brand-page-hero a')
      .slice(0, 4)
      .map((a) => ({
        label: (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 40),
        href: a.getAttribute('href') || '',
      })),
    title: document.title,
  };
};

function delta(a, b) {
  if (a == null || b == null) return null;
  return Math.round((Number(b) - Number(a)) * 100) / 100;
}

function within(d, tol) {
  if (d == null) return true;
  return Math.abs(d) <= tol;
}

function compare(react, wp) {
  const issues = [];
  const push = (key, r, w, tol, label) => {
    const d = delta(r, w);
    const ok =
      (r == null && w == null) ||
      (r == null) !== (w == null)
        ? r == null && w == null
        : within(d, tol);
    // Missing on one side only when both expected — flag if one has value and other null for critical keys
    if (r == null && w == null) return;
    if ((r == null) !== (w == null)) {
      // section only on one side — skip soft sections; flag critical
      if (['heroH', 'h1Size', 'h1LH', 'overflow'].includes(key) || key.startsWith('sec_')) {
        if (['heroH', 'h1Size', 'h1LH'].includes(key)) {
          issues.push({ key, react: r, wp: w, delta: d, tol, label: label + ' (missing side)' });
        }
      }
      return;
    }
    if (!within(d, tol)) issues.push({ key, react: r, wp: w, delta: d, tol, label });
  };

  push('heroH', react.hero?.h, wp.hero?.h, TOL.heroH, 'Hero height');
  push('h1Size', react.h1?.size, wp.h1?.size, TOL.h1Size, 'H1 font-size');
  push('h1LH', react.h1?.lh, wp.h1?.lh, TOL.h1LH, 'H1 line-height');
  push('containerW', react.container?.w, wp.container?.w, TOL.containerW, 'Container width');
  push('ctaH', react.cta?.rect?.h, wp.cta?.rect?.h, TOL.ctaH, 'CTA height');
  push('heroPadTop', react.heroPadTop, wp.heroPadTop, TOL.pad, 'Hero padding-top');
  push('heroPadBottom', react.heroPadBottom, wp.heroPadBottom, TOL.pad, 'Hero padding-bottom');

  for (const [k, tol] of Object.entries({
    intro: TOL.sectionH,
    brandGrid: TOL.sectionH,
    pillars: TOL.sectionH,
    gallery: TOL.sectionH,
    related: TOL.sectionH,
    faq: TOL.sectionH,
    advisors: TOL.sectionH,
    bottom: TOL.sectionH,
  })) {
    const r = react.sections?.[k];
    const w = wp.sections?.[k];
    if (r != null && w != null) push(`sec_${k}`, r, w, tol, `Section ${k} height`);
  }

  // Series grid total height is asset-aspect sensitive; compare structure instead.
  if (react.sections?.seriesCardCount != null && wp.sections?.seriesCardCount != null) {
    push(
      'seriesCount',
      react.sections.seriesCardCount,
      wp.sections.seriesCardCount,
      0,
      'Series card count',
    );
  }
  if (react.sections?.seriesCardMinH != null && wp.sections?.seriesCardMinH != null) {
    push(
      'seriesCardMinH',
      react.sections.seriesCardMinH,
      wp.sections.seriesCardMinH,
      2,
      'Series card min-height',
    );
  }
  if (react.sections?.seriesGap != null && wp.sections?.seriesGap != null) {
    push('seriesGap', react.sections.seriesGap, wp.sections.seriesGap, 1, 'Series grid gap');
  }

  if (react.sections?.faqItem != null && wp.sections?.faqItem != null) {
    push('faqItem', react.sections.faqItem, wp.sections.faqItem, 4, 'FAQ item height');
  }

  if (Boolean(react.overflow) !== Boolean(wp.overflow)) {
    issues.push({
      key: 'overflow',
      react: react.overflow,
      wp: wp.overflow,
      delta: null,
      tol: 0,
      label: 'Horizontal overflow',
    });
  }

  return { status: issues.length === 0 ? 'PASS' : 'DELTA', issues };
}

async function preparePage(page, vp) {
  await page.setViewport({
    width: vp.width,
    height: vp.height,
    deviceScaleFactor: 1,
    isMobile: vp.mobile,
    hasTouch: vp.mobile,
  });
}

async function measurePageOnce(page, url, vp) {
  await preparePage(page, vp);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.evaluate(async () => {
    const load = async (spec) => {
      try {
        await document.fonts.load(spec);
      } catch (_) {
        /* ignore */
      }
    };
    await load('400 80px Fraunces');
    await load('400 48px Fraunces');
    await load('italic 400 80px Fraunces');
    await document.fonts.ready;
    // Poll until Fraunces resolves (LiteSpeed / @import can lag).
    for (let i = 0; i < 40; i += 1) {
      if (
        document.fonts.check('400 80px Fraunces') ||
        document.fonts.check('80px Fraunces')
      ) {
        break;
      }
      await new Promise((r) => setTimeout(r, 100));
    }
  });
  await sleep(400);
  await page.evaluate(() => {
    const bar = document.getElementById('wpadminbar');
    if (bar) bar.remove();
    document.documentElement.classList.remove('admin-bar');
    if (document.body) {
      document.body.classList.remove('admin-bar');
      document.body.style.marginTop = '0';
      document.body.style.paddingTop = '0';
    }
  });
  await page.waitForSelector('.brand-page-hero, h1', { timeout: 15000 }).catch(() => {});
  // Reject mid-layout / pre-paint hero heights (classic false heroH:~80).
  for (let i = 0; i < 25; i += 1) {
    const heroH = await page.evaluate(() => {
      const hero = document.querySelector('.brand-page-hero');
      return hero ? hero.getBoundingClientRect().height : 0;
    });
    const fontsOk = await page.evaluate(
      () =>
        document.fonts.check('400 80px Fraunces') ||
        document.fonts.check('80px Fraunces'),
    );
    if (fontsOk && heroH > 200) break;
    await sleep(120);
  }
  await sleep(200);
  const metrics = await page.evaluate(MEASURE_FN);
  // One hard retry if hero still collapsed after settle.
  if ((metrics?.hero?.h || 0) > 0 && (metrics?.hero?.h || 0) < 200) {
    await page.reload({ waitUntil: 'domcontentloaded', timeout: 90000 });
    await page.evaluate(async () => {
      await document.fonts.load('400 80px Fraunces');
      await document.fonts.load('italic 400 80px Fraunces');
      await document.fonts.ready;
    });
    await sleep(800);
    await page.evaluate(() => document.getElementById('wpadminbar')?.remove());
    return { ok: true, url, metrics: await page.evaluate(MEASURE_FN) };
  }
  return { ok: true, url, metrics };
}

async function measurePage(page, url, vp) {
  let lastErr = null;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      return await measurePageOnce(page, url, vp);
    } catch (err) {
      lastErr = err;
      await sleep(700 * attempt);
    }
  }
  return { ok: false, url, error: String(lastErr?.message || lastErr) };
}

async function measureSeo(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(300);
  return page.evaluate(() => {
    const m = (n) => document.querySelector(`meta[name="${n}"]`)?.content || null;
    const p = (n) => document.querySelector(`meta[property="${n}"]`)?.content || null;
    return {
      title: document.title,
      description: m('description'),
      canonical: document.querySelector('link[rel="canonical"]')?.href || null,
      ogTitle: p('og:title'),
      ogDescription: p('og:description'),
      ogImage: p('og:image'),
      h1: document.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim() || null,
    };
  });
}

function normalizePath(p) {
  return p.replace(/\/$/, '') || '/';
}

async function main() {
  console.log(`Routes: ${ROUTES.length}, Viewports: ${VIEWPORTS.length}`);
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    protocolTimeout: 180000,
    args: [
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--hide-scrollbars',
      '--window-size=1920,1080',
    ],
  });

  const reactPage = await browser.newPage();
  const wpPage = await browser.newPage();
  // Avoid admin cookies affecting WP layout
  await wpPage.setExtraHTTPHeaders({ 'Cache-Control': 'no-cache' });

  const matrix = {};
  const details = [];
  const seo = {};
  const allCells = [];

  try {
    for (const route of ROUTES) {
      matrix[route] = {};
      console.log(`\n=== ${route} ===`);

      try {
        const reactSeo = await measureSeo(reactPage, `${REACT}${normalizePath(route)}`);
        const wpSeo = await measureSeo(wpPage, `${WP}${route}?nocache=seo`);
        seo[route] = { react: reactSeo, wp: wpSeo };
      } catch (e) {
        seo[route] = { error: String(e?.message || e) };
      }

      for (const vp of VIEWPORTS) {
        process.stdout.write(`  ${vp.name}... `);
        const reactUrl = `${REACT}${normalizePath(route)}`;
        const wpUrl = `${WP}${route}?nocache=${Date.now()}-${vp.name}`;

        const [r, w] = await Promise.all([
          measurePage(reactPage, reactUrl, vp),
          measurePage(wpPage, wpUrl, vp),
        ]);

        if (!r.ok || !w.ok) {
          matrix[route][vp.name] = 'UNVERIFIED';
          const cell = {
            route,
            viewport: vp.name,
            status: 'UNVERIFIED',
            reactError: r.error || null,
            wpError: w.error || null,
          };
          details.push(cell);
          allCells.push(cell);
          console.log(
            `UNVERIFIED r=${r.error || 'ok'} w=${w.error || 'ok'}`.slice(0, 120),
          );
          continue;
        }

        const cmp = compare(r.metrics, w.metrics);
        matrix[route][vp.name] = cmp.status;
        const cell = {
          route,
          viewport: vp.name,
          status: cmp.status,
          react: {
            heroH: r.metrics.hero?.h,
            h1Size: r.metrics.h1?.size,
            h1LH: r.metrics.h1?.lh,
            h1Text: r.metrics.h1?.text,
            containerW: r.metrics.container?.w,
            ctaH: r.metrics.cta?.rect?.h,
            padT: r.metrics.heroPadTop,
            padB: r.metrics.heroPadBottom,
            overflow: r.metrics.overflow,
            sections: r.metrics.sections,
            heroLinks: r.metrics.heroLinks,
          },
          wp: {
            heroH: w.metrics.hero?.h,
            h1Size: w.metrics.h1?.size,
            h1LH: w.metrics.h1?.lh,
            h1Text: w.metrics.h1?.text,
            containerW: w.metrics.container?.w,
            ctaH: w.metrics.cta?.rect?.h,
            padT: w.metrics.heroPadTop,
            padB: w.metrics.heroPadBottom,
            overflow: w.metrics.overflow,
            sections: w.metrics.sections,
            heroLinks: w.metrics.heroLinks,
          },
          issues: cmp.issues,
        };
        details.push(cell);
        allCells.push(cell);
        console.log(
          cmp.status +
            (cmp.issues.length
              ? ` (${cmp.issues.map((i) => `${i.key}:${i.delta}`).join(', ')})`
              : ''),
        );
      }

      const cells = VIEWPORTS.map((v) => matrix[route][v.name]);
      if (cells.includes('UNVERIFIED')) matrix[route].final = 'UNVERIFIED';
      else if (cells.includes('DELTA')) matrix[route].final = 'DELTA';
      else matrix[route].final = 'PASS';
      console.log(`  → final ${matrix[route].final}`);
    }
  } finally {
    await browser.close();
  }

  const outDir = join(__dirname, 'audit-out');
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, 'keukens-pixel-audit.json');
  const report = {
    generatedAt: new Date().toISOString(),
    react: REACT,
    wp: WP,
    tolerances: TOL,
    matrix,
    seo,
    failures: details.filter((d) => d.status !== 'PASS'),
    summary: {
      routes: ROUTES.length,
      viewports: VIEWPORTS.length,
      cells: allCells.length,
      pass: allCells.filter((d) => d.status === 'PASS').length,
      delta: allCells.filter((d) => d.status === 'DELTA').length,
      unverified: allCells.filter((d) => d.status === 'UNVERIFIED').length,
    },
  };
  writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`\nWrote ${outPath}`);
  console.log(JSON.stringify(report.summary, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
