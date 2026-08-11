<script lang="ts">
	import Seo from '$lib/components/layout/Seo.svelte';
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
	import { developmentProcess, engineeringPrinciples, siteConfig } from '$lib/content/site';
	import logoFull from '$lib/assets/brand/logo-full.jpeg';

	const seo = {
		title: 'About Sahastiwa Solutions | Electronic Product Engineering',
		description:
			'Learn how Sahastiwa Solutions approaches integrated electronic, embedded and intelligent product development.',
		path: '/about/',
		image: '/social/default-card.jpg'
	};

	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: siteConfig.legalName,
		description: siteConfig.description,
		areaServed: 'Worldwide'
	};
</script>

<Seo {...seo} schema={organizationSchema} />

<main>
	<section class="border-b border-line bg-white">
		<div
			class="site-container grid gap-14 section-pad lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-24"
		>
			<div>
				<p class="eyebrow text-system-700">About Sahastiwa</p>
				<h1 class="mt-6 page-title text-brand-950">
					Engineering complex products as connected systems.
				</h1>
				<p class="mt-7 max-w-3xl body-large text-muted">
					Sahastiwa Solutions designs electronic, embedded and intelligent engineering systems for
					energy, motion, industrial measurement and connected products.
				</p>
			</div>
			<figure class="rounded-card border border-line bg-canvas p-6 shadow-soft md:p-10">
				<img
					src={logoFull}
					alt="Sahastiwa Solutions Pvt. Ltd. full legal logo"
					width="1260"
					height="1260"
					class="mx-auto aspect-square w-full max-w-md object-contain"
					loading="eager"
				/>
			</figure>
		</div>
	</section>

	<section class="bg-brand-950 text-white">
		<div class="site-container grid gap-12 section-pad lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
			<div>
				<p class="eyebrow text-energy-500">How we think</p>
				<h2 class="mt-5 section-title">Architecture first. Evidence before claims.</h2>
			</div>
			<div
				class="grid gap-px overflow-hidden rounded-card border border-white/10 bg-white/10 sm:grid-cols-2"
			>
				{#each engineeringPrinciples as principle, index}
					<article class="bg-brand-950 p-7 md:p-8">
						<p class="font-display text-sm font-bold text-energy-500">0{index + 1}</p>
						<h3 class="mt-6 font-display text-xl font-bold">{principle.title}</h3>
						<p class="mt-4 text-sm leading-7 text-white/70">{principle.description}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-canvas">
		<div class="site-container section-pad">
			<div class="max-w-3xl">
				<p class="eyebrow text-system-700">End-to-end development</p>
				<h2 class="mt-5 section-title text-brand-950">
					One engineering thread from requirements to handoff.
				</h2>
				<p class="mt-6 text-lg leading-8 text-muted">
					The process keeps system decisions, detailed implementation and verification connected as
					the product moves forward.
				</p>
			</div>

			<ol class="mt-12 grid gap-5 lg:grid-cols-5">
				{#each developmentProcess as stage}
					<li class="rounded-card border border-line bg-white p-6">
						<p class="font-display text-sm font-bold text-action-700">0{stage.step}</p>
						<h3 class="mt-8 font-display text-lg font-bold text-brand-950">{stage.title}</h3>
						<p class="mt-4 text-sm leading-6 text-muted">{stage.summary}</p>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<section class="border-t border-line bg-white">
		<div class="site-container grid gap-10 section-pad lg:grid-cols-[1fr_22rem] lg:items-end">
			<div class="max-w-3xl">
				<p class="eyebrow text-system-700">Platform-driven engineering</p>
				<h2 class="mt-5 section-title text-brand-950">
					Reusable foundations without forcing every product into the same mould.
				</h2>
				<p class="mt-6 text-lg leading-8 text-muted">
					Reusable architectures can shorten repeated engineering work across related programmes,
					while application-specific requirements still shape the final system.
				</p>
			</div>
			<div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
				<ButtonLink href="/platforms/" variant="secondary" showArrow>Explore platforms</ButtonLink>
				<ButtonLink href="/contact/" showArrow>Start a conversation</ButtonLink>
			</div>
		</div>
	</section>
</main>
