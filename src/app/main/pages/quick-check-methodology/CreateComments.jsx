import { Grid } from '@mui/material'
import React from 'react'
import CustomInput from 'src/helpers/custom-components/CustomInput'
import CustomTypography from 'src/helpers/custom-components/CustomTypography'

const CreateComments = () => {
    return (
        <Grid container spacing={2} sx={{ mt: 1, p: 3 }}>
            <CustomTypography
                text="Comments"
                fontWeight="700"
            />
            <CustomInput />
        </Grid>
    )
}

export default CreateComments