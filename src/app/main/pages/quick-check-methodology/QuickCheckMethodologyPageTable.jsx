import { FormControlLabel, Grid, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CustomTypography from 'src/helpers/custom-components/CustomTypography'

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
                    padding="0px 0px 20px 0px"
                    fontWeight="bold"
                    fontSize="18px"
                    color="primary"
                />
            </Grid>
            <Grid item xs={9}>
            </Grid>
            <Grid item xs={1.5}>
                <Typography sx={{ textAlign: "center", fontWeight: "500" }}>Project Owner Score</Typography>
            </Grid>
            <Grid item xs={1.4}>
                <Typography sx={{ textAlign: "center", fontWeight: "500" }}>Current Score (By SDM)</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </Grid>
    )
}

export default QuickCheckMethodologyPageTable