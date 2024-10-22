import * as React from 'react';
import { FormControlLabel, Grid, IconButton, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CustomTypography from 'src/helpers/custom-components/CustomTypography'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';

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

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <RemoveCircleOutlineSharpIcon /> : <ControlPointIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell></TableCell>
                <TableCell sx={{ width: "12%", textAlign: 'center' }}>{row.userValue}</TableCell>
                <TableCell sx={{ width: "12%", textAlign: 'center' }}>{row.sdmValue}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableBody>
                                    <TableCell align="right">Salman</TableCell>
                                    <TableCell sx={{ width: "12%", textAlign: 'center' }}>Qadir javed</TableCell>
                                    <TableCell sx={{ width: "12%", textAlign: 'center' }}>Qadir javed</TableCell>
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
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Dimension 1: Regional priority</TableCell>
                            <TableCell></TableCell>
                            <TableCell align="center" sx={{ width: "12%" }}>7.5</TableCell>
                            <TableCell align="center" sx={{ width: "12%" }}>5 &nbsp;</TableCell>
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