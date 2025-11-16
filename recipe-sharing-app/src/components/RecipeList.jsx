import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes yet. Add one above!</p>;
  }

  return (
    <div className="recipe-list">
      <h2>Your Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h3><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h3>
          <p>
            {recipe.description > 150 ? `${recipe.description.slice(0, 150)}...`
            : recipe.description}
            </p>
            <Link to={`/recipe/${recipe.id}`} className="view-link">View details →</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;