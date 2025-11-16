import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import FavoriteButton from './FavoriteButton';

export default function FavoritesList() {
  const { recipes, favorites } = useRecipeStore();

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  if (favoriteRecipes.length === 0) {
    return null; // Hide if empty
  }

  return (
    <div className="section favorites-list">
      <h2>My Favorites ({favoriteRecipes.length})</h2>
      <div className="grid">
        {favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <div className="card-header">
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <FavoriteButton recipeId={recipe.id} />
            </div>
            <p>{recipe.description.slice(0, 100)}...</p>
            <Link to={`/recipe/${recipe.id}`} className="link">
              View →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}