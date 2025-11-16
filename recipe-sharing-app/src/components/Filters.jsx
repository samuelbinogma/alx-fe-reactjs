import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

export default function Filters() {
  const [ingredientInput, setIngredientInput] = useState('');
  const { selectedIngredients, setSelectedIngredients, setMaxPrepTime } =
    useRecipeStore();

  const addIngredient = (e) => {
    if (e.key === 'Enter' && ingredientInput.trim()) {
      setSelectedIngredients([...selectedIngredients, ingredientInput.trim()]);
      setIngredientInput('');
    }
  };

  const removeIngredient = (ing) => {
    setSelectedIngredients(selectedIngredients.filter((i) => i !== ing));
  };

  return (
    <div className="filters">
      <div className="filter-group">
        <label>Ingredients (press Enter):</label>
        <input
          type="text"
          placeholder="e.g. chicken, rice"
          value={ingredientInput}
          onChange={(e) => setIngredientInput(e.target.value)}
          onKeyDown={addIngredient}
        />
        <div className="tags">
          {selectedIngredients.map((ing) => (
            <span key={ing} className="tag">
              {ing}
              <button type="button" onClick={() => removeIngredient(ing)}>
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label>Max Prep Time (mins):</label>
        <input
          type="number"
          min="0"
          placeholder="e.g. 30"
          onChange={(e) => setMaxPrepTime(e.target.value ? Number(e.target.value) : null)}
        />
      </div>
    </div>
  );
}