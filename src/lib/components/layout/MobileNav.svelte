<script lang="ts">
	import { Dialog } from 'bits-ui';
	import { List, X } from 'phosphor-svelte';
	import Brand from './Brand.svelte';
	import ButtonLink from '$lib/components/ui/ButtonLink.svelte';

	let { dark = false }: { dark?: boolean } = $props();
	let open = $state(false);

	const navItems = [
		{ label: 'Capabilities', href: '/capabilities/' },
		{ label: 'Work', href: '/work/' },
		{ label: 'Platforms', href: '/platforms/' },
		{ label: 'About', href: '/about/' }
	];
</script>

<Dialog.Root bind:open>
	<Dialog.Trigger
		class={`inline-flex size-12 items-center justify-center rounded-xl border lg:hidden ${dark ? 'border-white/20 text-white' : 'border-line text-brand-950'}`}
		aria-label="Open navigation"
	>
		<List size={25} weight="bold" aria-hidden="true" />
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay class="fixed inset-0 z-50 bg-brand-950/55" />
		<Dialog.Content
			class="fixed inset-y-0 right-0 z-50 flex w-[min(90vw,25rem)] flex-col bg-white p-6 shadow-2xl"
		>
			<div class="flex items-center justify-between gap-4 border-b border-line pb-5">
				<Dialog.Title><Brand /></Dialog.Title>
				<Dialog.Close
					class="inline-flex size-12 items-center justify-center rounded-xl border border-line text-brand-950"
					aria-label="Close navigation"
				>
					<X size={24} weight="bold" aria-hidden="true" />
				</Dialog.Close>
			</div>
			<Dialog.Description class="sr-only">Primary website navigation</Dialog.Description>
			<nav class="mt-10 flex flex-col" aria-label="Mobile navigation">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={() => (open = false)}
						class="border-b border-line py-5 font-display text-2xl font-semibold text-brand-950 no-underline"
						>{item.label}</a
					>
				{/each}
			</nav>
			<div class="mt-auto pt-8">
				<ButtonLink href="/contact/" class="w-full">Book a technical consultation</ButtonLink>
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
