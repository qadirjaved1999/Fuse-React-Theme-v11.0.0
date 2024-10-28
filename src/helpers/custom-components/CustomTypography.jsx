
import { Typography } from "@mui/material";

const CustomTypography = ({ text, variant, display, textAlign, width, margin, padding, fontWeight, fontSize, color, textTransform, lineHeight }) => {
  return (
    <Typography
      variant={variant || "subtitle1"}
      display={display}
      style={{
        textAlign: textAlign,
        width: width,
        margin: margin,
        padding: padding,
        fontWeight: fontWeight,
        fontSize: fontSize || "14px",
        color: color,
        lineHeight: lineHeight,
        textTransform: textTransform,
      }}
    >
      {text}
    </Typography>
  );
};

export default CustomTypography;

