import settingsConfig from 'app/configs/settingsConfig';
import { Navigate } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import { layoutConfigOnlyMain } from 'app/configs/layoutConfigTemplates';
import ErrorBoundary from '@fuse/utils/ErrorBoundary';
import App from '../App';
import Error404Page from '../main/404/Error404Page';
import Error401Page from '../main/401/Error401Page';
import WorkingProject from '../main/workingProject/WorkingProject'
const configModules = import.meta.glob('/src/app/main/**/*Route.jsx', { eager: true });
const mainRoutes = Object.keys(configModules)
	.map((modulePath) => {
		const moduleConfigs = configModules[modulePath].default;
		return Array.isArray(moduleConfigs) ? moduleConfigs : [moduleConfigs];
	})
	.flat();
const routes = [
	{
		path: '/',
		element: <App />,
		auth: settingsConfig.defaultAuth,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: '/',
				element: <Navigate to="/example" />
			},
			...mainRoutes,
			{
				path: 'loading',
				element: <FuseLoading />,
				settings: { layout: layoutConfigOnlyMain }
			},
			{
				path: '401',
				element: <Error401Page />
			},
			{
				path: '404',
				element: <Error404Page />,
				settings: { layout: layoutConfigOnlyMain },
				auth: null
			}
		]
	},
	
	{
		path: '/',
		element: <App />,
		auth: settingsConfig.defaultAuth,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: '/potential',
				element: <Navigate to="/potential" />
			},
			...mainRoutes,
			{
				path: 'loading',
				element: <FuseLoading />,
				settings: { layout: layoutConfigOnlyMain }
			},
			{
				path: '401',
				element: <Error401Page />
			},
			{
				path: '404',
				element: <Error404Page />,
				settings: { layout: layoutConfigOnlyMain },
				auth: null
			}
		]
	},
	{
		path: '/',
		element: <App />,
		auth: settingsConfig.defaultAuth,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: '/pql1',
				element: <Navigate to="/pql1" />
			},
			...mainRoutes,
			{
				path: 'loading',
				element: <FuseLoading />,
				settings: { layout: layoutConfigOnlyMain }
			},
			{
				path: '401',
				element: <Error401Page />
			},
			{
				path: '404',
				element: <Error404Page />,
				settings: { layout: layoutConfigOnlyMain },
				auth: null
			}
		]
	},
	{
		path: '/',
		element: <App />,
		auth: settingsConfig.defaultAuth,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: '/pql2',
				element: <Navigate to="/pql2" />
			},
			...mainRoutes,
			{
				path: 'loading',
				element: <FuseLoading />,
				settings: { layout: layoutConfigOnlyMain }
			},
			{
				path: '401',
				element: <Error401Page />
			},
			{
				path: '404',
				element: <Error404Page />,
				settings: { layout: layoutConfigOnlyMain },
				auth: null
			}
		]
	},
	{
		path: '/',
		element: <App />,
		auth: settingsConfig.defaultAuth,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: '/pql3',
				element: <Navigate to="/pql3" />
			},
			...mainRoutes,
			{
				path: 'loading',
				element: <FuseLoading />,
				settings: { layout: layoutConfigOnlyMain }
			},
			{
				path: '401',
				element: <Error401Page />
			},
			{
				path: '404',
				element: <Error404Page />,
				settings: { layout: layoutConfigOnlyMain },
				auth: null
			}
		]
	},
	{
		path: '*',
		element: <Navigate to="404" />
	}
];
export default routes;



// {
// 	path: 'working-project',
// 	element: <WorkingProject />,
// 	children: [
// 		{
// 			path: 'pql1',
// 			element: <Pql1 />
// 		},
// 		{
// 			path: 'pql2',
// 			element: <Pql2 />
// 		},
// 		{
// 			path: 'pql3',
// 			element: <Pql3 />
// 		}
// 	]
// },