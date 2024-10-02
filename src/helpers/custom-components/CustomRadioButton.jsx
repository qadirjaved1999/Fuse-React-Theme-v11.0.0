import { FormControl } from '@mui/base'
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

const CustomRadioButton = ({name, value, options, label, onChange, row}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        name={name}
        value={value}
        onChange={onChange}
        row={row}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.value}
            control={<Radio />} 
            label={option.label} 
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default CustomRadioButton