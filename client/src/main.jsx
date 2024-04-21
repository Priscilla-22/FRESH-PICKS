import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
   </BrowserRouter>

    <ToastContainer />
  </React.StrictMode>
);
