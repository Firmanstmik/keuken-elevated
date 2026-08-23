/**
 * Apparatuur React↔WP geometry audit — sequential certification harness.
 * Usage: node scripts/apparatuur-pixel-audit.mjs
 * Output: scripts/audit-out/appareil-pixel-audit.json
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
  '/apparatuur/',
  '/apparatuur/afzuigkappen/',
  '/apparatuur/werkblad-afzuiging/',
  '/apparatuur/kookplaten/',
  '/apparatuur/fornuizen/',
  '/apparatuur/koelkasten-vriezers/',
  '/apparatuur/vaatwassers/',
  '/apparatuur/quooker/',
  '/apparatuur/wave-afzuigkappen/',
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

  const intro = q('.keukens-intro-grid') || q('.brand-intro') || q('.brand-series-intro');
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
  const em = h1?.querySelector('em');
  const emcs = cs(em);
  const family = h1cs?.fontFamily || '';
  const familyOk = /fraunces/i.test(family);
  const romanOk =
    document.fonts.check('400 80px Fraunces') ||
    document.fonts.check('400 48px Fraunces') ||
    document.fonts.check('80px Fraunces');
  const italicOk =
    document.fonts.check('italic 400 80px Fraunces') ||
    document.fonts.check('italic 700 80px Fraunces');
  const fontsOk = Boolean(familyOk && (romanOk || italicOk || document.fonts.status === 'loaded'));
  let h1Lines = null;
  if (h1) {
    const range = document.createRange();
    range.selectNodeContents(h1);
    h1Lines = new Set([...range.getClientRects()].map((r) => Math.round(r.top))).size;
  }
  const advisors = q('.keukens-advisor-grid, .brand-advisor-grid');
  const bottom = q('.brand-showroom-cta');
  const footer = q('footer.site-footer, footer');
  const overflow = document.documentElement.scrollWidth > window.innerWidth + 1;

  return {
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
      rect: rect(h1),
      lines: h1Lines,
      fontFamily: family,
      fontStyle: h1cs?.fontStyle || null,
      fontWeight: h1cs?.fontWeight || null,
      emStyle: emcs?.fontStyle || null,
    },
    fonts: { ok: fontsOk, familyOk, romanOk, italicOk, family },
    cta: {
      rect: rect(cta),
      label: cta ? (cta.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 40) : null,
      href: cta ? cta.getAttribute('href') : null,
    },
    sections: {
      intro: intro ? Math.round(intro.getBoundingClientRect().height) : null,
      brandGrid: brandGrid ? Math.round(brandGrid.getBoundingClientRect().height) : null,
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
      features: getComputedStyle(document.body).fontFeatureSettings,
      advisors: advisors ? Math.round(advisors.getBoundingClientRect().height) : null,
      bottom: bottom ? Math.round(bottom.getBoundingClientRect().height) : null,
    },
    footer: rect(footer),
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
    if (r == null && w == null) return;
    if ((r == null) !== (w == null)) {
      if (['heroH', 'h1Size', 'h1LH'].includes(key)) {
        issues.push({ key, react: r, wp: w, delta: d, tol, label: `${label} (missing side)` });
      }
      return;
    }
    if (!within(d, tol)) issues.push({ key, react: r, wp: w, delta: d, tol, label });
  };

  push('heroH', react.hero?.h, wp.hero?.h, TOL.heroH, 'Hero height');
  push('h1H', react.h1?.rect?.h, wp.h1?.rect?.h, 4, 'H1 height');
  push('h1Lines', react.h1?.lines, wp.h1?.lines, 0, 'H1 line count');
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

  if (react.sections?.seriesCardCount != null && wp.sections?.seriesCardCount != null) {
    push('seriesCount', react.sections.seriesCardCount, wp.sections.seriesCardCount, 0, 'Series card count');
  }
  if (react.sections?.seriesCardMinH != null && wp.sections?.seriesCardMinH != null) {
    push('seriesCardMinH', react.sections.seriesCardMinH, wp.sections.seriesCardMinH, 2, 'Series card min-height');
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

function normalizePath(p) {
  return p.replace(/\/$/, '') || '/';
}

function isTransient(err) {
  const msg = String(err?.message || err);
  return /net::|NetworkError|Timeout|ERR_|Execution context was destroyed|detached|Target closed|Protocol error|Navigation/i.test(
    msg,
  );
}

function snapshotSide(metrics) {
  return {
    heroH: metrics.hero?.h,
    h1H: metrics.h1?.rect?.h,
    h1Width: metrics.h1?.rect?.w,
    h1Lines: metrics.h1?.lines,
    h1Size: metrics.h1?.size,
    h1LH: metrics.h1?.lh,
    h1Text: metrics.h1?.text,
    fontFamily: metrics.h1?.fontFamily,
    fontStyle: metrics.h1?.fontStyle,
    fontWeight: metrics.h1?.fontWeight,
    fontsOk: metrics.fonts?.ok,
    measurementAttempts: metrics.measurementAttempts,
    overflow: metrics.overflow,
    sections: metrics.sections,
  };
}

async function newPage(browser) {
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(90000);
  page.setDefaultTimeout(30000);
  await page.setExtraHTTPHeaders({ 'Cache-Control': 'no-cache' });
  return page;
}

async function safeClose(page) {
  try {
    if (page && !page.isClosed()) await page.close({ runBeforeUnload: false });
  } catch (_) {
    /* ignore */
  }
}

