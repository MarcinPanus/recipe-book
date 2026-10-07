import RecipeList from "../components/RecipeList";

const HomePage = () => {
  return (
    <>
      <header>
        <h1>Recipe Book</h1>
        <button>Add recipe</button>
      </header>
      <RecipeList />
    </>
  );
};

export default HomePage;
