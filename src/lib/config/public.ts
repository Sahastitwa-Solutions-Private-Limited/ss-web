import {
	PUBLIC_BOOKING_URL,
	PUBLIC_CONTACT_EMAIL,
	PUBLIC_CONTACT_PHONE,
	PUBLIC_SITE_URL
} from '$env/static/public';

const fallbackSiteUrl = 'https://sahastiwa-solutions.pages.dev';

export const publicConfig = {
	siteUrl: PUBLIC_SITE_URL || fallbackSiteUrl,
	bookingUrl: PUBLIC_BOOKING_URL?.startsWith('https://') ? PUBLIC_BOOKING_URL : '',
	contactEmail: PUBLIC_CONTACT_EMAIL || '',
	contactPhone: PUBLIC_CONTACT_PHONE || ''
} as const;

export const hasBookingUrl = publicConfig.bookingUrl.length > 0;
