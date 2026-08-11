export type IndexingState = 'index' | 'noindex';

export interface SeoMeta {
	title: string;
	description: string;
	canonicalPath: `/${string}` | '/';
	socialImage: string;
	indexing: IndexingState;
}

export interface ContentImage {
	src: string;
	alt: string;
	width: number;
	height: number;
}

export interface SocialLink {
	label: string;
	href: `https://${string}`;
}

export type SiteConfigPlaceholder = 'siteUrl' | 'email' | 'phone' | 'address' | 'bookingUrl';

export interface SiteConfig {
	name: string;
	legalName: string;
	siteUrl: `https://${string}`;
	description: string;
	email: string;
	phone: string;
	address: string;
	bookingUrl: `https://${string}`;
	socialLinks: readonly SocialLink[];
	placeholderFields: readonly SiteConfigPlaceholder[];
}

export interface NavigationItem {
	label: string;
	href: `/${string}` | '/';
}

export interface Capability {
	slug: string;
	title: string;
	eyebrow: string;
	summary: string;
	description: string;
	expertise: readonly string[];
	outcomes: readonly string[];
	imagery: readonly ContentImage[];
}

export type PlatformMaturity = 'engineering-foundation';

export interface Platform {
	slug: string;
	title: string;
	summary: string;
	maturity: PlatformMaturity;
	statusLabel: string;
	problem: string;
	reusableModules: readonly string[];
	applications: readonly string[];
	enquiryCta: string;
	imagery: readonly ContentImage[];
}

export type CaseStudyKind = 'technology-platform' | 'capability-led-engineering';

export type CaseStudyPublicationStatus = 'public-platform' | 'public-capability';

export type CaseStudyClient =
	| {
			visibility: 'not-applicable' | 'anonymized';
			name?: never;
	  }
	| {
			visibility: 'approved-public';
			name: string;
	  };

export interface CaseStudyMetric {
	label: string;
	value: string;
	source: string;
}

export interface CaseStudy {
	slug: string;
	title: string;
	summary: string;
	kind: CaseStudyKind;
	publicationStatus: CaseStudyPublicationStatus;
	client: CaseStudyClient;
	sector: string;
	challenge: string;
	approach: readonly string[];
	technologies: readonly string[];
	verifiedOutcomes: readonly string[];
	metrics: readonly CaseStudyMetric[];
	gallery: readonly ContentImage[];
	featured: boolean;
	seo: SeoMeta;
}

export interface ProcessStage {
	step: number;
	title: string;
	summary: string;
	activities: readonly string[];
	deliverables: readonly string[];
}

export interface EngineeringPrinciple {
	title: string;
	description: string;
}
