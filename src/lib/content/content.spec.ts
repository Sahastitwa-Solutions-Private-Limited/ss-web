import { describe, expect, it } from 'vitest';
import { capabilities } from '$lib/content/capabilities';
import { caseStudies, getCaseStudy, getCaseStudyEntries } from '$lib/content/case-studies';
import { platforms } from '$lib/content/platforms';
import {
	developmentProcess,
	footerNavigation,
	homeSeo,
	primaryNavigation,
	siteConfig
} from '$lib/content/site';

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function expectUniqueSlugs(items: readonly { slug: string }[]) {
	const slugs = items.map(({ slug }) => slug);
	expect(new Set(slugs).size).toBe(slugs.length);
	expect(slugs.every((slug) => slugPattern.test(slug))).toBe(true);
}

function collectSeo() {
	return [homeSeo, ...caseStudies.map(({ seo }) => seo)];
}

describe('content collections', () => {
	it('uses unique, URL-safe slugs in every routed collection', () => {
		expectUniqueSlugs(capabilities);
		expectUniqueSlugs(platforms);
		expectUniqueSlugs(caseStudies);
	});

	it('defines the four agreed capability pillars', () => {
		expect(capabilities).toHaveLength(4);
		expect(capabilities.map(({ slug }) => slug)).toEqual([
			'renewable-energy-power-electronics',
			'robotics-motion-control',
			'industrial-electronics-instrumentation',
			'embedded-systems-iot'
		]);
	});

	it('keeps all current work entries free of customer and performance claims', () => {
		for (const caseStudy of caseStudies) {
			expect(caseStudy.client.visibility).toBe('not-applicable');
			expect('name' in caseStudy.client).toBe(false);
			expect(caseStudy.metrics).toHaveLength(0);
			expect(caseStudy.verifiedOutcomes).toHaveLength(0);
			expect(['public-platform', 'public-capability']).toContain(caseStudy.publicationStatus);
		}
	});

	it('exposes deterministic case-study lookup and prerender entries', () => {
		const entries = getCaseStudyEntries();

		expect(entries).toEqual(caseStudies.map(({ slug }) => ({ slug })));
		expect(getCaseStudy(entries[0].slug)?.slug).toBe(entries[0].slug);
		expect(getCaseStudy('unknown-entry')).toBeUndefined();
	});
});

describe('site data', () => {
	it('marks every launch placeholder explicitly and uses safe placeholder domains', () => {
		expect(siteConfig.placeholderFields).toEqual([
			'siteUrl',
			'email',
			'phone',
			'address',
			'bookingUrl'
		]);
		expect(new URL(siteConfig.siteUrl).protocol).toBe('https:');
		expect(new URL(siteConfig.bookingUrl).protocol).toBe('https:');
		expect(new URL(siteConfig.siteUrl).hostname.endsWith('.example')).toBe(true);
		expect(new URL(siteConfig.bookingUrl).hostname.endsWith('.example')).toBe(true);
		expect(siteConfig.email.endsWith('.example')).toBe(true);
	});

	it('uses valid internal navigation links', () => {
		for (const item of [...primaryNavigation, ...footerNavigation]) {
			expect(item.href.startsWith('/')).toBe(true);
			expect(item.href.startsWith('//')).toBe(false);
		}
	});

	it('keeps process steps sequential and complete', () => {
		expect(developmentProcess.map(({ step }) => step)).toEqual([1, 2, 3, 4, 5]);
		for (const stage of developmentProcess) {
			expect(stage.activities.length).toBeGreaterThan(0);
			expect(stage.deliverables.length).toBeGreaterThan(0);
		}
	});

	it('provides complete, unique SEO metadata', () => {
		const seoEntries = collectSeo();
		const canonicalPaths = seoEntries.map(({ canonicalPath }) => canonicalPath);

		expect(new Set(canonicalPaths).size).toBe(canonicalPaths.length);
		for (const seo of seoEntries) {
			expect(seo.title.trim().length).toBeGreaterThan(0);
			expect(seo.description.trim().length).toBeGreaterThan(0);
			expect(seo.canonicalPath.startsWith('/')).toBe(true);
			expect(seo.socialImage.startsWith('/')).toBe(true);
			expect(seo.indexing).toBe('index');
		}
	});
});
