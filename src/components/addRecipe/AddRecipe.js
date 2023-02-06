import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EditForm from "../editForm/EditForm";
import './addRecipe.scss';

const AddRecipe = () => {

    const recipeDetails = useSelector(state => state.addRecipeReducer.details);
    const [newRecipeDetails, setNewRecipeDetails] = useState({
        id: '',
        country: '',
        category: '',
        instructions: '',
        name: '',
        tags: '',
        ingredients: [],
        picture: '',
        video: ''
    });

    useEffect(() => {
        try {
            if (!recipeDetails) {
                return
            } 
            if (recipeDetails && recipeDetails.idMeal) {
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
                    tags: recipeDetails.strTags ? recipeDetails.strTags: '',
                    ingredients: combined,
                    picture: recipeDetails.strMealThumb,
                    video: recipeDetails.strYoutube
                })
            } else {
                setNewRecipeDetails({
                    id: recipeDetails.id,
                    country: recipeDetails.country,
                    category: recipeDetails.category,
                    instructions: recipeDetails.instructions,
                    name: recipeDetails.name,
                    tags: recipeDetails.tags,
                    ingredients: recipeDetails.ingredients,
                    picture: recipeDetails.picture,
                    video: recipeDetails.video
                })
            }
        }
        catch {
            alert('There was an error uploading this recipe. Please refresh the page')
        }
    }, [recipeDetails]);

    return (
        <div className="add__wrapper">
            <h3>Add your own recipe, or edit an uploaded one</h3>
            {recipeDetails && <EditForm recipeDetails={newRecipeDetails}/>}
        </div>
    )
}

export default AddRecipe;