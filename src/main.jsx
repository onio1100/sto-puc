import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Checkout from './components/Checkout'
import ProductPage from './components/ProductPage'
import Home from './components/Home'
import ProductsGrid from './components/ProductsGrid'
import { loader as productPageLoader} from "./components/ProductPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: () => {
    //   return redirect("/home/products");
    // },
    errorElement: <ErrorPage />,
    children: [
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: "products",
            element: <ProductsGrid />,
          },
          {
            path: "products/:productId",
            element: <ProductPage />,
            // loader: productPageLoader(),
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)