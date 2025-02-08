import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      
    </Routes>
  </BrowserRouter>
=======
import { AuthContextProvider } from './context/AuthContext.jsx'
import { AppContextProvider } from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> 5464502 (added verification during signup and forgot password and reset password features)
)
