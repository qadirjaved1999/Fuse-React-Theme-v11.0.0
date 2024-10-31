import { Button } from "@mui/material";

const CustomButton = ({ color, backgroundColor, onClick, disabled, btnIcon, text, marginLeft, marginRight, variant, minWidth, maxHeight, marginTop, marginBottom, paddingInline, borderRadius }) => {
  /**
   * color: Specifies the color of the button text
   * backgroundColor: Specifies the background color of the button
   * onClick: Function to be called when the button is clicked
   * disabled: Boolean to determine if the button is enabled or disabled
   * margins: Margin values to apply around the button
   */
  return (
    <Button
      disabled={disabled} // Disables the button if true
      variant={variant || "contained"} // Sets the button style to contained (filled)
      onClick={onClick} // Function to call when button is clicked
      startIcon={btnIcon} // Optional icon to display at the start of the button
      style={{
        color: color || "#ffffff", // Custom color for the button text
        minWidth: minWidth, // Minimum width of the button
        maxHeight: maxHeight, // Maximum height of the button
        marginTop: marginTop, // Top margin of the button
        marginLeft: marginLeft, // Left margin of the button
        marginRight: marginRight, // Right margin of the button
        borderRadius: borderRadius || '20px', // Radius of the borders of the button
        marginBottom: marginBottom, // Bottom margin of the button
        paddingInline: paddingInline, // Padding on the left and right of the button text
        backgroundColor: backgroundColor || "black", // Background color of the button
      }}
    >
      {/* Display button text */}
      {text}
    </Button>
  );
};

export default CustomButton;