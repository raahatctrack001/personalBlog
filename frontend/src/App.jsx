import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Abouts from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/Signup'
import Projects from './pages/Projects'
import Headers from './components/Headers'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter >
      <Headers />
      <Routes>
        <Route path='/' element={<Home />} /> {/*Route is self closing*/}
        <Route element={<PrivateRoute />} >
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/about' element={<Abouts />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App