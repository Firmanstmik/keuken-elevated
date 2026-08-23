/**
 * Focused HTTP audit for configurator funnel routes.
 * Usage: node scripts/audit-out/configurator-funnel-audit.mjs [baseUrl]
 */
const base = (process.argv[2] || process.env.KC_WP_BASE || 'https://keuken-centrum.localclicks.nl').replace(/\/$/, '');

const routes = [
	'/brands/',
	'/style/',
	'/configure/',
	'/moodboard/',
	'/consultation/',
	'/',
	'/keukens/',
	'/keukenbladen/',
	'/apparatuur/',
	'/apparatuur/kookplaten/',
	'/aanbiedingen/',
	'/contact/',
	'/showroom-keukens/',
];

const results = [];
for (const route of routes) {
	const url = base + route;
	try {
		const res = await fetch(url, { redirect: 'manual' });
		results.push({ route, status: res.status, location: res.headers.get('location') || '' });
	} catch (err) {
		results.push({ route, status: 0, error: String(err) });
	}
}

console.log(JSON.stringify({ base, results }, null, 2));
const funnel = results.filter((r) => ['/brands/', '/style/', '/configure/', '/moodboard/'].includes(r.route));
const ok = funnel.every((r) => r.status === 200);
process.exit(ok ? 0 : 1);
