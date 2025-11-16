// src/components/RecipeDetails.jsx
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton';

export default function RecipeDetails() {
  const { id } = useParams();
  const recipeId = Number(id);

  // Validate: if id is not a number → redirect or show error
  if (isNaN(recipeId)) {
    return (
      <div className="section">
        <p>Invalid recipe ID.</p>
        <Link to="/" className="link">Back to recipes</Link>
      </div>
    );
  }

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  // Recipe not found
  if (!recipe) {
    return (
      <div className="section">
        <p>Recipe not found.</p>
        <Link to="/" className="link">Back to recipes</Link>
      </div>
    );
  }

  // SAFE: recipe is guaranteed to exist
  return (
    <div className="section">
      <Link to="/" className="link">Back to list</Link>

      <div className="detail-header">
        <h1>{recipe.title}</h1>
        <FavoriteButton recipeId={recipe.id} />
      </div>

      <div className="description">{recipe.description}</div>

      <div className="meta">
        {recipe.prepTime && <small>Prep: {recipe.prepTime} mins</small>}
        {recipe.ingredients && (
          <small> • {recipe.ingredients.length} ingredients</small>
        )}
      </div>

      <div className="actions">
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      <h2 style={{ marginTop: '2rem' }}>Edit Recipe</h2>
      <EditRecipeForm recipeId={recipe.id} />
    </div>
  );
}