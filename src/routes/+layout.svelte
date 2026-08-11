<script lang="ts">
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/inter';
	import { page } from '$app/state';
	import './layout.css';
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';

	let { children } = $props();
	let darkHeader = $derived(page.url.pathname.startsWith('/platforms'));
</script>

<a
	href="#main-content"
	class="fixed top-4 left-4 z-[100] -translate-y-24 rounded-lg bg-energy-500 px-4 py-3 font-semibold text-brand-950 transition-transform focus:translate-y-0"
	>Skip to content</a
>
<SiteHeader dark={darkHeader} />
<div id="main-content" tabindex="-1">{@render children()}</div>
<SiteFooter />
