import { z } from 'zod';

const httpsUrl = z
	.url()
	.refine((value) => new URL(value).protocol === 'https:', 'must use https://');

export const releaseConfigSchema = z.object({
	PUBLIC_SITE_URL: httpsUrl,
	PUBLIC_BOOKING_URL: httpsUrl,
	PUBLIC_CONTACT_EMAIL: z.email(),
	PUBLIC_CONTACT_PHONE: z.string().trim().optional()
});

export type ReleaseConfig = z.infer<typeof releaseConfigSchema>;

export function validateReleaseConfig(input: Record<string, string | undefined>): ReleaseConfig {
	return releaseConfigSchema.parse(input);
}
