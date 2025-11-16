import { useRecipeStore } from './recipeStore';

function FavoriteButton({ recipeId }) {
  const { favorites, toggleFavorite } = useRecipeStore();
  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() => toggleFavorite(recipeId)}
      className={`favorite-btn ${isFavorite ? 'active' : ''}`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? '❤️' : '♡'}
    </button>
  );
}

export default FavoriteButton