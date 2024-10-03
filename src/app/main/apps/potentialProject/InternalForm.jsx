import * as React from 'react';
import { FormControlLabel, Grid, Typography, Container } from '@mui/material';
import { styled } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import menu from 'src/helpers/menu';
import CustomTextInput from 'src/helpers/custom-components/CustomTextInput';
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton';
import CustomCheckBox from 'src/helpers/custom-components/CustomCheckBox';
import languages from 'src/constants/index';
import { useState } from 'react';
export default function InternalForm() {
    const label = languages.en;
    console.log("****************************************>>>>>>>>>>>>>>>>>>",menu.geographicAreaProposedActivity)
    // Form Initial State
    const initialState = {   // use this naming structure for object because in DB use this structure
        organisation_name: '',
        address: '',
        contact_person: '',
        position: '',
        telephone: '',
        fax: '',
        email: '',

        east_africa: '',
        west_africa: '',
        north_africa: '',
        central_africa: '',
        southern_africa: '',
        roads: false,
        aviation: false,
        maritime_ports: false,
        railways: false,
        multi_modal: false,
        power_generation: false,
        power_transmission: false,
        oil_gas: false,
        telecommunications: false,
        it: false,
        resource_management: false
    }

    // Hold the Data
    const [data, setData] = useState(initialState);
    console.log("Form data => ", data)

    // Form Handler Function handleInput
    const handleInput = e => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setData({
                ...data,
                [name]: checked
            });
            console.log("Checkboxes Values => ",checked)
        } else {
            setData({
                ...data,
                [name]: value
            });
            console.log("input and radio values => " + name + " " + value)
        }
    }
    return (
        <>
            <Container maxWidth="1340px">
                <StyledHeading>
                    Giz Users Application Form
                </StyledHeading>

                {/* Form Grid */}
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <CustomTextInput
                            label={label.organizationName}
                            value={data.organisation_name}
                            name="organisation_name"
                            type="text"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextInput
                            label={label.address}
                            value={data.address}
                            name="address"
                            type="text"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextInput
                            label={label.contactPerson}
                            value={data.contact_person}
                            name="contact_person"
                            type="number"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextInput
                            label={label.position}
                            value={data.position}
                            name="position"
                            type="text"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomTextInput
                            label={label.telephone}
                            value={data.telephone}
                            name="telephone"
                            type="number"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomTextInput
                            label={label.fax}
                            value={data.fax}
                            name="fax"
                            type="text"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomTextInput
                            label={label.email}
                            value={data.email}
                            name="email"
                            type="text"
                            onChange={handleInput}
                        />
                    </Grid>
                </Grid>

                {/* Radio Grid */}
                <Grid container spacing={2} sx={{ paddingTop: "30px" }}>
                    <Grid item >
                        <CustomRadioButton
                            name="east_africa"
                            value={data.east_africa}
                            label={label.geographicAreaProposedActivityLabel}
                            options={menu.geographicAreaProposedActivity}
                            onChange={handleInput}
                            row={true}
                        />
                    </Grid>
                    {/* <Grid item >
                        <CustomRadioButton
                            name="west_africa"
                            value={data.west_africa}
                            label={label.geographicAreaProposedActivityLabel}
                            options={menu.geographicAreaProposedActivity}
                            onChange={handleInput}
                            row={true}
                        />
                    </Grid> */}
                    {/* <Grid item >
                        <CustomRadioButton
                            name="north_africa"
                            value={data.north_africa}
                            label={label.geographicAreaProposedActivityLabel}
                            options={menu.geographicAreaProposedActivity}
                            onChange={handleInput}
                            row={true}
                        />
                    </Grid> */}
                    {/* <Grid item >
                        <CustomRadioButton
                            value={data.central_africa}
                            label={label.geographicAreaProposedActivityLabel}
                            options={menu.geographicAreaProposedActivity}
                            onChange={handleInput}
                            name="central_africa"
                            row={true}
                        />
                    </Grid> */}
                    {/* <Grid item >
                        <CustomRadioButton
                            value={data.southern_africa}
                            label={label.geographicAreaProposedActivityLabel}
                            options={menu.geographicAreaProposedActivity}
                            onChange={handleInput}
                            name="southern_africa"
                            row={true}
                        />
                    </Grid> */}
                </Grid>

                <StyledHeading fontSize="18px" textAlign="left" fontWeight="normal" margin="10px 0px 0px 0px">
                    Sectoral Focus of Proposed Activity
                </StyledHeading>
                {/* CheckBox Grid */}
                <Grid container spacing={15} sx={{ padding: '20px' }}>
                    <Grid item>
                        <Grid item>
                            <Typography variant="h6">Transport</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container>
                                <Grid item>
                                    <CustomCheckBox
                                        options={menu.transportProposedActivityCheckBox}
                                        checked={data.roads}
                                        name="roads"
                                        onChange={handleInput}
                                    />
                                </Grid>
                                <Grid item>
                                    <CustomCheckBox
                                        options={menu.transportProposedActivityCheckBox}
                                        checked={data.aviation}
                                        name="aviation"
                                        onChange={handleInput}
                                    />
                                </Grid>
                                <Grid item>
                                    <CustomCheckBox
                                        options={menu.transportProposedActivityCheckBox}
                                        checked={data.maritime_ports}
                                        name="maritime_ports"
                                        onChange={handleInput}
                                    />
                                </Grid>
                                <Grid item>
                                    <CustomCheckBox
                                        options={menu.transportProposedActivityCheckBox}
                                        checked={data.railways}
                                        name="railways"
                                        onChange={handleInput}
                                    />
                                </Grid>
                                <Grid item>
                                    <CustomCheckBox
                                        options={menu.transportProposedActivityCheckBox}
                                        checked={data.multi_modal}
                                        name="multi_modal"
                                        onChange={handleInput}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item>
                            <Typography variant="h6">Energy</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container>
                                <Grid item>
                                    <CustomCheckBox
                                        options={menu.energyProposedActivityCheckBox}
                                        checkState={data.power_generation}
                                        name="power_generation"
                                        onChange={handleInput}
                                    />
                                </Grid>
                                <Grid item>
                                    <CustomCheckBox
                                        options={menu.energyProposedActivityCheckBox}
                                        checkState={data.power_transmission}
                                        name="power_transmission"
                                        onChange={handleInput}
                                    />
                                </Grid>
                                <Grid item>
                                    <CustomCheckBox
                                        options={menu.energyProposedActivityCheckBox}
                                        checkState={data.oil_gas}
                                        name="oil_gas"
                                        onChange={handleInput}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item>
                            <Typography variant="h6">ICT</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container>
                                <Grid item>
                                    <CustomCheckBox
                                        options={menu.ictActivityCheckBox}
                                        checkState={data.telecommunications}
                                        name="telecommunications"
                                        onChange={handleInput}
                                    />
                                </Grid>
                                <Grid item>
                                    <CustomCheckBox
                                        options={menu.ictActivityCheckBox}
                                        checkState={data.it}
                                        name="it"
                                        onChange={handleInput}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item>
                            <Typography variant="h6">Water</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container>
                                <Grid item>
                                    <CustomCheckBox
                                        options={menu.waterActivityCheckBox}
                                        checkState={data.resource_management}
                                        name="resource_management"
                                        onChange={handleInput}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </>

    );
}

// HEADINGS STYLE
const StyledHeading = styled(Typography)(({ fontSize, padding, textAlign, margin }) => ({
    fontSize: fontSize || '32px',
    fontWeight: '700',
    fontFamily: 'Roboto, Arial, sans-serif',
    margin: margin || '20px 0 0 0',
    padding: padding || '10px',
    textAlign: textAlign || 'center',
}));