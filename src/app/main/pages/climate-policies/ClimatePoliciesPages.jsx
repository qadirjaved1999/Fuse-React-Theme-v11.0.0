import { Grid, Typography } from '@mui/material'
import { useState } from 'react'
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton'
import menu from 'src/helpers/menu'
import styled from 'styled-components'
import languages from 'src/constants/index'

const ClimatePoliciesPages = () => {

    const label = languages.en;
    const initialState = {
        regional_climate: "",
        governance_climate: "",
        ownership_climate: "",
        harmonization_climate: "",
        finance_climate: "",
        hosting_Countries: "",
        national_sustainability: "",
        green_energy: "",
        absolute_footprint: "",
        relative_footprint: "",
        sustainable_potential: "",
        vulnerability_assessment: "",
        risk_climate: "",
        international_goals_climate: "",
        equator_principles: "",
        employment_creation: "",
        african_trade: "",
    };

    const [data, setData] = useState(initialState);
    console.log("======>>>>>>>>", data)

    const handleChange = event => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
        console.log("Name => ", name + "Value => ", value)
    }
    return (
        <Grid container spacing={2} justifyContent="center" padding="50px">
            <StyledHeading fontSize="18px" textAlign="center" fontWeight="normal" margin="30px 0px 0px 0px">CLIMATE POLICIES MAINSTREAMING</StyledHeading>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="regional_climate"
                    value={data.regional_climate}
                    options={menu.regionalClimate}
                    label={label.regionalClimate}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="governance_climate"
                    value={data.governance_climate}
                    options={menu.governanceClimate}
                    label={label.governanceClimate}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="ownership_climate"
                    value={data.ownership_climate}
                    options={menu.ownershipClimate}
                    label={label.ownershipClimate}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="harmonization_climate"
                    value={data.harmonization_climate}
                    options={menu.harmonizationClimate}
                    label={label.harmonizationClimate}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="finance_climate"
                    value={data.finance_climate}
                    options={menu.financeClimate}
                    label={label.financeClimate}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="hosting_Countries"
                    value={data.hosting_Countries}
                    options={menu.hostingCountries}
                    label={label.hostingCountries}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="national_sustainability"
                    value={data.national_sustainability}
                    options={menu.nationalSustainability}
                    label={label.nationalSustainability}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="green_energy"
                    value={data.green_energy}
                    options={menu.greenEnergy}
                    label={label.greenEnergy}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="absolute_footprint"
                    value={data.absolute_footprint}
                    options={menu.absoluteFootprint}
                    label={label.absoluteFootprint}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="relative_footprint"
                    value={data.relative_footprint}
                    options={menu.relativeFootprint}
                    label={label.relativeFootprint}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="sustainable_potential"
                    value={data.sustainable_potential}
                    options={menu.sustainablePotential}
                    label={label.sustainablePotential}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="vulnerability_assessment"
                    value={data.vulnerability_assessment}
                    options={menu.vulnerabilityAssessment}
                    label={label.vulnerabilityAssessment}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="risk_climate"
                    value={data.risk_climate}
                    options={menu.riskClimate}
                    label={label.riskClimate}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="international_goals_climate"
                    value={data.international_goals_climate}
                    options={menu.internationalGoalsClimate}
                    label={label.internationalGoalsClimate}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="equator_principles"
                    value={data.equator_principles}
                    options={menu.equatorPrinciples}
                    label={label.equatorPrinciples}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="employment_creation"
                    value={data.employment_creation}
                    options={menu.employmentCreation}
                    label={label.employmentCreation}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="african_trade"
                    value={data.african_trade}
                    options={menu.africanTrade}
                    label={label.africanTrade}
                    onChange={handleChange}
                />
            </Grid>
        </Grid>
    )
}

export default ClimatePoliciesPages;

// HEADINGS STYLE
const StyledHeading = styled(Typography)(({ fontSize, padding, textAlign, margin }) => ({
    fontSize: fontSize || '32px',
    width: "100%",
    fontWeight: '700',
    fontFamily: 'Roboto, Arial, sans-serif',
    margin: margin || '20px 0 0 0',
    padding: padding || '10px',
    textAlign: textAlign || 'center',
}));