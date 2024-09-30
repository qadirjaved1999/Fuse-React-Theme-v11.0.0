import { lazy } from "react";

const ClimatePoliciesPage  = lazy(() => import('./ClimatePoliciesPages'));
const ClimatePoliciesPageRoute = {
    path: '/giz/climate-policies',
    element: <ClimatePoliciesPage />
}

export default ClimatePoliciesPageRoute;