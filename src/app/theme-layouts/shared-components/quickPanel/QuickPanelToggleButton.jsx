import IconButton from '@mui/material/IconButton';
import { useAppDispatch } from 'app/store/hooks';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import clsx from 'clsx';
import { toggleQuickPanel } from './quickPanelSlice';

/**
 * The quick panel toggle button.
 */
function QuickPanelToggleButton(props) {
	const { className = '', children = <FuseSvgIcon size={20}>heroicons-outline:bookmark</FuseSvgIcon> } = props;
	const dispatch = useAppDispatch();
	return (
		<IconButton
			onClick={() => dispatch(toggleQuickPanel())}
			className={clsx('border border-divider', className)}
		>
			{children}
		</IconButton>
	);
}

export default QuickPanelToggleButton;