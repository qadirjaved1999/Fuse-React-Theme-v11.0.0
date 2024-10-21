import React from 'react'
import FusePageCarded from '@fuse/core/FusePageCarded';
import { Typography } from '@mui/material'
import ProjectDataSheetAppForm from './ProjectDataSheetAppForm'
import styled from 'styled-components';

const Root = styled(FusePageCarded)({
    "& .FusePageCarded-contentCard": { marginTop: "185px" },
    "& .FusePageCarded-contentWrapper": { padding: "10px" },
    "& .FusePageCarded-topBg + div.flex.container": {
        maxWidth: "100% !important;",
    },
});
const ProjectDataSheetApp = () => {
    return (
        <Root sx={{ marginTop: "50px" }}
            // header={
            //     <Typography style={{ padding: "20px 0px", fontWeight: "bold", fontSize: "15px" }}>Project Data Sheet</Typography>
            // }
            contentToolbar={
                <Typography>Project Data Sheet</Typography>
            }
            content={

                <ProjectDataSheetAppForm />
            }
        />
    )
}

export default ProjectDataSheetApp