import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
// import bg from "./assets/"

const App = () => {
  return (
    <div className="bg-[url('./assets/BG_LOGO_BLACK.png')] bg-contain">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
      </Routes>
    </div>
  )
}

export default App