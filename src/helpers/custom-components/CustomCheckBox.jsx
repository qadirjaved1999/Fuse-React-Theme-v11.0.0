import { Checkbox, FormControlLabel, Grid } from '@mui/material'

const CustomCheckBox = ({ name, options, value, onChange }) => {
    return (
        <Grid container direction="column">
            {options.map((option, index) => (
                <Grid item key={index}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name={name}
                                onChange={onChange}
                                value={option.value}
                                checked={value.includes(option.value)}
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