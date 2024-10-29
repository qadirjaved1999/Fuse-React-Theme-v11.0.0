import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Paper,
    Grid,
} from '@mui/material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import CustomTypography from 'src/helpers/custom-components/CustomTypography';
import CustomInput from 'src/helpers/custom-components/CustomInput';

const ProjectNotificationReport = () => {
    const initialState = {
        project_id: '',
        project_name: '',
        Information_completeness: '',
        final_notification_report: '',
        project_updates: ''
    }

    // State to hold project name and project ID
    const [data, setData] = useState(initialState);

    const handleChange = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log("Name => ", name + "Value => ", value);
    }
    const tableData = [
        { id: 1, name: 'John Doe', age: 28 },
        { id: 2, name: 'Jane Smith', age: 34 },
        { id: 3, name: 'Mike Johnson', age: 45 },
    ];
    const downloadPDF = () => {
        const input = document.getElementById('table-to-pdf');

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgWidth = 190;
            const pageHeight = pdf.internal.pageSize.height;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            let position = 0;

            // Add project name and ID to the PDF
            pdf.text(`Project ID: ${data.project_id}`, 10, 10);
            pdf.text(`Project Name: ${data.project_name}`, 10, 20);
            pdf.text(`Notification Status: ${data.Information_completeness}`, 10, 30);
            pdf.text(`Notification Status: ${data.final_notification_report}`, 10, 40);
            pdf.text(`Project Update: ${data.project_updates}`, 10, 50);

            pdf.addImage(imgData, 'PNG', 10, 60, imgWidth, imgHeight); // Offset by 30 for text height
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('table.pdf');
        });
    };

    return (
        <Grid container spacing={2}>
            <Grid item sx={{ textAlign: "center" }} xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text="Project Notification Report"
                    fontWeight="700"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
            <Grid item sx={{ textAlign: "right" }} xs={12} sm={12} md={6} lg={6}>
                <Button variant="contained" color="primary" onClick={downloadPDF}>
                    Download PDF
                </Button>
                <Button variant="contained" color="primary" sx={{ marginLeft: "8px" }}>
                    Save
                </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <CustomInput
                    name="project_id"
                    value={data.project_id}
                    label="Project Id"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <CustomInput
                    name="project_name"
                    value={data.project_name}
                    label="Project name"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <CustomInput
                    name="Information_completeness"
                    value={data.Information_completeness}
                    label="Notification Status"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <CustomInput
                    name="final_notification_report"
                    value={data.final_notification_report}
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
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <TableContainer component={Paper} id="table-to-pdf">
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
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </Grid>
    );
};

export default ProjectNotificationReport;
