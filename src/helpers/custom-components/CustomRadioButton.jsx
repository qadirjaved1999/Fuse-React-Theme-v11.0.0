import { FormControl } from '@mui/base'
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

const CustomRadioButton = ({name, value, label, options, onChange, row}) => {
  console.log("-----------------------------options",options)
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
            control={<Radio />}
            value={option.value}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
    
  )
}

export default CustomRadioButton