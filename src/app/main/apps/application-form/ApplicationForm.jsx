import { Grid, Container, TextField, InputLabel, Select, MenuItem, Autocomplete } from '@mui/material';
import menu from 'src/helpers/menu';
import CustomInput from 'src/helpers/custom-components/CustomInput';
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton';
import CustomCheckBox from 'src/helpers/custom-components/CustomCheckBox';
import languages from 'src/labels/index';
import { useState } from 'react';
import CustomTypography from 'src/helpers/custom-components/CustomTypography';
import CustomButton from 'src/helpers/custom-components/CustomButton';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CustomAutocomplete from 'src/helpers/custom-components/CustomAutocomplete';



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
        other_origin: '', // input
        pida_pap_project: '', // Radio
        pida_project_id: '', // input
        pida_project_name: '', // input
        regional_infrastructure: '', // Radio
        regional_infrastructure_evidence: '', // documents
        country_infrastructure: '', // Radio
        country_infrastructure_evidence: '', // documents
        proposed_activity: '', //Radio
        proposed_other_activity: [],
        priority_action_project: '',
        other_advisory_services: [],
        project_description: '', //textarea
        key_objectives: '', //textarea
        previous_sdm_request: '', //Radio
        previous_sdm_code: '', // input
        sdm_responsible_person: '',
        sdm_organization: '',
        sdm_position: '',
        sdm_telephone: '',
        sdm_email: '',
        implementation_schedule: '',
        additional_information: [],
        evidence_rec: '', // documents
        evidence_country_rec: '' // documents
    }
    const initialError = {
        organisation_name: false,
    }
    // Main State Hold the data from Radios CheckBoxs
    const [data, setData] = useState(initialState);
    const [error, setError] = useState(initialError);

    const [pidaPlan, setPidaPlan] = useState(data.pida_pap_project);
    const [sdmRequest, setSdmRequest] = useState(data.previous_sdm_request);
    const [regionalEvidence, setregionalEvidence] = useState(data.regional_infrastructure);
    const [countryEvidence, setCountryEvidence] = useState(data.country_infrastructure);

    const [selectedSector, setSelectedSector] = useState([]);
    const [selectedSubsectors, setSelectedSubsectors] = useState([]);

    // Form Handler Function
    const handleChange = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        setError({ ...error, [name]: !value });
        console.log("Name => ", name + "Value => ", value);

        if (name === 'pida_pap_project') {
            setPidaPlan(value);
        }
        if (name === 'previous_sdm_request') {
            setSdmRequest(value);
        }

        if (name === 'regional_infrastructure') {
            setregionalEvidence(value);
        }
        if (name === 'country_infrastructure') {
            setCountryEvidence(value);
        }
    };
    // Form Handler function for checkboxes
    const handleCheckbox = category => e => {
        const { name, checked } = e.target;
        setData({ ...data, [category]: checked ? [...data[category], name] : data[category].filter((item) => item !== name), });
    };

    // Build the Sectors Array
    const sectors = [
        { label: "Transport", value: "transport" },
        { label: "Energy", value: "energy" },
        { label: "ICT", value: "ict" },
        { label: "Water", value: "water" },
    ];
    // Build the subsectors Array using the imported menu data
    const subsectors = [
        { sector: 'transport', activities: menu.transportActivity },
        { sector: 'energy', activities: menu.energyActivity },
        { sector: 'ict', activities: menu.ictActivity },
        { sector: 'water', activities: menu.waterActivity }
    ];
    const handleSectorChange = (_, newSectors) => {
        console.log("newSectors => ", newSectors)
        setSelectedSector(newSectors);

        // Find valid subsectors based on selected sectors
        const allowedValues = subsectors
            .filter(sub => newSectors.some(sector => sector.value === sub.sector))
            .flatMap(sub => sub.activities.map(activity => activity.value));

        console.log('Allowed Subsector Values:', allowedValues);

        setSelectedSubsectors(currentSubsectors =>
            currentSubsectors.filter(subsector => allowedValues.includes(subsector.value))
        );
    };

    const handleSubsectorChange = (_, newSubsectors) => {
        setSelectedSubsectors(newSubsectors);
    };
    const filterSectorOptions = (options) => {
        console.log("Options before filtering:", options);
        console.log("Currently selected sectors:", selectedSector);

        // Filter out sectors that are already selected
        const filteredOptions = options.filter(
            (option) => !selectedSector.some((selected) => selected.value === option.value)
        );

        console.log("Filtered sector options:", filteredOptions); // Debugging
        return filteredOptions;
    };
    // Filtering function for subsectors based on selected sectors
    const filterSubsectorOptions = (options) => {
        console.log("======>>>>>options ", options)
        const filteredOptions = options
            .filter((sub) =>
                selectedSector.some((sector) => sector.value === sub.sector)
            )
            .flatMap((sub) =>
                sub.activities.filter((activity) =>
                    !selectedSubsectors.some(
                        (selected) => selected.value === activity.value
                    )
                )
            );

        console.log("Filtered options:", filteredOptions); // Debugging
        return filteredOptions;
    };
    return (
        <>
            <Container maxWidth="1240px">
                <CustomTypography
                    text={label.applicationForm}
                    fontWeight="700"
                    fontSize="14px"
                />
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <CustomTypography
                            text={label.applicationForm}
                            fontWeight="700"
                            fontSize="14px"
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                        <CustomInput
                            label={label.organizationName}
                            value={data.organisation_name}
                            name="organisation_name"
                            type="text"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                        <CustomInput
                            label={label.contactPerson}
                            value={data.contact_person}
                            name="contact_person"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                        <CustomInput
                            label={label.position}
                            value={data.position}
                            name="position"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                        <CustomInput
                            label={label.telephone}
                            value={data.telephone}
                            name="telephone"
                            type="tel"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <CustomInput
                            label={label.fax}
                            value={data.fax}
                            name="fax"
                            type="number"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <CustomInput
                            label={label.email}
                            value={data.email}
                            name="email"
                            type="email"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6} md={6} lg={6}>
                        <CustomInput
                            label={label.address}
                            value={data.address}
                            name="address"
                            onChange={handleChange}
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
                            onChange={handleChange}
                            row={true}
                            labelStyle={{ fontWeight: "bold", color: "black" }}
                        />
                    </Grid>
                    <br />
                    <br />
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.sectoralFocus}
                            fontWeight="700"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <CustomAutocomplete
                            label="Choose Sector"
                            options={sectors}
                            value={selectedSector}
                            onChange={handleSectorChange}
                            filterOptions={filterSectorOptions}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <CustomAutocomplete
                            label="Choose Subsector"
                            options={subsectors}
                            value={selectedSubsectors}
                            onChange={handleSubsectorChange}
                            filterOptions={filterSubsectorOptions}
                        />
                    </Grid>
                    <br />
                    <br />
                    {/* Project Eligibility */}
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <CustomTypography
                            text={label.projectEligibility}
                            fontSize="14px"
                            fontWeight="700"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <CustomCheckBox
                            name="request_origin"
                            value={data.request_origin}
                            options={menu.requestOrigin}
                            label={label.specifyRequest}
                            onChange={handleCheckbox('request_origin')}
                            row={true}
                        />
                        <CustomInput
                            name="other_origin"
                            value={data.other_origin}
                            label={label.otherOrigin}
                            onChange={handleChange}
                            marginTop="10px"
                        />
                    </Grid>
                    <br />
                    <br />
                    {/* PIDA Priority Action Plan */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomRadioButton
                            name="pida_pap_project"
                            value={data.pida_pap_project}
                            label={label.pidaPapProject}
                            options={menu.confirmationChoices}
                            onChange={handleChange}
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
                                onChange={handleChange}
                            />
                        </Grid>
                    )}
                    {pidaPlan === 'yes' && (
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <CustomInput
                                name="pida_project_name"
                                value={data.pida_project_name}
                                label={label.pidaProjectName}
                                onChange={handleChange}
                            />
                        </Grid>
                    )}
                    {pidaPlan === 'no' && (
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <CustomRadioButton
                                name="regional_infrastructure"
                                value={data.regional_infrastructure}
                                label={label.regionalnfrastructure}
                                options={menu.confirmationChoices}
                                onChange={handleChange}
                                row={true}
                                labelStyle={{ fontWeight: "700", color: "#3D3935", fontSize: "12px" }}
                            />
                            {regionalEvidence === 'yes' && (
                                <Grid item sx={{ paddingTop: "10px" }} xs={12} sm={12} md={6} lg={6}>
                                    <CustomButton
                                        text="Upload Evidence"
                                        btnIcon={<FileUploadOutlinedIcon />}
                                        backgroundColor="black"
                                        onClick={() => alert('Button Clicked!')}
                                    />
                                </Grid>
                            )}
                        </Grid>
                    )}

                    {pidaPlan === 'no' && (
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <CustomRadioButton
                                name="country_infrastructure"
                                value={data.country_infrastructure}
                                label={label.countryInfrastructure}
                                options={menu.confirmationChoices}
                                onChange={handleChange}
                                row={true}
                                labelStyle={{ fontWeight: "700", color: "#3D3935", fontSize: "12px" }}
                            />
                            {countryEvidence === 'yes' && (
                                <Grid item sx={{ paddingTop: "10px" }} xs={12} sm={12} md={6} lg={6}>
                                    <CustomButton
                                        text="Upload Evidence"
                                        btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                                        onClick={() => alert('Button Clicked!')}
                                    />
                                </Grid>
                            )}
                        </Grid>
                    )}
                    {/* Proposed Activity */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomRadioButton
                            name="proposed_activity"
                            value={data.proposed_activity}
                            label={label.proposedActivity}
                            options={menu.proposedActivity}
                            onChange={handleChange}
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
                                onChange={handleCheckbox('proposed_other_activity')}
                            />
                        )}
                    </Grid>
                    {/* DETAILS OF THE PROPOSED ACTIVITY */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                            name="project_description"
                            value={data.project_description}
                            placeholder={label.projectDescription}
                            label={label.detailsProposedActivity}
                            onChange={handleChange}
                            multiline
                            rows={2}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <br />
                    <br />

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                            name="key_objectives"
                            value={data.key_objectives}
                            placeholder={label.describeKeyObjective}
                            label={label.keyObjectives}
                            onChange={handleChange}
                            multiline
                            rows={2}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    {/* Previous request to SDM */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.previousRequestSDM}
                            fontSize="14px"
                            fontWeight="700"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomRadioButton
                            name="previous_sdm_request"
                            value={data.previous_sdm_request}
                            label={label.previousSdmRSequest}
                            options={menu.confirmationChoices}
                            onChange={handleChange}
                            row={true}
                            labelStyle={{ fontWeight: "bold", color: "black" }}
                        />
                    </Grid>
                    {sdmRequest === 'no' && (
                        <Grid item xs={12} md={12} lg={12}>
                            <CustomInput
                                name="previous_sdm_code"
                                value={data.previous_sdm_code}
                                label={label.previousSdmCode}
                                onChange={handleChange}
                            />
                        </Grid>
                    )}
                    <br />
                    <br />
                    <Grid item xs={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.authorityAgency}
                            fontSize="14px"
                            fontWeight="700"
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <CustomInput
                            name="sdm_responsible_person"
                            value={data.sdm_responsible_person}
                            label={label.sdmResponsiblePerson}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <CustomInput
                            name="sdm_organization"
                            value={data.sdm_organization}
                            label={label.sdmOrganization}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={4}>
                        <CustomInput
                            name="sdm_position"
                            value={data.sdm_position}
                            label={label.sdmPosition}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={4}>
                        <CustomInput
                            name="sdm_telephone"
                            value={data.sdm_telephone}
                            label={label.sdmTelephone}
                            type="tel"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={4}>
                        <CustomInput
                            name="sdm_email"
                            value={data.sdm_email}
                            label={label.sdmEmail}
                            type="email"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.implementationSchedule}
                            fontSize="14px"
                            fontWeight="700"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                            name="implementation_schedule"
                            value={data.implementation_schedule}
                            label={label.anticipatedDuration}
                            onChange={handleChange}
                            multiline
                            rows={2}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    {/* ADDITIONAL INFORMATION */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.additionalInformation}
                            fontSize="14px"
                            fontWeight="700"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.evidencePrioritization}
                            fontSize="14px"
                            fontWeight="700"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload Evidence"
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                    <br />
                    <br />
                    <br />
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomTypography
                            text={label.mandateApproval}
                            fontSize="14px"
                            fontWeight="700"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload Evidence"
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>

    );
}
