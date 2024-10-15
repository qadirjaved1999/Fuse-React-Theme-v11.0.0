import React, { useState } from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomInput from "src/helpers/custom-components/CustomInput";
import languages from "src/labels/index";
import Glossary from "src/helpers/glossary-accordian/Grossary";
import CustomRadioButton from "src/helpers/custom-components/CustomRadioButton";
import menu from "src/helpers/menu";
import CustomButton from "src/helpers/custom-components/CustomButton";

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
        political_commitment: "",
        intra_regional_trade: "",
        poverty_reduction: "",
        sustainability_goals: "",
        regulatory_framework: "",
        sector_organization: "",
        sector_maturity: ""
    };
    // Main State Hold the data from Radios CheckBoxs
    const [data, setData] = useState(initialState);
    const [politicalCommitmentEvidence, setPoliticalCommitmentEvidence] = useState(data.political_commitment);
    const [regionalTradeEvidence, setRegionalTradeEvidence] = useState(data.intra_regional_trade);
    const [sustainabilityGoals, setsustainabilityGoals] = useState(data.sustainability_goals);
    const [regulatoryFramework, setregulatoryFramework] = useState(data.regulatory_framework);




    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log("Name is => ", name + "And the Value is => ", value);

        if (name === 'political_commitment') {
            setPoliticalCommitmentEvidence(value);
        }
        if (name === "intra_regional_trade") {
            setRegionalTradeEvidence(value);
        }
        if (name === "sustainability_goals") {
            setsustainabilityGoals(value);
        }
        if (name === "regulatory_framework") {
            setregulatoryFramework(value);
        }
    };
    return (
        <Grid container spacing={2} justifyContent="center" padding="50px">
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
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>{label.regionalPriority}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="political_commitment"
                    value={data.political_commitment}
                    label={label.politicalCommitment}
                    options={menu.politicalCommitment}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                />

            </Grid>
            {
                politicalCommitmentEvidence === 'national-level-commitment' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            variant="contained"
                            btnText="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            padding='8px 16px'
                            fontSize='16px'
                            minWidth='120px'
                            height='40px'
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                )
            }
            {
                politicalCommitmentEvidence === 'not-included-pida-programme' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            variant="contained"
                            btnText="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            padding='8px 16px'
                            fontSize='16px'
                            minWidth='120px'
                            height='40px'
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                )
            }
            {
                politicalCommitmentEvidence === 'included-pida-programme' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            variant="contained"
                            btnText="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            padding='8px 16px'
                            fontSize='16px'
                            minWidth='120px'
                            height='40px'
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="intra_regional_trade"
                    value={data.intra_regional_trade}
                    label={label.intraRegionalTrade}
                    options={menu.intraRegionalTrade}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                />

            </Grid>
            {
                regionalTradeEvidence === 'socio-economic-impact' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            variant="contained"
                            btnText="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            padding='8px 16px'
                            fontSize='16px'
                            minWidth='120px'
                            height='40px'
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                )
            }
            {
                regionalTradeEvidence === 'one-land-locked-socio-economic' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            variant="contained"
                            btnText="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            padding='8px 16px'
                            fontSize='16px'
                            minWidth='120px'
                            height='40px'
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="poverty_reduction"
                    value={data.poverty_reduction}
                    label={label.povertyReduction}
                    options={menu.povertyReduction}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                />

            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="sustainability_goals"
                    value={data.sustainability_goals}
                    label={label.sustainabilityGoals}
                    options={menu.sustainabilityGoals}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                />

            </Grid>
            {
                sustainabilityGoals === 'two-goals' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            variant="contained"
                            btnText="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            padding='8px 16px'
                            fontSize='16px'
                            minWidth='120px'
                            height='40px'
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                )
            }
            {
                sustainabilityGoals === 'four-goals' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            variant="contained"
                            btnText="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            padding='8px 16px'
                            fontSize='16px'
                            minWidth='120px'
                            height='40px'
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                )
            }
            {
                sustainabilityGoals === 'six-goals' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            variant="contained"
                            btnText="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            padding='8px 16px'
                            fontSize='16px'
                            minWidth='120px'
                            height='40px'
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                )
            }
            {
                sustainabilityGoals === 'above-six-goals' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            variant="contained"
                            btnText="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            padding='8px 16px'
                            fontSize='16px'
                            minWidth='120px'
                            height='40px'
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>{label.sectorReadiness}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="regulatory_framework"
                    value={data.regulatory_framework}
                    label={label.regulatoryFramework}
                    options={menu.regulatoryFramework}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                />

            </Grid>
            {
                regulatoryFramework === 'some-legal-framework' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            variant="contained"
                            btnText="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            padding='8px 16px'
                            fontSize='16px'
                            minWidth='120px'
                            height='40px'
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                )
            }
            {
                regulatoryFramework === 'all-draft-legal-framework' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            variant="contained"
                            btnText="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            padding='8px 16px'
                            fontSize='16px'
                            minWidth='120px'
                            height='40px'
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                )
            }
            {
                regulatoryFramework === 'all-legal-framework' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            variant="contained"
                            btnText="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            padding='8px 16px'
                            fontSize='16px'
                            minWidth='120px'
                            height='40px'
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                )
            }
            {
                regulatoryFramework === 'regional-harmonization-program' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            variant="contained"
                            btnText="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            padding='8px 16px'
                            fontSize='16px'
                            minWidth='120px'
                            height='40px'
                            borderRadius='20px'
                            onClick={() => alert('Button Clicked!')}
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="sector_organization"
                    value={data.sector_organization}
                    label={label.sectorOrganization}
                    options={menu.sectorOrganization}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                />

            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="sector_maturity"
                    value={data.sector_maturity}
                    label={label.sectorMaturity}
                    options={menu.sectorMaturity}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                />

            </Grid>
        </Grid>
    );
};

export default ProjectDataSheetAppForm;