async function gotoStable(page, url) {
  const expectedPath = new URL(url).pathname.replace(/\/$/, '') || '/';
  const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  const status = res?.status() ?? 0;
  if (status >= 500) throw new Error(`HTTP ${status} ${url}`);
  await page.waitForSelector('.brand-page-hero h1, h1', { timeout: 25000 });
  await page.waitForFunction(
    (path) => {
      const here = location.pathname.replace(/\/$/, '') || '/';
      return here === path || here.startsWith(path);
    },
    { timeout: 10000 },
    expectedPath,
  );
  try {
    await page.waitForNetworkIdle({ idleTime: 300, timeout: 5000 });
  } catch (_) {
    /* bounded idle — continue */
  }
  await page.evaluate(() => {
    document.getElementById('wpadminbar')?.remove();
    document.documentElement.classList.remove('admin-bar');
    document.body?.classList.remove('admin-bar');
  });
}

async function settleFontsAndH1(page, vp) {
  await page.evaluate(async () => {
    const load = async (spec) => {
      try {
        await document.fonts.load(spec);
      } catch (_) {
        /* ignore */
      }
    };
    await document.fonts.ready;
    await load('400 48px Fraunces');
    await load('400 80px Fraunces');
    await load('italic 400 80px Fraunces');
    await load('italic 700 80px Fraunces');
    await document.fonts.ready;
  });

  const deadline = Date.now() + 5000;
  let lastH = null;
  let stable = 0;
  let attempts = 0;
  let sample = null;

  while (Date.now() < deadline) {
    attempts += 1;
    sample = await page.evaluate(() => {
      const h1 = document.querySelector('.brand-page-hero h1, h1');
      const hero = document.querySelector('.brand-page-hero');
      if (!h1) return null;
      const cs = getComputedStyle(h1);
      const range = document.createRange();
      range.selectNodeContents(h1);
      const lines = new Set([...range.getClientRects()].map((r) => Math.round(r.top))).size;
      return {
        family: cs.fontFamily,
        familyOk: /fraunces/i.test(cs.fontFamily),
        fontStyle: cs.fontStyle,
        fontWeight: cs.fontWeight,
        lh: cs.lineHeight,
        roman: document.fonts.check('400 80px Fraunces') || document.fonts.check('italic 700 80px Fraunces'),
        italic: document.fonts.check('italic 400 80px Fraunces') || document.fonts.check('italic 700 80px Fraunces'),
        h1H: h1.getBoundingClientRect().height,
        h1W: h1.getBoundingClientRect().width,
        heroH: hero ? hero.getBoundingClientRect().height : 0,
        lines,
      };
    });
    if (!sample) {
      await sleep(100);
      continue;
    }
    const h = Math.round(sample.h1H);
    const ready = sample.familyOk && h > 40;
    const geomStable = lastH != null && Math.abs(h - lastH) <= 1;
    if (ready && geomStable) {
      stable += 1;
      if (stable >= 2) return { settled: true, attempts, sample };
    } else {
      stable = 0;
    }
    lastH = h;
    await sleep(100);
  }

  return {
    settled: Boolean(sample?.familyOk && sample?.h1H > 40),
    attempts,
    sample,
  };
}

