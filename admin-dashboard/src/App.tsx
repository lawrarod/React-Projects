import { Layout } from './pages/layout/Layout.tsx'
import { Home } from './pages/home/Home'
import { Products } from './pages/products/Products'
import { Users } from './pages/users/Users'
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
        }

      ]
    },

  ]);


  return (

    <RouterProvider router={router} />

  )
}

export default App
