import { useState } from 'react'
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
//import TaskDetails from './pages/TaskDetails';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AuthenticationGuard from './components/AuthenticationGuard';
import './App.css'

function App() {
  
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/dashboard' element={<AuthenticationGuard component={Dashboard}/>} />
        <Route path='/profile' element={<AuthenticationGuard component={Profile} />} />
       {/* <Route path='/details' element={<AuthenticationGuard component={TaskDetails} />} />*/} 
      </Routes>
      
    </div>
  )
}

export default App
