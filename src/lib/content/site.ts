import type {
	EngineeringPrinciple,
	NavigationItem,
	ProcessStage,
	SeoMeta,
	SiteConfig
} from '$lib/types/content';

export const siteConfig = {
	name: 'Sahastiwa Solutions',
	legalName: 'Sahastiwa Solutions Pvt. Ltd.',
	siteUrl: 'https://sahastiwa.example',
	description:
		'Advanced electronic, embedded and intelligent engineering systems for energy, motion, automation and instrumentation.',
	email: 'engineering@sahastiwa.example',
	phone: '+91 00000 00000',
	address: 'India — registered office address to be confirmed',
	bookingUrl: 'https://booking.sahastiwa.example/consultation',
	socialLinks: [],
	placeholderFields: ['siteUrl', 'email', 'phone', 'address', 'bookingUrl']
} as const satisfies SiteConfig;

export const primaryNavigation = [
	{ label: 'Capabilities', href: '/capabilities' },
	{ label: 'Engineering work', href: '/work' },
	{ label: 'Platforms', href: '/platforms' },
	{ label: 'About', href: '/about' }
] as const satisfies readonly NavigationItem[];

export const footerNavigation = [
	...primaryNavigation,
	{ label: 'Contact', href: '/contact' },
	{ label: 'Privacy', href: '/privacy' },
	{ label: 'Terms', href: '/terms' }
] as const satisfies readonly NavigationItem[];

export const developmentProcess = [
	{
		step: 1,
		title: 'Requirements and discovery',
		summary: 'Define the problem, operating context, constraints and success criteria.',
		activities: [
			'Requirements capture',
			'Use-case and interface mapping',
			'Technical risk identification'
		],
		deliverables: ['Requirements baseline', 'Initial risk register']
	},
	{
		step: 2,
		title: 'System architecture',
		summary:
			'Partition hardware, firmware, power, sensing and communications into a coherent system.',
		activities: [
			'System partitioning',
			'Component and topology evaluation',
			'Interface definition'
		],
		deliverables: ['System architecture', 'Interface definitions']
	},
	{
		step: 3,
		title: 'Detailed engineering',
		summary: 'Develop the electronics and embedded software required for the agreed architecture.',
		activities: [
			'Schematic and PCB design',
			'Firmware development',
			'Control and signal-chain design'
		],
		deliverables: ['Design files', 'Firmware baseline', 'Engineering review package']
	},
	{
		step: 4,
		title: 'Prototype and integration',
		summary: 'Bring the subsystems together and evaluate their behaviour in the intended context.',
		activities: ['Prototype bring-up', 'Hardware and firmware integration', 'Issue investigation'],
		deliverables: ['Integrated prototype', 'Bring-up and issue records']
	},
	{
		step: 5,
		title: 'Validation and manufacturing handoff',
		summary: 'Test against agreed requirements and prepare the design for manufacturing review.',
		activities: ['Verification and validation', 'Design refinement', 'DFM-focused review'],
		deliverables: ['Validation evidence', 'Manufacturing handoff package']
	}
] as const satisfies readonly ProcessStage[];

export const engineeringPrinciples = [
	{
		title: 'System-level thinking',
		description:
			'Power, electronics, firmware, sensing and communications are considered as one connected system.'
	},
	{
		title: 'Production-minded design',
		description:
			'Architecture and implementation decisions account for validation, sourcing and manufacturing needs.'
	},
	{
		title: 'Reusable foundations',
		description:
			'Modular engineering platforms can reduce repeated work across related product programmes.'
	},
	{
		title: 'IP and supply-chain control',
		description:
			'Custom engineering can help organisations retain greater control of product knowledge and sourcing choices.'
	}
] as const satisfies readonly EngineeringPrinciple[];

export const homeSeo = {
	title: 'Electronic and Embedded Product Engineering | Sahastiwa Solutions',
	description:
		'Engineering for renewable energy, robotics, industrial instrumentation and intelligent embedded products.',
	canonicalPath: '/',
	socialImage: '/social/default-card.jpg',
	indexing: 'index'
} as const satisfies SeoMeta;
