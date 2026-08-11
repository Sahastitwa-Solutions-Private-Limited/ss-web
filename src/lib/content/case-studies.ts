import type { CaseStudy } from '$lib/types/content';

/**
 * These entries describe public technology platforms and capability-led engineering work.
 * They are not customer case studies. Add names, metrics or verified outcomes only after
 * written approval and source verification.
 */
export const caseStudies = [
	{
		slug: 'software-defined-energy-routing',
		title: 'Software-Defined Energy Routing',
		summary:
			'A platform-led approach to coordinating sources, storage, conversion stages and loads.',
		kind: 'technology-platform',
		publicationStatus: 'public-platform',
		client: { visibility: 'not-applicable' },
		sector: 'Renewable energy and power electronics',
		challenge:
			'Energy architectures must coordinate changing generation, storage and load conditions while keeping control and protection concerns aligned.',
		approach: [
			'Partition energy-flow decisions from application-specific power stages',
			'Define measurement, control and protection interfaces',
			'Keep hardware and embedded control configurable for related applications'
		],
		technologies: [
			'Power conversion',
			'Embedded control',
			'Energy measurement',
			'Protection systems'
		],
		verifiedOutcomes: [],
		metrics: [],
		gallery: [],
		featured: true,
		seo: {
			title: 'Software-Defined Energy Routing | Engineering Work',
			description:
				'Explore Sahastiwa Solutions’ modular approach to embedded control for energy generation, storage and distribution.',
			canonicalPath: '/work/software-defined-energy-routing',
			socialImage: '/social/default-card.jpg',
			indexing: 'index'
		}
	},
	{
		slug: 'scalable-esc-architecture',
		title: 'Scalable ESC Architecture',
		summary:
			'A reusable motor-control foundation spanning the power stage, sensing, protection and firmware.',
		kind: 'technology-platform',
		publicationStatus: 'public-platform',
		client: { visibility: 'not-applicable' },
		sector: 'Robotics and motion control',
		challenge:
			'Motor-control products need closely coordinated electrical, sensing and real-time control decisions across different application constraints.',
		approach: [
			'Structure the controller around reusable power and control interfaces',
			'Integrate current, position and protection sensing with embedded control',
			'Adapt application-specific elements without replacing the complete architecture'
		],
		technologies: [
			'BLDC and PMSM control',
			'Gate drivers',
			'Power electronics',
			'Real-time firmware'
		],
		verifiedOutcomes: [],
		metrics: [],
		gallery: [],
		featured: true,
		seo: {
			title: 'Scalable ESC Architecture | Engineering Work',
			description:
				'Explore a modular engineering approach to electronic speed controllers and embedded motor-control systems.',
			canonicalPath: '/work/scalable-esc-architecture',
			socialImage: '/social/default-card.jpg',
			indexing: 'index'
		}
	},
	{
		slug: 'precision-instrumentation-electronics',
		title: 'Precision Instrumentation Electronics',
		summary:
			'A capability-led approach to sensor interfaces, signal conditioning, data acquisition and process control.',
		kind: 'capability-led-engineering',
		publicationStatus: 'public-capability',
		client: { visibility: 'not-applicable' },
		sector: 'Industrial electronics and instrumentation',
		challenge:
			'Industrial instruments must turn real-world sensor signals into dependable measurement and control information within application constraints.',
		approach: [
			'Define the measurement chain from sensor interface to digital processing',
			'Coordinate analog conditioning, data acquisition and embedded control',
			'Plan verification around the agreed measurement and operating requirements'
		],
		technologies: [
			'Analog front ends',
			'Data acquisition',
			'Sensor interfacing',
			'Embedded processing'
		],
		verifiedOutcomes: [],
		metrics: [],
		gallery: [],
		featured: true,
		seo: {
			title: 'Precision Instrumentation Electronics | Engineering Work',
			description:
				'Explore Sahastiwa Solutions’ engineering approach to sensing, signal conditioning, acquisition and process control.',
			canonicalPath: '/work/precision-instrumentation-electronics',
			socialImage: '/social/default-card.jpg',
			indexing: 'index'
		}
	},
	{
		slug: 'connected-embedded-control',
		title: 'Connected Embedded Control',
		summary:
			'A capability-led approach to real-time controllers, telemetry and intelligent connected devices.',
		kind: 'capability-led-engineering',
		publicationStatus: 'public-capability',
		client: { visibility: 'not-applicable' },
		sector: 'Embedded systems and IoT',
		challenge:
			'Connected control products must balance real-time operation, sensor interfaces, communications and maintainable embedded software.',
		approach: [
			'Define hardware, firmware and communication boundaries',
			'Integrate sensing and control around real-time requirements',
			'Choose wired or wireless interfaces for the product context'
		],
		technologies: ['Embedded hardware', 'Real-time firmware', 'BLE and Wi-Fi', 'Remote telemetry'],
		verifiedOutcomes: [],
		metrics: [],
		gallery: [],
		featured: false,
		seo: {
			title: 'Connected Embedded Control | Engineering Work',
			description:
				'Explore an integrated hardware and firmware approach to edge control, wireless sensing and remote telemetry.',
			canonicalPath: '/work/connected-embedded-control',
			socialImage: '/social/default-card.jpg',
			indexing: 'index'
		}
	}
] as const satisfies readonly CaseStudy[];

export function getCaseStudy(slug: string): CaseStudy | undefined {
	return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudyEntries(): Array<{ slug: string }> {
	return caseStudies.map(({ slug }) => ({ slug }));
}
