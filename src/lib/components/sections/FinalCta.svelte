<script lang="ts">
	import { ArrowUpRight } from 'phosphor-svelte';
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';

	let {
		eyebrow = 'Start with the engineering problem',
		title = 'Bring the product challenge. We’ll help define the path forward.',
		body = 'Share the operating context, constraints, and current stage. We’ll use the first conversation to understand fit and identify the most useful next step.'
	}: {
		eyebrow?: string;
		title?: string;
		body?: string;
	} = $props();
</script>

<section class="bg-brand-950 py-16 text-white md:py-24">
	<div class="site-container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
		<div class="max-w-4xl">
			<p class="eyebrow text-energy-500">{eyebrow}</p>
			<h2
				class="mt-5 font-display text-3xl leading-tight font-semibold tracking-[-0.035em] text-balance md:text-5xl"
			>
				{title}
			</h2>
			<p class="mt-5 max-w-2xl text-base leading-7 text-white/70">{body}</p>
		</div>
		<ButtonLink href="/contact/" variant="light" class="shrink-0">
			Discuss your project
			<ArrowUpRight size={18} weight="bold" aria-hidden="true" />
		</ButtonLink>
	</div>
</section>
