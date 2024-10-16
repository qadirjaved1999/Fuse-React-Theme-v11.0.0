import * as React from 'react';
import { Grid, Typography, Container, TextField, FormLabel } from '@mui/material';
import { styled } from '@mui/material';
import menu from 'src/helpers/menu';
import CustomInput from 'src/helpers/custom-components/CustomInput';
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton';
import CustomCheckBox from 'src/helpers/custom-components/CustomCheckBox';
import languages from 'src/labels/index';
import { useState } from 'react';
import { FormControl } from '@mui/base';
import CustomTypography from 'src/helpers/custom-components/CustomTypography';
import CustomButton from 'src/helpers/custom-components/CustomButton';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
export default function ApplicationForm() {

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
        geographic_area: '', // Radio
        sectoral_transport: [],
        sectoral_energy: [],
        sectoral_ict: [],
        sectoral_water: [],
        request_origin: [],
        other_request: '', // input
        pida_plan: '', // Radio
        pida_project_id: '', // input
        pida_project_name: '', // input
        pida_regional: '', // Radio
        pida_country: '', // Radio
        proposed_activity: '', //Radio
        proposed_other_activity: [],
        priority_action_project: '',
        other_advisory_services: [],
        proposed_project_description: '', //textarea
        key_objectives_desc: '', //textarea
        sdm_request: '', //Radio
        sdm_reference: '', // input
        sdm_responsible: '',
        sdm_organization: '',
        sdm_position: '',
        sdm_telephone: '',
        sdm_email: '',
        implementation_schedule: '',
        additional_information: []
    }
    const initialError = {
        organisation_name: false,
    }
    // Main State Hold the data from Radios CheckBoxs
    const [data, setData] = useState(initialState);
    const [error, setError] = useState(initialError);

    const [pidaPlan, setPidaPlan] = useState(data.pida_plan);
    const [sdmRequest, setSdmRequest] = useState(data.sdm_request);


    // Form Handler Function handleInput
    const handleInput = e => {
        const { name, value, type, checked } = e.target;
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
            setData({ ...data, [name]: value });
            setError({ ...error, [name]: !value });
            console.log("input and radio values => " + "Name = " + name + ", " + "value = " + value)
        }
        if (name === 'pida_plan') {
            setPidaPlan(value);
        }
        if (name === 'sdm_request') {
            setSdmRequest(value);
        }
    }
    return (
        <>
            <Container maxWidth="1240px">
                <CustomTypography
                    text={label.annexForm}
                    variant="h3"
                    display="block"
                    textAlign="center"
                    width="auto"
                    // margin="20px 0"
                    padding="0px 0px 20px 0px"
                    fontWeight="bold"
                    fontSize="18px"
                    color="primary"
                />

                {/* Application Form */}
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <CustomTypography
                            text={label.applicationForm}
                            display="block"
                            width="auto"
                            fontSize="1.3rem"
                            fontFamily="Arial, sans-serif"
                            fontWeight="700"
                            color="black"
                            lineHeight="1.4375em"
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                        <CustomInput
                            label={label.organizationName}
                            value={data.organisation_name}
                            name="organisation_name"
                            type="text"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                        <CustomInput
                            label={label.contactPerson}
                            value={data.contact_person}
                            name="contact_person"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                        <CustomInput
                            label={label.position}
                            value={data.position}
                            name="position"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                        <CustomInput
                            label={label.telephone}
                            value={data.telephone}
                            name="telephone"
                            type="tel"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <CustomInput
                            label={label.fax}
                            value={data.fax}
                            name="fax"
                            type="number"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <CustomInput
                            label={label.email}
                            value={data.email}
                            name="email"
                            type="email"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={6} md={6} lg={6}>
                        <CustomInput
                            label={label.address}
                            value={data.address}
                            name="address"
                            onChange={handleInput}
                        />
                    </Grid>
                    <br />
                    <br />

                    {/* Radio Buttons */}
                    <Grid item xs={12}>
                        <CustomRadioButton
                            name="geographic_area"
                            value={data.geographic_area}
                            label={label.geographicArea}
                            options={menu.geographicArea}
                            onChange={handleInput}
                            row={true}
                            labelStyle={{ fontWeight: "bold", color: "black" }}
                        />
                    </Grid>
                    <br />
                    <br />

                    {/* CheckBoxes */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.sectoralFocus}
                            display="block"
                            width="auto"
                            fontSize="1.3rem"
                            fontFamily="Arial, sans-serif"
                            fontWeight="700"
                            color="black"
                            lineHeight="1.4375em"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <CustomCheckBox
                            name="sectoral_transport"
                            value={data.sectoral_transport}
                            options={menu.transportActivity}
                            label={label.transport}
                            onChange={handleInput}
                        />
                    </Grid>

                    {/* Energy */}
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <CustomCheckBox
                            name="sectoral_energy"
                            value={data.sectoral_energy}
                            options={menu.energyActivity}
                            label={label.energy}
                            onChange={handleInput}
                        />
                    </Grid>

                    {/* ICT */}
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <CustomCheckBox
                            name="sectoral_ict"
                            value={data.sectoral_ict}
                            options={menu.ictActivity}
                            label={label.ict}
                            onChange={handleInput}
                        />
                    </Grid>

                    {/* Water */}
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <CustomCheckBox
                            name="sectoral_water"
                            value={data.sectoral_water}
                            options={menu.waterActivity}
                            label={label.water}
                            onChange={handleInput}
                        />
                    </Grid>
                    <br />
                    <br />
                    {/* Project Eligibility */}
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <CustomTypography
                            text={label.projectEligibility}
                            display="block"
                            width="auto"
                            fontSize="1.3rem"
                            fontFamily="Arial, sans-serif"
                            fontWeight="700"
                            color="black"
                            lineHeight="1.4375em"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <CustomCheckBox
                            name="request_origin"
                            value={data.request_origin}
                            options={menu.requestOrigin}
                            label={label.specifyRequest}
                            onChange={handleInput}
                            row={true}
                        />
                        <CustomInput
                            name="other_request"
                            value={data.other_request}
                            label={label.otherSpecify}
                            onChange={handleInput}
                            marginTop="10px"
                        />
                    </Grid>
                    <br />
                    <br />
                    {/* PIDA Priority Action Plan */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomRadioButton
                            name="pida_plan"
                            value={data.pida_plan}
                            label={label.pidaPlan}
                            options={menu.pidaPlan}
                            onChange={handleInput}
                            row={true}
                            labelStyle={{ fontWeight: "bold", color: "black" }}
                        />
                    </Grid>
                    {pidaPlan === 'yes' && (
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <CustomInput
                                name="pida_project_id"
                                value={data.pida_project_id}
                                label={label.pidaProjectId}
                                onChange={handleInput}
                            />
                        </Grid>
                    )}
                    {pidaPlan === 'yes' && (
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <CustomInput
                                name="pida_project_name"
                                value={data.pida_project_name}
                                label={label.pidaProjectName}
                                onChange={handleInput}
                            />
                        </Grid>
                    )}
                    {pidaPlan === 'no' && (
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <CustomRadioButton
                                name="pida_regional"
                                value={data.pida_regional}
                                label={label.pidaRegional}
                                options={menu.pidaPlan}
                                onChange={handleInput}
                                row={true}
                                labelStyle={{ fontWeight: "700", color: "#3D3935", fontSize: "12px" }}
                            />
                        </Grid>
                    )}
                    {pidaPlan === 'no' && (
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <CustomRadioButton
                                name="pida_country"
                                value={data.pida_country}
                                label={label.pidaCountry}
                                options={menu.pidaPlan}
                                onChange={handleInput}
                                row={true}
                                labelStyle={{ fontWeight: "700", color: "#3D3935", fontSize: "12px" }}
                            />
                        </Grid>
                    )}
                    {/* Proposed Activity */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomRadioButton
                            name="proposed_activity"
                            value={data.proposed_activity}
                            label={label.proposedActivity}
                            options={menu.proposedActivity}
                            onChange={handleInput}
                            row={true}
                            labelStyle={{ fontWeight: "bold", color: "black" }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        {data.proposed_activity.includes("proposed-other-activity") && (
                            <CustomCheckBox
                                name="proposed_other_activity"
                                value={data.proposed_other_activity}
                                options={menu.proposedOtherActivity}
                                onChange={handleInput}
                            />
                        )}
                    </Grid>
                    {/* DETAILS OF THE PROPOSED ACTIVITY */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.detailsProposedActivity}
                            variant="h2"
                            display="block"
                            width="auto"
                            fontSize="1.3rem"
                            fontFamily="Arial, sans-serif"
                            fontWeight="700"
                            textTransform="capitalize"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                            name="proposed_project_description"
                            value={data.proposed_project_description}
                            label={label.projectDescription}
                            onChange={handleInput}
                            multiline
                            rows={1}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <br />
                    <br />
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.keyObjectives}
                            variant="h2"
                            display="block"
                            width="auto"
                            fontSize="1.3rem"
                            fontFamily="Arial, sans-serif"
                            fontWeight="700"
                            textTransform="capitalize"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                            name="key_objectives_desc"
                            value={data.key_objectives_desc}
                            label={label.describeKeyObjective}
                            onChange={handleInput}
                            multiline
                            rows={1}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    {/* Previous request to SDM */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.previousRequestSDM}
                            variant="h2"
                            display="block"
                            width="auto"
                            fontSize="1.3rem"
                            fontFamily="Arial, sans-serif"
                            fontWeight="700"
                            textTransform="capitalize"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomRadioButton
                            name="sdm_request"
                            value={data.sdm_request}
                            label={label.sdmRequest}
                            options={menu.sdmRequest}
                            onChange={handleInput}
                            row={true}
                            labelStyle={{ fontWeight: "bold", color: "black" }}
                        />
                    </Grid>
                    {sdmRequest === 'no' && (
                        <Grid item xs={12} md={12} lg={12}>
                            <CustomInput
                                name="sdm_reference"
                                value={data.sdm_reference}
                                label={label.sdmReference}
                                onChange={handleInput}
                            />
                        </Grid>
                    )}
                    <br />
                    <br />
                    <Grid item xs={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.authorityAgency}
                            variant="h2"
                            display="block"
                            width="auto"
                            fontSize="1.3rem"
                            fontFamily="Arial, sans-serif"
                            fontWeight="700"
                            textTransform="capitalize"
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <CustomInput
                            name="sdm_responsible"
                            value={data.sdm_responsible}
                            label={label.sdmResponsible}
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <CustomInput
                            name="sdm_organization"
                            value={data.sdm_organization}
                            label={label.sdmOrganization}
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={4}>
                        <CustomInput
                            name="sdm_position"
                            value={data.sdm_position}
                            label={label.sdmPosition}
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={4}>
                        <CustomInput
                            name="sdm_telephone"
                            value={data.sdm_telephone}
                            label={label.sdmTelephone}
                            type="tel"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={4}>
                        <CustomInput
                            name="sdm_email"
                            value={data.sdm_email}
                            label={label.sdmEmail}
                            type="email"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.implementationSchedule}
                            variant="h2"
                            display="block"
                            width="auto"
                            fontSize="1.3rem"
                            fontFamily="Arial, sans-serif"
                            fontWeight="700"
                            textTransform="capitalize"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                            name="implementation_schedule"
                            value={data.implementation_schedule}
                            label={label.anticipatedDuration}
                            onChange={handleInput}
                            multiline
                            rows={1}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    {/* ADDITIONAL INFORMATION */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.additionalInformation}
                            variant="h2"
                            display="block"
                            width="auto"
                            fontSize="1.3rem"
                            fontFamily="Arial, sans-serif"
                            fontWeight="700"
                            textTransform="capitalize"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.evidencePrioritization}
                            variant="h3"
                            display="block"
                            width="auto"
                            fontSize="1.3rem"
                            fontFamily="Arial, sans-serif"
                            fontWeight="500"
                        />
                    </Grid>
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
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.mandateApproval}
                            variant="h3"
                            display="block"
                            width="auto"
                            fontSize="1.3rem"
                            fontFamily="Arial, sans-serif"
                            fontWeight="500"
                        />
                    </Grid>
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
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
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
    padding: padding || '0px',
    textAlign: textAlign || 'center',
}));