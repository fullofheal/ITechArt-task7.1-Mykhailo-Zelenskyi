import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RecipesActions from "../../store/actions/actions";
import { useHttp } from "../../hooks/http.hook";
import './recipesList.scss';

const RecipesList = () => {

    const {recipesList} = useSelector(state => state.localRecipesReducer);
    const dispatch = useDispatch();

    const recipes = () => {
        return recipesList.map((recipe, i) => {
            return (
                <div 
                    className="recipes__item"
                    key={recipe.id + i}>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                    <h3>{recipe.name}</h3>
                    <h4>{recipe.instructions}</h4>
                    <div className="recipes__ingredients">
                        {recipe.ingredients.map((item, i) => {
                            return <div 
                                        className="recipes__ingredient"
                                        key={item[0]+i}>
                                        <div>{item[0]}</div>
                                        <div>{item[1]}</div>
                                    </div>
                        })}
                    </div>
                    <button>View details / edit recipe</button>
                </div>
            )
        })
    }

    return (
        <div className="recipes__list">
            {recipesList.length > 0 && recipes()}
        </div>
    )
}

export default RecipesList;
