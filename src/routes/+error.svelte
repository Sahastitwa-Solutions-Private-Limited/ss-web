<script lang="ts">
	import { page } from '$app/state';
	import Seo from '$lib/components/layout/Seo.svelte';
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';

	let isNotFound = $derived(page.status === 404);
	let title = $derived(isNotFound ? 'Page not found' : 'Something went wrong');
	let description = $derived(
		isNotFound
			? 'The page may have moved, or the address may be incomplete.'
			: 'The page could not be displayed. Return to the homepage or try again.'
	);
</script>

<Seo
	title={`${page.status} — ${title} | Sahastiwa Solutions`}
	{description}
	path={page.url.pathname}
	noindex
/>

<main class="flex min-h-[70vh] items-center bg-brand-950 text-white">
	<section class="site-container section-pad">
		<p class="font-display text-sm font-bold tracking-[0.14em] text-energy-500">
			ERROR {page.status}
		</p>
		<h1 class="mt-6 max-w-4xl page-title">{title}</h1>
		<p class="mt-7 max-w-2xl body-large text-white/70">{description}</p>
		<div class="mt-9 flex flex-col gap-3 sm:flex-row">
			<ButtonLink href="/" variant="light" showArrow>Return to the homepage</ButtonLink>
			<ButtonLink href="/contact/" variant="ghost-light">Contact Sahastiwa</ButtonLink>
		</div>
	</section>
</main>
