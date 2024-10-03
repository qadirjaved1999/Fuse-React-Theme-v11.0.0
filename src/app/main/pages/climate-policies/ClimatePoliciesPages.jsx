import { Grid, Typography } from '@mui/material'
import { useState } from 'react'
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton'
import menu from 'src/helpers/menu'
import styled from 'styled-components'
import languages from 'src/constants/index'

const ClimatePoliciesPages = () => {
    console.log("------------------------------------",menu.countryOwnershipClimate)
    const label = languages.en

    const initialState = {
        regional_climate: "",
        governance_climate: "",
        ownership_climate: ""
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
                    options={menu.regionalClimateInterest}
                    label={label.regionalClimateInterestCommitment}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="governance_climate"
                    value={data.governance_climate}
                    options={menu.governanceFrameworkClimate}
                    label={label.governanceFrameworkClimateChange}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item lg={12}>
                <CustomRadioButton
                    name="ownership_climate"
                    value={data.ownership_climate}
                    options={menu.countryOwnershipClimate}
                    label={label.countryOwnershipClimateNarrative}
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