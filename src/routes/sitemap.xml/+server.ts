import { caseStudies } from '$lib/content/case-studies';
import { publicConfig } from '$lib/config/public';
import type { RequestHandler } from './$types';

export const prerender = true;

const staticPaths = [
	'/',
	'/capabilities/',
	'/work/',
	'/platforms/',
	'/about/',
	'/contact/',
	'/privacy/',
	'/terms/'
] as const;

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

export const GET: RequestHandler = () => {
	const baseUrl = publicConfig.siteUrl.endsWith('/')
		? publicConfig.siteUrl
		: `${publicConfig.siteUrl}/`;
	const paths = [...staticPaths, ...caseStudies.map(({ slug }) => `/work/${slug}/` as const)];
	const urls = paths
		.map(
			(path) =>
				`  <url><loc>${escapeXml(new URL(path.replace(/^\//, ''), baseUrl).toString())}</loc></url>`
		)
		.join('\n');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
		{
			headers: {
				'Content-Type': 'application/xml; charset=utf-8',
				'Cache-Control': 'public, max-age=3600'
			}
		}
	);
};
