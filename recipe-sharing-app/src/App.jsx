import { useState } from 'react';
import { create } from 'zustand';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css'

function App() {
  return (
    <>
      <div className="app-container">
        <header>
          <h1>Recipe Sharing App</h1>
        </header>

        <main>
          <AddRecipeForm />
          <RecipeList />
        </main>
      </div>
    </>
  )
}

export default App
