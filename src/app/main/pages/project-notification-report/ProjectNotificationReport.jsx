import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Grid,
    TableHead,
    Autocomplete,
    TextField,
    Typography
} from '@mui/material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import CustomTypography from 'src/helpers/custom-components/CustomTypography';
import CustomInput from 'src/helpers/custom-components/CustomInput';
import CustomButton from 'src/helpers/custom-components/CustomButton';
import { Box } from '@mui/system';
import menu from 'src/helpers/menu';
// import CustomDatePicker from 'src/helpers/custom-components/CustomDatePicker';


const ProjectNotificationReport = () => {
    const initialState = {
        project_id: '',
        project_name: '',
        Information_completeness: '',
        final_notification_report: '',
        project_updates: '',
        contact: '',
        project_owner: '',
        project_description: '',
        cost_eur: '',
        cost_usd: '',
        persentage: '',
        bridge_length: '',
        roadway_length: '',
        span_details: '',
        rationale: '',
        objective: '',
        preliminary_project: '',
        project_status: '',
        regional_priority: '',
        sector_readiness: '',
        project_readiness: '',
        private_sector_interest: '',
        ppp_attractiveness: '',
        climate_policies_mainstreaming: '',
        green_funds_interest: '',
        climate_mitigation: '',
        climate_adaptation: '',
        green_funds_attractiveness: '',
        economic_contribution: '',
        conclusion: '',
        identified_needs_sdm: '',
        identified_needs_owner: '',
        potential_services_sdm: '',
        next_sections_recommendations: ''
    };

    const [data, setData] = useState(initialState);
    // const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSector, setSelectedSector] = useState([]);
    const [selectedSubsectors, setSelectedSubsectors] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log("name => ", name + " " + "Value => ", value)
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
        setSelectedSector(newSectors);

        // Find valid subsectors based on selected sectors
        const allowedValues = subsectors
            .filter(sub => newSectors.some(sector => sector.value === sub.sector))
            .flatMap(sub => sub.activities.map(activity => activity.value));

        setSelectedSubsectors(currentSubsectors =>
            currentSubsectors.filter(subsector => allowedValues.includes(subsector.value))
        );
    };

    const handleSubsectorChange = (_, newSubsectors) => setSelectedSubsectors(newSubsectors);

    const downloadPDF = async () => {
        const pdf = new jsPDF();
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);

        // Add project form data
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.text(`Project ID:`, 10, 10);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${data.project_id}`, 35, 10);

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.text(`Project Name:`, 10, 20);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${data.project_name}`, 40, 20);

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.text(`Notification Status:`, 10, 30);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${data.Information_completeness}`, 50, 30);

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.text(`Final Notification Report:`, 10, 40);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${data.final_notification_report}`, 65, 40);

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.text(`Project Update:`, 10, 50);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${data.project_updates}`, 45, 50);

        pdf.setFontSize(18);
        pdf.text("Project Information", 10, 58);

        // Generate and add each table to the PDF
        const tableIds = ['table-1', 'table-2', 'table-3']; // IDs for each table container
        let yOffset = 60;

        for (let i = 0; i < tableIds.length; i++) {
            const tableElement = document.getElementById(tableIds[i]);
            const canvas = await html2canvas(tableElement);
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 190;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            if (yOffset + imgHeight > pdf.internal.pageSize.height) {
                pdf.addPage();
                yOffset = 10;
            }

            pdf.addImage(imgData, 'PNG', 10, yOffset, imgWidth, imgHeight);
            yOffset += imgHeight + 10;
        }

        pdf.save('project_report.pdf');
    };

    const formsProvided = [
        { title: "Project Stage Screening Questionnaire", result: "Yes" },
        { title: "PIDA SDM Application Form", result: "No" },
        { title: "PIDA SDM Appendix to Application Form Project Data Sheet (PDS)", result: "Yes" },
        { title: "Project’s Green Track Questionnaire", result: "No" }
    ];


    const dimensions = [
        {
            title: "Dimension 1: Regional priority",
            scores: { owner: 10, sdm: 8.3 },
            items: [
                { label: "1. Level of regional interest and political commitment", ownerScore: 10, sdmScore: 10 },
                { label: "2. Promotion of employment, intra-regional trade and investment", ownerScore: 10, sdmScore: 7.5 },
                { label: "3. Poverty reduction", ownerScore: 10, sdmScore: 10 },
                { label: "4. Alignment with the socioeconomic and environmental sustainability goals for Africa", ownerScore: 10, sdmScore: 5 }
            ]
        },
        {
            title: "Dimension 2: Sector readiness",
            scores: { owner: 4.13, sdm: 4.13 },
            items: [
                { label: "5. Regulatory framework and harmonization of the sector", ownerScore: 5, sdmScore: 5 },
                { label: "6. Sector organization", ownerScore: 5, sdmScore: 5 },
                { label: "7. Sector maturity", ownerScore: 2.5, sdmScore: 2.5 }
            ]
        },
        {
            title: "Dimension 3: Private sector interest",
            scores: { owner: 3.13, sdm: 1.88 },
            items: [
                { label: "8. Private investors’ appetite", ownerScore: 5, sdmScore: 5 },
                { label: "9. Country risks", ownerScore: 5, sdmScore: 5 },
                { label: "10. Access to financing", ownerScore: 2.5, sdmScore: 2.5 }
            ]
        },
        {
            title: "Dimension 4: Project readiness",
            scores: { owner: 5.5, sdm: 5.5 },
            items: [
                { label: "11. Technical viability", ownerScore: 5, sdmScore: 5 },
                { label: "12. Financial viability", ownerScore: 2.5, sdmScore: 2.5 },
                { label: "13. E&S viability", ownerScore: 10, sdmScore: 10 },
                { label: "14. Governance", ownerScore: 7.5, sdmScore: 7.5 },
                { label: "15. Risks", ownerScore: 2.5, sdmScore: 2.5 }
            ]
        },
        {
            title: "Dimension 5: PPP Attractiveness",
            scores: { owner: 5, sdm: 5 },
            items: [
                { label: "16. Private sector requirements", ownerScore: 5, sdmScore: 5 },
                { label: "17. Beneficiary government requirements", ownerScore: 3.5, sdmScore: 3.5 },
                { label: "18. PPFs and Financial Institutions requirements", ownerScore: 5, sdmScore: 5 }
            ]
        }
    ];

    const scoreData = [
        { component: "Dimension 1: Climate policies mainstreaming", projectOwnerScore: 1.63, currentScore: 5.63, isBold: true, backgroundColor: "#C0CCD6" },
        { component: "1. Regional climate interest and commitment", projectOwnerScore: 2.5, currentScore: 10 },
        { component: "2. Governance framework for climate change", projectOwnerScore: 0, currentScore: 0 },
        { component: "3. Country ownership climate narrative", projectOwnerScore: 2.5, currentScore: 2.5 },
        { component: "Dimension 2: Green funds interest", projectOwnerScore: 7.38, currentScore: 7.38, isBold: true, backgroundColor: "#C0CCD6" },
        { component: "4. Climate investment landscape harmonization", projectOwnerScore: 7.5, currentScore: 7.5 },
        { component: "5. Access to climate finance", projectOwnerScore: 0, currentScore: 0 },
        { component: "6. Volume of green funds received by hosting countries", projectOwnerScore: 5, currentScore: 5 },
        { component: "7. National performance on sustainability issues", projectOwnerScore: 10, currentScore: 10 },
        { component: "8. Access to green energy", projectOwnerScore: 10, currentScore: 10 },
        { component: "Dimension 3: Climate mitigation", projectOwnerScore: 4.48, currentScore: 4.48, isBold: true, backgroundColor: "#C0CCD6" },
        { component: "9. Carbon footprint absolute estimation", projectOwnerScore: 7.5, currentScore: 7.5 },
        { component: "10. Carbon footprint relative estimation", projectOwnerScore: 0, currentScore: 0 },
        { component: "11. Sustainable infrastructure operation potential", projectOwnerScore: 7.5, currentScore: 7.5 },
        { component: "Dimension 4: Climate adaptation", projectOwnerScore: 10, currentScore: 5, isBold: true, backgroundColor: "#C0CCD6" },
        { component: "12. Vulnerability assessment", projectOwnerScore: 10, currentScore: 0 },
        { component: "13. Climate risk assessment", projectOwnerScore: 10, currentScore: 10 },
        { component: "Dimension 5: Green funds attractiveness", projectOwnerScore: 1.25, currentScore: 1.25, isBold: true, backgroundColor: "#C0CCD6" },
        { component: "14. Alignment with climate international goals and principles", projectOwnerScore: 2.5, currentScore: 2.5 },
        { component: "15. Main issues to be addressed in the environmental assessment according to the Equator Principles", projectOwnerScore: 5, currentScore: 5 },
        { component: "Dimension 6: Economic contribution", projectOwnerScore: 10, currentScore: 10, isBold: true, backgroundColor: "#C0CCD6", color: "white" },
        { component: "16. Employment creation", projectOwnerScore: 10, currentScore: 10 },
        { component: "17. Intra-African trade and industrialization impact", projectOwnerScore: 10, currentScore: 10 },
        { component: "Project Final score", projectOwnerScore: 5.6, currentScore: 5.29, isBold: true, backgroundColor: "#0A3160", color: "white" }
    ];

    const fields = [
        { name: "green_funds_interest", label: "Green funds interest" },
        { name: "climate_mitigation", label: "Climate mitigation" },
        { name: "climate_adaptation", label: "Climate adaptation" },
        { name: "green_funds_attractiveness", label: "Green funds attractiveness" },
        { name: "economic_contribution", label: "Economic contribution" }
    ];

    const additionalFields = [
        { name: "conclusion", label: "Conclusion" },
        { name: "identified_needs_sdm", label: "Identified needs from SDM" },
        { name: "identified_needs_owner", label: "Identified needs from Project Owner" },
        { name: "potential_services_sdm", label: "Potential Services to be provided by SDM" },
        { name: "next_sections_recommendations", label: "Next Sections and Recommendations" }
    ];

    const readinessFields = [
        { name: "regional_priority", label: "Regional priority" },
        { name: "sector_readiness", label: "Sector readiness" },
        { name: "project_readiness", label: "Project readiness" },
        { name: "private_sector_interest", label: "Private sector interest" },
        { name: "ppp_attractiveness", label: "PPP attractiveness" }
    ];

    const projectFields = [
        { name: "rationale", label: "Rationale" },
        { name: "objective", label: "Objective" },
        { name: "preliminary_project", label: "Preliminary project insights" },
        { name: "project_status", label: "Project status" }
    ];

    return (
        <Grid container spacing={2}>
            <Grid item sx={{ textAlign: "center" }} xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text="Project Notification Report"
                    fontWeight="700"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ textAlign: "right" }}>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
                    <CustomButton text="Download PDF" onClick={downloadPDF} />
                    <CustomButton text="Save As" />
                </Box>
                <br />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <CustomInput
                    name="project_name"
                    value={data.project_name}
                    label="Project name"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <CustomInput
                    name="project_id"
                    value={data.project_id}
                    label="Project id"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <CustomInput
                    name="Information_completeness"
                    value={data.Information_completeness}
                    label="Notification Status"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <CustomInput
                    name="project_updates"
                    value={data.project_updates}
                    label="Project Updates"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text="Project information"
                    fontWeight="700"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomInput
                    name="contact"
                    value={data.contact}
                    label="Contact"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomInput
                    name="project_owner"
                    value={data.project_owner}
                    label="Project owner/REC"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomInput
                    name="data_picker"
                    label="Date submission"
                    onChange={handleChange}
                />
                {/* <CustomDatePicker
                    label="Appointment Date"
                    value={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                    disablePast={true}
                    minDate="2023-01-01"
                    maxDate="2023-12-31"
                    views={['year', 'month', 'day']}
                    openTo="month"
                /> */}
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <Autocomplete
                    multiple
                    options={sectors}
                    getOptionLabel={(option) => option.label}
                    value={selectedSector}
                    onChange={handleSectorChange}
                    renderInput={(params) => (
                        <TextField {...params} label="Select Sector" placeholder="Choose sectors" />
                    )}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <Autocomplete
                    multiple
                    options={
                        subsectors
                            .filter(sub => selectedSector.some(sector => sector.value === sub.sector))
                            .flatMap(sub => sub.activities)
                    }
                    getOptionLabel={(option) => option.label}
                    value={selectedSubsectors}
                    onChange={handleSubsectorChange}
                    renderInput={(params) => (
                        <TextField {...params} label="Select Subsector" placeholder="Choose subsectors" />
                    )}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomInput
                    name="project_updates"
                    value={data.project_updates}
                    label="Project Updates"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} id="table-1">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#E8E8E8" }}>
                                <TableCell sx={{ width: "90%", fontWeight: "bold" }}>Forms provided by the Project Owner</TableCell>
                                <TableCell sx={{ width: "10%", fontWeight: "bold", textAlign: "center" }}>Results</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {formsProvided.map((form, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ width: "90%" }}>{form.title}</TableCell>
                                    <TableCell sx={{ width: "10%", textAlign: "center" }}>{form.result}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="project_description"
                    value={data.project_description}
                    placeholder={"Type here"}
                    label={"Project description"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={"Financial information"}
                    fontWeight="700"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomInput
                    name="cost_eur"
                    value={data.cost_eur}
                    label={"Cost (EUR)"}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomInput
                    name="cost_usd"
                    value={data.cost_usd}
                    label={"Cost (USD)"}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomInput
                    name="persentage"
                    value={data.persentage}
                    label={"Percentage (%)"}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={"Infrastructure and technical specifications"}
                    fontWeight="700"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomInput
                    name="bridge_length"
                    value={data.bridge_length}
                    label={"Bridge Length"}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomInput
                    name="roadway_length"
                    value={data.roadway_length}
                    label={"Roadway Length"}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomInput
                    name="span_details"
                    value={data.span_details}
                    label={"Span Details"}
                    onChange={handleChange}
                />
            </Grid>
            {projectFields.map((field) => (
                <Grid item xs={12} sm={12} md={12} lg={12} key={field.name}>
                    <CustomInput
                        name={field.name}
                        value={data[field.name]}
                        label={field.label}
                        onChange={handleChange}
                        multiline
                    />
                </Grid>
            ))}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={"Evaluation Summary"}
                    fontWeight="700"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography>
                    {"The PIDA Quality Label (PQL) is a tool through which the SDM can evaluate the projects’ adherence to  international best practices, serving as an indicator of the projects’ likelihood of obtaining financing. With the  PQL, SDM is able to provide information for both Project Owners/Sponsors and finance institutions about  specific project gaps and strengths. On its initial phase, the PQL was developed to evaluate the technical aspects of the projects, awarding them  with a “Quick Check Methodology” (QCM) brown label. The PQL v2.0 consists of an updated version, with a  complementary climate appraisal, which follows the same methodological structure of the QCM. With this  approach, the PQL can award the projects also with a “Green Check Methodology” (GCM) green label.  Therefore, each project is analyzed with two appraisals: the Technical feasibility appraisal (through the QCM)  and the Green appraisal (through the GCM)."}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                    component="img"
                    sx={{
                        height: 300,
                        width: 500,
                    }}
                    alt="Summary image not found"
                    src="/public/assets/images/pages/image 23.png"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={"Project technical feasibility appraisal (QCM)"}
                    fontWeight="700"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} id="table-2">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#0A3160", display: 'flex' }}>
                                <TableCell sx={{ color: "white", fontWeight: "bold", flex: 10 }}>{"Component"}</TableCell>
                                <TableCell align="center" sx={{ color: "white", fontWeight: "bold", flex: 3 }}>{"Project Owner Score"}</TableCell>
                                <TableCell align="center" sx={{ color: "white", fontWeight: "bold", flex: 3 }}>{"Current Score (by SDM)"}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dimensions.map((dimension, index) => (
                                <React.Fragment key={index}>
                                    <TableRow sx={{ backgroundColor: "#C0CCD6", display: 'flex' }}>
                                        <TableCell sx={{ flex: 10, fontWeight: "bold" }}>{dimension.title}</TableCell>
                                        <TableCell align="center" sx={{ flex: 3 }}>{dimension.scores.owner}</TableCell>
                                        <TableCell align="center" sx={{ flex: 3 }}>{dimension.scores.sdm}</TableCell>
                                    </TableRow>
                                    {dimension.items.map((item, itemIndex) => (
                                        <TableRow sx={{ display: 'flex' }} key={itemIndex}>
                                            <TableCell sx={{ flex: 10 }}>{item.label}</TableCell>
                                            <TableCell align="center" sx={{ flex: 3 }}>{item.ownerScore}</TableCell>
                                            <TableCell align="center" sx={{ flex: 3 }}>{item.sdmScore}</TableCell>
                                        </TableRow>
                                    ))}
                                </React.Fragment>
                            ))}
                            <TableRow sx={{ display: 'flex', backgroundColor: "#0A3160", color: "white" }}>
                                <TableCell sx={{ flex: 10, fontWeight: "bold", color: "white" }}>{"Project Final score"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3, color: "white" }}>5.47</TableCell>
                                <TableCell align="center" sx={{ flex: 3, color: "white" }}>5</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </Grid>
            {readinessFields.map((field) => (
                <Grid item xs={12} sm={12} md={12} lg={12} key={field.name}>
                    <CustomInput
                        name={field.name}
                        value={data[field.name]}
                        label={field.label}
                        onChange={handleChange}
                        multiline
                    />
                </Grid>
            ))}

            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={"Green Appraisal (GCM)"}
                    fontWeight="700"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} id="table-3">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#0A3160", display: 'flex' }}>
                                <TableCell sx={{ color: "white", fontWeight: "bold", flex: 10 }}>Component</TableCell>
                                <TableCell align="center" sx={{ color: "white", fontWeight: "bold", flex: 3 }}>Project Owner Score</TableCell>
                                <TableCell align="center" sx={{ color: "white", fontWeight: "bold", flex: 3 }}>Current Score (by SDM)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {scoreData.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        backgroundColor: row.backgroundColor || "inherit",
                                        color: row.color || "inherit"
                                    }}
                                >
                                    <TableCell sx={{ flex: 10, fontWeight: row.isBold ? "bold" : "normal" }}>{row.component}</TableCell>
                                    <TableCell align="center" sx={{ flex: 3 }}>{row.projectOwnerScore}</TableCell>
                                    <TableCell align="center" sx={{ flex: 3 }}>{row.currentScore}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Grid>
            {fields.map((field) => (
                <Grid item xs={12} sm={12} md={12} lg={12} key={field.name}>
                    <CustomInput
                        name={field.name}
                        value={data[field.name]}
                        label={field.label}
                        onChange={handleChange}
                        multiline
                    />
                </Grid>
            ))}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={"Conclusion, next steps and recommendations"}
                    fontWeight="700"
                />
            </Grid>
            {additionalFields.map((field) => (
                <Grid item xs={12} sm={12} md={12} lg={12} key={field.name}>
                    <CustomInput
                        name={field.name}
                        value={data[field.name]}
                        label={field.label}
                        onChange={handleChange}
                        multiline
                    />
                </Grid>
            ))}

        </Grid>
    );
};

export default ProjectNotificationReport;
