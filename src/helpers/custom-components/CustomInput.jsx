import { TextField } from "@mui/material";


const CustomInput = ({ label, value, name, type, onChange, error, required, disabled, placeholder, helperText, multiline, maxLength, textAlign }) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
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
      disabled={disabled || disabled === "true"}
      multiline={multiline || multiline === "true"}
      inputProps={{
        maxLength: maxLength,
        style: { textAlign: textAlign || "left" },
      }}
    />
  );
};
export default CustomInput;
