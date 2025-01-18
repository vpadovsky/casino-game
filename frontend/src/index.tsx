import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Create the root element
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the app within StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
