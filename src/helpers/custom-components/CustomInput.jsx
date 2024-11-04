import { TextField } from "@mui/material";

const CustomInput = ({ label, value, name, type, onChange, error, required, disabled, placeholder, helperText, multiline, maxLength, textAlign, inputProps, InputProps }) => {
  return (
    <TextField
      label={label} // Label for the input field
      placeholder={placeholder} // Placeholder text for the input field
      error={error} // Boolean to display error state
      helperText={helperText} // Text to assist the user (usually shown when there's an error)
      fullWidth // Make the input field take up the full width of its container
      type={type || "text"} // Input type (e.g., text, password)
      variant="outlined" // Outlined style for the input field
      size={multiline ? "medium" : "small"} // Size of the input field
      minRows={3} // Minimum number of rows for multiline input
      maxRows={1000} // Maximum number of rows for multiline input
      name={name} // Name attribute of the input field
      value={value} // Current value of the input field
      multiline={multiline} // Boolean to allow multiline input
      disabled={disabled} // Boolean to disable the input field
      inputProps={{
        ...inputProps, 
        maxLength: maxLength, // Maximum length of input
        style: { textAlign: textAlign }, // Text alignment in the input field
      }}
      onChange={onChange} // Function to handle changes in input value
      required={required} // Whether an input is required
      InputProps={{
        ...InputProps, 
        ...(multiline && {
          sx: { paddingLeft: "0px", paddingTop: "4px" }, // Custom padding for multiline fields
        }),
      }}
    />
  );
};
export default CustomInput;
