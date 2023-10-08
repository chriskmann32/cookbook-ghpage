import './App.css';
import React from 'react';
import Homepage from './pages/Homepage';
import Ingredients from './pages/Ingredients';
import Instructions from './pages/Instructions';
import Navigation from './pages/Navigation';
import { Recipe } from './csv/recipe';
import { Ingredient } from './csv/ingredient';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {useState} from 'react'
import DefaultPage from './pages/DefaultPage';

function App() {
  const [ids, setIds] = useState<String[]>();
  const [recipes, setRecipes] = useState<Recipe[]>();
  const [ingredients, setIngredients] = useState<Ingredient[]>();

  return (
    <React.Fragment>
      <Navigation />
      <HashRouter>
        <Routes>
          <Route path='/' element={<DefaultPage/>}></Route>
          <Route path='/homepage' element={<Homepage setIds={setIds} recipes={recipes} setRecipes={setRecipes}/>}></Route>
          <Route path='/ingredients' element={<Ingredients ids={ids} ingredients={ingredients} setIngredients={setIngredients}/>}></Route>
          <Route path='/instructions' element={<Instructions/>}></Route>
        </Routes>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
