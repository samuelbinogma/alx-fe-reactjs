import { useRecipeStore } from './recipeStore';

export default function SearchBar() {
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search by recipe name..."
      className="search-input"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}