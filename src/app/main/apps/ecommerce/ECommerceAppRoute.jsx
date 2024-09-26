import { lazy } from "react"
import { Navigate } from "react-router"

const ECommerceApp = lazy(() => import('./ECommerceApp'));
const Product = lazy(() => ('./product/Product'));
const Products = lazy(() => import('./products/Products'));

const ECommerceAppRoute = {
  path: 'apps/e-commerce/',
  element: <ECommerceApp />,
  children: [
    {
      path: '',
      element: <Navigate to="products" />
    },
    {
      path: 'products',
      children: [
        {
          path: '',
          element:<Products />
        },
        {
					path: ':productId/:handle?',
					element: <Product />
				}

      ]
    }
  ]
}

export default ECommerceAppRoute;