import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import store from './features/store.jsx';
import { Provider } from'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
