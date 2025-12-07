import { useState, useEffect } from 'react';
import data from '../data.json';

function RecipeCard({ recipe }) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{recipe.summary}</p>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition">
                View Recipe
                </button>
            </div>
        </div>
    );
}

export default function HomePage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    // Small delay to simulate loading (optional)
    setTimeout(() => {
        setRecipes(data);
        setLoading(false);
        }, 300);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Delicious Recipes
                </h1>
                <p className="text-lg text-gray-600">
                    Discover and share amazing recipes from around the world
                </p>
                </div>

                {/* Loading State */}
                {loading ? (
                <div className="text-center py-20">
                    <div className="inline-block animate-spin w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full"></div>
                    <p className="mt-4 text-gray-600">Loading delicious recipes...</p>
                </div>
                ) : (
                /* Responsive Grid */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
                )}
            </div>
        </div>
    );
}