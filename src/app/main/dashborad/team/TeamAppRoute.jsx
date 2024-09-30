import { lazy } from "react";

const TeamApp = lazy(() => import('./TeamApp'));

const TeamAppRoute = {
    path: 'dashboards/team',
    element: <TeamApp />
}

export default TeamAppRoute;