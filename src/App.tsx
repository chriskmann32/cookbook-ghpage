import './App.css';
import React from 'react';
import Homepage from './pages/Homepage';
import Ingredients from './pages/Ingredients';
import Instructions from './pages/Instructions';
import Navigation from './pages/Navigation';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {useState} from 'react'

function App() {
  const [ids, setIds] = useState<String[]>();
  return (
    <React.Fragment>
      <Navigation />
      <HashRouter>
        <Routes>
          <Route path='/' element={<Homepage setIds={setIds}/>}></Route>
          <Route path='/ingredients' element={<Ingredients ids={ids}/>}></Route>
          <Route path='/instructions' element={<Instructions/>}></Route>
        </Routes>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
