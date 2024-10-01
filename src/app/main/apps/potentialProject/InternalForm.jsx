import * as React from 'react';
import { FormControlLabel, Grid, Typography, Container } from '@mui/material';
import { styled } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Menu from 'src/helpers/menu';
import CustomTextInput from 'src/helpers/custom-components/CustomTextInput';
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton';
import CustomCheckBox from 'src/helpers/custom-components/CustomCheckBox';
export default function InternalForm() {
    // Form Initial State
    const initialState = {   // use this naming structure for object because in DB use this structure
        organisation_name: '',
        address: '',
        contact_person: '',
        position: '',
        telephone: '',
        fax: '',
        email: ''
    }

    const label = "Geographic Area of Proposed Activity";

    // Hold the Form Data
    const [data, setData] = React.useState(initialState)
    console.log("Form data => ", data)

    // This State Hold the Selected Radio Valus
    const [selectedValue, setSelectedValue] = React.useState('');

    // This State Intially All Checkbox set False value
    const [checkedState, setCheckedState] = React.useState({
        east_africa: false,
        west_africa: false,
        north_africa: false,
        central_africa: false,
        southern_africa: false,
        roads: false,
        aviation: false,
        maritime_ports: false,
        railways: false,
        multi_modal: false,
        power_generation: false,
        power_transmission: false,
        oil_gas: false
    });
     console.log("Checked CheckBox Value => ",checkedState)
    // Get The Labels of Geographic Area Proposed Activity From Menu
    const labels = Menu.geographicAreaProposedActivity;

    //Get the labels of Transport Proposed Activity from Menu
    const transportLabels = Menu.transportProposedActivityCheckBox;

    // Get the labels of Energy Proposed Activity from Menu
    const energyLabels = Menu.energyProposedActivityCheckBox;

    // Get the labels of ICT Proposed Activity from Menu
    const ictLables = Menu.ictActivityCheckBox;

    // Get the labels of Water Proposed Activity from Menu
    const waterLabels = Menu.waterActivityCheckBox

    // Form Handler Function
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data, [name]: value
        });
    }

    // Radio Handler Function
    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
        console.log("Selected Radio Button: ", event.target.value);
    }

    // CheckBox Handler Function
    const handleChange = (event) => {
        console.log("Checked CheckBox Value => ",event.target.value)
        const { name, checked } = event.target;
        setCheckedState({
            ...checkedState,
            [name]: checked,
        });
    };
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
                            label={labels.organizationName}
                            value={data.organisation_name}
                            name="organisation_name"
                            onChange={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextInput
                            label={labels.address}
                            value={data.address}
                            name="address"
                            onChange={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextInput
                            label={labels.contactPerson}
                            value={data.contact_person}
                            name="contact_person"
                            onChange={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextInput
                            label={labels.position}
                            value={data.position}
                            name="position"
                            onChange={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomTextInput
                            label={labels.telephone}
                            value={data.telephone}
                            name="telephone"
                            onChange={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomTextInput
                            label={labels.fax}
                            value={data.fax}
                            name="fax"
                            onChange={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomTextInput
                            label={labels.email}
                            value={data.email}
                            name="email"
                            onChange={inputHandler}
                        />
                    </Grid>
                </Grid>

                {/* Radio Grid */}
                <Grid container spacing={2} sx={{ paddingTop: "30px" }}>
                    <Grid item >
                        <CustomRadioButton
                            name="geographicArea"
                            value={selectedValue}
                            values={labels}
                            label={label}
                            onChange={handleRadioChange}
                            row={true}
                        />
                    </Grid>
                </Grid>

                <StyledHeading fontSize="18px" textAlign="left" fontWeight="normal" margin="10px 0px 0px 0px">
                    Sectoral Focus of Proposed Activity
                </StyledHeading>
                {/* CheckBox Grid */}
                <Grid container spacing={20} sx={{ padding: '20px' }}>
                    <Grid item>
                        <Grid item>
                            <Typography variant="h6">Transport</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container>
                                <CustomCheckBox
                                    options={transportLabels}
                                    onChange={handleChange}
                                    checkState={checkedState}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item>
                            <Typography variant="h6">Energy</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container>
                                <CustomCheckBox
                                    options={energyLabels}
                                    onChange={handleChange}
                                    checkState={checkedState}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item>
                            <Typography variant="h6">ICT</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container>
                                <CustomCheckBox
                                    options={ictLables}
                                    onChange={handleChange}
                                    checkState={checkedState}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item>
                            <Typography variant="h6">Water</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container>
                                <CustomCheckBox
                                    options={waterLabels}
                                    onChange={handleChange}
                                    checkState={checkedState}
                                />
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