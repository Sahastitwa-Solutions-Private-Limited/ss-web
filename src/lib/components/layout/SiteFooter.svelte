<script lang="ts">
	import Brand from './Brand.svelte';

	const navGroups = [
		{
			title: 'Explore',
			items: [
				{ label: 'Capabilities', href: '/capabilities/' },
				{ label: 'Engineering work', href: '/work/' },
				{ label: 'Technology platforms', href: '/platforms/' }
			]
		},
		{
			title: 'Company',
			items: [
				{ label: 'About', href: '/about/' },
				{ label: 'Contact', href: '/contact/' },
				{ label: 'Privacy', href: '/privacy/' },
				{ label: 'Terms', href: '/terms/' }
			]
		}
	];
</script>

<footer class="bg-brand-950 text-white">
	<div class="site-container grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
		<div>
			<Brand dark large />
			<p class="mt-6 max-w-md text-base leading-7 text-white/65">
				Advanced electronics, embedded systems, power conversion, motion control, and
				instrumentation—from architecture to production readiness.
			</p>
		</div>
		{#each navGroups as group}
			<div>
				<p class="eyebrow text-energy-500">{group.title}</p>
				<ul class="mt-5 space-y-3">
					{#each group.items as item}
						<li>
							<a class="text-sm text-white/70 no-underline hover:text-white" href={item.href}
								>{item.label}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
	<div class="border-t border-white/10">
		<div
			class="site-container flex flex-col gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between"
		>
			<p>© {new Date().getFullYear()} Sahastiwa Solutions Pvt. Ltd.</p>
			<p>India-developed engineering for products built to scale.</p>
		</div>
	</div>
</footer>
