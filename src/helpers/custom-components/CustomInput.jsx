import { TextField } from "@mui/material";

const CustomInput = ({ label, value, name, type, onChange, error, required, disabled, placeholder, helperText, multiline, maxLength, textAlign, marginTop }) => {
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
      disabled={disabled}
      multiline={multiline}
      inputProps={{
        maxLength: maxLength,
        style: { textAlign: textAlign },
      }}
      sx={{
        marginTop: marginTop
      }}
    />
  );
};
export default CustomInput;
