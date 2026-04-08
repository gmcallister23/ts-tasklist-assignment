import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  
  return (
    <div>
      {/* Add routing for login */}
      {/* Add routing for registration */}
      <Dashboard /> {/*add protected routing */}
      {/*add protected routing for profile */}


    </div>
  )
}

export default App
