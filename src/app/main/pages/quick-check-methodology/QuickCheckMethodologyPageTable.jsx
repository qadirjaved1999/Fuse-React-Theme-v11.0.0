import * as React from 'react';
import { useState } from 'react';
import { IconButton, Grid, Paper, Radio, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Collapse } from '@mui/material';
import { Box } from '@mui/system';
import CustomTypography from 'src/helpers/custom-components/CustomTypography';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import languages from 'src/labels/index';
import menu from 'src/helpers/menu';

const label = languages.en;

const QuickCheckMethodologyPageTable = () => {
    const [openRowIndex, setOpenRowIndex] = useState(null); // To control which row is open

    const initialState = {
        sdm_score: '',
        user_score: ''
    };
    const [data, setData] = useState(initialState);
    const [sdmValue, setSdmValue] = useState(0)
    const [userValue, setUserValue] = useState(0);

    const handleChange = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log("Name => ", name + " " + "Value => ", value);
        if (name === 'sdm_score') {
            setSdmValue(parseFloat(value));
        } else if (name === 'user_score') {
            setUserValue(parseFloat(value));
        }
        console.log(`Updated ${type}:`, value);
    };

    const rows = [
        { name: 'Level of regional interest and political commitment', userValue, sdmValue },
        { name: 'Promotion of employment, intra-regional trade and investment', userValue, sdmValue },
        { name: 'Poverty reduction', userValue, sdmValue },
        { name: 'Alignment with the socioeconomic and environmental sustainability goals for Africa', userValue, sdmValue }
    ];

    const handleRowClick = (index) => {
        setOpenRowIndex(openRowIndex === index ? null : index);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text="Quick Check Methodology"
                    fontSize="14px"
                    fontWeight="700"
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
                                                    <TableBody>
                                                        {menu.politicalCommitment.map((option, i) => (
                                                            <TableRow key={i}>
                                                                <TableCell sx={{ padding: "6px 0px", width: "76%", textAlign: "start" }}>
                                                                    {option.label}
                                                                </TableCell>
                                                                <TableCell sx={{ width: "12%", textAlign: 'center', backgroundColor: "white" }}>
                                                                    <Radio
                                                                        name="sdm_score"
                                                                        value={option.value}
                                                                        checked={data.sdm_score === option.value}
                                                                        onChange={handleChange}
                                                                    />
                                                                </TableCell>
                                                                <TableCell sx={{ width: "12%", textAlign: 'center' }}>
                                                                    <Radio
                                                                        name="user_score"
                                                                        value={option.value}
                                                                        checked={data.user_score === option.value}
                                                                        onChange={handleChange}
                                                                    />
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
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


