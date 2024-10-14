import React from "react";
import { List, ListItem, Grid, ListItemText, Typography } from "@mui/material";
import { Fragment } from "react";
import languages from "src/labels";

const Glossary = () => {
    const label = languages.en
    return (
        <Fragment>
            <div className="flex flex-col flex-auto items-center justify-center ">
                <div className="flex flex-col items-center justify-center w-full">
                    <Grid Grid container spacing={2} className="body-size">
                        <Grid item md={12} lg={12} sm={12} xs={12}>
                            <Typography><strong>{label.projectEligibleAnalysis}</strong></Typography>
                            <List
                                sx={{
                                    listStyleType: "disc",
                                    fontSize: "14px",
                                    padding: "0px 30px"
                                }}
                            >
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <ListItemText >{label.documentaryEvidence}</ListItemText >
                                </ListItem>
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <ListItemText >{label.writtenEvidence}</ListItemText >
                                </ListItem>
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <ListItemText >{label.evidenceNotProvided}</ListItemText >
                                </ListItem>
                                <Typography ><strong>{label.pdsRespectingGuidelines}</strong></Typography>
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <ListItemText >{label.eachCriterion}</ListItemText >
                                </ListItem>
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <ListItemText >{label.allCriteria}</ListItemText >
                                </ListItem>
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <ListItemText >{label.selectedOption}</ListItemText >
                                    <List sx={{
                                        listStyleType: "square",
                                        fontSize: "14px",
                                        padding: "0px 30px"
                                    }}>
                                        <ListItem sx={{ display: "list-item", pl: 1, }}>{label.attachDocumentaryEvidence}</ListItem>
                                        <ListItem sx={{ display: "list-item", pl: 1, }}>{label.includeWrittenEvidence}</ListItem>
                                        <ListItem sx={{ display: "list-item", pl: 1, }}>{label.spaceDesignated}</ListItem>
                                        <ListItem sx={{ display: "list-item", pl: 1, }}>{label.checkEvidence}</ListItem>
                                    </List>
                                </ListItem>
                                <ListItem sx={{ display: "list-item", pl: 1, }}>
                                    <ListItemText >{label.correctAnswerCriteria}</ListItemText >
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