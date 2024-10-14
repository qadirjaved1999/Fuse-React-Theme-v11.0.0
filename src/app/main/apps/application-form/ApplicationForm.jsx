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
        reference_code: '',
        sectoral_transport: [],
        sectoral_energy: [],
        sectoral_ict: [],
        sectoral_water: [],
        project_eligibility: '',
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
        first_name: false,
      }
    // Main State Hold the data from Radios CheckBoxs
    const [data, setData] = useState(initialState);
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
            setData({
                ...data,
                [name]: value
            });
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
                <Typography sx={{ paddingBottom: "30px", fontWeight: "bold", fontSize: "15px" }}>{label.annexForm}</Typography>
                {/* Form */}
                <Grid container spacing={2}>
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

                    {/* Radio */}
                    <Grid item xs={12}>
                        <CustomRadioButton
                            name="geographic_area"
                            value={data.geographic_area}
                            label={label.geographicArea}
                            options={menu.geographicArea}
                            onChange={handleInput}
                            row={true}
                            labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <StyledHeading fontSize="18px" textAlign="left" fontWeight="normal" margin="10px 0px 0px 0px">
                            {label.sectoralFocus}
                        </StyledHeading>
                    </Grid>
                    {/* CheckBox */}
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <FormControl component="fieldset" variant="standard">
                            <FormLabel>{label.transport}</FormLabel>
                            <CustomCheckBox
                                options={menu.transportActivity}
                                value={data.sectoral_transport}
                                name="sectoral_transport"
                                onChange={handleInput}
                            />
                        </FormControl>
                    </Grid>
                    {/* Energy */}
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <FormControl component="fieldset" variant="standard">
                            <FormLabel>{label.energy}</FormLabel>
                            <CustomCheckBox
                                options={menu.energyActivity}
                                value={data.sectoral_energy}
                                name="sectoral_energy"
                                onChange={handleInput}
                            />
                        </FormControl>
                    </Grid>
                    {/* ICT */}
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <FormControl component="fieldset" variant="standard">
                            <FormLabel>{label.ict}</FormLabel>
                            <CustomCheckBox
                                options={menu.ictActivity}
                                value={data.sectoral_ict}
                                name="sectoral_ict"
                                onChange={handleInput}
                            />
                        </FormControl>
                    </Grid>
                    {/* Water */}
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <FormControl component="fieldset" variant="standard">
                            <FormLabel>{label.water}</FormLabel>
                            <CustomCheckBox
                                options={menu.waterActivity}
                                value={data.sectoral_water}
                                name="sectoral_water"
                                onChange={handleInput}
                            />
                        </FormControl>
                    </Grid>
                    {/* Project Eligibility */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h6" sx={{ paddingBottom: "20px" }}>{label.projectEligibility}</Typography>
                        <CustomRadioButton
                            name="project_eligibility"
                            value={data.project_eligibility}
                            label={label.specifyRequest}
                            options={menu.projectEligibility}
                            onChange={handleInput}
                            row={false}
                            labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomRadioButton
                            name="infrastructure_project"
                            value={data.infrastructure_project}
                            label={label.infrastructureProject}
                            options={menu.infrastructureProject}
                            onChange={handleInput}
                            row={true}
                            labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
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
                            <FormLabel>{label.proposedActivity}</FormLabel>
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