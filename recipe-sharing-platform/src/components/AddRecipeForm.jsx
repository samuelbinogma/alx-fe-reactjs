import { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        cookingTime: '',
        servings: '',
        imageURL: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.title.trim()) newErrors.title = 'Recipe title is required';
        if (!formData.ingredients.trim()) newErrors.ingredients = 'Please enter at least one ingredient';
        if (!formData.instructions.trim()) newErrors.instructions = 'Preparation steps are required';
        if (!formData.cookingTime || formData.cookingTime < 1) newErrors.cookingTime = 'Cooking time must be at least 1 minute';
        if (!formData.servings || formData.servings < 1) newErrors.servings = 'Servings must be at least 1';

        const ingredientList = formData.ingredients.trim().split('\n').filter(item => item.trim());
        if (ingredientList.length < 2) {
            newErrors.ingredients = 'Please enter at least 2 ingredients (one per line)';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        // convert ingredients to Array
        const ingredientArray = form.Data.ingredients
            .trim()
            .split('\n')
            .map(item => item.trim())
            .filter(item => item);
        
        const newRecipe = {
            id: Date.now(),
            title: formData.title.trim(),
            image: formData.imageUrl || 'https://via.placeholder.com/400x300?text=No+Image',
            cookingTime: parseInt(formData.cookingTime),
            servings: parseInt(formData.servings),
            ingredients: ingredientArray,
            instructions: formData.instructions.trim(),
            category: 'Other',
            likes: 0
        };

        onAddRecipe(newRecipe);

        // Reset form
        setFormData({
            title: '',
            ingredients: '',
            instructions: '',
            cookingTime: '',
            servings: '',
            imageUrl: ''
        });
        setErrors({});
        alert('Recipe Added Successfully!');
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
                Share Your Recipe
            </h1>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
                {/* Recipe Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Recipe Title <span className="text-red-500">*</span>
                    </label>
                    <input type="text"
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        placeholder='e.g., Creamy Garlic Pasta'
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition ${
                            errors.title ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
                </div>

                {/* Image URL (optional) */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image URL <span className="text-gray-500">(optional)</span>
                    </label>
                    <input type="url"
                        name='imageUrl'
                        value={formData.imageUrl}
                        onChange={handleChange}
                        placeholder='https://example.com/delicious-pasta.jpg'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition'
                    />
                </div>

                {/* Cooking Time & Servings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cooking Time (minutes) <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            name="cookingTime"
                            value={formData.cookingTime}
                            onChange={handleChange}
                            min="1"
                            placeholder="30"
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition ${
                                errors.cookingTime ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.cookingTime && <p className="mt-1 text-sm text-red-600">{errors.cookingTime}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Servings <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            name="servings"
                            value={formData.servings}
                            onChange={handleChange}
                            min="1"
                            placeholder="4"
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition ${
                                errors.servings ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.servings && <p className="mt-1 text-sm text-red-600">{errors.servings}</p>}
                    </div>
                </div>

                {/* Ingredients */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ingredients <span className="text-red-500">*</span>
                        <span className="text-gray-500 text-xs block">One ingredient per line</span>
                    </label>
                    <textarea
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                        rows="6"
                        placeholder="2 cups all-purpose flour&#10;1 tsp salt&#10;3 eggs&#10;1 tbsp olive oil"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none ${
                            errors.ingredients ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.ingredients && <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>}
                </div>

                {/* Instructions */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preparation Steps <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleChange}
                        rows="8"
                        placeholder="1. Preheat oven to 180°C...&#10;2. Mix dry ingredients...&#10;3. Bake for 25 minutes..."
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none ${
                            errors.instructions ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.instructions && <p className="mt-1 text-sm text-red-600">{errors.instructions}</p>}
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-4 bg-orange-600 
                        hover:bg-orange-700 text-white font-semibold rounded-lg shadow-md 
                        transition transform hover:scale-105"
                    >
                        Add Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipeForm;