import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Abouts from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/Signup'
import Projects from './pages/Projects'

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} /> {/*Route is self closing*/}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<Abouts />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App