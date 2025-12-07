import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../data.json';
import { ArrowLeft, Clock, Users } from 'lucide-react';

export default function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const found = data.find(r => r.id === parseInt(id));
        setRecipe(found);
    }, [id]);

    if (!recipe) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <p className='text-center text-xl text-gray-600'>Recipe not found</p>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-gray-50 py-8 px-4'>
            <div className='max-w-5xl mx-auto'>

                <Link to="/"
                className='inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 font-medium'>
                    <ArrowLeft size={20} />
                    Back to Recipes
                </Link>

                {/* Hero Section */}
                <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
                    <img src={recipe.image} 
                        alt={recipe.title}
                        className='w-full h-96 object-cover"'
                    />
                    <div className="p-8 lg:p-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {recipe.title}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {recipe.summary}
                        </p>

                        {/* Info Card */}
                        <div className="flex flex-wrap gap-6 mb-10">
                            <div className="flex items-center gap-3 bg-orange-50 px-6 py-4 rounded-xl">
                                <Clock className="text-orange-600" />
                                <div>
                                    <p className="text-sm text-gray-600">Cooking Time</p>
                                    <p className="font-bold text-lg">{recipe.cookingTime}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-orange-50 px-6 py-4 rounded-xl">
                                <Users className="text-orange-600" />
                                <div>
                                    <p className="text-sm text-gray-600">Serves</p>
                                    <p className="font-bold text-lg">{recipe.servings}</p>
                                </div>
                            </div>
                        </div>

                        {/* Ingredients */}
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ingredients</h2>
                                <ul className="space-y-3">
                                    {recipe.ingredients.map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-lg">
                                            <span className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Intructions */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Instructions</h2>
                                <ol className="space-y-5">
                                    {recipe.instructions.map((step, index) =>(
                                        <li key={index} className="flex gap-4">
                                            <span className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                                                {index + 1}
                                            </span>
                                            <p className="text-gray-700 text-lg leading-relaxed pt-1.5">{step}</p>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}