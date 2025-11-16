import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';
import FavoriteButton from './FavoriteButton';

export default function RecommendationsList() {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="section recommendations">
      <h2>Recommended for You</h2>
      <div className="grid">
        {recommendations.map((recipe) => (
          <div key={recipe.id} className="card">
            <div className="card-header">
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <FavoriteButton recipeId={recipe.id} />
            </div>
            <p>{recipe.description.slice(0, 100)}...</p>
            <Link to={`/recipe/${recipe.id}`} className="link">
              Try it →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}