async function measureOnce(page, url, vp) {
  await page.setViewport({
    width: vp.width,
    height: vp.height,
    deviceScaleFactor: 1,
    isMobile: vp.mobile,
    hasTouch: vp.mobile,
  });
  await gotoStable(page, url);
  let settle = await settleFontsAndH1(page, vp);
  if (!settle.settled) {
    await page.reload({ waitUntil: 'domcontentloaded', timeout: 90000 });
    await page.waitForSelector('.brand-page-hero h1, h1', { timeout: 20000 });
    await page.evaluate(() => document.getElementById('wpadminbar')?.remove());
    settle = await settleFontsAndH1(page, vp);
  }
  const metrics = await page.evaluate(MEASURE_FN);
  metrics.measurementAttempts = settle.attempts;
  metrics.fontSettled = Boolean(settle.settled || metrics.fonts?.ok);
  if (metrics.fonts) {
    metrics.fonts.ok = Boolean(metrics.fonts.ok || settle.sample?.familyOk);
  }
  if (!metrics.fonts?.ok) {
    console.log(`    font-debug ${url} ${JSON.stringify({
      settled: settle.settled,
      sample: settle.sample,
      fonts: metrics.fonts,
    })}`);
  }
  return metrics;
}

function makeSlot(browser) {
  return {
    async measure(url, vp) {
      let navAttempts = 0;
      let networkRetries = 0;
      let lastErr = null;
      for (let attempt = 1; attempt <= 3; attempt += 1) {
        navAttempts = attempt;
        let page = null;
        try {
          page = await newPage(browser);
          const metrics = await measureOnce(page, url, vp);
          const fontsOk = Boolean(metrics.fonts?.ok && metrics.fontSettled);
          await safeClose(page);
          if (!fontsOk) {
            lastErr = new Error('font-settle incomplete');
            await sleep(400 * attempt);
            continue;
          }
          return { ok: true, metrics, navAttempts, networkRetries };
        } catch (err) {
          lastErr = err;
          if (isTransient(err) || /font-settle/i.test(String(err))) networkRetries += 1;
          await safeClose(page);
          await sleep(2500 * attempt);
        }
      }
      return {
        ok: false,
        error: String(lastErr?.message || lastErr),
        navAttempts,
        networkRetries,
      };
    },
    async close() {},
  };
}

