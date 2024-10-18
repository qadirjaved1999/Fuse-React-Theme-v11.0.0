
import { Typography } from "@mui/material";

const CustomTypography = ({ text, variant, display, textAlign, width, margin, padding, fontWeight, fontSize, color, textTransform, lineHeight, margin }) => {
  return (
    <Typography
      variant={variant || "subtitle1"}
      display={display || "block"}
      style={{
        textAlign: textAlign || "left",
        width: width || "100%",
        margin: margin || 0,
        padding: padding || "0",
        fontWeight: fontWeight || "normal",
        fontSize: fontSize || "14px",
        color: color || "inherit",
        lineHeight: lineHeight || "0rem",
        textTransform: textTransform || "none",
      }}
    >
      {text}
    </Typography>
  );
};

export default CustomTypography;

