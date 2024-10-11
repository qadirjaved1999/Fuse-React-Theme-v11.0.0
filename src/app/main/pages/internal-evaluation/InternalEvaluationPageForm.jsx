import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import CustomInput from 'src/helpers/custom-components/CustomInput';
import languages from 'src/labels/index';
import menu from 'src/helpers/menu';
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton';

const InternalEvaluationPageForm = () => {

    // All Labls
    const label = languages.en;

    const intialState = {
        internal_reference_code: '',
        internal_eligibility: '',
        other_specify: ''
    }
    const [data, setData] = useState(intialState);
    const [otherSpecify, setOtherSpecify] = useState(data.internal_eligibility)

    const handleInput = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
        console.log("Name is => ", name + "And the Value is => ", value);
        if (name === 'internal_eligibility') {
            setOtherSpecify(value)
        }
    }

    return (
        <Grid container spacing={2} sx={{ padding: "5px 10px 5px 10px" }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography sx={{ padding: "10px 0px", fontWeight: "bold", fontSize: "15px" }}>{label.internalEvaluation}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomIn
                    name="internal_reference_code"
                    value={data.internal_reference_code}
                    label={label.internalReferenceCode}
                    onChange={handleInput}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>{label.internalEligibility}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="internal_eligibility"
                    value={data.internal_eligibility}
                    label={label.recForm}
                    options={menu.internalEligibility}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                />
            </Grid>
            {otherSpecify === 'no' && (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomInput
                        name="other_specify"
                        value={data.other_specify}
                        label={label.otherSpecify}
                        type="text"
                        onChange={handleInput}
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="internal_eligibility"
                    value={data.internal_eligibility}
                    label={label.pidaProject}
                    options={menu.internalEligibility}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="internal_eligibility"
                    value={data.internal_eligibility}
                    label={label.noPIDAProject}
                    options={menu.internalEligibility}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="internal_eligibility"
                    value={data.internal_eligibility}
                    label={label.sponsorProject}
                    options={menu.internalEligibility}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>{label.qualityInformation}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomRadioButton
                    name="internal_eligibility"
                    value={data.internal_eligibility}
                    label={label.annexedQuestionnaire}
                    options={menu.internalEligibility}
                    onChange={handleInput}
                    row={true}
                    labelStyle={{ fontWeight: "bold", fontSize: "12px" }}
                />
            </Grid>
        </Grid>
    )
}

export default InternalEvaluationPageForm;