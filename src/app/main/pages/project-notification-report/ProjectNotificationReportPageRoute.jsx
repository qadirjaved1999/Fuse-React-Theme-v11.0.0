import { lazy } from "react"

const ProjectNotificationReportPage = lazy(() => import('./ProjectNotificationReportPage'))

const ProjectNotificationReportPageRoute = {
    path: 'project-notification-report',
    element: <ProjectNotificationReportPage />
}

export default ProjectNotificationReportPageRoute;