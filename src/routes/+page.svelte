<script lang="ts">
	import {
		BatteryCharging,
		ChartBar,
		CheckCircle,
		Cpu,
		Gauge,
		Gear,
		LockKey,
		Stack,
		Waveform
	} from 'phosphor-svelte';
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
	import Seo from '$lib/components/layout/Seo.svelte';
	import SectionIntro from '$lib/components/ui/SectionIntro.svelte';
	import ProcessTimeline from '$lib/components/sections/ProcessTimeline.svelte';
	import FinalCta from '$lib/components/sections/FinalCta.svelte';
	import { capabilities } from '$lib/content/capabilities';
	import { engineeringPrinciples, homeSeo } from '$lib/content/site';
	import { publicConfig } from '$lib/config/public';

	const capabilityIcons = [BatteryCharging, Gear, Waveform, Cpu];
	const capabilityLabels = [
		'Power & energy',
		'Robotics & motion',
		'Instrumentation',
		'Embedded & IoT'
	];
	const principleIcons = [Stack, CheckCircle, LockKey, ChartBar];

	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Sahastiwa Solutions Pvt. Ltd.',
		url: publicConfig.siteUrl,
		description: homeSeo.description,
		areaServed: ['IN', 'Worldwide'],
		knowsAbout: [
			'Power electronics',
			'Embedded systems',
			'Motion control',
			'Industrial instrumentation'
		]
	};
</script>

<Seo
	title={homeSeo.title}
	description={homeSeo.description}
	path={homeSeo.canonicalPath}
	image={homeSeo.socialImage}
	schema={organizationSchema}
/>

