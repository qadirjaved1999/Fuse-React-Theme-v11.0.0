import { lazy } from 'react';
import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'workingProjectPage', en);
i18next.addResourceBundle('tr', 'workingProjectPage', tr);
i18next.addResourceBundle('ar', 'workingProjectPage', ar);

const WorkingProject = lazy(() => import('./WorkingProject'));
const PqlOne = lazy(() => import('./Pql1Config'));
const PqlTwo = lazy(() => import('./Pql2Config'));
const PqlThree = lazy(() => import('./Pql3Config'));

const WorkingProjectRoute = [
    {
        path: 'working-project',
        element: <WorkingProject />,
        children: [
            {
                path: '/working-project/pql1',
                element: <PqlOne />
            },
            {
                path: '/working-project/pql2',
                element: <PqlTwo />
            },
            {
                path: '/working-project/pql3',
                element: <PqlThree />
            }
        ]
    }
];

export default WorkingProjectRoute;
