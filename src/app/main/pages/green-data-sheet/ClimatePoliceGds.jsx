import { Grid } from '@mui/material'
import { useState } from 'react'
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton'
import menu from 'src/helpers/menu'
import languages from 'src/labels/index'
import CustomTypography from 'src/helpers/custom-components/CustomTypography'
import CustomButton from 'src/helpers/custom-components/CustomButton'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';


const ClimatePoliceGds = () => {

    const label = languages.en;

    const initialState = {
        regional_climate: '',
        regional_evidence: '',
        governance_climate: '',
        governance_climate_evidence: '',
        ownership_climate: '',
        ownership_evidence: '',
        harmonization_climate: '',
        harmonization_evidence: '',
        finance_climate: '',
        finance_evidence: '',
        hosting_countries: '',
        hosting_evidence: '',
        national_performance: '',
        performance_evidence: '',
        green_energy: '',
        energy_evidence: '',
        absolute_footprint: '',
        absolute_evidence: '',
        relative_footprint: '',
        relative_evidence: '',
        sustainable_potential: '',
        potential_evidence: '',
        vulnerability_assessment: '',
        vulnerability_evidence: '',
        risk_climate: '',
        risk_evidence: '',
        climate_principle: '',
        principle_evidence: '',
        equator_principle: '',
        equator_evidence: '',
        employment_creation: '',
        employment_evidence: '',
        african_trade: '',
        trade_evidence: '',
        req_1: '',
        req_1_evidence: '',
        req_1_justification: ''
    };

    const [data, setData] = useState(initialState);
    console.log("======>>>>>>>>", data);
    const [regionalClimateEvidance, setRegionalClimateEvidance] = useState(data.regional_climate);
    const [governanceClimateEvidance, setGovernanceClimateEvidance] = useState(data.governance_climate);
    const [ownershipClimateEvidance, setOwnershipClimateEvidance] = useState(data.ownership_climate);
    const [harmonizationClimateEvidance, setHarmonizationClimateEvidance] = useState(data.harmonization_climate);
    const [financeClimateEvidance, setFinanceClimateEvidance] = useState(data.finance_climate);
    const [hostingCountriesEvidance, setHostingCountriesEvidance] = useState(data.hosting_countries);
    const [nationalPerformanceEvidance, setNationalPerformanceEvidance] = useState(data.national_performance);
    const [greenEnergyEvidance, setGreenEnergyEvidance] = useState(data.green_energy);
    const [absoluteFootprintEvidance, setAbsoluteFootprintEvidance] = useState(data.absolute_footprint);
    const [relativeFootprintEvidance, setRelativeFootprintEvidance] = useState(data.relative_footprint);
    const [sustainablePotentialEvidance, setSustainablePotentialEvidance] = useState(data.sustainable_potential);
    const [vulnerabilityAssessmentEvidance, setVulnerabilityAssessmentEvidance] = useState(data.vulnerability_assessment);
    const [riskClimateEvidance, setRiskClimateEvidance] = useState(data.risk_climate);
    const [climatePrincipleEvidance, setClimatePrincipleEvidance] = useState(data.climate_principle);
    const [equatorPrincipleEvidance, setEquatorPrincipleEvidance] = useState(data.equator_principle);
    const [employmentCreationEvidance, setEmploymentCreationEvidance] = useState(data.employment_creation);
    const [africanTradeEvidance, setAfricanTradeEvidance] = useState(data.african_trade);






    const handleChange = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log("Name => ", name + "Value => ", value)

        if (name === 'regional_climate') {
            setRegionalClimateEvidance(value)
        }
        if (name === 'governance_climate') {
            setGovernanceClimateEvidance(value)
        }
        if (name === 'ownership_climate') {
            setOwnershipClimateEvidance(value)
        }
        if (name === 'harmonization_climate') {
            setHarmonizationClimateEvidance(value)
        }
        if (name === 'finance_climate') {
            setFinanceClimateEvidance(value)
        }
        if (name === 'hosting_countries') {
            setHostingCountriesEvidance(value)
        }
        if (name === 'national_performance') {
            setNationalPerformanceEvidance(value)
        }
        if (name === 'green_energy') {
            setGreenEnergyEvidance(value)
        }
        if (name === 'absolute_footprint') {
            setAbsoluteFootprintEvidance(value)
        }
        if (name === 'relative_footprint') {
            setRelativeFootprintEvidance(value)
        }
        if (name === 'sustainable_potential') {
            setSustainablePotentialEvidance(value)
        }
        if (name === 'vulnerability_assessment') {
            setVulnerabilityAssessmentEvidance(value)
        }
        if (name === 'risk_climate') {
            setRiskClimateEvidance(value)
        }
        if (name === 'climate_principle') {
            setClimatePrincipleEvidance(value)
        }
        if (name === 'equator_principle') {
            setEquatorPrincipleEvidance(value)
        }
        if (name === 'employment_creation') {
            setEmploymentCreationEvidance(value)
        }
        if (name === 'african_trade') {
            setAfricanTradeEvidance(value)
        }
    }
    return (
        <Grid container spacing={2} justifyContent="center" padding="30px">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <CustomTypography
                    text={label.climatePolicies}
                    variant="h3"
                    display="block"
                    textAlign="center"
                    width="auto"
                    fontWeight="bold"
                    fontSize="18px"
                    color="primary"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="regional_climate"
                    value={data.regional_climate}
                    options={menu.regionalClimate}
                    label={label.regionalClimate}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {regionalClimateEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="governance_climate"
                    value={data.governance_climate}
                    options={menu.governanceClimate}
                    label={label.governanceClimate}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {governanceClimateEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="ownership_climate"
                    value={data.ownership_climate}
                    options={menu.ownershipClimate}
                    label={label.ownershipClimate}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {ownershipClimateEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="harmonization_climate"
                    value={data.harmonization_climate}
                    options={menu.harmonizationClimate}
                    label={label.harmonizationClimate}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {harmonizationClimateEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="finance_climate"
                    value={data.finance_climate}
                    options={menu.financeClimate}
                    label={label.financeClimate}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {financeClimateEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="hosting_countries"
                    value={data.hosting_countries}
                    options={menu.hostingCountries}
                    label={label.hostingCountries}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {hostingCountriesEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="national_performance"
                    value={data.national_performance}
                    options={menu.nationalPerformance}
                    label={label.nationalPerformance}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {nationalPerformanceEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="green_energy"
                    value={data.green_energy}
                    options={menu.greenEnergy}
                    label={label.greenEnergy}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {greenEnergyEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="absolute_footprint"
                    value={data.absolute_footprint}
                    options={menu.absoluteFootprint}
                    label={label.absoluteFootprint}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {absoluteFootprintEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="relative_footprint"
                    value={data.relative_footprint}
                    options={menu.relativeFootprint}
                    label={label.relativeFootprint}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {relativeFootprintEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="sustainable_potential"
                    value={data.sustainable_potential}
                    options={menu.sustainablePotential}
                    label={label.sustainablePotential}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {sustainablePotentialEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="vulnerability_assessment"
                    value={data.vulnerability_assessment}
                    options={menu.vulnerabilityAssessment}
                    label={label.vulnerabilityAssessment}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {vulnerabilityAssessmentEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="risk_climate"
                    value={data.risk_climate}
                    options={menu.riskClimate}
                    label={label.riskClimate}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {riskClimateEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="climate_principle"
                    value={data.climate_principle}
                    options={menu.climatePrinciple}
                    label={label.climatePrinciple}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {climatePrincipleEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="equator_principle"
                    value={data.equator_principle}
                    options={menu.equatorPrinciple}
                    label={label.equatorPrinciple}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {equatorPrincipleEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="employment_creation"
                    value={data.employment_creation}
                    options={menu.employmentCreation}
                    label={label.employmentCreation}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {employmentCreationEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="african_trade"
                    value={data.african_trade}
                    options={menu.africanTrade}
                    label={label.africanTrade}
                    onChange={handleChange}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {africanTradeEvidance && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomButton
                        variant="contained"
                        text="Upload Evidence"
                        textColor="white"
                        bgColor="black"
                        padding='8px 16px'
                        fontSize='16px'
                        minWidth='120px'
                        height='40px'
                        btnIcon={<FileUploadOutlinedIcon />}
                        borderRadius='20px'
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={label.requirementChecklist}
                    variant="h3"
                    display="block"
                    textAlign="center"
                    width="auto"
                    padding="0px 0px 20px 0px"
                    fontWeight="bold"
                    fontSize="18px"
                    color="primary"
                    margin="10px 0px 0px 0px"
                />
            </Grid>
        </Grid>
    )
}

export default ClimatePoliceGds;