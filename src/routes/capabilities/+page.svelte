<script lang="ts">
	import Seo from '$lib/components/layout/Seo.svelte';
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
	import { capabilities } from '$lib/content/capabilities';

	const seo = {
		title: 'Electronic Engineering Capabilities | Sahastiwa Solutions',
		description:
			'Explore engineering capabilities across power electronics, motion control, industrial instrumentation and embedded systems.',
		path: '/capabilities/',
		image: '/social/default-card.jpg'
	};

	const serviceSchema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Electronic and embedded product engineering',
		description: seo.description,
		provider: {
			'@type': 'Organization',
			name: 'Sahastiwa Solutions Pvt. Ltd.'
		},
		areaServed: 'Worldwide',
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Engineering capabilities',
			itemListElement: capabilities.map((capability) => ({
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: capability.title,
					description: capability.summary
				}
			}))
		}
	};
</script>

<Seo {...seo} schema={serviceSchema} />

<main>
	<section class="border-b border-line bg-white">
		<div
			class="site-container grid gap-12 section-pad lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end"
		>
			<div class="max-w-4xl">
				<p class="eyebrow text-system-700">Engineering capabilities</p>
				<h1 class="mt-6 page-title text-brand-950">
					The disciplines required to build the whole system.
				</h1>
				<p class="mt-7 max-w-3xl body-large text-muted">
					We bring power electronics, embedded control, sensing, communications and hardware design
					together around a single product architecture.
				</p>
			</div>
			<p class="border-l-2 border-energy-500 pl-6 text-sm leading-7 text-muted">
				Each engagement is shaped around the actual requirements, constraints and maturity of the
				product—not a fixed package of services.
			</p>
		</div>
	</section>

	<nav class="border-b border-line bg-canvas" aria-label="Capability sections">
		<div class="site-container grid sm:grid-cols-2 lg:grid-cols-4">
			{#each capabilities as capability, index}
				<a
					href={`#${capability.slug}`}
					class="group flex min-h-28 items-start gap-4 border-line px-5 py-7 no-underline sm:border-r lg:first:border-l"
				>
					<span class="font-display text-sm font-bold text-action-700">0{index + 1}</span>
					<span class="text-sm leading-5 font-semibold text-brand-950 group-hover:text-action-700"
						>{capability.title}</span
					>
				</a>
			{/each}
		</div>
	</nav>

	<div class="bg-canvas">
		{#each capabilities as capability, index}
			<section
				id={capability.slug}
				class="scroll-mt-24 border-b border-line"
				class:bg-white={index % 2 === 1}
			>
				<div class="site-container grid gap-12 section-pad lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
					<div>
						<p class="eyebrow text-system-700">{capability.eyebrow}</p>
						<p class="mt-6 font-display text-sm font-bold text-action-700">0{index + 1}</p>
						<h2 class="mt-3 max-w-2xl section-title text-brand-950">{capability.title}</h2>
						<p class="mt-6 body-large text-muted">{capability.description}</p>
					</div>

					<div class="grid gap-6 sm:grid-cols-2">
						<div
							class="rounded-card border border-line bg-white p-7 shadow-soft"
							class:bg-canvas={index % 2 === 1}
						>
							<h3 class="font-display text-lg font-bold text-brand-950">Areas of expertise</h3>
							<ul class="mt-5 space-y-3">
								{#each capability.expertise as item}
									<li class="flex gap-3 text-sm leading-6 text-muted">
										<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-action-700"></span>
										<span>{item}</span>
									</li>
								{/each}
							</ul>
						</div>

						<div class="rounded-card border border-line bg-brand-950 p-7 text-white">
							<h3 class="font-display text-lg font-bold">What the work establishes</h3>
							<ul class="mt-5 space-y-4">
								{#each capability.outcomes as outcome}
									<li class="flex gap-3 text-sm leading-6 text-white/75">
										<span class="mt-1.5 h-2 w-2 shrink-0 border border-energy-500"></span>
										<span>{outcome}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</section>
		{/each}
	</div>

	<section class="bg-brand-950 text-white">
		<div class="site-container grid gap-8 section-pad lg:grid-cols-[1fr_auto] lg:items-end">
			<div class="max-w-3xl">
				<p class="eyebrow text-energy-500">Bring the system together</p>
				<h2 class="mt-5 section-title">Start with the engineering problem, not a service menu.</h2>
				<p class="mt-6 max-w-2xl text-lg leading-8 text-white/70">
					Share the product context, technical constraints and current development stage. We can use
					that to frame a focused first discussion.
				</p>
			</div>
			<ButtonLink href="/contact/" variant="light" showArrow>Discuss a project</ButtonLink>
		</div>
	</section>
</main>
