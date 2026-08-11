import { describe, expect, it } from 'vitest';
import { validateReleaseConfig } from './release';

const validConfig = {
	PUBLIC_SITE_URL: 'https://sahastiwa.example.com',
	PUBLIC_BOOKING_URL: 'https://calendar.example.com/sahastiwa',
	PUBLIC_CONTACT_EMAIL: 'engineering@example.com',
	PUBLIC_CONTACT_PHONE: '+91 98765 43210'
};

describe('release configuration', () => {
	it('accepts complete HTTPS release inputs', () => {
		expect(validateReleaseConfig(validConfig)).toEqual(validConfig);
	});

	it('rejects an HTTP site URL', () => {
		expect(() =>
			validateReleaseConfig({ ...validConfig, PUBLIC_SITE_URL: 'http://example.com' })
		).toThrow(/https/i);
	});

	it('rejects an HTTP scheduler URL', () => {
		expect(() =>
			validateReleaseConfig({ ...validConfig, PUBLIC_BOOKING_URL: 'http://example.com/book' })
		).toThrow(/https/i);
	});

	it('rejects missing scheduler and contact inputs', () => {
		expect(() => validateReleaseConfig({ PUBLIC_SITE_URL: validConfig.PUBLIC_SITE_URL })).toThrow();
	});
});
