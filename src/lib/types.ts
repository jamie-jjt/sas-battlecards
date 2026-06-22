// ============================================================
// ENUMS & CONSTANTS
// ============================================================

export type ThreatLevel = 'high' | 'medium' | 'low';
export type Priority = 'P1' | 'P2' | 'P3';
export type MaturityLevel = 'L1' | 'L2' | 'L3' | 'L4';

export type Category =
  | 'ml-platform'
  | 'cloud-data'
  | 'fraud-fincrime'
  | 'grc-risk'
  | 'bi-visualization'
  | 'data-prep'
  | 'open-source';

export type Industry =
  | 'banking'
  | 'insurance'
  | 'telco'
  | 'government'
  | 'retail'
  | 'healthcare'
  | 'manufacturing'
  | 'energy';

export type MeetingType =
  | 'discovery'
  | 'competitive-bakeoff'
  | 'expansion'
  | 'technical-deepdive'
  | 'executive-presentation'
  | 'poc-planning';

export type Persona =
  | 'cto-cdo'
  | 'cfo-coo'
  | 'ciso-cro'
  | 'head-data-science'
  | 'head-fraud-compliance'
  | 'business-unit-leader';

export type FeatureSupport = 'full' | 'partial' | 'none';

// ============================================================
// BATTLE CARD SCHEMA
// ============================================================

export interface BattleCard {
  slug: string;
  name: string;
  category: Category;
  threatLevel: ThreatLevel;
  priority: Priority;
  lastUpdated: string;
  tagline: string;
  logoUrl?: string;

  overview: {
    whatTheyDo: string;
    sweetSpot: string;
    typicalBuyer: string;
    phPresence: string;
    recentMomentum: string;
    pricingModel: string;
  };

  whereWeWin: DifferentiationPoint[];
  whereTheyWin: CompetitorStrength[];

  features: FeatureComparison[];

  landmines: LandmineQuestion[];
  objections: ObjectionEntry[];

  phContext: {
    localPresence: string;
    knownCustomers: string[];
    localPricing: string;
    regulatoryGaps: string[];
  };

  betterTogetherDecision: {
    partnerWhen: string[];
    competeWhen: string[];
    partnerLink?: string;
  };

  proofPoints: ProofPoint[];

  relatedRegulations: string[];
  relatedSolutions: string[];
}

export interface DifferentiationPoint {
  headline: string;
  explanation: string;
  proofPoint: string;
}

export interface CompetitorStrength {
  area: string;
  whyItMatters: string;
  howToNeutralize: string;
}

export interface FeatureComparison {
  capability: string;
  sas: FeatureSupport;
  competitor: FeatureSupport;
  notes: string;
}

export interface LandmineQuestion {
  question: string;
  expectedAnswer: string;
  whatToSayNext: string;
}

export interface ObjectionEntry {
  objection: string;
  whyTheySayIt: string;
  response: string;
  proofPoints: string[];
  whatNotToSay?: string;
}

export interface ProofPoint {
  type: 'customer-win' | 'analyst' | 'benchmark' | 'case-study';
  title: string;
  detail: string;
  source?: string;
}

// ============================================================
// BETTER TOGETHER SCHEMA
// ============================================================

export interface BetterTogether {
  slug: string;
  partnerName: string;
  lastUpdated: string;
  integrationStory: string;
  architectureDiagram: string;
  integrationPoints: IntegrationPoint[];
  partnerWhen: string[];
  competeWhen: string[];
  positioningStatement: string;
  jointReferences: string[];
  phContext: string;
}

export interface IntegrationPoint {
  name: string;
  description: string;
  direction: 'sas-to-partner' | 'partner-to-sas' | 'bidirectional';
}

// ============================================================
// REGULATION SCHEMA
// ============================================================

export interface Regulation {
  slug: string;
  name: string;
  citation: string;
  issuingBody: string;
  effectiveDate: string;
  complianceDeadline?: string;
  summary: string;
  lastUpdated: string;

  requirements: string[];
  penalties: string;
  affectedEntities: string[];

  sasCapabilityMapping: CapabilityMapping[];
  competitivePositioning: string;
  talkingPoints: string[];
  officialSourceUrl?: string;

  relatedBattleCards: string[];
  relatedSolutions: string[];
  industries: Industry[];
}

export interface CapabilityMapping {
  requirement: string;
  sasProduct: string;
  specificFeature: string;
}

// ============================================================
// SOLUTION SCHEMA
// ============================================================

export interface Solution {
  slug: string;
  name: string;
  lastUpdated: string;
  description: string;
  elevatorPitch: string;
  capabilities: string[];
  targetBuyer: string;
  industries: Industry[];
  phUseCases: string[];
  deploymentOptions: string[];
  integrationPoints: string[];
  competitorAlternatives: string[];
  mcpProductKey?: string;
}

// ============================================================
// SCOPING QUESTION SCHEMA
// ============================================================

export interface ScopingQuestion {
  id: string;
  question: string;
  intent: string;
  followUp: string;
  mapsTo: string;
  maturity: MaturityLevel[];
  persona: Persona[];
  industry: Industry[];
  tags: string[];
}

export interface IndustryScoping {
  industry: Industry;
  displayName: string;
  phPriority: ThreatLevel;
  keySasPlay: string;
  primaryRegulation: string;
  questions: ScopingQuestion[];
}

// ============================================================
// OBJECTION SCHEMA
// ============================================================

export interface Objection {
  id: string;
  theme: string;
  objection: string;
  underlyingConcern: string;
  response: {
    acknowledge: string;
    reframe: string;
    evidence: string;
    close: string;
  };
  proofPoints: string[];
  whatNotToSay: string;
  relatedCompetitors: string[];
  persona: Persona[];
}

// ============================================================
// SIZING SCHEMA
// ============================================================

export interface SizingProfile {
  slug: string;
  tier: 'starter' | 'professional' | 'enterprise';
  displayName: string;
  description?: string;
  useCases: string[];
  userCount: string;
  dataVolume: string;
  kubernetesWorkers: string;
  cpuPerNode: string;
  ramPerNode: string;
  storage: string;
  network: string;
  estimatedMonthlyCost: string;
  hadrNotes: string;
  cloudVsOnprem: string;
  viyaTier?: string;
  typicalCustomers?: string;
}

// ============================================================
// INTEL FEED SCHEMA
// ============================================================

export interface IntelItem {
  id: string;
  headline: string;
  url: string;
  date: string;
  competitor: string;
  category: 'product-launch' | 'pricing' | 'acquisition' | 'partnership' | 'leadership' | 'other';
  soWhat: string;
  pinned: boolean;
}

// ============================================================
// WIZARD OUTPUT SCHEMA
// ============================================================

export interface PrepSheet {
  generatedAt: string;
  inputs: {
    industry: Industry;
    competitors: string[];
    useCase: string;
    meetingType: MeetingType;
    maturity: MaturityLevel;
  };
  scopingQuestions: ScopingQuestion[];
  battleCardLinks: { slug: string; name: string }[];
  betterTogetherLink?: string;
  regulatoryContext: { name: string; slug: string; summary: string }[];
  objectionTips: Objection[];
  landmineQuestions: LandmineQuestion[];
  recommendedSolution: { slug: string; name: string; elevatorPitch: string };
  positioningStatement: string;
}
