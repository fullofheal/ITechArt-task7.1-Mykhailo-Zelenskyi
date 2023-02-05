import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EditForm from "../editForm/EditForm";

const AddRecipe = () => {

    const recipeDetails = useSelector(state => state.addRecipeReducer.details);
    const [newRecipeDetails, setNewRecipeDetails] = useState({
        id: '',
        country: '',
        category: '',
        instructions: '',
        name: '',
        tags: '',
        ingredients: []
    });

    useEffect(() => {
        if (recipeDetails) {
            const ingredients = Object.entries(recipeDetails).filter(item => {
                return item[0].startsWith('strIngredient') && item[1]
            });
            const measures = Object.entries(recipeDetails).filter(item => {
                return item[0].startsWith('strMeasure') && item[1]
            });

            const combined = ingredients.map((item, i) => {
                return [item[1], measures[i][1]]
            })

            setNewRecipeDetails({
                id: recipeDetails.idMeal,
                country: recipeDetails.strArea,
                category: recipeDetails.strCategory,
                instructions: recipeDetails.strInstructions,
                name: recipeDetails.strMeal,
                tags: recipeDetails.strTags,
                ingredients: combined
            })
        }
    }, [recipeDetails]);

    return (
        <div>
            {recipeDetails && <EditForm recipeDetails={newRecipeDetails}/>}
        </div>
    )
}

export default AddRecipe;