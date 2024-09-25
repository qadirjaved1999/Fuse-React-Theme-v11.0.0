import { lazy } from 'react';
import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'workingProjectPage', en);
i18next.addResourceBundle('tr', 'workingProjectPage', tr);
i18next.addResourceBundle('ar', 'workingProjectPage', ar);

const WorkingProject = lazy(() => import('./WorkingProject'));
const Pql1 = lazy(() => import('./Pql1'));
const Pql2 = lazy(() => import('./Pql2'));
const Pql3 = lazy(() => import('./Pql3'));

const WorkingProjectRoute = [
    {
        path: 'working-project',
        element: <WorkingProject />,
        children: [
            {
                path: 'pql1',
                element: <Pql1 />
            },
            {
                path: 'pql2',
                element: <Pql2 />
            },
            {
                path: 'pql3',
                element: <Pql3 />
            }
        ]
    }
];

export default WorkingProjectRoute;
