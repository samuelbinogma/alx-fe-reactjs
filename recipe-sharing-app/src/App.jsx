import { useState } from 'react';
import { create } from 'zustand';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { Routes, Route, Link } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import './App.css'

function App() {
  return (
    <>
      <div className="app-container">
        <header>
          <h1><Link to="/">Recipe Sharing App</Link></h1>
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <SearchBar />
                <Filters />
                <AddRecipeForm />
                <RecipeList />
              </>
            }/>

            <Route path="/recipe/:id" element={<RecipeDetails />}/>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
