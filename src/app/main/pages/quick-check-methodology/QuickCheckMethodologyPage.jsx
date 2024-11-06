import QuickCheckMethodologyPageForm from './QuickCheckMethodologyPageTable'
import styled from 'styled-components';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { Typography } from '@mui/material';
import CreateComments from './CreateComments';

const Root = styled(FusePageCarded)({
    "& .FusePageCarded-contentCard": { marginTop: "185px" },
    "& .FusePageCarded-contentWrapper": { padding: "10px" },
    "& .FusePageCarded-topBg + div.flex.container": {
        maxWidth: "100% !important;",
    },
});
const QuickCheckMethodologyPage = () => {
    return (
        <Root sx={{ marginTop: "50px" }}
            contentToolbar={
                <Typography>Internal Evaluation Form</Typography>
            }
            content={
                <div className="p-20">
                    <QuickCheckMethodologyPageForm />
                    <CreateComments />
                </div>
            }
        />
    )
}

export default QuickCheckMethodologyPage