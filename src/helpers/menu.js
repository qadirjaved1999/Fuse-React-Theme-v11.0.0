import languages from '../constants/index'
const labels = languages.en
const menu = {
  //Geographic Area of Proposed Activity
  geographicArea: [
    {label: labels.eastAfrica, value: "east-africa"},
    {label: labels.westAfrica, value: "west-africa"},
    {label: labels.northAfrica, value: "north-africa"},
    {label: labels.centralAfrica, value: "central-africa"},
    {label: labels.southernAfrica, value: "southern-africa"}
  ],
  //Sectoral Focus of Proposed Activity
  transportActivity: [
   {label: labels.roads, value: "roads"},
   {label: labels.aviation, value: "aviation"},
   {label: labels.maritimePorts, value: "maritime-ports"},
   {label: labels.railways, value: "railways"},
   {label: labels.multiModal, value: "multi-modal"},
  ],

  energyActivity: [
    {label: labels.powerGeneration, value: "power-generation"},
    {label: labels.powerTransmission, value: "power-transmission"},
    {label: labels.oilGas, value: "oil-gas"},
   ],

   ictActivity: [
    {label: labels.telecommunications, value: "telecommunications"},
    {label: labels.iT, value: "it"}
   ],

   waterActivity: [
     {label: labels.resourceManagement, value: "resource-management"}
   ],
   //Regional climate interest and commitment
   regionalClimate: [
    {label: labels.countriesNotInParis, value: "countries-not-in-paris" },
    {label: labels.beneficiaryNDC , value: "beneficiary-ndc" },
    {label: labels.alignedNDC, value: "aligned-ndc" },
    {label: labels.notAligned, value: "not-aligned" },
    {label: labels.allAligned, value: "all-aligned" }

   ],
   //Governance framework for climate change
   governanceClimate: [
    {label: labels.notAdoptingPolicy, value: "not-adopting-policy"},
    {label: labels.frameworkPolicy, value: "framework-policy"},
    {label: labels.developmentPolicy, value: "development-policy"},
    {label: labels.planningPolicy, value: "planning-policy"},
    {label: labels.financePolicy, value: "finance-policy"},
    ],
    // Country ownership climate narrative
    ownershipClimate: [
      {label: labels.someCountriesNoNDE, value: "some-countries-no-nde"},
      {label: labels.establishedNDE, value: "established-nde"},
      {label: labels.ProcessesNDE, value: "Processes-nde"},
      {label: labels.ExperienceNDE, value: "Experience-nde"},
      {label: labels.technicalAssistance, value: "technical-assistance"}
    ],
    // Climate investment landscape harmonization
    harmonizationClimate: [
      {label: labels.noPlansNCCF, value: "no-plans-nccf"},
      {label: labels.planningNCCF, value: "planning-nccf"},
      {label: labels.govtNCCF, value: "govt-nccf"},
      {label: labels.notOperativeNCCF, value: "notOperative-nccf"},
      {label: labels.operativeNCCF, value: "operative-nccf"},
    ],
    // Access to climate finance
    financeClimate: [
      {label: labels.noFinanceProjects, value: "no-finance-projects"},
      {label: labels.onlySomeCountries, value: "only-some-countries"},
      {label: labels.localSupportCountries, value: "local-support-countries"},
      {label: labels.countrySupport, value: "local-support-main-country"},
      {label: labels.localMainCountry, value: "local-main-country"}
    ],
    // Volume of green funds received by hosting countries
    hostingCountries: [
     {label: labels.noFundsReceived, value: "no-funds-received"},
     {label: labels.fundsReceived, value: "funds-received"},
     {label: labels.twoInfrastructure, value: "two-infrastructure"},
     {label: labels.threeInfrastructure, value: "three-infrastructure"},
     {label: labels.fourInfrastructure, value: "four-infrastructure"},
    ],
    // National performance on sustainability issues
    nationalSustainability: [
     {label: labels.noEPIabove30, value: "no-epi-above-30"},
     {label: labels.EPIabove30Restbelow30, value: "epi-above-30-rest-below-30"},
     {label: labels.allEPIabove30, value: "all-epi-above-30"},
     {label: labels.EPIabove35Restbelow35, value: "epi-above-35-rest-below-35"},
     {label: labels.allEPIabove35, value: "all-epi-above-35"},
    ],
    // Access to green energy
    greenEnergy: [
     {label: labels.below15ShareTPES, value: "below-15-share-tpes"},
     {label: labels.above15ShareTPES, value: "above-15-share-tpes"},
     {label: labels.above25ShareTPES, value: "above-25-share-tpes"},
     {label: labels.above35ShareTPES, value: "below-35-share-tpes"},
     {label: labels.above50ShareTPES, value: "below-50-share-tpes"}
    ],
    // Carbon footprint absolute estimation
    absoluteFootprint: [
      {label: labels.absoluteFootprintAbove100k, value: "absolute-footprintAbove100k"},
      {label: labels.absoluteFootprint60kTo100k, value: "absolute-footprint-60k-to-100k"},
      {label: labels.absoluteFootprint20kTo60k, value: "absolute-footprint-20k-to-60k"},
      {label: labels.absoluteFootprintBelow20k, value: "absolute-footprint-below-20k"},
      {label: labels.absoluteNoFootprintAssessment, value: "absolute-no-footprint-assessment"},
    ],
     
    // Carbon footprint relative estimation
    relativeFootprint: [
      {label: labels.relativeFootprintAbove100k, value: "relative-footprintAbove100k"},
      {label: labels.relativeFootprint60kTo100k, value: "relative-footprint-60k-to-100k"},
      {label: labels.relativeFootprint20kTo60k, value: "relative-footprint-20k-to-60k"},
      {label: labels.relativeFootprintBelow20k, value: "relative-footprint-below-20k"},
      {label: labels.relativeNoFootprintAssessment, value: "relative-no-footprint-assessment"},
    ]
}

export default menu;