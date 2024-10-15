import languages from '../labels/index'
const labels = languages.en
const menu = {
  //Geographic Area of Proposed Activity
  geographicArea: [
    { label: labels.eastAfrica, value: "east-africa" },
    { label: labels.westAfrica, value: "west-africa" },
    { label: labels.northAfrica, value: "north-africa" },
    { label: labels.centralAfrica, value: "central-africa" },
    { label: labels.southernAfrica, value: "southern-africa" }
  ],
  //Sectoral Focus of Proposed Activity
  transportActivity: [
    { label: labels.roads, value: "roads" },
    { label: labels.aviation, value: "aviation" },
    { label: labels.maritimePorts, value: "maritime-ports" },
    { label: labels.railways, value: "railways" },
    { label: labels.multiModal, value: "multi-modal" },
  ],

  energyActivity: [
    { label: labels.powerGeneration, value: "power-generation" },
    { label: labels.powerTransmission, value: "power-transmission" },
    { label: labels.oilGas, value: "oil-gas" },
  ],

  ictActivity: [
    { label: labels.telecommunications, value: "telecommunications" },
    { label: labels.iT, value: "it" }
  ],

  waterActivity: [
    { label: labels.resourceManagement, value: "resource-management" }
  ],
  // Project Eligibility
  projectEligibility: [
    { label: labels.regionalEconomic, value: "regional-economic" },
    { label: labels.specializedRegional, value: "specialized-regional" },
    { label: labels.memberState, value: "member-state" },
    { label: labels.specifyOther, value: "specify-other" }
  ],

  infrastructureProject: [
    { label: labels.yes, value: "yes" },
    { label: labels.no, value: "no" },
  ],

  priorityActionProject: [
    { label: labels.priorityActionProjectNo, value: "priority-action-project-no" },
    { label: labels.priorityActionProjectName, value: "priority-action-project-name" }
  ],

  //Proposed Activity
  proposedActivity: [
    { label: labels.supportPreparationFacility, value: "support-preparation-facility" },
    { label: labels.otherAdvisoryServices, value: "other-advisory-services" }
  ],

  otherAdvisoryServices: [
    { label: labels.projectInvestAbility, value: "project-invest-ability" },
    { label: labels.developmentImpact, value: "development-impact" },
    { label: labels.crossBorderHarmonization, value: "cross-border-harmonization" },
    { label: labels.ongoingProjectManagement, value: "ongoing-project-management" },
    { label: labels.projectDiagnostics, value: "project-diagnostics" }
  ],

  // Previous request to SDM
  previousRequestSDM: [
    { label: labels.yes, value: "yes" },
    { label: labels.no, value: "no" }
  ],

  additionalInformation: [
    { label: labels.evidencePrioritization, value: "evidence-prioritization" },
    { label: labels.mandateApproval, value: "mandate-approval" }
  ],
  // Internal Eligibility
  internalEligibility: [
    { label: labels.yes, value: "yes" },
    { label: labels.no, value: "no" }
  ],
  //Regional climate interest and commitment
  regionalClimate: [
    { label: labels.countriesNotInParis, value: "countries-not-in-paris" },
    { label: labels.beneficiaryNDC, value: "beneficiary-ndc" },
    { label: labels.alignedNDC, value: "aligned-ndc" },
    { label: labels.notAligned, value: "not-aligned" },
    { label: labels.allAligned, value: "all-aligned" }

  ],
  //Governance framework for climate change
  governanceClimate: [
    { label: labels.notAdoptingPolicy, value: "not-adopting-policy" },
    { label: labels.frameworkPolicy, value: "framework-policy" },
    { label: labels.developmentPolicy, value: "development-policy" },
    { label: labels.planningPolicy, value: "planning-policy" },
    { label: labels.financePolicy, value: "finance-policy" },
  ],
  // Country ownership climate narrative
  ownershipClimate: [
    { label: labels.someCountriesNoNDE, value: "some-countries-no-nde" },
    { label: labels.establishedNDE, value: "established-nde" },
    { label: labels.ProcessesNDE, value: "Processes-nde" },
    { label: labels.ExperienceNDE, value: "Experience-nde" },
    { label: labels.technicalAssistance, value: "technical-assistance" }
  ],
  // Climate investment landscape harmonization
  harmonizationClimate: [
    { label: labels.noPlansNCCF, value: "no-plans-nccf" },
    { label: labels.planningNCCF, value: "planning-nccf" },
    { label: labels.govtNCCF, value: "govt-nccf" },
    { label: labels.notOperativeNCCF, value: "notOperative-nccf" },
    { label: labels.operativeNCCF, value: "operative-nccf" },
  ],
  // Access to climate finance
  financeClimate: [
    { label: labels.noFinanceProjects, value: "no-finance-projects" },
    { label: labels.onlySomeCountries, value: "only-some-countries" },
    { label: labels.localSupportCountries, value: "local-support-countries" },
    { label: labels.countrySupport, value: "local-support-main-country" },
    { label: labels.localMainCountry, value: "local-main-country" }
  ],
  // Volume of green funds received by hosting countries
  hostingCountries: [
    { label: labels.noFundsReceived, value: "no-funds-received" },
    { label: labels.fundsReceived, value: "funds-received" },
    { label: labels.twoInfrastructure, value: "two-infrastructure" },
    { label: labels.threeInfrastructure, value: "three-infrastructure" },
    { label: labels.fourInfrastructure, value: "four-infrastructure" },
  ],
  // National performance on sustainability issues
  nationalSustainability: [
    { label: labels.noEPIabove30, value: "no-epi-above-30" },
    { label: labels.EPIabove30Restbelow30, value: "epi-above-30-rest-below-30" },
    { label: labels.allEPIabove30, value: "all-epi-above-30" },
    { label: labels.EPIabove35Restbelow35, value: "epi-above-35-rest-below-35" },
    { label: labels.allEPIabove35, value: "all-epi-above-35" },
  ],
  // Access to green energy
  greenEnergy: [
    { label: labels.below15ShareTPES, value: "below-15-share-tpes" },
    { label: labels.above15ShareTPES, value: "above-15-share-tpes" },
    { label: labels.above25ShareTPES, value: "above-25-share-tpes" },
    { label: labels.above35ShareTPES, value: "below-35-share-tpes" },
    { label: labels.above50ShareTPES, value: "below-50-share-tpes" }
  ],
  // Carbon footprint absolute estimation
  absoluteFootprint: [
    { label: labels.absoluteFootprintAbove100k, value: "absolute-footprintAbove100k" },
    { label: labels.absoluteFootprint60kTo100k, value: "absolute-footprint-60k-to-100k" },
    { label: labels.absoluteFootprint20kTo60k, value: "absolute-footprint-20k-to-60k" },
    { label: labels.absoluteFootprintBelow20k, value: "absolute-footprint-below-20k" },
    { label: labels.absoluteNoFootprintAssessment, value: "absolute-no-footprint-assessment" },
  ],

  // Carbon footprint relative estimation
  relativeFootprint: [
    { label: labels.relativeFootprintAbove100k, value: "relative-footprintAbove100k" },
    { label: labels.relativeFootprint60kTo100k, value: "relative-footprint-60k-to-100k" },
    { label: labels.relativeFootprint20kTo60k, value: "relative-footprint-20k-to-60k" },
    { label: labels.relativeFootprintBelow20k, value: "relative-footprint-below-20k" },
    { label: labels.relativeNoFootprintAssessment, value: "relative-no-footprint-assessment" },
  ],
  // Sustainable infrastructure operation potential
  sustainablePotential: [
    { label: labels.noClimatePositive, value: "no-climate-positive" },
    { label: labels.climatePositive, value: "climate-positive" },
    { label: labels.noFullyBasedRenewable, value: "no-fully-based-renewable" },
    { label: labels.supplied50Renewable, value: "supplied-50-renewable" },
    { label: labels.supplied75Renewable, value: "supplied-75-renewable" },
  ],
  // vulnerability Assessment
  vulnerabilityAssessment: [
    { label: labels.noInitialScreening, value: "no-initial-screening" },
    { label: labels.initialScreening, value: "initial-screening" },
    { label: labels.bothProjectType, value: "both-project-type" },
    { label: labels.oneAnalysisCategorized, value: "one-analysis-categorized" },
    { label: labels.bothAnalysisCategorized, value: "both-analysis-categorized" },
  ],
  // Climate risk assessment
  riskClimate: [
    { label: labels.noLikelihoodAnalysis, value: "no-like-lihood-analysis" },
    { label: labels.likeLihoodAnalysis, value: "like-lihood-analysis" },
    { label: labels.includedAppraising, value: "included-appraising" },
    { label: labels.identifiedRespondingRisk, value: "identified-responding-risk" },
    { label: labels.integratedAdaptationPlan, value: "integrated-adaptation-plan" },
  ],
  // Alignment with climate international goals and principles
  internationalGoalsClimate: [
    { label: labels.descriptionNotAligned, value: "description-not-aligned" },
    { label: labels.descriptionAligned, value: "description-aligned" },
    { label: labels.addressClimateChange, value: "address-climate-change" },
    { label: labels.eitherMitigationMeasures, value: "either-mitigation-measures" },
    { label: labels.bothMitigationMeasures, value: "both-mitigation-measures" }
  ],
  // Main issues to be addressed in the environmental assessment according to the Equator Principles
  equatorPrinciples: [
    { label: labels.below4Favorable, value: "below-4-favorable" },
    { label: labels.btw4And5Favorable, value: "btw-4-And-5-favorable" },
    { label: labels.btw6And7Favorable, value: "btw-6-And-7-favorable" },
    { label: labels.btw8And9Favorable, value: "btw-8-And-9-favorable" },
    { label: labels.btw10And11Favorable, value: "btw-10-And-11-favorable" }
  ],
  // Employment creation.
  employmentCreation: [
    { label: labels.notEstimated, value: "not-estimated" },
    { label: labels.initialEstimation, value: "initial-estimation" },
    { label: labels.directIndirect, value: "direct-indirect" },
    { label: labels.eitherWomenYouth, value: "either-women-youth" },
    { label: labels.bothWomenYouth, value: "both-women-youth" }
  ],
  // Intra African trade and industrialization impact
  africanTrade: [
    { label: labels.descriptionNotInclude, value: "description-not-include" },
    { label: labels.descriptionInclude, value: "description-include" },
    { label: labels.bothIntraAfricanTrade, value: "both-intra-african-trade" },
    { label: labels.ocioEconomicEitherAfricanTrade, value: "ocio-economic-either-african-trade" },
    { label: labels.ocioEconomicBothAfricanTrade, value: "ocio-economic-both-african-trade" }
  ],

  // Project Data Sheet Form
  pdsForm: [
    { label: labels.projectName, value: "project-name" },
    { label: labels.organizationName, value: "organization-name" },
    { label: labels.address, value: "address" },
    { label: labels.contactPerson, value: "contact-person" },
    { label: labels.position, value: "position" },
    { label: labels.telephone, value: "telephone" },
    { label: labels.fax, value: "fax" },
    { label: labels.email, value: "email" }
  ],
  // Level of regional interest and political commitment
  politicalCommitment: [
    { label: labels.noRegionalImpact, score: 0, value: "no-regional-impact" },
    { label: labels.noNationalLevelCommitment, score: 2.5, value: "no-national-level-commitment" },
    { label: labels.nationalLevelCommitment, score: 5, value: "national-level-commitment" },
    { label: labels.notIncludedPIDAProgramme, score: 7.5, value: "not-included-pida-programme" },
    { label: labels.includedPIDAProgramme, score: 10, value: "included-pida-programme" }
  ],
  // Promotion of intra-regional trade and investment
  intraRegionalTrade: [
    { label: labels.notAddressImprovements, score: 0, value: "not-address-improvements" },
    { label: labels.addressImprovements, score: 2.5, value: "address-improvements" },
    { label: labels.landLocked, score: 5, value: "land-locked" },
    { label: labels.socioEconomicImpact, score: 7.5, value: "socio-economic-impact" },
    { label: labels.oneLandLockedSocioEconomic, score: 10, value: "one-land-locked-socio-economic" }
  ],
  // Poverty reduction
  povertyReduction: [
    { label: labels.lowRange, score: 0, value: "low-range" },
    { label: labels.mediumRange, score: 2.5, value: "medium-range" },
    { label: labels.highRange, score: 5, value: "high-range" },
    { label: labels.oneCountryVeryHighRange, score: 7.5, value: "one-country-very-high-range" },
    { label: labels.OneAboveCountryVeryHighRange, score: 10, value: "one-above-country-very-high-range" },
  ],
  // Alignment with the socioeconomic and environmental sustainability goals for Africa
  sustainabilityGoals: [
    { label: labels.notAddressAfrican, score: 0, value: "not-address-african" },
    { label: labels.twoGoals, score: 2.5, value: "two-goals" },
    { label: labels.fourGoals, score: 5, value: "four-goals" },
    { label: labels.sixGoals, score: 7.5, value: "six-goals" },
    { label: labels.aboveSixGoals, score: 10, value: "above-six-goals" }
  ],
  // Legal and regulatory framework of the sector
  regulatoryFramework: [
    {label: labels.noLegalFramework, score: 0, value: "no-legal-framework"},
    {label: labels.someLegalFramework, score: 2.5, value: "some-legal-framework"},
    {label: labels.allDraftLegalFramework, score: 5, value: "all-draft-legal-framework"},
    {label: labels.allLegalFramework, score: 7.5, value: "all-legal-framework"},
    {label: labels.regionalHarmonizationProgram, score: 10, value: "regional-harmonization-program"}
  ],
  // Sector organization 
  sectorOrganization: [
   {label: labels.notAllCountriesRegulating, score: 0, value: "not-all-countries-regulating"},
   {label: labels.allCountriesRegulating, score: 2.5, value: "all-countries-regulating"},
   {label: labels.responsibilitiesAgencies, score: 5, value: "responsibilities-agencies"},
   {label: labels.credibleRegulatory, score: 7.5, value: "credible-regulatory"},
   {label: labels.alignedRegionalPolicies, score: 10, value: "aligned-regional-policies"},
  ],
  // Sector maturity 
  sectorMaturity: [
    {label: labels.noSimilarProjects, score: 0, value: "no-similar-projects"},
    {label: labels.infrastructureDevelopments, score: 2.5, value: "infrastructure-developments"},
    {label: labels.degreeOfImplication, score: 5, value: "degree-of-implication"},
    {label: labels.originOfMainMaterials, score: 7.5, value: "origin-of-main-materials"},
    {label: labels.nameOfLocalCompanies, score: 10, value: "name-of-local-companies"},
  ]
}

export default menu;