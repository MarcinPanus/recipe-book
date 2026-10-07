import type { Recipe } from "../types/recipe";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const recipes: Recipe[] = [
    {
      _id: "1",
      title: "Spaghetti Carbonara",
      description: "Klasyczne włoskie spaghetti z jajkiem, serem i boczkiem.",
      ingredients: ["200 g spaghetti", "100 g boczku", "2 jajka", "50 g parmezanu", "Sól", "Pieprz"],
      instructions: "Ugotuj makaron. Podsmaż boczek. Wymieszaj jajka z parmezanem. Połącz wszystko z gorącym makaronem.",
      cookingTime: 20,
    },
    {
      _id: "2",
      title: "Kurczak curry",
      description: "Aromatyczny kurczak w kremowym sosie curry.",
      ingredients: ["300 g piersi z kurczaka", "1 cebula", "2 łyżki curry", "200 ml mleczka kokosowego", "Sól", "Pieprz"],
      instructions: "Pokrój kurczaka i cebulę. Podsmaż cebulę, dodaj kurczaka i curry. Zalej mleczkiem kokosowym i gotuj przez kilka minut.",
      cookingTime: 30,
    },
  ];

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe._id}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
