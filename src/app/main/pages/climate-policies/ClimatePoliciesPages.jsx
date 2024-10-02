import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton'
import Menu from 'src/helpers/menu'
import styled from 'styled-components'

const ClimatePoliciesPages = () => {
    const climateLabel = "Regional climate interest and commitment";
    const governanceLabel = "Governance framework for climate change";
    const initialState = {

    };
    const [data, setData] = useState(initialState);
    const climateOptions = Menu.regionalClimateInterest;
    const governanceOption = Menu.governanceFrameworkClimate;
    const handleChange = event => {
        const {name, value} = event.target;
        setData(event.target.value)// wrong
    }
    console.log("======>>>>>>>>", data)
    return (
            <Grid container spacing={2} justifyContent="center">
                {/* <StyledHeading fontSize="18px" textAlign="center" fontWeight="normal" margin="30px 0px 0px 0px">CLIMATE POLICIES MAINSTREAMING</StyledHeading> */}
                <Grid item lg={12} md={12}>
                    <CustomRadioButton
                        name="project_viability"
                        value={data.project_viability}
                        values={Menu.regionalClimateInterest}
                        label={climateLabel}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item lg={12} md={12}>
                    <CustomRadioButton
                        name="projectManagment"
                        value={data}
                        values={governanceOption}
                        label={governanceLabel}
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