<main>
	<section class="overflow-hidden bg-white">
		<div
			class="site-container grid min-h-[42rem] items-center gap-8 py-14 lg:grid-cols-[0.86fr_1.14fr] lg:py-20"
		>
			<div class="relative z-10 max-w-2xl">
				<p class="eyebrow text-system-700">Integrated engineering systems</p>
				<h1 class="mt-6 display-title text-balance text-brand-950">
					From complex engineering challenges to production-ready systems.
				</h1>
				<p class="mt-7 max-w-xl body-large text-muted">
					Integrated hardware, firmware, power, control, and validation—built around your product,
					your constraints, and your IP.
				</p>
				<div class="mt-9 flex flex-col gap-3 sm:flex-row">
					<ButtonLink href="/contact/" showArrow>Book a technical consultation</ButtonLink>
					<ButtonLink href="/work/" variant="secondary">Explore engineering work</ButtonLink>
				</div>
			</div>

			<figure class="relative -mx-8 lg:-mr-20 lg:ml-[-4rem]">
				<enhanced:img
					src="$lib/assets/work/home-hero-modules.png"
					alt="Illustrative exploded view of modular electronic controller boards and a motor"
					width="1448"
					height="1086"
					fetchpriority="high"
					sizes="(min-width: 1024px) 58vw, 100vw"
					class="w-full object-contain"
				/>
				<figcaption class="sr-only">
					Illustrative engineering visual; not a photograph of a disclosed client project.
				</figcaption>
			</figure>
		</div>
	</section>

	<section class="border-y border-line bg-canvas py-8" aria-label="Engineering scope">
		<div class="site-container grid grid-cols-2 gap-y-7 md:grid-cols-4">
			{#each ['System architecture', 'Electronics & PCB', 'Embedded firmware', 'Validation & DFM'] as item, index}
				<div class="border-line px-4 first:pl-0 md:border-l md:first:border-l-0">
					<p class="text-xs font-bold tracking-[0.12em] text-system-700">0{index + 1}</p>
					<p class="mt-2 text-sm font-semibold text-brand-950">{item}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="bg-white section-pad" id="capabilities">
		<div class="site-container">
			<SectionIntro eyebrow="Capabilities" title="Engineering systems, designed as one" centered />
			<div class="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
				{#each capabilities as capability, index}
					{@const Icon = capabilityIcons[index]}
					<article
						class="relative border-line py-7 sm:px-7 sm:even:border-l lg:border-l lg:py-2 lg:first:border-l-0"
					>
						<p class="eyebrow text-system-700">0{index + 1}</p>
						<Icon class="mt-7 text-brand-950" size={45} weight="thin" aria-hidden="true" />
						<h2 class="mt-6 font-display text-xl font-semibold text-brand-950">
							{capabilityLabels[index]}
						</h2>
						<p class="mt-4 text-sm leading-6 text-muted">{capability.summary}</p>
						<a
							class="mt-6 inline-block text-sm font-semibold text-action-700"
							href={`/capabilities/#${capability.slug}`}>Explore capability</a
						>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-brand-950 py-16 text-white md:py-24">
		<div class="site-container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
			<div class="max-w-xl lg:sticky lg:top-12">
				<p class="eyebrow text-energy-500">Reusable technology platforms</p>
				<h2 class="mt-6 section-title text-white">
					Reduce development time without giving up technical ownership.
				</h2>
				<p class="mt-6 text-lg leading-8 text-white/70">
					Modular hardware, firmware, and control foundations can reduce repeated engineering work
					across related product programmes while keeping the application architecture in your
					hands.
				</p>
				<div class="mt-8">
					<ButtonLink href="/platforms/" variant="ghost-light" showArrow
						>Explore the platforms</ButtonLink
					>
				</div>
			</div>

			<div class="divide-y divide-white/20 border-y border-white/20">
				{#each engineeringPrinciples as principle, index}
					{@const Icon = principleIcons[index]}
					<div class="grid grid-cols-[auto_1fr] gap-5 py-6">
						<Icon size={35} weight="thin" class="text-energy-500" aria-hidden="true" />
						<div>
							<h3 class="font-display text-xl font-semibold">{principle.title}</h3>
							<p class="mt-2 text-sm leading-6 text-white/65">{principle.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-white section-pad">
		<div class="site-container">
			<div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
				<SectionIntro
					eyebrow="Selected engineering work"
					title="A platform-led approach to difficult hardware"
					body="Current public entries describe Sahastiwa’s reusable engineering approaches. Customer names and performance data will only be published after approval and verification."
				/>
				<a class="shrink-0 text-sm font-semibold text-action-700" href="/work/"
					>View all engineering work</a
				>
			</div>

			<article class="mt-12 overflow-hidden rounded-card border border-line bg-canvas">
				<div class="grid lg:grid-cols-[0.38fr_0.62fr]">
					<div class="flex flex-col justify-center p-7 md:p-10 lg:p-12">
						<p class="eyebrow text-system-700">Power & energy · Technology platform</p>
						<h3 class="mt-5 font-display text-3xl font-semibold tracking-tight text-brand-950">
							Software-Defined Energy Routing
						</h3>
						<p class="mt-5 leading-7 text-muted">
							A modular foundation for coordinating energy sources, storage, conversion stages, and
							loads across related application architectures.
						</p>
						<a
							class="mt-7 text-sm font-semibold text-action-700"
							href="/work/software-defined-energy-routing/"
						>
							Read the platform brief
						</a>
					</div>
					<figure class="min-h-72 bg-[#e9edf2]">
						<enhanced:img
							src="$lib/assets/work/featured-power-platform.png"
							alt="Illustrative close-up of a power electronics control board in an aluminium enclosure"
							width="2400"
							height="1350"
							loading="lazy"
							sizes="(min-width: 1024px) 62vw, 100vw"
							class="h-full min-h-72 w-full object-cover"
						/>
						<figcaption class="sr-only">
							Illustrative engineering visual, not a client-project photograph.
						</figcaption>
					</figure>
				</div>
			</article>
		</div>
	</section>

	<section class="border-t border-line bg-canvas section-pad">
		<div class="site-container">
			<SectionIntro
				eyebrow="From requirement to manufacturing"
				title="One connected development process"
				body="Each engagement is structured around explicit requirements, technical risk, integration evidence, and a deliberate manufacturing handoff."
			/>
			<ProcessTimeline />
		</div>
	</section>

	<section class="bg-white section-pad">
		<div class="site-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
			<div>
				<p class="eyebrow text-system-700">Integrated by design</p>
				<h2 class="mt-5 section-title text-brand-950">
					The difficult parts rarely sit in one discipline.
				</h2>
			</div>
			<div
				class="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2"
			>
				{#each [['Power, control, and protection', 'Coordinate topology, switching, sensing, and embedded decisions around the complete system.'], ['Analog and digital hardware', 'Treat signal integrity, interfaces, processing, and physical implementation as connected design work.'], ['Firmware and communications', 'Build real-time behaviour, device interfaces, and connectivity around product requirements.'], ['Prototype evidence to DFM', 'Carry technical decisions from bring-up and validation into the manufacturing review package.']] as item}
					<div class="bg-white p-7">
						<Gauge size={28} weight="thin" class="text-system-700" aria-hidden="true" />
						<h3 class="mt-5 font-display text-lg font-semibold text-brand-950">{item[0]}</h3>
						<p class="mt-3 text-sm leading-6 text-muted">{item[1]}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<FinalCta />
</main>
