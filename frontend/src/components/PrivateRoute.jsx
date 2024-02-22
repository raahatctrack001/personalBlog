import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import { Outlet } from 'react-router-dom';
const PrivateRoute = () => {
  const {currentUser} = useSelector(state=>state.user);
  return (
    currentUser ? <Outlet /> : <SignIn />
  )
}

export default PrivateRoute