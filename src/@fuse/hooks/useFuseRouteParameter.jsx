import { useLocation, matchRoutes } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import _ from '@lodash';
import routes from 'app/configs/routesConfig';
/**
 * Utility function to retrieve and merge or replace a specific route parameter from matched routes.
 *
 * @param pathname The current pathname
 * @param key The key of the parameter to merge or replace (e.g., 'settings', 'auth')
 * @param useMerge Whether to merge the parameter (using lodash merge) or replace it
 * @returns The merged or replaced parameter data of type T
 */
export function getFuseRouteParamUtil(pathname, key, useMerge = true) {
	const matchedRoutes = matchRoutes(routes, pathname);
	return matchedRoutes
		? matchedRoutes.reduce((acc, match) => {
				const routeParam = match.route[key];

				if (routeParam !== undefined) {
					if (useMerge) {
						if (routeParam === null) {
							acc = routeParam;
						} else {
							acc = _.merge(acc || {}, routeParam);
						}
					} else {
						acc = routeParam;
					}
				}

				return acc;
			}, {})
		: {};
}

/**
 * Custom hook to retrieve and merge a specific route parameter (e.g., 'settings', 'auth') from matched routes.
 *
 * @param key The key of the parameter to merge (e.g., 'settings', 'auth')
 * @returns The merged parameter data of type T
 */
function useFuseRouteParameter(key, useMerge = true) {
	const location = useLocation();
	const { pathname } = location;
	const getParameter = useCallback(() => {
		return getFuseRouteParamUtil(pathname, key, useMerge);
	}, [key, pathname, useMerge]);
	const [parameter, setParameter] = useState(() => getParameter());
	const updateParameter = useCallback(() => {
		const param = getParameter();

		if (!_.isEqual(parameter, param)) {
			setParameter(param);
		}
	}, [getParameter, parameter, pathname]);
	useEffect(() => {
		updateParameter();
	}, [updateParameter]);
	return parameter;
}

export default useFuseRouteParameter;
