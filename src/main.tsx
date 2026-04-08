import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TasksProvider } from './context/TaskContext'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Auth0Provider
      domain="dev-jbdb3wigqp2omx1c.us.auth0.com"
      clientId="b2epb4zXAKTVrqkCC6UhUXgHI34rbMih"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
    <TasksProvider>
      <App />
    </TasksProvider>
    </Auth0Provider>
    </BrowserRouter>
    
  </StrictMode>,
)
