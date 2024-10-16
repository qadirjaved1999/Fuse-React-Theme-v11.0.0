import { Button } from "@mui/material";

const CustomButton = ({ textColor, bgColor, onClick, disabled, btnIcon, text, variant, minWidth, maxHeight, padding, iconPosition = "start" }) => {
  return (
    <Button
      disabled={disabled ? disabled : false}
      variant={variant ? variant : "contained"}
      onClick={onClick}
      startIcon={iconPosition === "start" ? btnIcon : null}
      endIcon={iconPosition === "end" ? btnIcon : null}
      style={{
        color: textColor,
        minWidth: minWidth || "100px",
        maxHeight: maxHeight ? maxHeight : "48px",
        padding: padding,
        backgroundColor: bgColor,
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;