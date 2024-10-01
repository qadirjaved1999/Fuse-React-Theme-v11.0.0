import { FormControl } from '@mui/base'
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

const CustomRadioButton = ({name, value, selectedValue, label, onChange}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel>Giz</FormLabel>
      <RadioGroup
        name={name}
        value={value}
        onChange={onChange}
      >
        {values.map((val, index) => (
          <FormControlLabel
            key={index}
            value={val}
            control={<Radio />} // MUI Radio component
            label={labels[index]} // The label text for each radio button
            disabled={disabled} // Disable the radio button if needed
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default CustomRadioButton