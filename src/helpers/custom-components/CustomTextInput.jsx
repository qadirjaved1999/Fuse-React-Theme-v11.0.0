import { TextField } from "@mui/material";


const CustomTextInput = ({ label, value, name, type, onChange, error, required }) => {
  return (
    <TextField
      error={error}
      label={label}
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
    // disabled={props.disabled || props.disabled == "true"}
    />
  );
};
export default CustomTextInput;
