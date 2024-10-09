import * as React from 'react';
import { FormControlLabel, Grid, Typography, Container, Divider } from '@mui/material';
import { styled } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import menu from 'src/helpers/menu';
import CustomTextInput from 'src/helpers/custom-components/CustomTextInput';
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton';
import CustomCheckBox from 'src/helpers/custom-components/CustomCheckBox';
import languages from 'src/constants/index';
import { useState } from 'react';
import { Box } from '@mui/system';
export default function InternalForm() {

    // All Labls
    const label = languages.en;
    // Form Initial State
    const initialState = {   // use this naming structure for object because in DB use this structure
        organisation_name: '',
        address: '',
        contact_person: '',
        position: '',
        telephone: '',
        fax: '',
        email: '',
        geographic_area: '',
        sectoral_transport: [],
        sectoral_energy: [],
        sectoral_ict: [],
        sectoral_water: []
    }

    // Main State Hold the data from Radios CheckBoxs
    const [data, setData] = useState(initialState);
    console.log("Form data => ", data)

    // Form Handler Function handleInput
    const handleInput = e => {
        const { name, value, type, checked } = e.target;
        console.log("1)name => ", name);
        console.log("2)value => ", value);
        console.log("3)type => ", type);
        console.log("3)Checked => ", checked)

        if (type === 'checkbox') {
            const updatedValues = checked
                ? [...data[name], value]  // Add the checked value to the array
                : data[name].filter((v) => v !== value);

            setData({
                ...data,
                [name]: updatedValues
            });
            console.log("Checkboxes Values => ", checked)
        } else {
            setData({
                ...data,
                [name]: value
            });
            console.log("input and radio values => " + "Name = " + name + ", " + "value = " + value)
        }
    }
    return (
        <>
            <Container maxWidth="1240px">
                <Typography sx={{paddingBottom: "30px", fontWeight: "bold", fontSize: "15px"}}>Application Form</Typography>
                {/* Form Grid */}
                <Grid container spacing={2}>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                        <CustomTextInput
                            label={label.organizationName}
                            value={data.organisation_name}
                            name="organisation_name"
                            type="text"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                        <CustomTextInput
                            label={label.contactPerson}
                            value={data.contact_person}
                            name="contact_person"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                        <CustomTextInput
                            label={label.position}
                            value={data.position}
                            name="position"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                        <CustomTextInput
                            label={label.telephone}
                            value={data.telephone}
                            name="telephone"
                            type="tel"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                        <CustomTextInput
                            label={label.fax}
                            value={data.fax}
                            name="fax"
                            type="number"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                        <CustomTextInput
                            label={label.email}
                            value={data.email}
                            name="email"
                            type="email"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                        <CustomTextInput
                            label={label.address}
                            value={data.address}
                            name="address"
                            onChange={handleInput}
                        />
                    </Grid>
                </Grid>

                {/* Radio Grid */}
                <Grid container spacing={2} sx={{ paddingTop: "30px" }}>
                    <Grid item xs={12}>
                        <CustomRadioButton
                            name="geographic_area"
                            value={data.geographic_area}
                            label={label.geographicArea}
                            options={menu.geographicArea}
                            onChange={handleInput}
                            row={true}
                        />
                    </Grid>
                </Grid>

                <StyledHeading fontSize="18px" textAlign="left" fontWeight="normal" margin="10px 0px 0px 0px">
                    Sectoral Focus of Proposed Activity
                </StyledHeading>
                {/* CheckBox Grid */}
                <Grid container spacing={2} sx={{ padding: '20px' }}>
                    <Grid item xs={12} md={3}>
                        <Grid xs={12} md={3}>
                            <Typography variant="h6">Transport</Typography>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Grid container>
                                <Grid xs={12} md={3}>
                                    <CustomCheckBox
                                        options={menu.transportActivity}
                                        value={data.sectoral_transport}
                                        name="sectoral_transport"
                                        onChange={handleInput}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h6">Energy</Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Grid container>
                                <Grid item xs={12} md={3}>
                                    <CustomCheckBox
                                        options={menu.energyActivity}
                                        value={data.sectoral_energy}
                                        name="sectoral_energy"
                                        onChange={handleInput}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h6">ICT</Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Grid container>
                                <Grid item xs={12} md={3}>
                                    <CustomCheckBox
                                        options={menu.ictActivity}
                                        value={data.sectoral_ict}
                                        name="sectoral_ict"
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
                                        options={menu.waterActivity}
                                        value={data.sectoral_water}
                                        name="sectoral_water"
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