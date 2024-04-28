import { Layout } from './pages/layout/Layout.tsx'
import { Home } from './pages/home/Home'
import { Products } from './pages/products/Products'
import { Product } from './pages/product/Product'
import { Users } from './pages/users/Users'
import { User } from './pages/user/User.tsx'
import './styles/global.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/users/:id',
          element: <User />
        },
        {
          path: '/products/:id',
          element: <Product />
        }
      ]
    },

  ]);


  return (

    <RouterProvider router={router} />

  )
}

export default App
