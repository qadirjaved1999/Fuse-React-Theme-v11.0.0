import { TextField, Tooltip } from "@mui/material";
// import PublicIcon from "@mui/icons-material/Public";
// import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
// import InputAdornment from "@mui/material/InputAdornment";

const CustomInput = (props) => {
  // TextField component creates a customizable input field
  return (
    <TextField
      required
      placeholder={props.placeholder} // Placeholder text for the input field
      error={props.error} // Boolean to display error state
      helperText={props.helperText} // Text to assist the user (usually shown when there's an error)
      fullWidth // Make the input field take up the full width of its container
      type={!props.type ? "text" : props.type} // Input type (e.g., text, password)
      variant="outlined" // Outlined style for the input field
      size="small" // Size of the input field
      minRows={3} // Minimum number of rows for multiline input
      maxRows={1000} // Maximum number of rows for multiline input
      label={props.label} // Label for the input field
      name={props.name} // Name attribute of the input field
      value={props.value} // Current value of the input field
      multiline={props.multiline || props.multiline === "true"} // Boolean to allow multiline input
      disabled={props.disabled || props.disabled == "true"} // Boolean to disable the input field
      inputProps={{
        maxLength: [props.maxLength], // Maximum length of input
        style: { textAlign: props.textAlign ? props.textAlign : "left" }, // Text alignment in the input field
      }}
      onChange={props.onChange} // Function to handle changes in input value
      InputProps={{
        style: {
          backgroundColor: props.inputField === "questionnaire" ? "#fff2cc" : props.inputField === "countryProfileEditable" ? "#e2f0d9" : props.inputField === "countryProfileReadonly" ? "#dae3f3" : "transparent",
        },
        // startAdornment: props.inputField && (
        //   <>
        //     {props.inputField === "questionnaire" && (
        //       <InputAdornment position="start">
        //         <Tooltip title={props.tooltip || "From the questionnaire (editable)"} placement="top" arrow>
        //           <span>
        //             <AccessibilityNewIcon />{" "}
        //           </span>
        //         </Tooltip>
        //       </InputAdornment>
        //     )}
        //     {(props.inputField === "countryProfileEditable" ||
        //       props.inputField === "countryProfileReadonly") && (
        //         <InputAdornment position="start">
        //           <Tooltip
        //             title={props.inputField === "countryProfileEditable" ? "From the country profile (editable)" : "Read-only from Economic Inputs, updated by Finance Desk"} placement="top" arrow>
        //             <span>
        //               <PublicIcon />{" "}
        //             </span>
        //           </Tooltip>
        //         </InputAdornment>
        //       )}
        //   </>
        // ),
        // endAdornment: !props.badge ? (
        //   ""
        // ) : (
        //   <InputAdornment position="end">{props.badge}</InputAdornment>
        // ),
      }}
      InputLabelProps={{
        style: {
          borderRadius: props.inputField ? "10px" : 0,
          paddingLeft: props.inputField ? "10px" : 0,
          paddingRight: props.inputField ? "12px" : 0,
          paddingTop: props.inputField ? "3px" : 0,
          backgroundColor: props.inputField === "questionnaire" ? "#fff2cc" : props.inputField === "countryProfileEditable" ? "#e2f0d9" : props.inputField === "countryProfileReadonly" ? "#dae3f3" : "transparent",
        },
      }}
    />
  );
};

// Export the CustomInput component for use in other parts of the application
export default CustomInput;
