import FusePageCarded from '@fuse/core/FusePageCarded';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import PCM from './PCM';
const Root = styled(FusePageCarded)({
    "& .FusePageCarded-contentCard": { marginTop: "185px" },
    "& .FusePageCarded-contentWrapper": { padding: "10px" },
    "& .FusePageCarded-topBg + div.flex.container": {
        maxWidth: "100% !important;",
    },
});

const PCMPage = () => {
    return (
        <Root sx={{ marginTop: "50px" }}
            contentToolbar={
                <Typography>Project concept memorandum</Typography>
            }
            content={
                <div className="p-20">
                    <PCM />
                </div>
            }
        />
    )
}

export default PCMPage