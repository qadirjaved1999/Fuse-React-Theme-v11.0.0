import { lazy } from "react";

const GreenDataSheetPage = lazy(() => import('./GreenDataSheetPage'));
const GreenDataSheetPageRoute = {
    path: '/gds',
    element: <GreenDataSheetPage />
}

export default GreenDataSheetPageRoute;