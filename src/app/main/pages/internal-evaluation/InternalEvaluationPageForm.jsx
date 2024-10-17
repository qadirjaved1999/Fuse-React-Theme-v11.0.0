import { Grid } from '@mui/material';
import { useState } from 'react'
import CustomInput from 'src/helpers/custom-components/CustomInput';
import languages from 'src/labels/index';
import menu from 'src/helpers/menu';
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton';
import CustomTypography from 'src/helpers/custom-components/CustomTypography';

const InternalEvaluationPageForm = () => {

    // All Labls
    const label = languages.en;

    const intialState = {
        reference_code: '',
        request_origin: '',
        other_origin: '',
        pida_pap_project: '',
        regional_infrastructure: '',
        sponsor_identified: '',
        questionnaire_fulfilled: '',
        evaluation_status: ''
    }
    const [data, setData] = useState(intialState);
    const [otherSpecify, setOtherSpecify] = useState(data.request_origin)

    const handleInput = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
        console.log("Name is => ", name + "And the Value is => ", value);
        if (name === 'request_origin') {
            setOtherSpecify(value)
        }
    }

    return (
        <Grid container spacing={2} sx={{ padding: "5px 10px 5px 10px" }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text="Internal evaluation Form"
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
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <CustomTypography
                    text={label.internalEvaluation}
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
                <CustomInput
                    name="reference_code"
                    value={data.reference_code}
                    label={label.referenceCode}
                    onChange={handleInput}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={label.internalEligibility}
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
                    name="request_origin"
                    value={data.request_origin}
                    label={label.requestOrigin}
                    options={menu.confirmationChoices}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            {otherSpecify === 'no' && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomInput
                        name="other_origin"
                        value={data.other_origin}
                        label={label.otherOrigin}
                        type="text"
                        onChange={handleInput}
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="pida_pap_project"
                    value={data.pida_pap_project}
                    label={label.internalPidaPapProject}
                    options={menu.confirmationChoices}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="regional_infrastructure "
                    value={data.regional_infrastructure}
                    label={label.noPIDAProject}
                    options={menu.confirmationChoices}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="sponsor_identified "
                    value={data.sponsor_identified}
                    label={label.sponsorProject}
                    options={menu.confirmationChoices}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={label.qualityInformation}
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
                    name="questionnaire_fulfilled"
                    value={data.questionnaire_fulfilled}
                    label={label.questionnaireFulfilled}
                    options={menu.confirmationChoices}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTypography
                    text={label.qualityInformation}
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
                    name="questionnaire_fulfilled"
                    value={data.questionnaire_fulfilled}
                    label={label.questionnaireFulfilled}
                    options={menu.confirmationChoices}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", color: "black" }}
                />
            </Grid>
        </Grid>
    )
}

export default InternalEvaluationPageForm;