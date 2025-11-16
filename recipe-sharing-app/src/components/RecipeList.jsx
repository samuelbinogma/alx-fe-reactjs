// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';
import FavoriteButton from './FavoriteButton';

export default function RecipeList() {
  const { filteredRecipes, searchTerm, selectedIngredients, maxPrepTime } =
    useRecipeStore();

  // Recompute filtered recipes whenever filters change
  useEffect(() => {
    // Trigger recompute by accessing the getter
    useRecipeStore.getState().filteredRecipes();
  }, [searchTerm, selectedIngredients, maxPrepTime]);

  const recipesToShow = useRecipeStore((s) => s.filteredRecipes());

  if (recipesToShow.length === 0) {
    return <p className="empty">No recipes match your filters.</p>;
  }

  return (
    <div className="section">
      <h2>Recipes ({recipesToShow.length})</h2>
      {recipesToShow.map((r) => (
        <div key={r.id} className="card">
          <h3>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link>
          </h3>
          <p>{r.description.slice(0, 120)}...</p>
          <div className="meta">
            <small>
              {r.prepTime ? `${r.prepTime} mins` : 'No time'} •{' '}
              {r.ingredients?.length || 0} ingredients
            </small>
          </div>
          <Link to={`/recipe/${r.id}`} className="link">
            View →
          </Link>
            <div className="card-header">
            <h3>
                <Link to={`/recipe/${r.id}`}>{r.title}</Link>
            </h3>
            <FavoriteButton recipeId={r.id} />
            </div>
        </div>
      ))}
    </div>
  );
}