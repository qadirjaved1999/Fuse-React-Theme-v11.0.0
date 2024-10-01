import { Checkbox, FormControlLabel, Grid } from '@mui/material'
import React from 'react'
import { column } from 'stylis'

const CustomCheckBox = ({ options, onChange, checkState }) => {
    return (
        <Grid container direction="column">
            {options.map((option, index) => (
                <Grid item key={index}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name={option.value}
                                onChange={onChange}
                                checked={checkState[option.value]}
                                size='small'
                            />
                        }
                        label={option.label}
                    />
                </Grid>
            ))}

        </Grid>
    )
}

export default CustomCheckBox