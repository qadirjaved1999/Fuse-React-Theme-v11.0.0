import { lazy } from "react";

const QuickCheckMethodologyPage = lazy(() => import('./QuickCheckMethodologyPage'));

const QuickCheckMethodologyPageRoute = {
    path: 'qcm',
    element: <QuickCheckMethodologyPage />
}

export default QuickCheckMethodologyPageRoute;