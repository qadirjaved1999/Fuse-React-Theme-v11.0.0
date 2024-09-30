import * as React from 'react';
import { FormControlLabel, Grid, Radio, RadioGroup, Typography, Container } from '@mui/material';
import { styled } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { LABELS } from 'src/constants/Lables';
import CustomTextInput from './CustomTextInput'
// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function InternalForm() {
    const initialState = {
        // use this naming structure for object because in DB use this structure
        organisation_name: '',
        address: '',
        contact_person: '',
        position: '',
        telephone: '',
        fax: '',
        email: ''
    }
    const [data, setData] = React.useState(initialState)
    console.log("Form data => ",data)
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
    const [selectedValue, setSelectedValue] = React.useState('');
    const inputHandler = (e) => {
       const { name, value} = e.target;
       setData({
        ...data, [name]: value
       });
       console.log("the name is =>", name + " the value of this input => ", value)
    }
    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
        console.log("Selected Radio Button: ", event.target.value);
    }

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setCheckedState({
            ...checkedState,
            [name]: checked,
        });
        console.log("checkbox name is => ", name + " and value is =>", checked)
    };
    return (
        <>
            <Container maxWidth="1340px">
                <StyledHeading>
                    Giz Users Application Form
                </StyledHeading>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <CustomTextInput
                            label={LABELS.organizationName}
                            value={data.organisation_name}
                            name="organisation_name"
                            onChange={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextInput
                            label={LABELS.address}
                            value={data.address}
                            name="address"
                            onChange={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextInput
                            label={LABELS.contactPerson}
                            value={data.contact_person}
                            name="contact_person"
                            onChange={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextInput
                            label={LABELS.position}
                            value={data.position}
                            name="position"
                            onChange={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomTextInput
                            label={LABELS.telephone}
                            value={data.telephone}
                            name="telephone"
                            onChange={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomTextInput
                            label={LABELS.fax}
                            value={data.fax}
                            name="fax"
                            onChange={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomTextInput
                            label={LABELS.email}
                            value={data.email}
                            name="email"
                            onChange={inputHandler}
                        />
                    </Grid>
                </Grid>
                <StyledHeading fontSize="18px" textAlign="left" fontWeight="normal" margin="10px 0px 0px 0px">
                    Geographic Area of Proposed Activity
                </StyledHeading>
                <RadioGroup value={selectedValue} onChange={handleRadioChange}>
                    <Grid container spacing={5} sx={{ padding: "0px 50px 0px 50px" }}>
                        <Grid item>
                            <FormControlLabel
                                control={<Radio value="east_africa" size="small" />}
                                label={LABELS.eastAfrica}
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={<Radio value="west_africa" size="small" />}
                                label={LABELS.westAfrica}
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={<Radio value="north_africa" size="small" />}
                                label={LABELS.northAfrica}
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={<Radio value="central_africa" size="small" />}
                                label={LABELS.centralAfrica}
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={<Radio value="southern_africa" size="small" />}
                                label={LABELS.southernAfrica}
                            />
                        </Grid>
                    </Grid>
                </RadioGroup>
                <StyledHeading fontSize="18px" textAlign="left" fontWeight="normal" margin="10px 0px 0px 0px">
                    Sectoral Focus of Proposed Activity
                </StyledHeading>
                {/* Parent Grid */}
                <Grid container spacing={4} sx={{ padding: '20px' }}>
                    {/* Heading */}
                    <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                        <Typography variant="h6">Transport</Typography>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Grid container direction="column">
                            {['roads', 'aviation', 'maritime_ports', 'railways', 'multi_modal'].map((field, index) => (
                                <Grid item key={index}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                size="small"
                                                checked={checkedState[field]}
                                                onChange={handleChange}
                                                name={field}
                                            />
                                        }
                                        label={LABELS[field]}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                        <Typography variant="h6">Energy</Typography>
                    </Grid>

                    <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                        <Grid container direction="column">
                            {['power_generation', 'power_transmission', 'oil_gas'].map((field, index) => (
                                <Grid item key={index}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                size="small"
                                                checked={checkedState[field]}
                                                onChange={handleChange}
                                                name={field}
                                            />
                                        }
                                        label={LABELS[field]}
                                    />
                                </Grid>
                            ))}
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