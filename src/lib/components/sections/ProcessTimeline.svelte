<script lang="ts">
	import { ClipboardText, Cube, Factory, TreeStructure, Wrench } from 'phosphor-svelte';
	import { developmentProcess } from '$lib/content/site';

	const icons = [ClipboardText, TreeStructure, Wrench, Cube, Factory];
</script>

<ol class="mt-12 grid gap-8 md:grid-cols-5 md:gap-0">
	{#each developmentProcess as stage, index}
		{@const Icon = icons[index]}
		<li
			class="group relative border-l border-line pl-6 md:border-t md:border-l-0 md:px-4 md:pt-9 first:md:pl-0 last:md:pr-0"
		>
			<div
				class="absolute top-0 -left-[1.35rem] flex size-10 items-center justify-center rounded-full border border-line bg-white text-action-700 md:-top-5 md:left-4 first:md:left-0"
			>
				<Icon size={21} weight="regular" aria-hidden="true" />
			</div>
			<p class="eyebrow text-system-700">0{stage.step}</p>
			<h3 class="mt-3 font-display text-lg font-semibold text-brand-950">{stage.title}</h3>
			<p class="mt-3 text-sm leading-6 text-muted">{stage.summary}</p>
		</li>
	{/each}
</ol>
