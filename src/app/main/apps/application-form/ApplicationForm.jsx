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
        geographic_area: '',
        sectoral_transport: [],
        sectoral_energy: [],
        sectoral_ict: [],
        sectoral_water: [],
        request_origin: [],
        other_request: "", // input
        reference_code: '',
        infrastructure_project: '',
        priority_action_project: '',
        proposed_activity: [],
        other_advisory_services: [],
        project_description: '',
        key_objectives_desc: '',
        previous_request_sdm: [],
        responsible_official: '',
        organization_agency: '',
        implementation_schedule: '',
        additional_information: []
    }
    const initialError = {
        organisation_name: false,
    }
    // Main State Hold the data from Radios CheckBoxs
    const [data, setData] = useState(initialState);
    const [error, setError] = useState(initialError);

    const [selectedPriorityAction, setSelectedPriorityAction] = useState(data.infrastructure_project);
    const [previousRequestSDM, setPreviousRequestSDM] = useState(data.previous_request_sdm);


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
        if (name === 'infrastructure_project') {
            setSelectedPriorityAction(value);
        }
        if (name === 'previous_request_sdm') {
            setPreviousRequestSDM(value);
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
                    margin="20px 0"
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
                        <CustomInput />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomRadioButton
                            name="infrastructure_project"
                            value={data.infrastructure_project}
                            label={label.infrastructureProject}
                            options={menu.infrastructureProject}
                            onChange={handleInput}
                            row={true}
                            labelStyle={{ fontWeight: "700", color: "#3D3935", fontSize: "12px" }}
                        />
                    </Grid>
                    {selectedPriorityAction === 'yes' && (
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <CustomInput
                                name="priority_action_project"
                                value={data.priority_action_project}
                                label={label.priorityActionProjectNo}
                                type="text"
                                onChange={handleInput}
                            />
                        </Grid>
                    )}
                    {selectedPriorityAction === 'yes' && (
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <CustomInput
                                name="priority_action_project"
                                value={data.priority_action_project}
                                label={label.priorityActionProjectName}
                                type="text"
                                onChange={handleInput}
                            />
                        </Grid>
                    )}
                    {selectedPriorityAction === 'no' && (
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <CustomRadioButton
                                name="infrastructure_project"
                                value={data.infrastructure_project}
                                label={label.regionalPriorityInf}
                                options={menu.infrastructureProject}
                                onChange={handleInput}
                                row={true}
                                labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                            />
                        </Grid>
                    )}
                    <br />
                    {selectedPriorityAction === 'no' && (
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <CustomRadioButton
                                name="infrastructure_project"
                                value={data.infrastructure_project}
                                label={label.priorityRegionalimpact}
                                options={menu.infrastructureProject}
                                onChange={handleInput}
                                row={true}
                                labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                            />
                        </Grid>
                    )}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <FormControl component="fieldset" variant="standard">
                            <FormLabel sx={{ fontWeight: "700", color: "#3D3935", fontSize: "12px" }}>{label.proposedActivity}</FormLabel>
                            <CustomCheckBox
                                name="proposed_activity"
                                value={data.proposed_activity}
                                options={menu.proposedActivity}
                                onChange={handleInput}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        {data.proposed_activity.includes("other-advisory-services") && (
                            <CustomCheckBox
                                name="other_advisory_services"
                                value={data.other_advisory_services}
                                options={menu.otherAdvisoryServices}
                                onChange={handleInput}
                            />
                        )}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h6" sx={{ paddingBottom: "10px" }}>{label.detailsProposedActivity}</Typography>
                        <TextField
                            name="project_description"
                            value={data.project_description}
                            label={label.projectDescription}
                            onChange={handleInput}
                            multiline
                            rows={2}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h6" sx={{ paddingBottom: "10px" }}>{label.keyObjectives}</Typography>
                        <TextField
                            name="key_objectives_desc"
                            value={data.key_objectives_desc}
                            label={label.currentStatus}
                            onChange={handleInput}
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h6">{label.previousRequestSDM}</Typography>
                        <CustomRadioButton
                            name="previous_request_sdm"
                            value={data.previous_request_sdm}
                            label={label.previousRequestSDM}
                            options={menu.previousRequestSDM}
                            onChange={handleInput}
                            row={true}
                            labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                        />
                    </Grid>
                    {previousRequestSDM === 'no' && (
                        <Grid item xs={12} md={12} lg={12}>
                            <CustomInput
                                label={label['referenceCode:']}
                                value={data.reference_code}
                                name="reference_code"
                                onChange={handleInput}
                            />
                        </Grid>
                    )}
                    <Grid item xs={12} md={12} lg={12}>
                        <Typography variant="h6">{label.authorityAgency}</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <CustomInput
                            label={label.responsibleOfficial}
                            value={data.responsible_official}
                            name="responsible_official"
                            type="text"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <CustomInput
                            label={label.OrganizationAgency}
                            value={data.organization_agency}
                            name="organization_agency"
                            type="text"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={4}>
                        <CustomInput
                            label={label.position}
                            value={data.position}
                            name="position"
                            type="text"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={4}>
                        <CustomInput
                            label={label.telephone}
                            value={data.telephone}
                            name="telephone"
                            type="tel"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={4}>
                        <CustomInput
                            label={label.email}
                            value={data.email}
                            name="email"
                            type="email"
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h6" sx={{ paddingBottom: "10px" }}>{label.implementationSchedule}</Typography>
                        <TextField
                            name="implementation_schedule"
                            value={data.implementation_schedule}
                            label={label.anticipatedDuration}
                            onChange={handleInput}
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <FormControl component="fieldset" variant="standard">
                            <FormLabel>{label.additionalInformation}</FormLabel>
                            <CustomCheckBox
                                options={menu.additionalInformation}
                                value={data.additional_information}
                                name="additional_information"
                                onChange={handleInput}
                            />
                        </FormControl>
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