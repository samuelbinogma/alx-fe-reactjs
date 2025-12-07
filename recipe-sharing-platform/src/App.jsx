// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import HomePage from './components/HomePage';
import RecipeDetailPage from './components/RecipeDetail';
import AddRecipePage from './pages/AddRecipePage';

// Optional: Navbar & Footer (you can create these later)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // Load recipes from localStorage on first mount
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem('recipes');
    if (saved) {
      return JSON.parse(saved);
    }
    // Default fallback recipes if nothing in localStorage
    return [
      {
        id: 1,
        title: 'Classic Margherita Pizza',
        image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800',
        cookingTime: 20,
        servings: 4,
        ingredients: ['Pizza dough', 'Tomato sauce', 'Fresh mozzarella', 'Basil leaves', 'Olive oil'],
        instructions: '1. Preheat oven to 475°F...\n2. Roll out dough...\n3. Add sauce and cheese...\n4. Bake 12-15 minutes...',
        category: 'Italian',
        likes: 42
      },
      {
        id: 2,
        title: 'Chocolate Chip Cookies',
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800',
        cookingTime: 30,
        servings: 24,
        ingredients: ['2 ¼ cups flour', '1 tsp baking soda', '1 cup butter', '¾ cup sugar', '¾ cup brown sugar', '2 eggs', '2 cups chocolate chips'],
        instructions: '1. Preheat oven to 375°F...\n2. Cream butter and sugars...\n3. Add eggs and vanilla...\n4. Mix in dry ingredients...\n5. Drop onto baking sheet...\n6. Bake 9-11 minutes...',
        category: 'Dessert',
        likes: 89
      }
    ];
  });

  // Save to localStorage whenever recipes change
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar (optional — create later if you want) */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage recipes={recipes} setRecipes={setRecipes} />}
            />
            <Route
              path="/recipe/:id"
              element={<RecipeDetailPage recipes={recipes} setRecipes={setRecipes} />}
            />
            <Route
              path="/add-recipe"
              element={<AddRecipePage recipes={recipes} setRecipes={setRecipes} />}
            />
            {/* Redirect any unknown route to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer (optional) */}
        <Footer />

        {/* Floating Add Button - Visible on all pages */}
        <button
          onClick={() => window.location.href = '/add-recipe'}
          className="fixed bottom-6 right-6 z-50 bg-orange-600 hover:bg-orange-700 text-white rounded-full p-4 shadow-2xl transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300"
          aria-label="Add new recipe"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </Router>
  );
}

export default App;