async function main() {
  const outDir = join(__dirname, 'audit-out');
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, 'appareil-pixel-audit.json');

  const matrix = {};
  const allCells = [];
  const counters = {
    network: 0,
    context: 0,
    fontSettle: 0,
  };

  const writePartial = () => {
    writeFileSync(
      outPath,
      JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          react: REACT,
          wp: WP,
          tolerances: TOL,
          matrix,
          cells: allCells,
          failures: allCells.filter((d) => d.status !== 'PASS'),
          summary: {
            routes: ROUTES.length,
            viewports: VIEWPORTS.length,
            cells: allCells.length,
            pass: allCells.filter((d) => d.status === 'PASS').length,
            delta: allCells.filter((d) => d.status === 'DELTA').length,
            unverified: allCells.filter((d) => d.status === 'UNVERIFIED').length,
            networkFailures: counters.network,
            contextFailures: counters.context,
            fontSettleFailures: counters.fontSettle,
          },
        },
        null,
        2,
      ),
    );
  };

  console.log(`Routes: ${ROUTES.length}, Viewports: ${VIEWPORTS.length} (sequential, one page/side)`);
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    protocolTimeout: 180000,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
  });

  const reactSlot = makeSlot(browser);
  const wpSlot = makeSlot(browser);

  try {
    for (const route of ROUTES) {
      matrix[route] = {};
      console.log(`\n=== ${route} ===`);

      for (const vp of VIEWPORTS) {
        process.stdout.write(`  ${vp.name}... `);
        const reactUrl = `${REACT}${normalizePath(route)}`;
        const wpUrl = `${WP}${route}`;
        const timestamp = new Date().toISOString();

        const r = await reactSlot.measure(reactUrl, vp);
        await sleep(600);
        let w = await wpSlot.measure(wpUrl, vp);
        let extraWp = 0;
        while (!w.ok && extraWp < 2) {
          extraWp += 1;
          console.log(`    WP retry-extra ${extraWp} after ${String(w.error || '').slice(0, 80)}`);
          await sleep(8000 * extraWp);
          w = await wpSlot.measure(wpUrl, vp);
        }
        await sleep(400);

        if (!r.ok || !w.ok) {
          const err = `${r.error || ''} ${w.error || ''}`;
          if (/Execution context was destroyed/i.test(err)) counters.context += 1;
          if (/net::|NetworkError|ERR_/i.test(err)) counters.network += 1;
          matrix[route][vp.name] = 'UNVERIFIED';
          const cell = {
            route,
            viewport: vp.name,
            status: 'UNVERIFIED',
            timestamp,
            navAttempts: { react: r.navAttempts, wp: w.navAttempts },
            networkRetries: { react: r.networkRetries, wp: w.networkRetries },
            error: { react: r.error || null, wp: w.error || null },
          };
          allCells.push(cell);
          writePartial();
          console.log(`UNVERIFIED ${err.slice(0, 90)}`);
          continue;
        }

        if (!r.metrics.fonts?.ok || !w.metrics.fonts?.ok) {
          counters.fontSettle += 1;
        }

        const cmp = compare(r.metrics, w.metrics);
        matrix[route][vp.name] = cmp.status;
        const cell = {
          route,
          viewport: vp.name,
          status: cmp.status,
          timestamp,
          navAttempts: { react: r.navAttempts, wp: w.navAttempts },
          networkRetries: { react: r.networkRetries, wp: w.networkRetries },
          react: snapshotSide(r.metrics),
          wp: snapshotSide(w.metrics),
          issues: cmp.issues,
        };
        allCells.push(cell);
        writePartial();
        console.log(
          cmp.status +
            (cmp.issues.length ? ` (${cmp.issues.map((i) => `${i.key}:${i.delta}`).join(', ')})` : ''),
        );
      }

      const cells = VIEWPORTS.map((v) => matrix[route][v.name]);
      matrix[route].final = cells.includes('UNVERIFIED')
        ? 'UNVERIFIED'
        : cells.includes('DELTA')
          ? 'DELTA'
          : 'PASS';
      console.log(`  → final ${matrix[route].final}`);
    }
  } finally {
    await reactSlot.close();
    await wpSlot.close();
    await browser.close();
  }

  writePartial();
  const summary = {
    cells: allCells.length,
    pass: allCells.filter((d) => d.status === 'PASS').length,
    delta: allCells.filter((d) => d.status === 'DELTA').length,
    unverified: allCells.filter((d) => d.status === 'UNVERIFIED').length,
    networkFailures: counters.network,
    contextFailures: counters.context,
    fontSettleFailures: counters.fontSettle,
  };
  console.log(`\nWrote ${outPath}`);
  console.log(JSON.stringify(summary, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
