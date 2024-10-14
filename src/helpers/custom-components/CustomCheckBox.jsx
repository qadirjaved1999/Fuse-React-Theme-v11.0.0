import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid } from '@mui/material'

const CustomCheckBox = ({ name, options, value = [], onChange, row }) => {
    return (
        <Grid container direction={row ? 'row' : 'column'}>
           
                <FormGroup>
                    {
                        options.map((option, index) => (
                            <FormControlLabel key={index}
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
                        ))
                    }
                </FormGroup>
        </Grid>
    )
}

export default CustomCheckBox