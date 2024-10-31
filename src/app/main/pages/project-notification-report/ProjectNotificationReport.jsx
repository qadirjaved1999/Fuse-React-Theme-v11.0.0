import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Button,
    Paper,
    Grid,
    TableHead,
} from '@mui/material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import CustomTypography from 'src/helpers/custom-components/CustomTypography';
import CustomInput from 'src/helpers/custom-components/CustomInput';
import CustomButton from 'src/helpers/custom-components/CustomButton';
import { Box } from '@mui/system';
// import CustomDatePicker from 'src/helpers/custom-components/CustomDatePicker';


const ProjectNotificationReport = () => {
    const initialState = {
        project_id: '',
        project_name: '',
        Information_completeness: '',
        final_notification_report: '',
        project_updates: '',
        contact: '',
        project_owner: ''
    };

    const [data, setData] = useState(initialState);
    const [selectedDate, setSelectedDate] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log("name => ", name + " " + "Value => ", value)
    };

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
            {/* <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomDatePicker
                    label="Appointment Date"
                    value={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                    disablePast={true}
                    minDate="2023-01-01"
                    maxDate="2023-12-31"
                    views={['year', 'month', 'day']}
                    openTo="month"
                />
            </Grid> */}
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomInput
                    name="project_updates"
                    value={data.project_updates}
                    label="Project Updates"
                    onChange={handleChange}
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
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomInput
                    name="project_updates"
                    value={data.project_updates}
                    label="Project Updates"
                    onChange={handleChange}
                />
            </Grid>
            {/* Table 1 */}
            <Grid item xs={12} sm={12} md={12} lg={12} id="table-1">
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Contact</TableCell>
                                <TableCell>Qadir Javed, React JS Developer, Technology Wisdom</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Project Owner/REC</TableCell>
                                <TableCell>Qadir Javed, React JS Developer, Technology Wisdom</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Sector</TableCell>
                                <TableCell>Qadir Javed, React JS Developer, Technology Wisdom</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Countries</TableCell>
                                <TableCell>Qadir Javed, React JS Developer, Technology Wisdom</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>PIDA Project</TableCell>
                                <TableCell>Qadir Javed, React JS Developer, Technology Wisdom</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Forms provided by the
                                    Project Owner</TableCell>
                                <TableCell>Qadir Javed, React JS Developer, Technology Wisdom</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Project Description</TableCell>
                                <TableCell>Qadir Javed, React JS Developer, Technology Wisdom</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>CAPEX</TableCell>
                                <TableCell>Qadir Javed, React JS Developer, Technology Wisdom</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Economic and Financial Analysis </TableCell>
                                <TableCell>Qadir Javed, React JS Developer, Technology Wisdom</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Infrastructure</TableCell>
                                <TableCell>Qadir Javed, React JS Developer, Technology Wisdom</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Rationale</TableCell>
                                <TableCell>Qadir Javed, React JS Developer, Technology Wisdom</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Objective</TableCell>
                                <TableCell>Qadir Javed, React JS Developer, Technology Wisdom</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Project Status</TableCell>
                                <TableCell>Qadir Javed, React JS Developer, Technology Wisdom</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Preliminary Project Insights</TableCell>
                                <TableCell>Qadir Javed, React JS Developer, Technology Wisdom</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            {/* Table 2 */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text="Project Technical Feasibility Appraisal (QCM)"
                    fontWeight="700"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} id="table-2">
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#0A3160" }}>
                                <TableCell sx={{ width: '80%', fontWeight: 'bold', color: "white" }}>Component</TableCell>
                                <TableCell sx={{ width: '10%', fontWeight: 'bold', color: "white" }}>SDM Score</TableCell>
                                <TableCell sx={{ width: '10%', fontWeight: 'bold', color: "white" }}>User Score</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Grid>

            {/* Table 3 */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text="Green Appraisal (GCM)"
                    fontWeight="700"
                />
            </Grid>
            <Grid item xs={12} id="table-3">
                <TableContainer component={Paper}>
                    <Table>

                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};

export default ProjectNotificationReport;
