import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Homepage from './pages/Homepage';
import Ingredients from './pages/Ingredients';
import Instructions from './pages/Instructions';
import Navigation from './pages/Navigation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navigation />
    <HashRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/homepage' element={<Homepage/>}></Route>
        <Route path='/ingredients' element={<Ingredients/>}></Route>
        <Route path='/instructions' element={<Instructions/>}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
