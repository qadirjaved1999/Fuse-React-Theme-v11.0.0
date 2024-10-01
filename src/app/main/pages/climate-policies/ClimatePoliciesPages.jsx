import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton'
import Menu from 'src/helpers/menu'

const ClimatePoliciesPages = () => {
    const label =  "Regional climate interest and commitment";
    const [data, setData] = useState("")
    const options = Menu.regionalClimateInterest;
    const handleChange = (event) => {
        setData(event.target.value)
    }
    console.log("======>>>>>>>>", data)
    return (
        <>
            <Grid sx={{padding: "50px"}}>
                <div className="checkbox">
                    <CustomRadioButton
                        name="projectViability"
                        value={data}
                        values={options}
                        label={label}
                        onChange={handleChange}
                    />
                </div>
            </Grid>

        </>

    )
}

export default ClimatePoliciesPages