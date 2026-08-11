import { error } from '@sveltejs/kit';
import { getCaseStudy, getCaseStudyEntries } from '$lib/content/case-studies';

export function entries() {
	return getCaseStudyEntries();
}

export function load({ params }) {
	const study = getCaseStudy(params.slug);

	if (!study) {
		error(404, 'Engineering profile not found');
	}

	return { study };
}
