<script lang="ts">
	import {
		ArrowsClockwise,
		Circuitry,
		Cpu,
		FlowArrow,
		Gear,
		ShieldCheck,
		Stack,
		TreeStructure
	} from 'phosphor-svelte';
	import Seo from '$lib/components/layout/Seo.svelte';
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
	import SectionIntro from '$lib/components/ui/SectionIntro.svelte';
	import ProcessTimeline from '$lib/components/sections/ProcessTimeline.svelte';
	import FinalCta from '$lib/components/sections/FinalCta.svelte';
	import { platforms } from '$lib/content/platforms';

	const platformIcons = [FlowArrow, Gear, Cpu, Circuitry];
	const domainLabels = [
		'Power & energy',
		'Robotics & motion',
		'Industrial instrumentation',
		'Embedded & IoT'
	];
	const advantages = [
		{
			icon: Stack,
			title: 'Modular and configurable',
			body: 'Hardware and firmware building blocks can be adapted across products without assuming every application is the same.'
		},
		{
			icon: TreeStructure,
			title: 'Control and intelligence',
			body: 'Control, sensing, communications, and embedded software are structured as an integrated system.'
		},
		{
			icon: ShieldCheck,
			title: 'Validation stays application-specific',
			body: 'Evidence and production readiness are established against the actual requirements and operating context.'
		}
	];
	const engagementStages = [
		{
			icon: ArrowsClockwise,
			title: 'Configure',
			body: 'Map the reusable foundation to application power, sensing, interfaces, and controls.'
		},
		{
			icon: Circuitry,
			title: 'Engineer',
			body: 'Develop the product-specific circuits, firmware, mechanics interfaces, and integration details.'
		},
		{
			icon: Cpu,
			title: 'Integrate',
			body: 'Bring hardware and software together in the intended system architecture.'
		},
		{
			icon: ShieldCheck,
			title: 'Validate',
			body: 'Collect evidence against agreed requirements before manufacturing handoff.'
		}
	];

	const serviceSchema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Reusable electronic engineering platforms',
		provider: { '@type': 'Organization', name: 'Sahastiwa Solutions Pvt. Ltd.' },
		areaServed: ['IN', 'Worldwide'],
		description:
			'Modular hardware, firmware, control, sensing and communications foundations adapted to product requirements.'
	};
</script>

<Seo
	title="Reusable Technology Platforms | Sahastiwa Solutions"
	description="India-developed engineering foundations for energy routing, motor control, embedded control, and configurable electronics."
	path="/platforms/"
	schema={serviceSchema}
/>

