import { Button } from "@mui/material";

const CustomButton = ({ textColor, bgColor, onClick, disabled, btnIcon, text, variant, minWidth, maxHeight, padding, borderRadius, iconPosition = "start" }) => {
  return (
    <Button
      disabled={disabled}
      variant={variant || "contained"}
      onClick={onClick}
      startIcon={iconPosition === "start" ? btnIcon : null}
      endIcon={iconPosition === "end" ? btnIcon : null}
      style={{
        color: textColor,
        minWidth: minWidth || "100px",
        maxHeight: maxHeight || "48px",
        padding: padding,
        borderRadius: borderRadius,
        backgroundColor: bgColor,
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;