import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import App from "./App";
import './assets/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
