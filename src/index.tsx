import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, Routes, Route, HashRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navigation from './pages/Navigation';
import Ingredients from './pages/Ingredients';
import Instructions from './pages/Instructions';

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
