import type { Recipe } from "../types/recipe";

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <span>{recipe.cookingTime}</span>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
