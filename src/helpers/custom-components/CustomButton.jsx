import { Button } from '@mui/base'
import React from 'react'

const CustomButton = ({ btnText, textColor, bgColor, variant, padding, fontSize, minWidth, height, borderRadius, onClick }) => {
    return (
        <Button
            variant={variant}
            onClick={onClick}
            style={{
                color: textColor,
                backgroundColor: bgColor,
                padding: padding,
                fontSize: fontSize,
                minWidth: minWidth,
                height: height,
                borderRadius: borderRadius
            }}
        >
            {btnText}
        </Button>
    )
}

export default CustomButton