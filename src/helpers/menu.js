import languages from '../constants/index'
const labels = languages.en
const menu = {
  //Geographic Area of Proposed Activity
  geographicAreaProposedActivity: [
    {label: labels.eastAfrica, value: "east_africa"},
    {label: labels.westAfrica, value: "west_africa"},
    {label: labels.northAfrica, value: "north_africa"},
    {label: labels.centralAfrica, value: "central_africa"},
    {label: labels.southernAfrica, value: "southern_africa"}
  ],
  //Sectoral Focus of Proposed Activity
  transportProposedActivityCheckBox: [
   {label: labels.roads, value: "roads"},
   {label: labels.aviation, value: "aviation"},
   {label: labels.maritimePorts, value: "maritime_ports"},
   {label: labels.railways, value: "railways"},
   {label: labels.multiModal, value: "multi_modal"},
  ],

  energyProposedActivityCheckBox: [
    {label: labels.powerGeneration, value: "power_generation"},
    {label: labels.powerTransmission, value: "power_transmission"},
    {label: labels.oilGas, value: "oil_gas"},
   ],

   ictActivityCheckBox: [
    {label: labels.telecommunications, value: "Telecommunications"},
    {label: labels.iT, value: "IT"}
   ],

   waterActivityCheckBox: [
     {label: labels.resourceManagement, value: "Resource Management"}
   ],
   //Regional climate interest and commitment
   regionalClimateInterest: [
    {label: labels.countriesNotInParis, value: "countries-notinparis" },
    {label: labels.beneficiaryUpdatedNDC , value: "beneficiary-updatedndc" },
    {label: labels.mainBeneficiaryNDCAligned, value: "mainbeneficiary-ndcaligned" },
    {label: labels.allUpdatedNotAligned, value: "allupdated-notaligned" },
    {label: labels.allUpdatedAllAligned, value: "allupdated-allaligned" }

   ],
}

export default menu;