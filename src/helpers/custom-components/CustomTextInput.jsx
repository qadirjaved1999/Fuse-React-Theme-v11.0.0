import { TextField } from "@mui/material";


const CustomTextInput = ({ label, value, name, type, onChange, error, required, disabled, placeholder, helperText, multiline }) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder} // Placeholder text for the input field
      error={error}
      helperText={helperText}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      fullWidth
      type={type || "text"}
      variant="outlined"
      size="small"
      minRows={3}
      maxRows={1000}
      disabled={disabled || "true"}
      multiline={multiline || "true"}
    />
  );
};
export default CustomTextInput;
