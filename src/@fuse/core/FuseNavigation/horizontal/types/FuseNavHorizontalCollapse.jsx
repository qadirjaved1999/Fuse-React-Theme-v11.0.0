import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { styled, useTheme } from '@mui/material/styles';
import { useDebounce } from '@fuse/hooks';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import clsx from 'clsx';
import { memo, useMemo, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Manager, Popper, Reference } from 'react-popper';
import { ListItemButton } from '@mui/material';
import isUrlInChildren from '@fuse/core/FuseNavigation/isUrlInChildren';
import { useLocation } from 'react-router-dom';
import FuseNavBadge from '../../FuseNavBadge';
import FuseNavItem from '../../FuseNavItem';
import FuseSvgIcon from '../../../FuseSvgIcon';

const Root = styled(ListItemButton)(({ theme }) => ({
	color: theme.palette.text.primary,
	minHeight: 48,
	cursor: 'pointer',
	'&.active, &.active:hover, &.active:focus': {
		backgroundColor: `${theme.palette.secondary.main}!important`,
		color: `${theme.palette.secondary.contrastText}!important`,
		'&.open': {
			backgroundColor: 'rgba(0,0,0,.08)'
		},
		'& > .fuse-list-item-text': {
			padding: '0 0 0 16px'
		},
		'& .fuse-list-item-icon': {
			color: 'inherit'
		}
	}
}));

/**
 * FuseNavHorizontalCollapse component helps rendering Horizontal Fuse Navigation Item with children
 * Used in FuseNavVerticalItems and FuseNavHorizontalItems
 */
function FuseNavHorizontalCollapse(props) {
	const { item, nestedLevel, dense, checkPermission } = props;
	const [opened, setOpened] = useState(false);
	const location = useLocation();
	const { pathname } = location;
	const theme = useTheme();
	const handleToggle = useDebounce((open) => {
		setOpened(open);
	}, 150);
	const component = item.url ? NavLinkAdapter : 'li';
	let itemProps;

	if (typeof component !== 'string') {
		itemProps = {
			disabled: item.disabled,
			to: item.url,
			end: item.end,
			role: 'button'
		};
	}

	if (checkPermission && !item?.hasPermission) {
		return null;
	}

	return useMemo(
		() => (
			<ul className="relative px-0">
				<Manager>
					<Reference>
						{({ ref }) => (
							<div ref={ref}>
								<Root
									component={component}
									className={clsx(
										'fuse-list-item',
										opened && 'open',
										isUrlInChildren(item, pathname) && 'active'
									)}
									onMouseEnter={() => handleToggle(true)}
									onMouseLeave={() => handleToggle(false)}
									aria-owns={opened ? 'menu-fuse-list-grow' : null}
									aria-haspopup="true"
									sx={item.sx}
									{...itemProps}
								>
									{item.icon && (
										<FuseSvgIcon
											color="action"
											className={clsx('fuse-list-item-icon shrink-0', item.iconClass)}
										>
											{item.icon}
										</FuseSvgIcon>
									)}

									<ListItemText
										className="fuse-list-item-text"
										primary={item.title}
										classes={{ primary: 'text-md truncate' }}
									/>

									{item.badge && (
										<FuseNavBadge
											className="mx-4"
											badge={item.badge}
										/>
									)}
									<IconButton
										disableRipple
										className="h-12 w-12 p-0 ltr:ml-4 rtl:mr-4"
										color="inherit"
									>
										<FuseSvgIcon
											size={12}
											className="arrow-icon"
										>
											{theme.direction === 'ltr'
												? 'heroicons-outline:chevron-right'
												: 'heroicons-outline:chevron-left'}
										</FuseSvgIcon>
									</IconButton>
								</Root>
							</div>
						)}
					</Reference>
					{ReactDOM.createPortal(
						<Popper placement={theme.direction === 'ltr' ? 'right' : 'left'}>
							{({ ref, style, placement }) =>
								opened && (
									<div
										ref={ref}
										style={{
											...style,
											zIndex: 999 + nestedLevel + 1
										}}
										data-placement={placement}
										className={clsx('z-999', !opened && 'pointer-events-none')}
									>
										<Grow
											in={opened}
											id="menu-fuse-list-grow"
											style={{ transformOrigin: '0 0 0' }}
										>
											<Paper
												className="rounded"
												onMouseEnter={() => handleToggle(true)}
												onMouseLeave={() => handleToggle(false)}
											>
												{item.children && (
													<ul
														className={clsx(
															'popper-navigation-list',
															dense && 'dense',
															'px-0'
														)}
													>
														{item.children.map((_item) => (
															<FuseNavItem
																key={_item.id}
																type={`horizontal-${_item.type}`}
																item={_item}
																nestedLevel={nestedLevel + 1}
																dense={dense}
															/>
														))}
													</ul>
												)}
											</Paper>
										</Grow>
									</div>
								)
							}
						</Popper>,
						document.querySelector('#root')
					)}
				</Manager>
			</ul>
		),
		[dense, handleToggle, item, nestedLevel, opened, pathname, theme.direction]
	);
}

const NavHorizontalCollapseWithMemo = memo(FuseNavHorizontalCollapse);
export default NavHorizontalCollapseWithMemo;