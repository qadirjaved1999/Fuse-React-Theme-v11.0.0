import i18next from 'i18next';
import { lazy } from 'react';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'potentialPage', en);
i18next.addResourceBundle('tr', 'potentialPage', tr);
i18next.addResourceBundle('ar', 'potentialPage', ar);
const Potential = lazy(() => import('./Potential'));

const PotentialRoute = {
	path: 'potential',
	element: <Potential />
};
export default PotentialRoute;
