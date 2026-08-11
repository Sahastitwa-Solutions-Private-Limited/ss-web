<script lang="ts">
	import { publicConfig } from '$lib/config/public';

	let {
		title,
		description,
		path = '/',
		image = '/social/og-default.jpg',
		noindex = false,
		schema
	}: {
		title: string;
		description: string;
		path?: string;
		image?: string;
		noindex?: boolean;
		schema?: Record<string, unknown> | Array<Record<string, unknown>>;
	} = $props();

	let canonical = $derived(new URL(path, publicConfig.siteUrl).toString());
	let socialImage = $derived(new URL(image, publicConfig.siteUrl).toString());
	let structuredData = $derived(schema ? JSON.stringify(schema).replaceAll('<', '\\u003c') : '');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Sahastiwa Solutions" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={socialImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={socialImage} />
	{#if noindex}<meta name="robots" content="noindex, nofollow" />{/if}
	{#if schema}
		<svelte:element this={"script"} type="application/ld+json">{structuredData}</svelte:element>
	{/if}
</svelte:head>
