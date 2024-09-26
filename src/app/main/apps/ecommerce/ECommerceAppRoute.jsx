import { lazy } from "react"
import { Navigate } from "react-router"

const ECommerceApp = lazy(() => import('./ECommerceApp'))

const ECommerceAppRoute = {
    path: 'app/ecommerce',
    element: <ECommerceApp />,
    children: [
       {
         path: '',
         element: <Navigate to="products"/>
       }
    ]
}

export default ECommerceAppRoute;