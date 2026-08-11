<script lang="ts">
	import { page } from '$app/state';
	import Brand from './Brand.svelte';
	import MobileNav from './MobileNav.svelte';
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';

	let { dark = false }: { dark?: boolean } = $props();

	const navItems = [
		{ label: 'Capabilities', href: '/capabilities/' },
		{ label: 'Work', href: '/work/' },
		{ label: 'Platforms', href: '/platforms/' },
		{ label: 'About', href: '/about/' }
	];

	const isActive = (href: string) => page.url.pathname.startsWith(href);
</script>

<header
	class={`relative z-40 border-b ${dark ? 'border-white/10 bg-brand-950' : 'border-line/80 bg-white/95'}`}
>
	<div class="site-container flex min-h-20 items-center justify-between gap-6 py-3">
		<Brand {dark} />
		<nav class="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
			{#each navItems as item}
				<a
					href={item.href}
					aria-current={isActive(item.href) ? 'page' : undefined}
					class={`relative py-3 text-sm font-semibold no-underline after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-energy-500 after:transition-transform hover:after:scale-x-100 aria-[current=page]:after:scale-x-100 ${dark ? 'text-white/85 hover:text-white' : 'text-brand-950'}`}
				>
					{item.label}
				</a>
			{/each}
		</nav>
		<div class="hidden lg:block">
			<ButtonLink href="/contact/" variant={dark ? 'light' : 'primary'}>
				Book a technical consultation
			</ButtonLink>
		</div>
		<MobileNav {dark} />
	</div>
</header>
