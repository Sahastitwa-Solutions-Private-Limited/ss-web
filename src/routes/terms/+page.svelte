<script lang="ts">
	import Seo from '$lib/components/layout/Seo.svelte';

	const seo = {
		title: 'Website Terms | Sahastiwa Solutions',
		description: 'Terms information for the Sahastiwa Solutions informational website.',
		path: '/terms/',
		image: '/social/default-card.jpg'
	};
</script>

<Seo {...seo} />

<main>
	<section class="border-b border-line bg-white">
		<div class="site-container max-w-5xl section-pad">
			<p class="eyebrow text-system-700">Legal</p>
			<h1 class="mt-6 page-title text-brand-950">Website terms</h1>
			<p class="mt-7 max-w-3xl body-large text-muted">
				These interim terms cover use of the informational website. Final legal text must be
				reviewed and approved before public launch.
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
				<section aria-labelledby="information-only">
					<h2 id="information-only" class="font-display text-2xl font-bold text-brand-950">
						Informational purpose
					</h2>
					<p class="mt-5 text-base leading-8 text-muted">
						Website content provides a general description of engineering capabilities and public
						technology profiles. It is not a technical specification, quotation, contractual promise
						or substitute for a project-specific engineering assessment.
					</p>
				</section>

				<section aria-labelledby="engagements">
					<h2 id="engagements" class="font-display text-2xl font-bold text-brand-950">
						Engineering engagements
					</h2>
					<p class="mt-5 text-base leading-8 text-muted">
						Any engineering work, deliverables, responsibilities, commercial terms, confidentiality
						obligations and acceptance criteria must be defined in a separate written agreement. A
						website visit or consultation request does not by itself create an engagement.
					</p>
				</section>

				<section aria-labelledby="content-use">
					<h2 id="content-use" class="font-display text-2xl font-bold text-brand-950">
						Content and links
					</h2>
					<p class="mt-5 text-base leading-8 text-muted">
						External links lead to services operated by other providers. Public engineering profiles
						avoid client identities, performance metrics and project outcomes unless they are
						verified and approved for publication.
					</p>
				</section>

				<section aria-labelledby="changes">
					<h2 id="changes" class="font-display text-2xl font-bold text-brand-950">
						Changes to this page
					</h2>
					<p class="mt-5 text-base leading-8 text-muted">
						The approved launch version should include an effective date, governing entity and
						process for publishing material changes.
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
