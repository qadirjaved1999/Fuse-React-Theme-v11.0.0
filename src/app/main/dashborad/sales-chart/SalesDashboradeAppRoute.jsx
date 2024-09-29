import { lazy } from "react"

const SalesDashboradeApp = lazy(() => import('./SalesDashboradeApp.jsx'));

const SalesDashboradeAppRoute = {
 path: 'dashboards/sale-chart',
 element: <SalesDashboradeApp />
}

export default SalesDashboradeAppRoute;