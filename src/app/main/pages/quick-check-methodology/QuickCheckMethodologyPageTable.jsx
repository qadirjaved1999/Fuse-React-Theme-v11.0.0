import * as React from 'react';
import { useState } from 'react';
import { IconButton, Grid, Paper, Radio, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Collapse } from '@mui/material';
import { Box, textAlign } from '@mui/system';
import CustomTypography from 'src/helpers/custom-components/CustomTypography';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import languages from 'src/labels/index';
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton';

const label = languages.en;

const QuickCheckMethodologyPageTable = () => {
    const [openRowIndex, setOpenRowIndex] = useState(null); // To control which row is open

    const initialState = {
        user_score: '',
        sdm_score: ''
    };
    const [data, setData] = useState(initialState);

    const handleChange = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const rows = [
        { name: 'Level of regional interest and political commitment', userValue: 5, sdmValue: 10 },
        { name: 'Promotion of employment, intra-regional trade and investment', userValue: 4, sdmValue: 7.5 },
        { name: 'Poverty reduction', userValue: 3, sdmValue: 5 },
        { name: 'Alignment with the socioeconomic and environmental sustainability goals for Africa', userValue: 6, sdmValue: 8 }
    ];

    const radioOptions = [
        { label: "The project enjoys political commitment at national level, but there is no  evidence of its regional impact.", value: 0 },
        { label: "The project is included in the PIDA PAP programme, but there is no  evidence of national-level commitment.", value: 2.5 },
        { label: "The project is included in the PIDA PAP programme, and there is a  national-level commitment.", value: 5 },
        { label: "The project has evidence of regional-level commitment, but is not included  in the PIDA PAP programme.", value: 7.5 },
        { label: "The project enjoys regional-level commitment and it is included in the PIDA  PAP programme.", value: 10 }

    ];

    const handleRowClick = (index) => {
        setOpenRowIndex(openRowIndex === index ? null : index); // Toggle open state for a specific row
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text="Quick Check Methodology"
                    variant="h3"
                    display="block"
                    textAlign="center"
                    width="auto"
                    padding="0px 0px 50px 0px"
                    fontWeight="bold"
                    fontSize="18px"
                    color="primary"
                />
            </Grid>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#2f2f2f" }}>
                            <TableCell></TableCell>
                            <TableCell sx={{ color: "white" }}>Dimension 1: Regional priority</TableCell>
                            <TableCell align="center" sx={{ width: "12%", backgroundColor: "#969696", color: "white" }}>7.5</TableCell>
                            <TableCell align="center" sx={{ width: "12%", color: "white" }}>5 &nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <React.Fragment key={row.name}>
                                <TableRow sx={{ '& > *': { border: "unset" }, backgroundColor: "#c0ddf6" }}>
                                    <TableCell>
                                        <IconButton
                                            aria-label="expand row"
                                            size="small"
                                            onClick={() => handleRowClick(index)}
                                        >
                                            {openRowIndex === index ? <RemoveCircleOutlineSharpIcon /> : <ControlPointIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell component="th" scope="row" sx={{ width: "76%" }}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell sx={{ width: "12%", textAlign: 'center' }}>{row.sdmValue}</TableCell>
                                    <TableCell sx={{ width: "12%", textAlign: 'center' }}>{row.userValue}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ padding: "0px 0px 0px 20px", backgroundColor: "#e4f0f9" }} colSpan={6}>
                                        <Collapse in={openRowIndex === index} timeout="auto" unmountOnExit>
                                            <Box>
                                                <Table size="small">
                                                {radioOptions.map((option, i) => (
                                                            <TableRow key={i}>
                                                                <TableCell sx={{ padding: "6px 0px", width: "76%", textAlign: "start" }}>
                                                                    {option.label}
                                                                </TableCell>
                                                                <TableCell sx={{ width: "12%", textAlign: 'center', backgroundColor: "white" }}>
                                                                    <CustomRadioButton
                                                                        name="sdm_score"
                                                                        value={data.sdm_score}
                                                                        options={[
                                                                            { value: '1' },
                                                                        ]}
                                                                        onChange={handleChange}
                                                                    />
                                                                </TableCell>
                                                                <TableCell sx={{ width: "12%", textAlign: 'center' }}>
                                                                    <CustomRadioButton
                                                                        name="user_score"
                                                                        value={data.user_score}
                                                                        options={[
                                                                            { value: '1'},
                                                                        ]}
                                                                        onChange={handleChange}
                                                                    />
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}

                                                    {/* <TableBody>
                                                        <TableRow>
                                                            <TableCell sx={{ padding: "6px 0px", width: "76%", textAlign: "start" }}>{label.noRegionalImpact}</TableCell>
                                                            <TableCell sx={{ width: "12%", textAlign: 'center', backgroundColor: "white" }}><Radio /></TableCell>
                                                            <TableCell sx={{ width: "12%", textAlign: 'center' }}><Radio /></TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell sx={{ padding: "6px 0px", width: "76%", textAlign: "start" }}>{label.noRegionalImpact}</TableCell>
                                                            <TableCell sx={{ width: "12%", textAlign: 'center', backgroundColor: "white" }}><Radio /></TableCell>
                                                            <TableCell sx={{ width: "12%", textAlign: 'center' }}><Radio /></TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell sx={{ padding: "6px 0px", width: "76%", textAlign: "start" }}>{label.noRegionalImpact}</TableCell>
                                                            <TableCell sx={{ width: "12%", textAlign: 'center', backgroundColor: "white" }}>
                                                                <Radio
                                                                    name='sdm_score'
                                                                    value={data.sdm_score}
                                                                    onChange={handleChange}
                                                                />
                                                            </TableCell>
                                                            <TableCell sx={{ width: "12%", textAlign: 'center' }}>
                                                                <Radio
                                                                    name='user_score'
                                                                    value={data.user_score}
                                                                    onChange={handleChange}
                                                                />
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableBody> */}
                                                </Table>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}

export default QuickCheckMethodologyPageTable;


