<script lang="ts">
	import Seo from '$lib/components/layout/Seo.svelte';
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
	import { caseStudies } from '$lib/content/case-studies';

	const seo = {
		title: 'Engineering Work and Technology Platforms | Sahastiwa Solutions',
		description:
			'Explore public engineering profiles spanning energy routing, motor control, instrumentation and connected embedded systems.',
		path: '/work/',
		image: '/social/default-card.jpg'
	};

	const collectionSchema = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Sahastiwa engineering work',
		description: seo.description,
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: caseStudies.map((study, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				name: study.title,
				url: `/work/${study.slug}/`
			}))
		}
	};

	function labelFor(kind: (typeof caseStudies)[number]['kind']) {
		return kind === 'technology-platform' ? 'Technology platform' : 'Capability profile';
	}
</script>

<Seo {...seo} schema={collectionSchema} />

<main>
	<section class="border-b border-line bg-white">
		<div class="site-container section-pad">
			<p class="eyebrow text-system-700">Engineering work</p>
			<h1 class="mt-6 max-w-5xl page-title text-brand-950">
				Public profiles of how we approach complex systems.
			</h1>
			<div class="mt-8 grid max-w-5xl gap-7 md:grid-cols-[1.3fr_0.7fr]">
				<p class="body-large text-muted">
					These profiles explain reusable technology foundations and capability-led engineering
					without presenting confidential customer work as public case studies.
				</p>
				<p class="border-l-2 border-energy-500 pl-6 text-sm leading-7 text-muted">
					Client names, performance metrics and project outcomes are published only after
					verification and approval.
				</p>
			</div>
		</div>
	</section>

	<section class="bg-canvas">
		<div class="site-container grid gap-6 section-pad md:grid-cols-2">
			{#each caseStudies as study, index}
				<article
					class="group flex min-h-[28rem] flex-col rounded-card border border-line bg-white p-7 shadow-soft md:p-9"
				>
					<div class="flex items-center justify-between gap-4">
						<p class="eyebrow text-system-700">{labelFor(study.kind)}</p>
						<p class="font-display text-sm font-bold text-action-700">0{index + 1}</p>
					</div>
					<div class="mt-14">
						<p class="text-sm font-semibold text-muted">{study.sector}</p>
						<h2
							class="mt-4 font-display text-3xl font-semibold tracking-[-0.035em] text-brand-950 md:text-4xl"
						>
							{study.title}
						</h2>
						<p class="mt-5 text-base leading-7 text-muted">{study.summary}</p>
					</div>
					<div class="mt-auto border-t border-line pt-7">
						<a
							href={`/work/${study.slug}/`}
							class="inline-flex items-center gap-3 text-sm font-bold text-action-700 no-underline group-hover:underline"
						>
							Explore the engineering profile
							<span aria-hidden="true">→</span>
						</a>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="border-t border-line bg-white">
		<div class="site-container grid gap-10 section-pad lg:grid-cols-[1fr_auto] lg:items-end">
			<div class="max-w-3xl">
				<p class="eyebrow text-system-700">Confidential work</p>
				<h2 class="mt-5 section-title text-brand-950">
					Some of the most useful context starts in a private conversation.
				</h2>
				<p class="mt-6 text-lg leading-8 text-muted">
					Tell us what is already defined, what remains uncertain and which technical risks need to
					be resolved first.
				</p>
			</div>
			<ButtonLink href="/contact/" showArrow>Discuss your requirements</ButtonLink>
		</div>
	</section>
</main>
