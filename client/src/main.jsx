import React from 'react';
import { createRoot } from 'react-dom'; 
import App from './App.jsx';
import './index.css';
import store from './features/store.jsx';
import { Provider } from'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
     <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
  </Provider>
 
    
  </React.StrictMode>
);
