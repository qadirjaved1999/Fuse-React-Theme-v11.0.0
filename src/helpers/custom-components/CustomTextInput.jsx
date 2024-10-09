import { TextField } from "@mui/material";


const CustomTextInput = ({label, value, name, type, onChange }) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      required
      fullWidth
      type={type ? type : "text"}
      variant="outlined"
      size="small"
      minRows={3}
      maxRows={1000}
      // disabled={props.disabled || props.disabled == "true"}
    />
  );
};
export default CustomTextInput;
