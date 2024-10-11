import React from "react";
import { List, ListItem, Grid } from "@mui/material";
import { Fragment } from "react";
import { formatValue } from "helpers/formulas";

const Glossary = () => {
    return (
        <Fragment>
            <div className="flex flex-col flex-auto items-center justify-center ">
                <div className="flex flex-col items-center justify-center w-full">
                    <Grid Grid container spacing={2} className="body-size">
                        <Grid item md={12} lg={12} sm={12} xs={12}>
                            <List
                                sx={{
                                    listStyleType: "disc",
                                    fontSize: "14px",
                                }}
                            >
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <b>Off-taker</b> is referred to as the local company requesting project development (or match-making) support in the country of implementation.
                                </ListItem>
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <b>Leads</b> are project opportunities in the field of focus (e.g., photovoltaic, process heat, hydrogen, energy efficiency)
                                </ListItem>
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <b>Identified leads</b> are potential leads in which our project development team has invested at least 1-hour of effort and continue to pursue in order to provide them with support for project development.
                                </ListItem>
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <b>Admitted leads</b> {"are identified leads in which the local company (off-taker) has successfully submitted a service request for support, and the project development team assigned to that country has"} <span style={{ textDecoration: "underline", }}> performed </span> {"a minimum requirements and compliance check (step 1 complete). Admitted leads include active leads, inactive leads and realised projects."}
                                </ListItem>
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <b>Active leads</b> are admitted leads that <span style={{ textDecoration: "underline", }}> fulfilled the required criteria </span> {"set in the minimum requirements AND the compliance (due diligence) check, revealing no reason not to further support the local company."}
                                </ListItem>
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <b>Inactive leads</b> {"are admitted leads that did NOT fulfill the required criteria in the minimum requirements OR compliance check, to which no further support is recommended (for the time being). However, they are stored in the pipeline for regular follow-ups to determine if the situation changes and possibly supporting the off-taker in the future."}
                                </ListItem>
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <b>Transferred leads</b> {"are leads from local companies (off-takers) that have been connected with solution providers according to a mandate email from off-taker in which they specify the criteria for the solution providers they would like to be connected to."}
                                </ListItem>
                                <ListItem
                                    sx={{ display: "list-item", pl: 1, }}>
                                    <b>Deal closed</b> {"are leads in which our team has become aware that the off-takers have closed an agreement (or contract) with one or more solution(s) provider(s). These leads are displayed according to the “implementation status” during follow-up activities."}
                                </ListItem>
                                <ListItem sx={{ display: "list-item", pl: 1, }} >
                                    <b>Realised</b> {"(projects) are those identified project opportunities that at one point had contact with our project development team and have been provided with a solution (by our team or not) and are now in operation. These includes projects implemented by European and non-European solutions provider."}
                                </ListItem>
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <b>*Weighted values</b> {" are values for project size and investment volume are shown in weighted values according to (overall) implementation probabilities."}
                                </ListItem>
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <b>**Emissions reduced</b> {"are based on calculations from the first-year emission reduction estimation (taking into account grid emission factor, fuels used for electricity generation and other lead assumptions) and"} {formatValue(0.7, "one")}% PV module efficiency reduction per year.
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Fragment>
    )
}
export default Glossary;