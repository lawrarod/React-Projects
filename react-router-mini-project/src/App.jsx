import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './routes/components/NavBar'
import { HomePage } from './routes/HomePage.jsx'
import { AboutPage } from './routes/AboutPage.jsx'
import { ContactPage } from './routes/ContactPage.jsx'
import { UserProvider } from './routes/context/UserProvider.jsx'
import { LoginPage } from './routes/LoginPage.jsx'


export const App = () => {
  return (
    <UserProvider>
      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/*' element={<Navigate to='/' />}></Route>
      </Routes>
    </UserProvider>
  )
}
