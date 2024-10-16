
import { Typography } from "@mui/material";

const CustomTypography = ({ text, variant, display, textAlign, width, margin,  padding, fontWeight, fontSize, color, textTransform }) => {
  return (
    <Typography
      variant={variant ? variant : "subtitle1"} 
      display={display ? display : "block"}
      style={{
        textAlign: textAlign ? textAlign : "left",
        width: width ? width : "100%",
        margin: margin ? margin : 0,
        padding: padding ? padding : "0",
        fontWeight: fontWeight ? fontWeight : "normal",
        fontSize: fontSize ? fontSize : "14px",
        color: color ? color : "inherit",
        textTransform: textTransform ? textTransform : "none",
      }}
    >
      {text}
    </Typography>
  );
};

export default CustomTypography;

