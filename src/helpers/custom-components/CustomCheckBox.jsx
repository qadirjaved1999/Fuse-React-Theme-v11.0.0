import { Checkbox, FormControlLabel, Grid } from '@mui/material'

const CustomCheckBox = ({ name, options, value = [], onChange, row }) => {
    return (
        <Grid container direction={row ? 'row' : 'column'}>
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
                                sx={{
                                    color: 'black',
                                    '&.Mui-checked': {
                                        color: 'black',
                                    }
                                }}
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