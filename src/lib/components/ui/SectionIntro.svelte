<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		eyebrow,
		title,
		body,
		centered = false,
		dark = false,
		action
	}: {
		eyebrow: string;
		title: string;
		body?: string;
		centered?: boolean;
		dark?: boolean;
		action?: Snippet;
	} = $props();
</script>

<div class:max-w-3xl={!centered} class:mx-auto={centered} class:text-center={centered}>
	<div class="mb-5 flex items-center gap-3" class:justify-center={centered}>
		<span class="h-px w-8" class:bg-system-600={!dark} class:bg-energy-500={dark}></span>
		<p class="eyebrow" class:text-system-700={!dark} class:text-energy-500={dark}>{eyebrow}</p>
	</div>
	<h2 class="section-title" class:text-brand-950={!dark} class:text-white={dark}>{title}</h2>
	{#if body}
		<p
			class={`mt-6 max-w-2xl text-base leading-7 md:text-lg md:leading-8 ${centered ? 'mx-auto' : ''} ${dark ? 'text-white/70' : 'text-muted'}`}
		>
			{body}
		</p>
	{/if}
	{#if action}
		<div class="mt-8">{@render action()}</div>
	{/if}
</div>