<main>
	<section class="relative overflow-hidden bg-brand-950 text-white">
		<div
			class="site-container grid min-h-[42rem] items-center gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-16"
		>
			<div class="relative z-10 max-w-2xl">
				<div class="flex items-center gap-4">
					<span class="h-px w-9 bg-system-600"></span>
					<p class="eyebrow text-system-300">Reusable engineering foundations</p>
				</div>
				<h1 class="mt-7 page-title text-balance text-white">
					Engineered once. Adapted to the product.
				</h1>
				<p class="mt-7 max-w-xl body-large text-white/75">
					Modular electronics, firmware, and control architectures that reduce repeated work while
					preserving application-specific engineering and technical ownership.
				</p>
				<p class="mt-5 max-w-xl text-sm leading-6 text-white/55">
					These are engineering foundations, not off-the-shelf products. Scope, maturity,
					validation, and production readiness are established for each application.
				</p>
				<div class="mt-9 flex flex-col gap-3 sm:flex-row">
					<ButtonLink href="/contact/" showArrow>Discuss your application</ButtonLink>
					<ButtonLink href="#platform-catalog" variant="ghost-light"
						>Explore the foundations</ButtonLink
					>
				</div>
			</div>

			<figure class="-mx-8 lg:-mr-28 lg:ml-[-4rem]">
				<enhanced:img
					src="$lib/assets/work/platform-hero-system.png"
					alt="Illustrative modular power electronics assembly on a deep navy background"
					width="2400"
					height="1500"
					fetchpriority="high"
					sizes="(min-width: 1024px) 60vw, 100vw"
					class="w-full object-contain"
				/>
				<figcaption class="sr-only">
					Illustrative platform visual, not a disclosed production unit.
				</figcaption>
			</figure>
		</div>

		<div class="border-t border-white/10 bg-[#02265e]">
			<div class="site-container py-8">
				<p class="text-center font-display text-xl font-semibold">
					Four engineering domains. <span class="text-system-300">One integrated system.</span>
				</p>
				<div class="mt-7 grid grid-cols-2 gap-y-6 md:grid-cols-4">
					{#each domainLabels as label, index}
						<div class="border-white/15 px-4 first:pl-0 md:border-l md:first:border-l-0">
							<p
								class:text-energy-500={index === 2}
								class:text-system-300={index !== 2}
								class="eyebrow"
							>
								0{index + 1}
							</p>
							<p class="mt-2 text-sm font-semibold text-white">{label}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="bg-white section-pad" id="platform-catalog">
		<div class="site-container">
			<SectionIntro
				eyebrow="Platform catalogue"
				title="A head start on the system—not a shortcut around engineering"
				body="Each foundation is configured, reviewed, and validated against the requirements of the product it supports."
			/>

			<div class="mt-12 divide-y divide-line border-y border-line">
				{#each platforms as platform, index}
					{@const Icon = platformIcons[index]}
					<article
						id={platform.slug}
						class="grid gap-7 py-9 md:grid-cols-[5rem_1fr_1.05fr] md:gap-10 md:py-12"
					>
						<div
							class="flex size-14 items-center justify-center rounded-xl border border-line text-action-700"
						>
							<Icon size={30} weight="thin" aria-hidden="true" />
						</div>
						<div>
							<p class="eyebrow text-system-700">{platform.statusLabel}</p>
							<h2 class="mt-4 font-display text-2xl font-semibold text-brand-950 md:text-3xl">
								{platform.title}
							</h2>
							<p class="mt-4 leading-7 text-muted">{platform.summary}</p>
						</div>
						<div class="grid gap-6 sm:grid-cols-2">
							<div>
								<h3 class="text-sm font-semibold text-brand-950">Reusable modules</h3>
								<ul class="mt-3 space-y-2 text-sm leading-6 text-muted">
									{#each platform.reusableModules as module}<li class="flex gap-2">
											<span class="mt-2 size-1.5 shrink-0 rounded-full bg-system-600"
											></span>{module}
										</li>{/each}
								</ul>
							</div>
							<div>
								<h3 class="text-sm font-semibold text-brand-950">Potential applications</h3>
								<ul class="mt-3 space-y-2 text-sm leading-6 text-muted">
									{#each platform.applications as application}<li>{application}</li>{/each}
								</ul>
								<a class="mt-5 inline-block text-sm font-semibold text-action-700" href="/contact/"
									>{platform.enquiryCta}</a
								>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="border-y border-line bg-canvas section-pad">
		<div class="site-container">
			<SectionIntro
				eyebrow="Why platforms"
				title="Reuse the foundation. Re-engineer what makes the product specific."
				centered
			/>
			<div class="mt-14 grid gap-8 md:grid-cols-3">
				{#each advantages as advantage}
					{@const Icon = advantage.icon}
					<article class="border-l border-line pl-7 first:border-l-0 first:pl-0">
						<Icon size={38} weight="thin" class="text-system-700" aria-hidden="true" />
						<h2 class="mt-6 font-display text-xl font-semibold text-brand-950">
							{advantage.title}
						</h2>
						<p class="mt-4 text-sm leading-6 text-muted">{advantage.body}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-white section-pad">
		<div class="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
			<div>
				<p class="eyebrow text-system-700">Inside a platform engagement</p>
				<h2 class="mt-5 section-title text-brand-950">
					Adaptation is deliberate engineering work.
				</h2>
				<p class="mt-6 text-lg leading-8 text-muted">
					A reusable architecture changes the starting point. It does not remove the need to define,
					review, prototype, and validate the complete product system.
				</p>
			</div>
			<div
				class="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2"
			>
				{#each engagementStages as stage}
					{@const Icon = stage.icon}
					<div class="bg-white p-7">
						<Icon size={30} weight="thin" class="text-action-700" aria-hidden="true" />
						<h3 class="mt-5 font-display text-xl font-semibold text-brand-950">{stage.title}</h3>
						<p class="mt-3 text-sm leading-6 text-muted">{stage.body}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="border-t border-line bg-canvas section-pad">
		<div class="site-container">
			<SectionIntro
				eyebrow="Engineering process"
				title="The same discipline from fit assessment to handoff"
				body="Platform reuse sits inside the wider product-development lifecycle and remains accountable to requirements and validation evidence."
			/>
			<ProcessTimeline />
		</div>
	</section>

	<FinalCta
		eyebrow="Explore platform fit"
		title="A reusable foundation is useful only when it fits the real product problem."
		body="Tell us what you are building, which technical risks matter most, and where the programme stands today. We’ll assess whether a platform-led engagement is a sensible starting point."
	/>
</main>
