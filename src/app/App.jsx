import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import { SnackbarProvider } from 'notistack';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { selectCurrentLanguageDirection } from 'app/store/i18nSlice';
import themeLayouts from 'app/theme-layouts/themeLayouts';
import { selectMainTheme } from '@fuse/core/FuseSettings/fuseSettingsSlice';
import MockAdapterProvider from '@mock-api/MockAdapterProvider';
import { useAppSelector } from 'app/store/hooks';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import AuthenticationProvider from './auth/AuthenticationProvider';
import withAppProviders from './withAppProviders';
// import axios from 'axios';
/**
 * Axios HTTP Request defaults
 */
// axios.defaults.baseURL = "";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
const emotionCacheOptions = {
	rtl: {
		key: 'muirtl',
		stylisPlugins: [rtlPlugin],
		insertionPoint: document.getElementById('emotion-insertion-point')
	},
	ltr: {
		key: 'muiltr',
		stylisPlugins: [],
		insertionPoint: document.getElementById('emotion-insertion-point')
	}
};

/**
 * The main App component.
 */
function App() {
	const langDirection = useAppSelector(selectCurrentLanguageDirection);
	const mainTheme = useSelector(selectMainTheme);
	const cacheProviderValue = useMemo(() => createCache(emotionCacheOptions[langDirection]), [langDirection]);
	return (
		<MockAdapterProvider>
			<CacheProvider value={cacheProviderValue}>
				<FuseTheme
					theme={mainTheme}
					root
				>
					<AuthenticationProvider>
						<SnackbarProvider
							maxSnack={5}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right'
							}}
							classes={{
								containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99'
							}}
						>
							<FuseLayout layouts={themeLayouts} />
						</SnackbarProvider>
					</AuthenticationProvider>
				</FuseTheme>
			</CacheProvider>
		</MockAdapterProvider>
	);
}

const AppWithProviders = withAppProviders(App);
export default AppWithProviders;
