<script lang="ts">
	import Seo from '$lib/components/layout/Seo.svelte';
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
	import { caseStudies } from '$lib/content/case-studies';
	import type { CaseStudy } from '$lib/types/content';

	let { data }: { data: { study: CaseStudy } } = $props();

	let related = $derived(caseStudies.filter((item) => item.slug !== data.study.slug).slice(0, 2));
	let profileLabel = $derived(
		data.study.kind === 'technology-platform' ? 'Technology platform' : 'Capability profile'
	);
	let breadcrumbSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Engineering work',
				item: '/work/'
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: data.study.title,
				item: `/work/${data.study.slug}/`
			}
		]
	});
</script>

<Seo
	title={data.study.seo.title}
	description={data.study.seo.description}
	path={`${data.study.seo.canonicalPath}/`}
	image={data.study.seo.socialImage}
	noindex={data.study.seo.indexing === 'noindex'}
	schema={breadcrumbSchema}
/>

<main>
	<section class="border-b border-line bg-white">
		<div class="site-container pt-10 pb-20 md:pt-14 md:pb-28">
			<nav aria-label="Breadcrumb">
				<ol class="flex flex-wrap items-center gap-2 text-sm text-muted">
					<li>
						<a class="font-semibold text-action-700 no-underline hover:underline" href="/work/"
							>Engineering work</a
						>
					</li>
					<li aria-hidden="true">/</li>
					<li aria-current="page">{data.study.title}</li>
				</ol>
			</nav>

			<div class="mt-16 grid gap-10 lg:grid-cols-[1fr_20rem] lg:items-end">
				<div class="max-w-4xl">
					<p class="eyebrow text-system-700">{profileLabel}</p>
					<h1 class="mt-6 page-title text-brand-950">{data.study.title}</h1>
					<p class="mt-7 max-w-3xl body-large text-muted">{data.study.summary}</p>
				</div>
				<dl class="border-l-2 border-energy-500 pl-6">
					<div>
						<dt class="eyebrow text-muted">Domain</dt>
						<dd class="mt-3 font-display text-lg font-bold text-brand-950">{data.study.sector}</dd>
					</div>
					<div class="mt-6">
						<dt class="eyebrow text-muted">Public profile</dt>
						<dd class="mt-3 text-sm leading-6 text-muted">
							No client identity or unverified performance metrics.
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</section>

	<section class="bg-brand-950 text-white">
		<div class="site-container grid gap-12 section-pad lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
			<div>
				<p class="eyebrow text-energy-500">The engineering challenge</p>
				<h2 class="mt-5 section-title">Define the system before optimising its parts.</h2>
			</div>
			<p class="max-w-3xl body-large text-white/75">{data.study.challenge}</p>
		</div>
	</section>

	<section class="bg-canvas">
		<div class="site-container grid gap-14 section-pad lg:grid-cols-[1fr_0.82fr] lg:gap-24">
			<div>
				<p class="eyebrow text-system-700">Engineering approach</p>
				<h2 class="mt-5 max-w-2xl section-title text-brand-950">
					A structured path through the technical decisions.
				</h2>
				<ol class="mt-10 space-y-5">
					{#each data.study.approach as step, index}
						<li
							class="grid grid-cols-[3rem_1fr] gap-4 rounded-card border border-line bg-white p-5 md:p-6"
						>
							<span class="font-display text-sm font-bold text-action-700">0{index + 1}</span>
							<p class="leading-7 font-semibold text-brand-950">{step}</p>
						</li>
					{/each}
				</ol>
			</div>

			<aside
				class="rounded-card border border-line bg-white p-7 shadow-soft md:p-9"
				aria-labelledby="technology-heading"
			>
				<p class="eyebrow text-system-700">System scope</p>
				<h2 id="technology-heading" class="mt-5 font-display text-2xl font-bold text-brand-950">
					Technology areas
				</h2>
				<ul class="mt-7 divide-y divide-line border-y border-line">
					{#each data.study.technologies as technology}
						<li class="flex items-center gap-4 py-4 text-sm font-semibold text-muted">
							<span class="h-2 w-2 bg-energy-500"></span>
							{technology}
						</li>
					{/each}
				</ul>
				<div class="mt-9 border-l-2 border-action-700 pl-5">
					<p class="text-sm leading-6 text-muted">
						This profile intentionally omits project-specific outcomes and metrics until they can be
						verified and approved for publication.
					</p>
				</div>
			</aside>
		</div>
	</section>

	<section class="border-t border-line bg-white">
		<div class="site-container section-pad">
			<div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
				<div class="max-w-3xl">
					<p class="eyebrow text-system-700">Explore next</p>
					<h2 class="mt-5 section-title text-brand-950">Related engineering profiles</h2>
				</div>
				<ButtonLink href="/contact/" showArrow>Discuss a related challenge</ButtonLink>
			</div>

			<div class="mt-10 grid gap-5 md:grid-cols-2">
				{#each related as item}
					<a
						href={`/work/${item.slug}/`}
						class="rounded-card border border-line bg-canvas p-7 no-underline transition-colors hover:border-action-700 md:p-8"
					>
						<p class="eyebrow text-system-700">{item.sector}</p>
						<h3 class="mt-5 font-display text-2xl font-bold text-brand-950">{item.title}</h3>
						<p class="mt-4 text-sm leading-6 text-muted">{item.summary}</p>
					</a>
				{/each}
			</div>
		</div>
	</section>
</main>
