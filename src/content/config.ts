import { z, defineCollection } from 'astro:content';

const featureSupportEnum = z.enum(['full', 'partial', 'none']);
const threatLevelEnum = z.enum(['high', 'medium', 'low']);
const priorityEnum = z.enum(['P1', 'P2', 'P3']);
const maturityEnum = z.enum(['L1', 'L2', 'L3', 'L4']);
const categoryEnum = z.enum([
  'ml-platform', 'cloud-data', 'fraud-fincrime',
  'grc-risk', 'bi-visualization', 'data-prep', 'open-source'
]);
const industryEnum = z.enum([
  'banking', 'insurance', 'telco', 'government',
  'retail', 'healthcare', 'manufacturing', 'energy'
]);
const personaEnum = z.enum([
  'cto-cdo', 'cfo-coo', 'ciso-cro',
  'head-data-science', 'head-fraud-compliance', 'business-unit-leader'
]);

// Battle Cards Collection
const battlecards = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    category: categoryEnum,
    threatLevel: threatLevelEnum,
    priority: priorityEnum,
    lastUpdated: z.string().date(),
    tagline: z.string(),
    logoUrl: z.string().optional(),
    overview: z.object({
      whatTheyDo: z.string(),
      sweetSpot: z.string(),
      typicalBuyer: z.string(),
      phPresence: z.string(),
      recentMomentum: z.string(),
      pricingModel: z.string(),
    }),
    whereWeWin: z.array(z.object({
      headline: z.string(),
      explanation: z.string(),
      proofPoint: z.string(),
    })),
    whereTheyWin: z.array(z.object({
      area: z.string(),
      whyItMatters: z.string(),
      howToNeutralize: z.string(),
    })),
    features: z.array(z.object({
      capability: z.string(),
      sas: featureSupportEnum,
      competitor: featureSupportEnum,
      notes: z.string(),
    })),
    landmines: z.array(z.object({
      question: z.string(),
      expectedAnswer: z.string(),
      whatToSayNext: z.string(),
    })),
    objections: z.array(z.object({
      objection: z.string(),
      whyTheySayIt: z.string(),
      response: z.string(),
      proofPoints: z.array(z.string()),
      whatNotToSay: z.string().optional(),
    })),
    phContext: z.object({
      localPresence: z.string(),
      knownCustomers: z.array(z.string()),
      localPricing: z.string(),
      regulatoryGaps: z.array(z.string()),
    }),
    betterTogetherDecision: z.object({
      partnerWhen: z.array(z.string()),
      competeWhen: z.array(z.string()),
      partnerLink: z.string().optional(),
    }),
    proofPoints: z.array(z.object({
      type: z.enum(['customer-win', 'analyst', 'benchmark', 'case-study']),
      title: z.string(),
      detail: z.string(),
      source: z.string().optional(),
    })),
    relatedRegulations: z.array(z.string()),
    relatedSolutions: z.array(z.string()),
  }),
});

// Regulations Collection
const regulations = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    citation: z.string(),
    issuingBody: z.string(),
    effectiveDate: z.string(),
    complianceDeadline: z.string().nullable(),
    summary: z.string(),
    lastUpdated: z.string().date(),
    requirements: z.array(z.string()),
    penalties: z.string(),
    affectedEntities: z.array(z.string()),
    sasCapabilityMapping: z.array(z.object({
      requirement: z.string(),
      sasProduct: z.string(),
      specificFeature: z.string(),
    })),
    competitivePositioning: z.string(),
    talkingPoints: z.array(z.string()),
    officialSourceUrl: z.string().optional(),
    relatedBattleCards: z.array(z.string()),
    relatedSolutions: z.array(z.string()),
    industries: z.array(industryEnum),
  }),
});

// Solutions Collection
const solutions = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    lastUpdated: z.string().date(),
    description: z.string(),
    elevatorPitch: z.string(),
    capabilities: z.array(z.string()),
    targetBuyer: z.string(),
    industries: z.array(industryEnum),
    phUseCases: z.array(z.string()),
    deploymentOptions: z.array(z.string()),
    integrationPoints: z.array(z.string()),
    competitorAlternatives: z.array(z.string()),
    mcpProductKey: z.string().optional(),
  }),
});

// Scoping Questions Collection
const scoping = defineCollection({
  type: 'data',
  schema: z.object({
    industry: industryEnum,
    displayName: z.string(),
    phPriority: threatLevelEnum,
    keySasPlay: z.string(),
    primaryRegulation: z.string(),
    questions: z.array(z.object({
      id: z.string(),
      question: z.string(),
      intent: z.string(),
      followUp: z.string(),
      mapsTo: z.string(),
      maturity: z.array(maturityEnum),
      persona: z.array(personaEnum),
      industry: z.array(industryEnum),
      tags: z.array(z.string()),
    })),
  }),
});

// Objections Collection
const objections = defineCollection({
  type: 'data',
  schema: z.object({
    theme: z.string(),
    displayName: z.string(),
    items: z.array(z.object({
      id: z.string(),
      objection: z.string(),
      underlyingConcern: z.string(),
      response: z.object({
        acknowledge: z.string(),
        reframe: z.string(),
        evidence: z.string(),
        close: z.string(),
      }),
      proofPoints: z.array(z.string()),
      whatNotToSay: z.string(),
      relatedCompetitors: z.array(z.string()),
      persona: z.array(personaEnum),
    })),
  }),
});

// Sizing Collection
const sizing = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    tier: z.enum(['starter', 'professional', 'enterprise']),
    displayName: z.string(),
    description: z.string().optional(),
    useCases: z.array(z.string()),
    userCount: z.string(),
    dataVolume: z.string(),
    kubernetesWorkers: z.string(),
    cpuPerNode: z.string(),
    ramPerNode: z.string(),
    storage: z.string(),
    network: z.string(),
    estimatedMonthlyCost: z.string(),
    hadrNotes: z.string(),
    cloudVsOnprem: z.string(),
    viyaTier: z.string().optional(),
    typicalCustomers: z.string().optional(),
  }),
});

export const collections = {
  battlecards,
  regulations,
  solutions,
  scoping,
  objections,
  sizing,
};
