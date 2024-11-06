import React from 'react';
import { styled } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: "rgba(0, 0, 0, 0.62)",
    },
    [`& .${tooltipClasses.tooltip}`]: {
        background: "rgba(0, 0, 0, 0.62)",
        color: "white",
        textAlign: "center",
    },
}));

export default CustomTooltip;

