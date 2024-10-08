import InternalForm from './InternalForm';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { Typography } from '@mui/material';
// import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';

const Root = styled(FusePageCarded)({
	"& .FusePageCarded-contentCard": { marginTop: "185px" },
	"& .FusePageCarded-contentWrapper": { padding: "0px" },
	"& .FusePageCarded-topBg + div.flex.container": {
		maxWidth: "100% !important;",
	},
});

function Potential() {
	// const { t } = useTranslation('potentialPage');
	return (
		<Root
			header={
				<div className="p-24">
					<h4>GIZ SDM Project</h4>
				</div>
			}
			contentToolbar={
				<>
					<Typography>Hellow World</Typography>
				</>

			}
			content={
				<div className="p-24">
					<InternalForm />
				</div>
			}
		/>
	);
}

export default Potential;
