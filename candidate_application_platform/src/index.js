import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
// provide the client id when u are supposing it to start

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>    
    <GoogleOAuthProvider clientId="">
    <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
  
  </React.StrictMode>
);
