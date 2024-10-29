import React from 'react'
import FusePageCarded from '@fuse/core/FusePageCarded';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import ProjectNotificationReport from './ProjectNotificationReport';
const Root = styled(FusePageCarded)({
    "& .FusePageCarded-contentCard": { marginTop: "185px" },
    "& .FusePageCarded-contentWrapper": { padding: "10px" },
    "& .FusePageCarded-topBg + div.flex.container": {
        maxWidth: "100% !important;",
    },
});
const ProjectNotificationReportPage = () => {
    return (
        <Root sx={{ marginTop: "50px" }}
            // header={
            //     <Typography style={{ padding: "20px 0px", fontWeight: "bold", fontSize: "15px" }}>Internal Evaluation Form</Typography>
            // }
            contentToolbar={
                <Typography>Internal Evaluation Form</Typography>
            }
            content={
                <div className="p-20">
                    <ProjectNotificationReport />
                </div>
            }
        />
    )
}

export default ProjectNotificationReportPage