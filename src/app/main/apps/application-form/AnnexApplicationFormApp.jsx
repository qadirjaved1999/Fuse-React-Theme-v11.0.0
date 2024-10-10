import FusePageCarded from '@fuse/core/FusePageCarded';
import { Typography } from '@mui/material';
// import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import ApplicationForm from './ApplicationForm';

const Root = styled(FusePageCarded)({
	"& .FusePageCarded-contentCard": { marginTop: "185px" },
	"& .FusePageCarded-contentWrapper": { padding: "10px" },
	"& .FusePageCarded-topBg + div.flex.container": {
		maxWidth: "100% !important;",
	},
});

function AnnexApplicationFormApp() {
	// const { t } = useTranslation('potentialPage');
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
					<ApplicationForm />
				</div>
			}
		/>
	);
}

export default AnnexApplicationFormApp;
