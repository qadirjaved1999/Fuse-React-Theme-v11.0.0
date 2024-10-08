import FusePageCarded from "@fuse/core/FusePageCarded";
import styled from 'styled-components';
import InternalForm from '../potentialProject/InternalForm';
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";


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
      // contentToolbar={
      //   <Box p={2}>
      //     <Grid item lg={12} md={12} sm={12} xs={12}>
      //       <Typography variant="h6">Service Request</Typography>
      //     </Grid>
      //   </Box>
      // }
      content={
        <div className="p-24">
          <InternalForm />
        </div>
      }
    />
  );
};

export default PqlOne;
