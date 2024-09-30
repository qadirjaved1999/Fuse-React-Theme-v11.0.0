import { FormControl } from '@mui/base'
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

const CustomRadioButton = ({props}) => {
  return (
    <FormControl component="fieldset">
      {/* <FormLabel id={`${name}-label`}>{heading}</FormLabel> Use FormLabel for accessibility */}
      <RadioGroup
        // aria-labelledby={`${name}-label`} // Connects the label with the radio group for accessibility
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