import AddRecipe from "../../components/addRecipe/AddRecipe";
import SearchRecipes from "../../components/searchRecipes/SearchRecipes";
import RecipesList from "../../components/recipesList/RecipesList";
import './recipesMain.scss';

const RecipesMain = () => {

    return <div className="main__wrapper">
        <RecipesList/>
        <SearchRecipes/>
        <AddRecipe/>
    </div>
}

export default RecipesMain;