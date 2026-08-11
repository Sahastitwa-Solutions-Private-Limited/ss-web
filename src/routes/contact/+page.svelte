<script lang="ts">
	import Seo from '$lib/components/layout/Seo.svelte';
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
	import { hasBookingUrl, publicConfig } from '$lib/config/public';

	const seo = {
		title: 'Book an Engineering Consultation | Sahastiwa Solutions',
		description:
			'Share your product context, technical constraints and development stage with Sahastiwa Solutions.',
		path: '/contact/',
		image: '/social/default-card.jpg'
	};

	const hasEmail = publicConfig.contactEmail.trim().length > 0;
	const hasPhone = publicConfig.contactPhone.trim().length > 0;
	const phoneHref = `tel:${publicConfig.contactPhone.replace(/[^+\d]/g, '')}`;

	const stages = [
		{
			title: 'Fit and context',
			body: 'We begin with the product objective, current development state, key interfaces and known constraints.'
		},
		{
			title: 'Technical framing',
			body: 'A focused discussion identifies the system boundaries, major risks and information needed for a useful next step.'
		},
		{
			title: 'Engagement definition',
			body: 'Scope, expected artefacts and review points are defined before detailed engineering begins.'
		}
	];
</script>

<Seo {...seo} />

<main>
	<section class="border-b border-line bg-white">
		<div class="site-container grid gap-14 section-pad lg:grid-cols-[1.08fr_0.92fr] lg:gap-24">
			<div>
				<p class="eyebrow text-system-700">Technical consultation</p>
				<h1 class="mt-6 page-title text-brand-950">Start with the engineering context.</h1>
				<p class="mt-7 max-w-3xl body-large text-muted">
					A useful first conversation covers what the product must do, where the current design
					stands and which technical decisions are blocking progress.
				</p>
				<div class="mt-9 flex flex-col gap-3 sm:flex-row">
					{#if hasBookingUrl}
						<ButtonLink
							href={publicConfig.bookingUrl}
							target="_blank"
							rel="noopener noreferrer"
							showArrow
						>
							Open the consultation scheduler
						</ButtonLink>
					{:else if hasEmail}
						<ButtonLink href={`mailto:${publicConfig.contactEmail}`} showArrow
							>Send a project email</ButtonLink
						>
					{/if}
				</div>
				{#if !hasBookingUrl}
					<p class="mt-5 max-w-xl text-sm leading-6 text-muted">
						The external scheduling link is not configured in this preview. Use a verified contact
						method below when one is available.
					</p>
				{/if}
			</div>

			<aside
				class="rounded-card border border-line bg-brand-950 p-7 text-white shadow-soft md:p-9"
				aria-labelledby="fit-heading"
			>
				<p class="eyebrow text-energy-500">Good project fit</p>
				<h2 id="fit-heading" class="mt-5 font-display text-2xl font-bold">
					Come prepared to discuss
				</h2>
				<ul class="mt-7 space-y-4 text-sm leading-6 text-white/75">
					<li class="border-t border-white/10 pt-4">
						The user need and intended operating environment
					</li>
					<li class="border-t border-white/10 pt-4">
						Existing architecture, prototype or technical documentation
					</li>
					<li class="border-t border-white/10 pt-4">
						Power, sensing, control, communication and mechanical interfaces
					</li>
					<li class="border-t border-white/10 pt-4">
						Programme constraints, dependencies and decision deadlines
					</li>
				</ul>
			</aside>
		</div>
	</section>

	<section class="bg-canvas">
		<div class="site-container section-pad">
			<div class="max-w-3xl">
				<p class="eyebrow text-system-700">Before engineering begins</p>
				<h2 class="mt-5 section-title text-brand-950">
					A clear path from first discussion to defined work.
				</h2>
			</div>
			<ol class="mt-12 grid gap-5 md:grid-cols-3">
				{#each stages as stage, index}
					<li class="rounded-card border border-line bg-white p-7 md:p-8">
						<p class="font-display text-sm font-bold text-action-700">0{index + 1}</p>
						<h3 class="mt-8 font-display text-xl font-bold text-brand-950">{stage.title}</h3>
						<p class="mt-4 text-sm leading-7 text-muted">{stage.body}</p>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<section class="border-y border-line bg-white">
		<div class="site-container grid gap-12 section-pad lg:grid-cols-2 lg:gap-24">
			<div>
				<p class="eyebrow text-system-700">Confidentiality</p>
				<h2 class="mt-5 font-display text-3xl font-bold tracking-[-0.035em] text-brand-950">
					Share sensitive detail at the right stage.
				</h2>
				<p class="mt-6 text-base leading-8 text-muted">
					The first discussion can stay at a high level. If an NDA is needed, flag that before
					sharing confidential design files, source code, commercial data or customer information so
					the appropriate agreement can be established first.
				</p>
			</div>
			<div>
				<p class="eyebrow text-system-700">Direct contact</p>
				<h2 class="mt-5 font-display text-3xl font-bold tracking-[-0.035em] text-brand-950">
					Use a verified fallback.
				</h2>
				<div class="mt-6 space-y-4">
					{#if hasEmail}
						<p>
							<span class="block text-xs font-bold tracking-[0.12em] text-muted uppercase"
								>Email</span
							>
							<a
								class="mt-2 inline-block font-semibold text-action-700"
								href={`mailto:${publicConfig.contactEmail}`}>{publicConfig.contactEmail}</a
							>
						</p>
					{/if}
					{#if hasPhone}
						<p>
							<span class="block text-xs font-bold tracking-[0.12em] text-muted uppercase"
								>Phone</span
							>
							<a class="mt-2 inline-block font-semibold text-action-700" href={phoneHref}
								>{publicConfig.contactPhone}</a
							>
						</p>
					{/if}
					{#if !hasEmail && !hasPhone}
						<p class="rounded-card border border-line bg-canvas p-5 text-sm leading-6 text-muted">
							Verified contact details have not been configured for this preview. No placeholder
							address or phone number is presented as a live channel.
						</p>
					{/if}
				</div>
			</div>
		</div>
	</section>
</main>
