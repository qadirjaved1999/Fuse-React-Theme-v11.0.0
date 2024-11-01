import { useState } from 'react';
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
                            <TableRow>
                                <TableCell sx={{ width: "90%" }}>{"Project Stage Screening Questionnaire"}</TableCell>
                                <TableCell sx={{ width: "10%", textAlign: "center" }}>Yes</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ width: "90%" }}>{"PIDA SDM Application Form"}</TableCell>
                                <TableCell sx={{ width: "10%", textAlign: "center" }}>No</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ width: "90%" }}>{"PIDA SDM Appendix to Application Form Project Data Sheet (PDS)"}</TableCell>
                                <TableCell sx={{ width: "10%", textAlign: "center" }}>Yes</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ width: "90%" }}>{"Project’s Green Track Questionnaire"}</TableCell>
                                <TableCell sx={{ width: "10%", textAlign: "center" }}>No</TableCell>
                            </TableRow>
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
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="rationale"
                    value={data.rationale}
                    label={"Rationale"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="objective"
                    value={data.objective}
                    label={"Objective"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="preliminary_project"
                    value={data.preliminary_project}
                    label={"Preliminary project insights"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="project_status"
                    value={data.project_status}
                    label={"Project status"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
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
                            <TableRow sx={{ display: 'flex', backgroundColor: "#C0CCD6" }}>
                                <TableCell sx={{ flex: 10, fontWeight: "bold" }}>{"Dimension 1: Regional priority"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{8.3}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"1. Level of regional interest and political commitment"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"2. Promotion of employment, intra-regional trade and investment"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{7.5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"3. Poverty reduction"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"4. Alignment with the socioeconomic and environmental sustainability goals for Africa"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex', backgroundColor: "#C0CCD6" }}>
                                <TableCell sx={{ flex: 10, fontWeight: "bold" }}>{"Dimension 2: Sector readiness"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{4.13}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{4.13}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"5. Regulatory framework and harmonization of the sector"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"6. Sector organization"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"7. Sector maturity"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{2.5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{2.5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex', backgroundColor: "#C0CCD6" }}>
                                <TableCell sx={{ flex: 10, fontWeight: "bold" }}>{"Dimension 3: Private sector interest"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{3.13}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{1.88}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"8. Private investors’ appetite"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"9. Country risks"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"10. Access to financing"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{2.5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{2.5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex', backgroundColor: "#C0CCD6" }}>
                                <TableCell sx={{ flex: 10, fontWeight: "bold" }}>{"Dimension 4: Project readiness"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5.5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5.5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"11. Technical viability"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"12. Financial viability"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{2.5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{2.5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"13. E&S viability"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"14. Governance"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{7.5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{7.5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"15. Risks"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{2.5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{2.5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex', backgroundColor: "#C0CCD6" }}>
                                <TableCell sx={{ flex: 10, fontWeight: "bold" }}>{"Dimension 5: PPP Attractiveness"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"16. Private sector requirements"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"17. Beneficiary government requirements"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{3.5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{3.5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"18. PPFs and Financial Institutions requirements"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex', backgroundColor: "#0A3160", color: "white" }}>
                                <TableCell sx={{ flex: 10, fontWeight: "bold", color: "white" }}>{"Project Final score"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3, color: "white" }}>{5.47}</TableCell>
                                <TableCell align="center" sx={{ flex: 3, color: "white" }}>{5}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="regional_priority"
                    value={data.regional_priority}
                    label={"Regional priority"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="sector_readiness"
                    value={data.sector_readiness}
                    label={"Sector readiness"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="project_readiness"
                    value={data.project_readiness}
                    label={"Project readiness"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="private_sector_interest"
                    value={data.private_sector_interest}
                    label={"Private sector interest"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="ppp_attractiveness"
                    value={data.ppp_attractiveness}
                    label={"PPP attractiveness"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
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
                                <TableCell sx={{ color: "white", fontWeight: "bold", flex: 10 }}>{"Component"}</TableCell>
                                <TableCell align="center" sx={{ color: "white", fontWeight: "bold", flex: 3 }}>{"Project Owner Score"}</TableCell>
                                <TableCell align="center" sx={{ color: "white", fontWeight: "bold", flex: 3 }}>{"Current Score (by SDM)"}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ display: 'flex', backgroundColor: "#C0CCD6" }}>
                                <TableCell sx={{ flex: 10, fontWeight: "bold" }}>{"Dimension 1: Climate policies mainstreaming"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{1.63}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5.63}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"1. Regional climate interest and commitment"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{2.5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"2. Governance framework for climate change"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{0}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{0}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"3. Country ownership climate narrative"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{2.5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{2.5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex', backgroundColor: "#C0CCD6" }}>
                                <TableCell sx={{ flex: 10, fontWeight: "bold" }}>{"Dimension 2: Green funds interest"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{7.38}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{7.38}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"4. Climate investment landscape harmonization"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{7.5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{7.5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"5. Access to climate finance"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{0}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{0}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"6. Volume of green funds received by hosting countries"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"7. National performance on sustainability issues"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"8. Access to green energy"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex', backgroundColor: "#C0CCD6" }}>
                                <TableCell sx={{ flex: 10, fontWeight: "bold" }}>{"Dimension 3: Climate mitigation"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{4.48}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{4.48}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"9. Carbon footprint absolute estimation"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{7.5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{7.5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"10. Carbon footprint relative estimation"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{0}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{0}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"11. Sustainable infrastructure operation potential"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{7.5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{7.5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex', backgroundColor: "#C0CCD6" }}>
                                <TableCell sx={{ flex: 10, fontWeight: "bold" }}>{"Dimension 4: Climate adaptation"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"12. Vulnerability assessment"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{0}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"13. Climate risk assessment"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex', backgroundColor: "#C0CCD6" }}>
                                <TableCell sx={{ flex: 10, fontWeight: "bold" }}>{"Dimension 5: Green funds attractiveness"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{1.25}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{1.25}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"14. Alignment with climate international goals and principles"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{2.5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{2.5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"15. Main issues to be addressed in the environmental assessment according to the Equator Principles"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{5}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex', backgroundColor: "#C0CCD6", color: "white" }}>
                                <TableCell sx={{ flex: 10, fontWeight: "bold" }}>{"Dimension 6: Economic contribution"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"16. Employment creation"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex' }}>
                                <TableCell sx={{ flex: 10 }}>{"17. Intra-African trade and industrialization impact"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                                <TableCell align="center" sx={{ flex: 3 }}>{10}</TableCell>
                            </TableRow>
                            <TableRow sx={{ display: 'flex', backgroundColor: "#0A3160", color: "white" }}>
                                <TableCell sx={{ flex: 10, fontWeight: "bold", color: "white" }}>{"Project Final score"}</TableCell>
                                <TableCell align="center" sx={{ flex: 3, color: "white" }}>{5.6}</TableCell>
                                <TableCell align="center" sx={{ flex: 3, color: "white" }}>{5.29}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="climate_policies_mainstreaming"
                    value={data.climate_policies_mainstreaming}
                    label={"Climate policies mainstreaming"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="green_funds_interest"
                    value={data.green_funds_interest}
                    label={"Green funds interest"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="green_funds_interest"
                    value={data.green_funds_interest}
                    label={"Green funds interest"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="climate_mitigation"
                    value={data.climate_mitigation}
                    label={"Climate mitigation"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="climate_adaptation"
                    value={data.climate_adaptation}
                    label={"Climate adaptation"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="green_funds_attractiveness"
                    value={data.green_funds_attractiveness}
                    label={"Green funds attractiveness"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="economic_contribution"
                    value={data.economic_contribution}
                    label={"Economic contribution"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={"Conclusion, next steps and recommendations"}
                    fontWeight="700"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="conclusion"
                    value={data.conclusion}
                    label={"Conclusion"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="identified_needs_sdm"
                    value={data.identified_needs_sdm}
                    label={"Identified needs from SDM"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="identified_needs_owner"
                    value={data.identified_needs_owner}
                    label={"Identified needs from Project Owner"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="potential_services_sdm"
                    value={data.potential_services_sdm}
                    label={"Potential Services to be provided by SDM"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="next_sections_recommendations"
                    value={data.next_sections_recommendations}
                    label={"Next Sections and Recommendations"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
        </Grid>
    );
};

export default ProjectNotificationReport;
