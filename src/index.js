import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CurrentPlanetProvider } from './context/CurrentPlanetContext'

ReactDOM.render(
  <React.StrictMode>
    <CurrentPlanetProvider>
      <App />
    </CurrentPlanetProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
