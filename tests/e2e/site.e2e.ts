import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const staticRoutes = [
	'/',
	'/capabilities/',
	'/work/',
	'/platforms/',
	'/about/',
	'/contact/',
	'/privacy/',
	'/terms/'
];

const workRoutes = [
	'/work/software-defined-energy-routing/',
	'/work/scalable-esc-architecture/',
	'/work/precision-instrumentation-electronics/',
	'/work/connected-embedded-control/'
];

test.describe('prerendered routes', () => {
	for (const route of [...staticRoutes, ...workRoutes]) {
		test(`${route} has a canonical page shell`, async ({ page }) => {
			const response = await page.goto(route);

			expect(response?.status()).toBe(200);
			await expect(page.locator('main')).toHaveCount(1);
			await expect(page.locator('h1')).toHaveCount(1);
			expect(await page.title()).not.toBe('');
			await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /\S+/);
			await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /^https?:\/\//);
		});
	}

	test('unknown case studies use the custom 404', async ({ page }) => {
		const response = await page.goto('/work/not-a-real-case-study/');

		expect(response?.status()).toBe(404);
		await expect(page.locator('h1')).toContainText(/not found|404/i);
	});
});

test.describe('navigation', () => {
	test('desktop navigation reaches each primary section', async ({ page, isMobile }) => {
		test.skip(isMobile, 'Desktop navigation is hidden at mobile widths.');
		await page.goto('/');

		const primary = page.getByRole('navigation', { name: 'Primary navigation' });
		for (const path of ['/capabilities/', '/work/', '/platforms/', '/about/']) {
			await expect(primary.locator(`a[href="${path}"]`)).toBeVisible();
		}

		await primary.locator('a[href="/capabilities/"]').click();
		await expect(page).toHaveURL(/\/capabilities\/$/);
	});

	test('mobile dialog supports keyboard focus and closes with Escape', async ({
		page,
		isMobile
	}) => {
		test.skip(!isMobile, 'Mobile dialog is only visible at compact widths.');
		await page.goto('/');

		const trigger = page.getByRole('button', { name: 'Open navigation' });
		await trigger.focus();
		await page.keyboard.press('Enter');

		const dialog = page.getByRole('dialog');
		await expect(dialog).toBeVisible();
		await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
		await page.keyboard.press('Escape');
		await expect(dialog).toBeHidden();
		await expect(trigger).toBeFocused();
	});

	test('ordinary navigation remains usable without JavaScript', async ({ page }) => {
		test.skip(test.info().project.name !== 'javascript-disabled');
		await page.goto('/');

		const capabilitiesLink = page.locator('a[href="/capabilities/"]').first();
		await expect(capabilitiesLink).toBeVisible();
		await capabilitiesLink.click();
		await expect(page).toHaveURL(/\/capabilities\/$/);
	});

	test('the homepage consultation handoff reaches the contact page', async ({ page }) => {
		await page.goto('/');
		const consultationLink = page.locator('a[href="/contact/"]:visible').first();

		await expect(consultationLink).toBeVisible();
		await consultationLink.click();
		await expect(page).toHaveURL(/\/contact\/$/);
	});
});

test('external new-tab links include reverse-tabnabbing protection', async ({ page }) => {
	await page.goto('/contact/');
	const externalLinks = page.locator('a[target="_blank"]');

	for (let index = 0; index < (await externalLinks.count()); index += 1) {
		const rel = (await externalLinks.nth(index).getAttribute('rel')) ?? '';
		expect(rel.split(/\s+/)).toContain('noopener');
		expect(rel.split(/\s+/)).toContain('noreferrer');
	}
});

test('representative pages have no automatically detectable WCAG A/AA violations', async ({
	page
}) => {
	test.skip(test.info().project.name === 'javascript-disabled');

	for (const route of ['/', '/platforms/', '/contact/']) {
		await page.goto(route);
		const results = await new AxeBuilder({ page })
			.withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
			.analyze();
		expect(
			results.violations,
			`${route}: ${results.violations.map(({ id }) => id).join(', ')}`
		).toEqual([]);
	}
});

test('representative pages do not overflow the viewport', async ({ page }) => {
	for (const route of ['/', '/platforms/', '/work/']) {
		await page.goto(route);
		const dimensions = await page.evaluate(() => ({
			viewport: window.innerWidth,
			document: document.documentElement.scrollWidth
		}));

		expect(dimensions.document, `${route} has horizontal overflow`).toBeLessThanOrEqual(
			dimensions.viewport + 1
		);
	}
});

test('crawler and install metadata are emitted as static resources', async ({ request }) => {
	const [sitemap, robots, manifest] = await Promise.all([
		request.get('/sitemap.xml'),
		request.get('/robots.txt'),
		request.get('/site.webmanifest')
	]);

	expect(sitemap.ok()).toBe(true);
	expect(sitemap.headers()['content-type']).toContain('xml');
	expect(await sitemap.text()).toContain('/work/software-defined-energy-routing/');
	expect(robots.ok()).toBe(true);
	expect(await robots.text()).toMatch(/Sitemap: https?:\/\//);
	expect(manifest.ok()).toBe(true);
	expect((await manifest.json()).name).toBe('Sahastiwa Solutions');
});
