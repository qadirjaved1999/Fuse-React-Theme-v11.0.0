import { Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomRadioButton from 'src/helpers/custom-components/CustomRadioButton'
import menu from ''

const ClimatePoliciesPages = () => {
    const [radioSelectedValue, setRadioSelectedValue] = useState("")
    const values = [
        // "countriesNotInParis",
        // "beneficiaryUpdatedNDC",
        // "mainBeneficiaryNDCAligned",
        // "allUpdatedNotAligned",
        // "allUpdatedAllAligned"
    ];
    const handleChange = (event) => {
        setRadioSelectedValue(event.target.value)
    }
    return (
        <>
            <div>
                <Typography>
                    Regional climate interest and commitment
                </Typography>
            </div>
            <div className="checkbox">
                <CustomRadioButton
                    name="projectViability"
                    value={radioSelectedValue}
                    onchange={handleChange}
                    label={}
                />
            </div>
        </>

    )
}

export default ClimatePoliciesPages