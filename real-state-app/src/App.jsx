import './layout.scss'
import { Navbar } from './Components/Navbar/Navbar.jsx'
import { HomePage } from './Routes/HomePage.jsx'


function App() {

  return (
    <div className='layout'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  )
}

export default App
