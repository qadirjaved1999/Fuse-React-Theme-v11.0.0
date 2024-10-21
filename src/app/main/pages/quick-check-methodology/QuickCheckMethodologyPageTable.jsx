import { FormControlLabel, Grid, Radio, RadioGroup, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
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
            <Grid item xs={12} sm={12} md={12} lg={12}>

            </Grid>
            <Grid container spacing={2}>

                {/* Header Section */}
                <Grid item xs={12}>
                    <Typography variant="h6">Dimension 1: Regional Priority</Typography>
                </Grid>

                {/* Table Section */}
                <Grid item xs={12}>
                    <Table>
                        <TableBody>
                            {/* Row for 'Level of regional interest' */}
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1">Level of regional interest and political commitment</Typography>
                                </TableCell>
                                <TableCell>
                                    <RadioGroup row>
                                        <FormControlLabel value="5" control={<Radio />} label="5" />
                                        <FormControlLabel value="10" control={<Radio />} label="10" />
                                    </RadioGroup>
                                </TableCell>
                            </TableRow>

                            {/* Additional Rows with Labels and Scores */}
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body2">Promotion of employment, intra-regional trade, and investment</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">5</Typography>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Typography variant="body2">Poverty reduction</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">5</Typography>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Typography variant="body2">Alignment with socioeconomic and environmental goals for Africa</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">7.5</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>

                {/* Footer Section (Dimension 2) */}
                <Grid item xs={12}>
                    <Typography variant="h6">Dimension 2: Sector Readiness</Typography>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default QuickCheckMethodologyPageTable