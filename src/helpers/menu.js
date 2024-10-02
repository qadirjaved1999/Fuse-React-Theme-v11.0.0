import languages from '../constants/index'
const labels = languages.en
const menu = {
  //Geographic Area of Proposed Activity
  geographicAreaProposedActivity: [
    {label: labels.eastAfrica, value: "east-africa"},
    {label: labels.westAfrica, value: "west-africa"},
    {label: labels.northAfrica, value: "north-africa"},
    {label: labels.centralAfrica, value: "central-africa"},
    {label: labels.southernAfrica, value: "southern-africa"}
  ],
  //Sectoral Focus of Proposed Activity
  transportProposedActivityCheckBox: [
   {label: labels.roads, value: "roads"},
   {label: labels.aviation, value: "aviation"},
   {label: labels.maritimePorts, value: "maritime-ports"},
   {label: labels.railways, value: "railways"},
   {label: labels.multiModal, value: "multi-modal"},
  ],

  energyProposedActivityCheckBox: [
    {label: labels.powerGeneration, value: "power-generation"},
    {label: labels.powerTransmission, value: "power-transmission"},
    {label: labels.oilGas, value: "oil-gas"},
   ],

   ictActivityCheckBox: [
    {label: labels.telecommunications, value: "telecommunications"},
    {label: labels.iT, value: "it"}
   ],

   waterActivityCheckBox: [
     {label: labels.resourceManagement, value: "Resource-management"}
   ],
   //Regional climate interest and commitment
   regionalClimateInterest: [
    {label: labels.countriesNotInParis, value: "countries-notinparis" },
    {label: labels.beneficiaryUpdatedNDC , value: "beneficiary-updatedndc" },
    {label: labels.mainBeneficiaryNDCAligned, value: "mainbeneficiary-ndcaligned" },
    {label: labels.allUpdatedNotAligned, value: "allupdated-notaligned" },
    {label: labels.allUpdatedAllAligned, value: "allupdated-allaligned" }

   ],
   //Governance framework for climate change
   governanceFrameworkClimate: [
    {label: labels.someCountriesNotAdoptingPolicy, value: "some-countries-no-adopting-policy"},
    {label: labels.allCountriesAdoptingPolicyDevelopment, value: "all-countries-adopting-policy-development"},
    {label: labels.allCountriesAdoptingPolicyFramework, value: "all-countries-adopting-policy-framework"},
    {label: labels.allCountriesAdoptingPolicyPlanning, value: "all-countries-adopting-policy-planning"},
    {label: labels.allCountriesAdoptingPolicyFinance, value: "all-countries-adopting-policy-finance"},
    ]
}

export default menu;