// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState('');
  const [prepTime, setPrepTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addRecipe({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      ingredients,
      prepTime: prepTime ? Number(prepTime) : null,
    });

    setTitle('');
    setDescription('');
    setIngredients([]);
    setIngredientInput('');
    setPrepTime('');
  };

  const addIngredient = (e) => {
    if (e.key === 'Enter' && ingredientInput.trim()) {
      setIngredients([...ingredients, ingredientInput.trim()]);
      setIngredientInput('');
    }
  };

  return (
    <div className="section">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Prep time (mins)"
          type="number"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
        />
        <input
          placeholder="Add ingredient (press Enter)"
          value={ingredientInput}
          onKeyDown={addIngredient}
          onChange={(e) => setIngredientInput(e.target.value)}
        />
        <div className="tags">
          {ingredients.map((ing, i) => (
            <span key={i} className="tag">
              {ing}
            </span>
          ))}
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}