import React from 'react';
import ReactDOM from 'react-dom/client'; // Importar createRoot do react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Usar createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
