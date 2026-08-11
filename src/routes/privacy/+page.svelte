<script lang="ts">
	import Seo from '$lib/components/layout/Seo.svelte';

	const seo = {
		title: 'Privacy Notice | Sahastiwa Solutions',
		description: 'Privacy information for visitors to the Sahastiwa Solutions website.',
		path: '/privacy/',
		image: '/social/default-card.jpg'
	};
</script>

<Seo {...seo} />

<main>
	<section class="border-b border-line bg-white">
		<div class="site-container max-w-5xl section-pad">
			<p class="eyebrow text-system-700">Legal</p>
			<h1 class="mt-6 page-title text-brand-950">Privacy notice</h1>
			<p class="mt-7 max-w-3xl body-large text-muted">
				This page describes the privacy posture of the initial informational website. A final,
				jurisdiction-appropriate notice must be reviewed and approved before public launch.
			</p>
		</div>
	</section>

	<section class="bg-canvas">
		<div
			class="site-container grid gap-12 section-pad lg:grid-cols-[15rem_minmax(0,46rem)] lg:justify-between"
		>
			<aside>
				<p class="eyebrow text-system-700">Publication status</p>
				<p
					class="mt-5 rounded-xl border border-energy-500 bg-energy-100 p-5 text-sm leading-6 font-semibold text-brand-950"
				>
					Interim launch copy—legal review required.
				</p>
			</aside>

			<div class="space-y-12">
				<section aria-labelledby="site-data">
					<h2 id="site-data" class="font-display text-2xl font-bold text-brand-950">
						Information collected by this website
					</h2>
					<p class="mt-5 text-base leading-8 text-muted">
						The initial site is designed without an enquiry form, account system, embedded
						scheduler, analytics or advertising cookies. Standard technical request data may still
						be processed by the hosting provider when a page is requested.
					</p>
				</section>

				<section aria-labelledby="external-services">
					<h2 id="external-services" class="font-display text-2xl font-bold text-brand-950">
						External services and direct contact
					</h2>
					<p class="mt-5 text-base leading-8 text-muted">
						The consultation link, when configured, opens an external scheduling provider in a new
						browser tab. That provider applies its own privacy practices. Information sent by email
						or phone is shared outside this website and should not include sensitive technical
						material until an appropriate confidentiality arrangement is in place.
					</p>
				</section>

				<section aria-labelledby="launch-review">
					<h2 id="launch-review" class="font-display text-2xl font-bold text-brand-950">
						Required before launch
					</h2>
					<p class="mt-5 text-base leading-8 text-muted">
						The final notice should identify the legal entity and contact, applicable hosting and
						scheduling providers, processing purposes, retention approach, user rights and the
						jurisdictions in which the service operates.
					</p>
				</section>

				<p class="border-l-2 border-action-700 pl-5 text-sm leading-7 text-muted">
					For questions about this interim page, use a verified contact method on the
					<a class="font-semibold text-action-700" href="/contact/">contact page</a>.
				</p>
			</div>
		</div>
	</section>
</main>
