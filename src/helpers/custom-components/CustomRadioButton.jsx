import { FormControl } from '@mui/base'
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

const CustomRadioButton = ({ name, label, options, onChange, row, labelStyle }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel sx={labelStyle}>{label}</FormLabel>
      <RadioGroup
        name={name}
        onChange={onChange}
        row={row}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={<Radio sx={{
              color: '#000',
              '&.Mui-checked': {
                color: '#000',
              },
            }} />}
            value={option.value}
            label={option.label}

          />
        ))}
      </RadioGroup>
    </FormControl>

  )
}

export default CustomRadioButton