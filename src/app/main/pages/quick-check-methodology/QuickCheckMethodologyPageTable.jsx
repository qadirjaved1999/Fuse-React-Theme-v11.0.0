import * as React from 'react';
import { useState } from 'react';
import { FormControlLabel, Grid, IconButton, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CustomTypography from 'src/helpers/custom-components/CustomTypography'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import Collapse from '@mui/material/Collapse';
import languages from 'src/labels/index';
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton';

// All Labls
const label = languages.en;

function createData(name, userValue, sdmValue) {
    return {
        name,
        userValue,
        sdmValue,
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false)

    const initialState = {
        user_score: '',
        sdm_score: ''
    }
    const [data, setData] = useState(initialState)
    const handleChange = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log("Name => ", name + "Value => ", value);
    }
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { border: "unset" }, backgroundColor: "#c0ddf6" }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <RemoveCircleOutlineSharpIcon /> : <ControlPointIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" sx={{ width: "76%" }}>
                    {row.name}
                </TableCell>
                <TableCell sx={{ width: "12%", textAlign: 'center' }}>{row.userValue}</TableCell>
                <TableCell sx={{ width: "12%", textAlign: 'center' }}>{row.sdmValue}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ padding: "0px 0px 0px 20px", backgroundColor: "#e4f0f9" }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box>
                            <Table size="small">
                                <TableBody>
                                    <TableCell sx={{ padding: "6px 0px", width: "76%", textAlign: "start" }}>{label.noRegionalImpact}</TableCell>
                                    <TableCell sx={{ width: "12%", textAlign: 'center', backgroundColor: "white" }}><Radio /></TableCell>
                                    <TableCell sx={{ width: "12%", textAlign: 'center' }}><Radio /></TableCell>
                                </TableBody>
                            </Table>
                        </Box>
                        <Box>
                            <Table size="small">
                                <TableBody>
                                    <TableCell sx={{ padding: "6px 0px", width: "76%", textAlign: "start" }}>{label.noRegionalImpact}</TableCell>
                                    <TableCell sx={{ width: "12%", textAlign: 'center', backgroundColor: "white" }}><Radio /></TableCell>
                                    <TableCell sx={{ width: "12%", textAlign: 'center' }}><Radio /></TableCell>
                                </TableBody>
                            </Table>
                        </Box>
                        <Box>
                            <Table size="small">
                                <TableBody>
                                    <TableCell sx={{ padding: "6px 0px", width: "76%", textAlign: "start" }}>{label.noRegionalImpact}</TableCell>
                                    <TableCell sx={{ width: "12%", textAlign: 'center', backgroundColor: "white" }}><Radio /></TableCell>
                                    <TableCell sx={{ width: "12%", textAlign: 'center' }}><Radio /></TableCell>
                                </TableBody>
                            </Table>
                        </Box>
                        <Box>
                            <Table size="small">
                                <TableBody>
                                    <TableCell sx={{ padding: "6px 0px", width: "76%", textAlign: "start" }}>{label.noRegionalImpact}</TableCell>
                                    <TableCell sx={{ width: "12%", textAlign: 'center', backgroundColor: "white" }}><Radio /></TableCell>
                                    <TableCell sx={{ width: "12%", textAlign: 'center' }}><Radio /></TableCell>
                                </TableBody>
                            </Table>
                        </Box>
                        <Box>
                            <Table size="small">
                                <TableBody>
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
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('Level of regional interest and political commitment', 5, 10),
    createData('Promotion of employment, intra-regional trade and investment', 4, 7.5),
    createData('Poverty reduction', 3, 5),
    createData('Alignment with the socioeconomic and environmental sustainability goals for Africa', 6, 8),
];

const score = [
    { value: 0 },
    { value: 2.5 },
    { value: 5 },
    { value: 7.5 },
    { value: 10 }
]

const QuickCheckMethodologyPageTable = () => {
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
                <TableRow>
                    <TableCell sx={{ width: "70%" }}></TableCell>
                    <TableCell align="center" sx={{ width: "12%" }}>Project Owner score</TableCell>
                    <TableCell align="center" sx={{ width: "12%" }}>Current Score (by SDM)</TableCell>
                </TableRow>
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
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>

    )
}

export default QuickCheckMethodologyPageTable