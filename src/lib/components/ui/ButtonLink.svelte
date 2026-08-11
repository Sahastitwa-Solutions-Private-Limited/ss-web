<script lang="ts">
	import { Button } from 'bits-ui';
	import { ArrowRight } from 'phosphor-svelte';
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'secondary' | 'light' | 'ghost-light';

	let {
		href,
		children,
		variant = 'primary',
		showArrow = false,
		target,
		rel,
		ariaLabel,
		class: className = ''
	}: {
		href: string;
		children: Snippet;
		variant?: Variant;
		showArrow?: boolean;
		target?: string;
		rel?: string;
		ariaLabel?: string;
		class?: string;
	} = $props();

	const variantClasses: Record<Variant, string> = {
		primary:
			'bg-action-700 text-white hover:bg-action-600 border border-action-700 shadow-[0_12px_30px_rgb(3_65_182/0.18)]',
		secondary: 'border border-action-700 bg-transparent text-action-700 hover:bg-action-100',
		light: 'border border-white bg-white text-brand-950 hover:bg-canvas',
		'ghost-light': 'border border-white/30 bg-transparent text-white hover:bg-white/10'
	};

	let classes = $derived(
		`inline-flex min-h-12 items-center justify-center gap-3 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200 ${variantClasses[variant]} ${className}`
	);
</script>

<Button.Root {href} {target} {rel} aria-label={ariaLabel} class={classes}>
	{@render children()}
	{#if showArrow}
		<ArrowRight size={18} weight="bold" aria-hidden="true" />
	{/if}
</Button.Root>
