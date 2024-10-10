import { lazy } from "react";
const InternalEvaluationPage = lazy(() => import('./InternalEvaluationPage'))

const InternalEvaluationPageRoute = {
    path: 'internal-evaluation-form',
    element: <InternalEvaluationPage />
}

export default InternalEvaluationPageRoute;