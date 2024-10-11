import { lazy } from "react";


const ProjectDataSheetApp = lazy(() => import('./ProjectDataSheetApp'));

const ProjectDataSheetAppRoute = {
    path: 'project-data-sheet',
    element: <ProjectDataSheetApp />
}

export default ProjectDataSheetAppRoute;