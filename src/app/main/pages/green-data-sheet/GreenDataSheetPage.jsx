import React from 'react'
import FusePageCarded from '@fuse/core/FusePageCarded';
import ClimatePoliceGds from './ClimatePoliceGds';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const Root = styled(FusePageCarded)({
    "& .FusePageCarded-contentCard": { marginTop: "185px" },
    "& .FusePageCarded-contentWrapper": { padding: "10px" },
    "& .FusePageCarded-topBg + div.flex.container": {
        maxWidth: "100% !important;",
    },
});

const GreenDataSheetPage = () => {
    return (
        <Root sx={{ marginTop: "50px" }}
            // header={
            // 	<div className="p-24">
            // 		<h4>GIZ SDM Project</h4>
            // 	</div>
            // }
            contentToolbar={
                <>
                    <Typography>Application Form</Typography>
                </>

            }
            content={
                <div className="p-24">
                    <ClimatePoliceGds />
                </div>
            }
        />
    )
}

export default GreenDataSheetPage