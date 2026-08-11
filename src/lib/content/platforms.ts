import type { Platform } from '$lib/types/content';

export const platforms = [
	{
		slug: 'software-defined-energy-routing',
		title: 'Software-Defined Energy Routing',
		summary:
			'A modular foundation for coordinating energy sources, storage, conversion stages and loads.',
		maturity: 'engineering-foundation',
		statusLabel: 'Reusable engineering foundation',
		problem:
			'Energy products often need adaptable control across different sources, storage configurations and load priorities.',
		reusableModules: [
			'Energy-flow control architecture',
			'Power-stage interface patterns',
			'Measurement and protection building blocks',
			'Configurable embedded-control structure'
		],
		applications: [
			'Renewable-energy systems',
			'Battery-backed products',
			'Hybrid power systems',
			'Intelligent distribution equipment'
		],
		enquiryCta: 'Discuss an energy-routing application',
		imagery: []
	},
	{
		slug: 'scalable-esc-architecture',
		title: 'Scalable ESC Architecture',
		summary:
			'A reusable electronic-speed-controller architecture for adapting motor-control designs to product requirements.',
		maturity: 'engineering-foundation',
		statusLabel: 'Reusable engineering foundation',
		problem:
			'Motion products need coordinated power-stage, sensing, protection and control decisions that can evolve across variants.',
		reusableModules: [
			'Power-stage topology patterns',
			'Gate-driver and protection interfaces',
			'Current and position sensing',
			'Embedded motor-control structure'
		],
		applications: ['Robotics', 'Drones', 'Electric mobility', 'Industrial motion systems'],
		enquiryCta: 'Discuss a motor-control application',
		imagery: []
	},
	{
		slug: 'embedded-control-modules',
		title: 'Embedded-Control Modules',
		summary:
			'Configurable controller building blocks for sensing, real-time control and product connectivity.',
		maturity: 'engineering-foundation',
		statusLabel: 'Reusable engineering foundation',
		problem:
			'Connected products repeatedly require dependable processing, interfaces, communications and firmware foundations.',
		reusableModules: [
			'Processor and memory architecture',
			'Analog and digital interfaces',
			'BLE, Wi-Fi and wired communications',
			'Real-time firmware structure'
		],
		applications: [
			'Wireless sensor nodes',
			'Remote telemetry units',
			'Industrial controllers',
			'Connected instruments'
		],
		enquiryCta: 'Discuss an embedded-control application',
		imagery: []
	},
	{
		slug: 'configurable-hardware-platforms',
		title: 'Configurable Hardware Platforms',
		summary:
			'Modular electronics that provide a common foundation for related product configurations.',
		maturity: 'engineering-foundation',
		statusLabel: 'Reusable engineering foundation',
		problem:
			'Product families can repeat core electronics work even when their sensing, power or communication needs are closely related.',
		reusableModules: [
			'Common controller core',
			'Application-specific interface modules',
			'Power and protection building blocks',
			'Configurable firmware layers'
		],
		applications: [
			'Product families',
			'Industrial monitoring',
			'Smart instrumentation',
			'Custom automation equipment'
		],
		enquiryCta: 'Discuss a configurable product platform',
		imagery: []
	}
] as const satisfies readonly Platform[];
