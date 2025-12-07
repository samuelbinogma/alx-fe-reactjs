// src/pages/AddRecipePage.jsx
import AddRecipeForm from '../components/AddRecipeForm';
import { useNavigate } from 'react-router-dom';

const AddRecipePage = ({ recipes, setRecipes }) => {
    const navigate = useNavigate();

    const handleAddRecipe = (newRecipe) => {
        const updatedRecipes = [...recipes, newRecipe];
        setRecipes(updatedRecipes);
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <AddRecipeForm onAddRecipe={handleAddRecipe} />
        </div>
    );
};

export default AddRecipePage;