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
import { Instruction } from './csv/instruction';

function App() {
  const [selectedId, setSelectedId] = useState<Number>(-99);
  const [recipes, setRecipes] = useState<Recipe[]>();
  const [ingredients, setIngredients] = useState<Ingredient[]>();
  const [instructions, setInstructions] = useState<Instruction[]>();

  return (
    <React.Fragment>
      <Navigation />
      <HashRouter>
        <Routes>
          <Route path='/' element={<DefaultPage/>}></Route>
          <Route path='/homepage' element={<Homepage setIds={setSelectedId} recipes={recipes} setRecipes={setRecipes} selectedId={selectedId}/>}></Route>
          <Route path='/ingredients' element={<Ingredients selectedId={selectedId} ingredients={ingredients} setIngredients={setIngredients}/>}></Route>
          <Route path='/instructions' element={<Instructions selectedId={selectedId} instructions={instructions} setInstructions={setInstructions}/>}></Route>
        </Routes>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
