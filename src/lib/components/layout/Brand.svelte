<script lang="ts">
	import logoMark from '$lib/assets/brand/logo-mark.webp';

	let { dark = false, large = false }: { dark?: boolean; large?: boolean } = $props();
</script>

<a
	href="/"
	class="inline-flex items-center gap-3 no-underline"
	aria-label="Sahastiwa Solutions home"
>
	<img
		src={logoMark}
		alt=""
		width="894"
		height="878"
		class="rounded-full bg-white object-cover"
		class:h-14={large}
		class:w-14={large}
		class:h-11={!large}
		class:w-11={!large}
	/>
	<span class="flex flex-col">
		<span
			class="font-display text-[0.9rem] font-bold tracking-[0.24em] md:text-[1rem]"
			class:text-white={dark}
			class:text-brand-950={!dark}>SAHASTIWA</span
		>
		<span
			class={`mt-1 text-[0.57rem] font-bold tracking-[0.35em] ${dark ? 'text-white/70' : 'text-action-700'}`}
			>SOLUTIONS</span
		>
	</span>
</a>
