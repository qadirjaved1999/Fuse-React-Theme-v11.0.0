import { lazy } from "react";

const PCMPage = lazy(() => import('./PCMPage'))

const PCMPageRoute = {
    path: 'pcm',
    element: <PCMPage />
}

export default PCMPageRoute;