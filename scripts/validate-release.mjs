const required = ['PUBLIC_SITE_URL', 'PUBLIC_BOOKING_URL', 'PUBLIC_CONTACT_EMAIL'];
const missing = required.filter((key) => !process.env[key]?.trim());

if (missing.length > 0) {
	console.error(`Missing release configuration: ${missing.join(', ')}`);
	process.exit(1);
}

for (const key of ['PUBLIC_SITE_URL', 'PUBLIC_BOOKING_URL']) {
	try {
		const value = new URL(process.env[key]);
		if (value.protocol !== 'https:') {
			throw new Error('must use https://');
		}
	} catch {
		console.error(`${key} must be a valid https:// URL`);
		process.exit(1);
	}
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(process.env.PUBLIC_CONTACT_EMAIL)) {
	console.error('PUBLIC_CONTACT_EMAIL must be a valid email address');
	process.exit(1);
}

console.log('Release configuration is valid.');
