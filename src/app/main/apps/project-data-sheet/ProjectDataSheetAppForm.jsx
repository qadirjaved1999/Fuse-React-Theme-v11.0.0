import React, { useState } from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid
} from "@mui/material";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomInput from "src/helpers/custom-components/CustomInput";
import languages from "src/labels/index";
import Glossary from "src/helpers/glossary-accordian/Grossary";
import CustomRadioButton from "src/helpers/custom-components/CustomRadioButton";
import menu from "src/helpers/menu";
import CustomButton from "src/helpers/custom-components/CustomButton";
import CustomTypography from "src/helpers/custom-components/CustomTypography";

const ProjectDataSheetAppForm = () => {
    // All Labls
    const label = languages.en;

    const initialState = {
        // use this naming structure for object because in DB use this structure
        project_name: '',
        organisation: '',
        address: '',
        contact_person: '',
        position: '',
        telephone: '',
        fax: '',
        email: '',
        political_commitment: '',
        political_evidence: '',
        regional_trade: '',
        regional_evidence: '',
        poverty_reduction: '',
        poverty_evidence: '',
        sustainability_goals: '',
        sustainability_evidence: '',
        regulatory_framework: '',
        regulatory_evidence: '',
        sector_organization: '',
        organization_evidence: '',
        sector_maturity: '',
        maturity_evidence: '',
        private_investors: '',
        investors_evidence: '',
        country_risk: '',
        country_risk_evidence: '',
        access_financing: '',
        access_financing_evidence: '',
        technical_viability: '',
        technical_evidence: '',
        financial_viability: '',
        financing_evidence: '',
        es_viability: '',
        es_evidence: '',
        governance: '',
        governance_evidence: '',
        readline_risk: '',
        readline_risk_evidence: '',
    };
    // Main State Hold the data from Radios CheckBoxs
    const [data, setData] = useState(initialState);
    const [politicalCommitmentEvidence, setPoliticalCommitmentEvidence] = useState(data.political_commitment);
    const [regionalTradeEvidence, setRegionalTradeEvidence] = useState(data.regional_trade);
    const [sustainabilityGoals, setsustainabilityGoals] = useState(data.sustainability_goals);
    const [regulatoryFramework, setregulatoryFramework] = useState(data.regulatory_framework);
    const [sectorOrganizationEvi, setSectorOrganizationEvi] = useState(data.sector_organization);
    const [sectorMaturityEvi, setSectorMaturityEvi] = useState(data.sector_maturity);
    const [privateInvestorsEvi, setPrivateInvestorsEvi] = useState(data.private_investors);
    const [accessFinancingEvi, setAccessFinancingEvi] = useState(data.access_financing);
    const [technicalViabilityEvi, setTechnicalViabilityEvi] = useState(data.technical_viability);
    const [financialViabilityEvi, setFinancialViabilityEvi] = useState(data.financial_viability);
    const [esViabilityEvi, setEsViabilityEvi] = useState(data.es_viability);
    const [governanceEvi, setGovernanceEvi] = useState(data.governance);
    const [readlineRiskEvi, setreadlineRiskEvi] = useState(data.readline_risk);






    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log("Name is => ", name + "And the Value is => ", value);

        if (name === 'political_commitment') {
            setPoliticalCommitmentEvidence(value);
        }
        if (name === "regional_trade") {
            setRegionalTradeEvidence(value);
        }
        if (name === "sustainability_goals") {
            setsustainabilityGoals(value);
        }
        if (name === "regulatory_framework") {
            setregulatoryFramework(value);
        }
        if (name === "sector_organization") {
            setSectorOrganizationEvi(value);
        }
        if (name === "sector_maturity") {
            setSectorMaturityEvi(value);
        }
        if (name === "private_investors") {
            setPrivateInvestorsEvi(value);
        }
        if (name === "access_financing") {
            setAccessFinancingEvi(value);
        }
        if (name === "technical_viability") {
            setTechnicalViabilityEvi(value);
        }
        if (name === "financial_viability") {
            setFinancialViabilityEvi(value);
        }
        if (name === "es_viability") {
            setEsViabilityEvi(value);
        }
        if (name === "governance") {
            setGovernanceEvi(value);
        }
        if (name === "readline_risk") {
            setreadlineRiskEvi(value);
        }
    };
    return (
        <Grid container spacing={2} justifyContent="center" padding="50px">
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text='Green Data Sheet'
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
                <CustomTypography
                    text={label.applicantInformation}
                    display="block"
                    width="auto"
                    fontSize="1.3rem"
                    fontFamily="Arial, sans-serif"
                    fontWeight="700"
                    color="black"
                    lineHeight="1.4375em"
                />
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
                        <CustomTypography
                            text={label.pdsInstructions}
                            display="block"
                            width="auto"
                            fontSize="1.3rem"
                            fontFamily="Arial, sans-serif"
                            fontWeight="700"
                            color="black"
                            lineHeight="1.4375em"
                        />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid item xs={12}>
                            <Glossary />
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={label.regionalPriority}
                    display="block"
                    width="auto"
                    fontSize="1.3rem"
                    fontFamily="Arial, sans-serif"
                    fontWeight="700"
                    color="black"
                    lineHeight="1.4375em"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="political_commitment"
                    value={data.political_commitment}
                    label={label.politicalCommitment}
                    options={menu.politicalCommitment}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />

            </Grid>
            {
                politicalCommitmentEvidence === '5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                politicalCommitmentEvidence === '7.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                politicalCommitmentEvidence === '10' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="regional_trade"
                    value={data.regional_trade}
                    label={label.regionalTrade}
                    options={menu.regionalTrade}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />

            </Grid>
            {
                regionalTradeEvidence === '7.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                regionalTradeEvidence === '10' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
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
                    labelStyle={{ fontWeight: "bold", color: "black" }}
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
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />

            </Grid>
            {
                sustainabilityGoals === '2.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                sustainabilityGoals === '5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                sustainabilityGoals === '7.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                sustainabilityGoals === '10' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={label.sectorReadiness}
                    display="block"
                    width="auto"
                    fontSize="1.3rem"
                    fontFamily="Arial, sans-serif"
                    fontWeight="700"
                    color="black"
                    lineHeight="1.4375em"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="regulatory_framework"
                    value={data.regulatory_framework}
                    label={label.regulatoryFramework}
                    options={menu.regulatoryFramework}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />

            </Grid>
            {
                regulatoryFramework === '2.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                regulatoryFramework === '5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                regulatoryFramework === '7.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                regulatoryFramework === '10' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
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
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />

            </Grid>
            {
                sectorOrganizationEvi === '2.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                sectorOrganizationEvi === '5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                sectorOrganizationEvi === '7.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                sectorOrganizationEvi === '10' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="sector_maturity"
                    value={data.sector_maturity}
                    label={label.sectorMaturity}
                    options={menu.sectorMaturity}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />

            </Grid>
            {
                sectorMaturityEvi === '2.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                sectorMaturityEvi === '5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                sectorMaturityEvi === '7.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                sectorMaturityEvi === '10' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={label.privateSector}
                    display="block"
                    width="auto"
                    fontSize="1.3rem"
                    fontFamily="Arial, sans-serif"
                    fontWeight="700"
                    color="black"
                    lineHeight="1.4375em"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="private_investors"
                    value={data.private_investors}
                    label={label.privateInvestors}
                    options={menu.privateInvestors}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />

            </Grid>
            {
                privateInvestorsEvi === '2.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                privateInvestorsEvi === '5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                privateInvestorsEvi === '7.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                privateInvestorsEvi === '10' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="country_risk"
                    value={data.country_risk}
                    label={label.countryRisk}
                    options={menu.countryRisk}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />

            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="access_financing"
                    value={data.access_financing}
                    label={label.accessFinancing}
                    options={menu.accessFinancing}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />

            </Grid>
            {
                accessFinancingEvi === '2.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                accessFinancingEvi === '5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                accessFinancingEvi === '7.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                accessFinancingEvi === '10' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={label.technicalViability}
                    display="block"
                    width="auto"
                    fontSize="1.3rem"
                    fontFamily="Arial, sans-serif"
                    fontWeight="700"
                    color="black"
                    lineHeight="1.4375em"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="technical_viability"
                    value={data.technical_viability}
                    label={label.technicalViability}
                    options={menu.technicalViability}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />

            </Grid>
            {
                technicalViabilityEvi === '2.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                technicalViabilityEvi === '5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                technicalViabilityEvi === '7.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                technicalViabilityEvi === '10' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="financial_viability"
                    value={data.financial_viability}
                    label={label.financialViability}
                    options={menu.financialViability}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />

            </Grid>
            {
                financialViabilityEvi === '2.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                financialViabilityEvi === '5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                financialViabilityEvi === '7.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                financialViabilityEvi === '10' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="es_viability"
                    value={data.es_viability}
                    label={label.esViability}
                    options={menu.esViability}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />

            </Grid>
            {
                esViabilityEvi === '2.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                esViabilityEvi === '5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                esViabilityEvi === '7.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                esViabilityEvi === '10' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="governance"
                    value={data.governance}
                    label={label.governance}
                    options={menu.governance}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />

            </Grid>
            {
                governanceEvi === '2.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                governanceEvi === '5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                governanceEvi === '7.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                governanceEvi === '10' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="readline_risk"
                    value={data.readline_risk}
                    label={label.readlineRisk}
                    options={menu.readlineRisk}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />

            </Grid>
            {
                readlineRiskEvi === '2.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                readlineRiskEvi === '5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                readlineRiskEvi === '7.5' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
            {
                readlineRiskEvi === '10' && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CustomButton
                            text="Upload evidance"
                            textColor="white"
                            bgColor="black"
                            borderRadius='20px'
                            btnIcon={<FileUploadOutlinedIcon sx={{ colo: "red" }} />}
                        />
                    </Grid>
                )
            }
        </Grid>
    );
};

export default ProjectDataSheetAppForm;
