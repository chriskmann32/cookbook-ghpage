import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Homepage from './pages/Homepage';
import Ingredients from './pages/Ingredients';
import Instructions from './pages/Instructions';
import Navigation from './pages/Navigation';
import {useState} from 'react'

const [ids, setIds] = useState<String[]>();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
