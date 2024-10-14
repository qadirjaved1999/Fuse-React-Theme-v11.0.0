import React, { useState } from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    ListItemText,
    Typography,
} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomInput from "src/helpers/custom-components/CustomInput";
import languages from "src/labels/index";
// import { List } from "immutable";
import Glossary from "src/helpers/glossary-accordian/Grossary";

const ProjectDataSheetAppForm = () => {
    // All Labls
    const label = languages.en;

    const initialState = {
        // use this naming structure for object because in DB use this structure
        project_name: "",
        organisation: "",
        address: "",
        contact_person: "",
        position: "",
        telephone: "",
        fax: "",
        email: "",
    };
    // Main State Hold the data from Radios CheckBoxs
    const [data, setData] = useState(initialState);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        // console.log("Name is => ", name + "And the Value is => ", value);
    };
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography
                    fontSize="18px"
                    textAlign="left"
                    fontWeight="normal"
                    margin="10px 0px 0px 0px"
                >
                    {label.applicantInformation}
                </Typography>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <CustomInput
                    name="project_name"
                    value={data.project_name}
                    label={label.projectName}
                    onChange={handleInput}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <CustomInput
                    name="organisation"
                    value={data.organisation}
                    label={label.organizationName}
                    onChange={handleInput}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <CustomInput
                    name="position"
                    value={data.position}
                    label={label.position}
                    onChange={handleInput}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <CustomInput
                    name="contact_person"
                    value={data.contact_person}
                    label={label.contactPerson}
                    onChange={handleInput}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <CustomInput
                    label={label.telephone}
                    value={data.telephone}
                    name="telephone"
                    onChange={handleInput}
                    type="tel"
                />
            </Grid>
            <Grid item xs={3} md={3} lg={3}>
                <CustomInput
                    name="email"
                    value={data.email}
                    label={label.email}
                    onChange={handleInput}
                    type="email"
                />
            </Grid>
            <Grid item xs={3} md={3} lg={3}>
                <CustomInput
                    name="fax"
                    value={data.fax}
                    label={label.fax}
                    onChange={handleInput}
                    type="number"
                />
            </Grid>
            <Grid item xs={3} md={3} lg={3}>
                <CustomInput
                    name="address"
                    value={data.address}
                    label={label.address}
                    onChange={handleInput}
                />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">{label.pdsInstructions}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid item xs={12}>
                            <Glossary />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
};

export default ProjectDataSheetAppForm;
