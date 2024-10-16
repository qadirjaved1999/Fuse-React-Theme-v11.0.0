
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'

const CustomCheckBox = ({ name, options, label, value = [], onChange, row }) => {
    return (
        <FormControl >
            <FormLabel sx={{ fontWeight: "700", color: "#3D3935", fontSize: "12px" }}>{label}</FormLabel>
            <FormGroup>
                {
                    options.map((option, index) => (
                        <FormControlLabel key={index}
                            control={
                                <Checkbox
                                    name={name}
                                    value={option.value}
                                    checked={value.includes(option.value)}
                                    onChange={onChange}
                                    size='small'
                                    sx={{
                                        color: 'black',
                                        '&.Mui-checked': {
                                            color: 'black',
                                        },
                                    }}
                                />
                            }
                            label={option.label}
                        />
                    ))
                }
            </FormGroup>
        </FormControl>

    )
}

export default CustomCheckBox