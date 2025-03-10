// script.js
document.getElementById('recipeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const diet = document.getElementById('diet').value;
    const ingredients = document.getElementById('ingredients').value;
  
    try {
      const response = await fetch(`/api/recipes?diet=${encodeURIComponent(diet)}&ingredients=${encodeURIComponent(ingredients)}`);
      const data = await response.json();
  
      displayRecipes(data.results || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      document.getElementById('recipes').innerText = 'Sorry, there was an error fetching recipes.';
    }
  });
  
  function displayRecipes(recipes) {
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = '';
  
    if (recipes.length === 0) {
      recipesDiv.innerText = 'No recipes found. Please try different inputs.';
      return;
    }
  
    recipes.forEach(recipe => {
      const recipeEl = document.createElement('div');
      recipeEl.className = 'recipe';
      recipeEl.innerHTML = `<h3>${recipe.title}</h3>
                            <p>Recipe ID: ${recipe.id}</p>`;
      recipesDiv.appendChild(recipeEl);
    });
  }
  