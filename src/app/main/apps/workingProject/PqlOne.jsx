import FusePageCarded from "@fuse/core/FusePageCarded";
import styled from 'styled-components';
import InternalForm from '../potentialProject/InternalForm';
import { Typography } from "@mui/material";

const Root = styled(FusePageCarded)(({ theme }) => ({
  "& .FusePageCarded-contentCard": { marginTop: "185px" },
  "& .FusePageCarded-contentWrapper": { padding: "30px" },
  "& .FusePageCarded-topBg + div.flex.container": {
    maxWidth: "100% !important;",
  },
}));



const PqlOne = () => {
  return (
    <Root
      contentToolbar={
        <Typography variant="h6">Service Request</Typography>
      }
      content={
        <div className="p-24">
          <InternalForm />
        </div>
      }
    />
  );
};

export default PqlOne;
