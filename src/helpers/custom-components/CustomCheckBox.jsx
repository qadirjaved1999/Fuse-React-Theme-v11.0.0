
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'

const CustomCheckBox = ({ options, label, value, onChange }) => {
    /**
     * CustomCheckBox Component
     * This component renders a group of checkboxes based on provided options.
     * 
     * Props:
     * - options: Array of checkbox options, each containing a value and a label.
     * - label: The label for the group of checkboxes.
     * - value: Array of currently selected values.
     * - onChange: Function to handle changes when checkboxes are toggled.
     */
    return (
        <FormControl>
            {/* Label for the checkbox group */}
            <FormLabel sx={{ fontWeight: "700", color: "#3D3935", fontSize: "12px" }}>{label}</FormLabel>
            <FormGroup>
                {options.map((option, index) => (
                    <FormControlLabel key={index} // Unique key for each checkbox label
                        control={
                            <Checkbox
                                name={option.value} // Checkbox name corresponds to the option's value
                                checked={value.includes(option.value)} // Determine if checkbox is checked
                                onChange={onChange} // Handle checkbox change event
                                size="small" // Small size for the checkbox
                                style={{ color: "black" }} // Inline style for checkbox color
                            />
                        }
                        label={option.label} // Label for the checkbox
                    />
                ))}
            </FormGroup>
        </FormControl>
    )
}

export default CustomCheckBox