import { createRoot } from 'react-dom/client'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {AuthContextProvider} from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <BrowserRouter>
         <AuthContextProvider>
           <App/>
         </AuthContextProvider>
       </BrowserRouter>
     </React.StrictMode>
)
