import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import CustomTextInput from 'src/helpers/custom-components/CustomTextInput';
import languages from 'src/constants/index';
import menu from 'src/helpers/menu';

const InternalEvaluationPageForm = () => {

    // All Labls
    const label = languages.en;

    const intialState = {
        internal_reference_code: ''
    }
    const [data, setData] = useState(intialState);

    const handleInput = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography sx={{ padding: "10px 0px", fontWeight: "bold", fontSize: "15px" }}>{label.internalEvaluation}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CustomTextInput
                    name="internal_reference_code"
                    value={data.internal_reference_code}
                    label={menu.internalEvaluation[0].label}
                    onChange={handleInput}
                />
            </Grid>
        </Grid>
    )
}

export default InternalEvaluationPageForm;