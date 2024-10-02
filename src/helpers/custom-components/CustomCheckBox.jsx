import { Checkbox, FormControlLabel, Grid } from '@mui/material'

const CustomCheckBox = ({ options, onChange, checked }) => {
    // console.log("options => " + options + "checkState" + checkState)
    return (
        <Grid container direction="column">
            {options.map((option, index) => (
                <Grid item key={index}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name={option.value}
                                onChange={onChange}
                                checked={checked}
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