import type { Capability } from '$lib/types/content';

export const capabilities = [
	{
		slug: 'renewable-energy-power-electronics',
		title: 'Renewable Energy & Power Electronics',
		eyebrow: 'Energy systems',
		summary:
			'Electronics for energy generation, storage, conversion, protection and intelligent distribution.',
		description:
			'We develop power and control electronics around the needs of renewable-energy and storage systems, from topology selection through prototype validation.',
		expertise: [
			'Battery-management systems',
			'DC-DC and AC-DC conversion',
			'Solar MPPT charge controllers',
			'Inverters and battery chargers',
			'Switching power supplies and motor drives',
			'Gate-driver, protection and energy-routing circuits'
		],
		outcomes: [
			'Requirements-aligned power architecture',
			'Coordinated control, protection and sensing design',
			'Design artefacts prepared for prototyping and manufacturing review'
		],
		imagery: []
	},
	{
		slug: 'robotics-motion-control',
		title: 'Robotics & Motion Control',
		eyebrow: 'Intelligent motion',
		summary:
			'Control electronics for robotics, drones, electric mobility and industrial automation.',
		description:
			'We combine motor-control hardware, embedded control and sensor integration for precise, responsive motion systems.',
		expertise: [
			'BLDC and PMSM motor controllers',
			'Electronic speed controllers',
			'Robotic control systems',
			'Autonomous mobile robot electronics',
			'Sensor integration',
			'Precision motion-control hardware'
		],
		outcomes: [
			'Control architecture matched to the motion profile',
			'Integrated sensing, actuation and embedded control',
			'Testable electronics and firmware interfaces'
		],
		imagery: []
	},
	{
		slug: 'industrial-electronics-instrumentation',
		title: 'Industrial Electronics & Instrumentation',
		eyebrow: 'Measurement and automation',
		summary:
			'Sensing, measurement, monitoring and process-control electronics for industrial applications.',
		description:
			'We engineer signal chains and embedded control around real-world sensors, process interfaces and monitoring requirements.',
		expertise: [
			'Electromagnetic flow-meter electronics',
			'Data-acquisition systems',
			'Precision sensor interfaces',
			'Analog signal conditioning',
			'Process-control electronics',
			'Custom instrumentation'
		],
		outcomes: [
			'Defined measurement and signal-chain architecture',
			'Integrated sensing, acquisition and control electronics',
			'Validation approach tied to agreed measurement requirements'
		],
		imagery: []
	},
	{
		slug: 'embedded-systems-iot',
		title: 'Embedded Systems & IoT',
		eyebrow: 'Connected intelligence',
		summary:
			'Custom hardware and firmware for connected devices, edge control and remote telemetry.',
		description:
			'We develop embedded electronics and firmware for products that sense, decide, communicate and operate in real time.',
		expertise: [
			'Wireless sensor nodes',
			'Edge-computing devices',
			'Real-time controllers',
			'Remote telemetry units',
			'IoT monitoring systems',
			'BLE- and Wi-Fi-enabled products'
		],
		outcomes: [
			'Hardware and firmware architecture around product requirements',
			'Defined sensing, control and communication interfaces',
			'Prototype-ready embedded design package'
		],
		imagery: []
	}
] as const satisfies readonly Capability[];
