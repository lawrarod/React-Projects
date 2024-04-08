import { HomePage } from './Routes/Homepage/HomePage.jsx'
import { ListPage } from './Routes/ListPage/ListPage.jsx';
import { Layout } from './Routes/Layout/Layout.jsx'
import { SinglePage } from './Routes/Siglepage/SinglePage.jsx';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/list',
          element: <ListPage />
        },
        {
          path: '/:id',
          element: <SinglePage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}


export default App
