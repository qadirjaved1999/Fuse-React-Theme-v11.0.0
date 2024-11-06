import { FormControl, Grid, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import CustomInput from 'src/helpers/custom-components/CustomInput'
import CustomTypography from 'src/helpers/custom-components/CustomTypography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CustomTooltip from 'src/helpers/custom-components/CustomTooltip';
import CustomDialog from 'src/helpers/custom-components/CustomDialog';
import { Box } from '@mui/system';

const PCM = () => {
    const initialState = {
        development_goals: '',
        description: '',
        project_preparation: '',
        regional_impact: '',
        project_sponsor: '',
        implementation_authority: '',
        other_parties: '',
        sector_description: '',
        sector_maturity: '',
        private_investment: '',
        financing_description: '',
        select_sector: '',
        country: '',
        new_sector_description: '',
        short_rating: '',
        medium_rating: '',
        technical_feasibility: '',
        financial_viability: '',
        es_feasibility: '',
        governance: '',
        risks: '',
        strengths_weaknesses: '',
        appraisal_project: '',
        recommendations: '',
        suggested_steps: ''

    }
    const [data, setData] = useState(initialState);
    const [openSummary, setOpenSummary] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log("name => ", name + " " + "Value => ", value)
    };

    const handleDialogOpen = () => {
        setOpenSummary(true);
    };

    const sectorOptions = [
        { value: 10, label: "Ten" },
        { value: 20, label: "Twenty" },
        { value: 30, label: "Thirty" },
    ];

    const projectDescription = [
        { name: "development_goals", label: "Development goals and specific objectives" },
        { name: "description", label: "Description" },
        { name: "project_preparation", label: "Project preparation status" },
        { name: "regional_impact", label: "Regional impact and political support" },
    ]
    const keyParties = [
        { name: "project_sponsor", label: "Project sponsor" },
        { name: "implementation_authority", label: "Implementation authority" },
        { name: "other_parties", label: "Other key parties" },
    ]
    const projectReadiness = [
        { name: "technical_feasibility", label: "Technical feasibility" },
        { name: "financial_viability", label: "Financial viability" },
        { name: "es_feasibility", label: "E&S feasibility" },
        { name: "governance", label: "Governance" },
        { name: "risks", label: "Risks" },

    ]

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ textAlign: "center" }}>
                <CustomTypography text="Project concept memorandum" fontWeight="700" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ backgroundColor: '#0A3160', paddingBottom: "16px", mt: 3 }}>
                <CustomTypography text="Project Description" fontWeight="600" color="white" />
            </Grid>
            {projectDescription.map((field) => (
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
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ backgroundColor: '#0A3160', paddingBottom: "16px", mt: 3 }}>
                <CustomTypography text="Key parties" fontWeight="600" color="white" />
            </Grid>
            {keyParties.map((field) => (
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
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ backgroundColor: '#0A3160', paddingBottom: "16px", mt: 3 }}>
                <CustomTypography text="Sector" fontWeight="600" color="white" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography text="Legal framework and organization" fontWeight="500" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="sector_description"
                    value={data.sector_description}
                    label={"Description"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#C0DDF6' }}>
                                <TableCell>Regulatory Framework</TableCell>
                                <TableCell sx={{ textAlign: "right" }}><CustomTooltip title="Add new row" placement="top"><AddCircleIcon
                                    onClick={handleDialogOpen}
                                    style={{ cursor: 'pointer' }}
                                /></CustomTooltip></TableCell>
                                <CustomDialog
                                    title="Add New Sector"
                                    open={openSummary}
                                    setOpen={setOpenSummary}
                                    content={
                                        <React.Fragment>
                                            <Box display="flex"
                                                flexDirection={{ xs: "column", sm: "row" }}
                                                gap={2}
                                                alignItems="center">
                                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">Sector</InputLabel>
                                                        <Select
                                                            id="demo-simple-select-label"
                                                            name="select_sector"
                                                            value={data.select_sector}
                                                            label="Sector"
                                                            onChange={handleChange}
                                                        >
                                                            {sectorOptions.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">Sector</InputLabel>
                                                        <Select
                                                            id="demo-simple-select-label"
                                                            name="country"
                                                            value={data.country}
                                                            label="Sector"
                                                            onChange={handleChange}
                                                        >
                                                            {sectorOptions.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                                    <CustomInput
                                                        name="new_sector_description"
                                                        value={data.new_sector_description}
                                                        label="Description"
                                                        onChange={handleChange}
                                                    />
                                                </Grid>
                                            </Box>

                                        </React.Fragment>
                                    }
                                />
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="sector_maturity"
                    value={data.sector_maturity}
                    label={"Sector maturity"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="private_investment"
                    value={data.private_investment}
                    label={"Private investment interest"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography text="Country risk and access to financing" fontWeight="500" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="financing_description"
                    value={data.financing_description}
                    label={"Description"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#C0DDF6' }}>
                                <TableCell>Country Risk</TableCell>
                                <TableCell sx={{ textAlign: "right" }}><CustomTooltip title="Add new row" placement="top"><AddCircleIcon
                                    onClick={handleDialogOpen}
                                    style={{ cursor: 'pointer' }}
                                /></CustomTooltip></TableCell>
                                <CustomDialog
                                    title="Add New Sector"
                                    open={openSummary}
                                    setOpen={setOpenSummary}
                                    content={
                                        <React.Fragment>
                                            <Box display="flex"
                                                flexDirection={{ xs: "column", sm: "row" }}
                                                gap={2}
                                                alignItems="center">
                                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">Sector</InputLabel>
                                                        <Select
                                                            id="demo-simple-select-label"
                                                            name="select_sector"
                                                            value={data.select_sector}
                                                            label="Sector"
                                                            onChange={handleChange}
                                                        >
                                                            {sectorOptions.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                                    <CustomInput
                                                        name="short_rating"
                                                        value={data.short_rating}
                                                        label="Short-Term Rating"
                                                        onChange={handleChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                                    <CustomInput
                                                        name="medium_rating"
                                                        value={data.medium_rating}
                                                        label="Medium-Term Rating"
                                                        onChange={handleChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                                    <CustomInput
                                                        name="new_sector_description"
                                                        value={data.new_sector_description}
                                                        label="Date of Evaluation"
                                                        onChange={handleChange}
                                                    />
                                                </Grid>
                                            </Box>

                                        </React.Fragment>
                                    }
                                />
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ backgroundColor: '#0A3160', paddingBottom: "16px", mt: 3 }}>
                <CustomTypography text="Project readiness" fontWeight="600" color="white" />
            </Grid>
            {projectReadiness.map((field) => (
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
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ backgroundColor: '#0A3160', paddingBottom: "16px", mt: 3 }}>
                <CustomTypography text="Project evaluation" fontWeight="600" color="white" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="strengths_weaknesses"
                    value={data.strengths_weaknesses}
                    label={"Strengths and weaknesses"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="appraisal_project"
                    value={data.appraisal_project}
                    label={"Appraisal of the project"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ backgroundColor: '#0A3160', paddingBottom: "16px", mt: 3 }}>
                <CustomTypography text="Recommendations and next step" fontWeight="600" color="white" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="recommendations"
                    value={data.recommendations}
                    label={"Recommendations"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomInput
                    name="suggested_steps"
                    value={data.suggested_steps}
                    label={"Suggested next steps"}
                    onChange={handleChange}
                    multiline
                />
            </Grid>
        </Grid>
    )
}

export default PCM