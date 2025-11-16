import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">← Back to recipes</Link>
      </div>
    );
  }

  return (
    <div className="recipe-details">
      <Link to="/" className="back-link">← Back to recipes</Link>

      <h1>{recipe.title}</h1>

      <div className="recipe-description">
        {recipe.description}
      </div>

      <div className="actions">
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      <h2 style={{ marginTop: '3rem' }}>Edit Recipe</h2>
      <EditRecipeForm recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;