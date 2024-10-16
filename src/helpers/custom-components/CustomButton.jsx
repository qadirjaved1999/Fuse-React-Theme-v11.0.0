import { Button } from "@mui/material";

const CustomButton = ({ color, customColor, backgroundColor, onClick,  disabled, buttonImage, text, variant, minWidth, maxHeight, padding }) => {
  return (
    <Button
      disabled={disabled ? disabled : false}
      variant={variant ? variant : "contained"}
      color={color} 
      onClick={onClick}
      startIcon={buttonImage}
      style={{
        color: customColor,
        minWidth: minWidth ? minWidth : "100px", 
        maxHeight: maxHeight ? maxHeight : "48px",
        padding: padding,
        backgroundColor: backgroundColor,
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;