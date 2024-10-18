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
  // Transport
  transportActivity: [
    { label: labels.roads, value: "roads" },
    { label: labels.aviation, value: "aviation" },
    { label: labels.maritimePorts, value: "maritime-ports" },
    { label: labels.railways, value: "railways" },
    { label: labels.multiModal, value: "multi-modal" },
  ],
  // Energy
  energyActivity: [
    { label: labels.powerGeneration, value: "power-generation" },
    { label: labels.powerTransmission, value: "power-transmission" },
    { label: labels.oilGas, value: "oil-gas" },
  ],
  // ICT
  ictActivity: [
    { label: labels.telecommunications, value: "telecommunications" },
    { label: labels.iT, value: "it" }
  ],
  // Water
  waterActivity: [
    { label: labels.resourceManagement, value: "resource-management" }
  ],
  // Project Eligibility
  requestOrigin : [
    { label: labels.regionalEconomic, value: "regional-economic" },
    { label: labels.specializedRegional, value: "specialized-regional" },
    { label: labels.memberState, value: "member-state" },
  ],
  // Yes & No
  confirmationChoices: [
    { label: labels.yes, value: "yes" },
    { label: labels.no, value: "no" },
  ],
  //Proposed Activity
  proposedActivity: [
    { label: labels.supportPreparationFacility, value: "support-preparation-facility" },
    { label: labels.proposedOtherActivity, value: "proposed-other-activity" }
  ],
  // Other Proposed Activity
  proposedOtherActivity: [
    { label: labels.projectInvestAbility, value: "project-invest-ability" },
    { label: labels.developmentImpact, value: "development-impact" },
    { label: labels.crossBorderHarmonization, value: "cross-border-harmonization" },
    { label: labels.ongoingProjectManagement, value: "ongoing-project-management" },
    { label: labels.projectDiagnostics, value: "project-diagnostics" }
  ],
  // Additional Information
  additionalInformation: [
    { label: labels.evidencePrioritization, value: "evidence-prioritization" },
    { label: labels.mandateApproval, value: "mandate-approval" }
  ],
  // Evaluation committee
  evaluationStatus: [
  {label: labels.pass, value: "pass"},
  {label: labels.fail, value: "fail"} 
  ],
  //Regional climate interest and commitment
  regionalClimate: [
    { label: labels.countriesNotInParis, value: "0" },
    { label: labels.beneficiaryNDC, value: "2.5" },
    { label: labels.alignedNDC, value: "5" },
    { label: labels.notAligned, value: "7.5" },
    { label: labels.allAligned, value: "10" }

  ],
  //Governance framework for climate change
  governanceClimate: [
    { label: labels.notAdoptingPolicy, value: "0" },
    { label: labels.frameworkPolicy, value: "2.5" },
    { label: labels.developmentPolicy, value: "5" },
    { label: labels.planningPolicy, value: "7.5" },
    { label: labels.financePolicy, value: "10" },
  ],
  // Country ownership climate narrative
  ownershipClimate: [
    { label: labels.someCountriesNoNDE, value: "0" },
    { label: labels.establishedNDE, value: "2.5" },
    { label: labels.ProcessesNDE, value: "5" },
    { label: labels.ExperienceNDE, value: "7.5" },
    { label: labels.technicalAssistance, value: "10" }
  ],
  // Climate investment landscape harmonization
  harmonizationClimate: [
    { label: labels.noPlansNCCF, value: "0" },
    { label: labels.planningNCCF, value: "2.5" },
    { label: labels.govtNCCF, value: "5" },
    { label: labels.notOperativeNCCF, value: "7.5" },
    { label: labels.operativeNCCF, value: "10" },
  ],
  // Access to climate finance
  financeClimate: [
    { label: labels.noFinanceProjects, value: "0" },
    { label: labels.onlySomeCountries, value: "2.5" },
    { label: labels.localSupportCountries, value: "5" },
    { label: labels.countrySupport, value: "7.5" },
    { label: labels.localMainCountry, value: "10" }
  ],
  // Volume of green funds received by hosting countries
  hostingCountries: [
    { label: labels.noFundsReceived, value: "0" },
    { label: labels.fundsReceived, value: "2.5" },
    { label: labels.twoInfrastructure, value: "5" },
    { label: labels.threeInfrastructure, value: "7.5" },
    { label: labels.fourInfrastructure, value: "10" },
  ],
  // National performance on sustainability issues
  nationalPerformance: [
    { label: labels.noEPIabove30, value: "0" },
    { label: labels.EPIabove30Restbelow30, value: "2.5" },
    { label: labels.allEPIabove30, value: "5" },
    { label: labels.EPIabove35Restbelow35, value: "7.5" },
    { label: labels.allEPIabove35, value: "10" },
  ],
  // Access to green energy
  greenEnergy: [
    { label: labels.below15ShareTPES, value: "0" },
    { label: labels.above15ShareTPES, value: "2.5" },
    { label: labels.above25ShareTPES, value: "5" },
    { label: labels.above35ShareTPES, value: "7.5" },
    { label: labels.above50ShareTPES, value: "10" }
  ],
  // Carbon footprint absolute estimation
  absoluteFootprint: [
    { label: labels.absoluteFootprintAbove100k, value: "0" },
    { label: labels.absoluteFootprint60kTo100k, value: "2.5" },
    { label: labels.absoluteFootprint20kTo60k, value: "5" },
    { label: labels.absoluteFootprintBelow20k, value: "7.5" },
    { label: labels.absoluteNoFootprintAssessment, value: "10" },
  ],

  // Carbon footprint relative estimation
  relativeFootprint: [
    { label: labels.relativeFootprintAbove100k, value: "0" },
    { label: labels.relativeFootprint60kTo100k, value: "2.5" },
    { label: labels.relativeFootprint20kTo60k, value: "5" },
    { label: labels.relativeFootprintBelow20k, value: "7.5" },
    { label: labels.relativeNoFootprintAssessment, value: "10" },
  ],
  // Sustainable infrastructure operation potential
  sustainablePotential: [
    { label: labels.noClimatePositive, value: "0" },
    { label: labels.climatePositive, value: "2.5" },
    { label: labels.noFullyBasedRenewable, value: "5" },
    { label: labels.supplied50Renewable, value: "7.5" },
    { label: labels.supplied75Renewable, value: "10" },
  ],
  // vulnerability Assessment
  vulnerabilityAssessment: [
    { label: labels.noInitialScreening, value: "0" },
    { label: labels.initialScreening, value: "2.5" },
    { label: labels.bothProjectType, value: "5" },
    { label: labels.oneAnalysisCategorized, value: "7.5" },
    { label: labels.bothAnalysisCategorized, value: "10" },
  ],
  // Climate risk assessment
  riskClimate: [
    { label: labels.noLikelihoodAnalysis, value: "0" },
    { label: labels.likeLihoodAnalysis, value: "2.5" },
    { label: labels.includedAppraising, value: "5" },
    { label: labels.identifiedRespondingRisk, value: "7.5" },
    { label: labels.integratedAdaptationPlan, value: "10" },
  ],
  // Alignment with climate international goals and principles
  climatePrinciple: [
    { label: labels.descriptionNotAligned, value: "0" },
    { label: labels.descriptionAligned, value: "2.5" },
    { label: labels.addressClimateChange, value: "5" },
    { label: labels.eitherMitigationMeasures, value: "7.5" },
    { label: labels.bothMitigationMeasures, value: "10" }
  ],
  // Main issues to be addressed in the environmental assessment according to the Equator Principles
  equatorPrinciple: [
    { label: labels.below4Favorable, value: "0" },
    { label: labels.btw4And5Favorable, value: "2.5" },
    { label: labels.btw6And7Favorable, value: "5" },
    { label: labels.btw8And9Favorable, value: "7.5" },
    { label: labels.btw10And11Favorable, value: "10" }
  ],
  // Employment creation.
  employmentCreation: [
    { label: labels.notEstimated, value: "0" },
    { label: labels.initialEstimation, value: "2.5" },
    { label: labels.directIndirect, value: "5" },
    { label: labels.eitherWomenYouth, value: "7.5" },
    { label: labels.bothWomenYouth, value: "10" }
  ],
  // Intra African trade and industrialization impact
  africanTrade: [
    { label: labels.descriptionNotInclude, value: "0" },
    { label: labels.descriptionInclude, value: "2.5" },
    { label: labels.bothIntraAfricanTrade, value: "5" },
    { label: labels.ocioEconomicEitherAfricanTrade, value: "7.5" },
    { label: labels.ocioEconomicBothAfricanTrade, value: "10" }
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