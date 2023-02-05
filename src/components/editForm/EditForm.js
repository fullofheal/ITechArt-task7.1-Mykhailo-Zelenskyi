import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import addRecipeActions from "../../store/actions/addRecipeActions";
import './editForm.scss';

const EditForm = (props) => {

    const {recipeDetails} = props;

    const [details, setDetails] = useState(recipeDetails);

    const dispatch = useDispatch();

    useEffect(() => {
        setDetails(recipeDetails);
    }, [recipeDetails])

    const addIngredient = () => {
        setDetails({
            ...details,
            ingredients: [...details.ingredients, ['', '']]
        })
    }

    const deleteIngredient = (i) => {
        const filteredIngredients = details.ingredients.filter((item, index) => index !== i);
        setDetails({
            ...details,
            ingredients: filteredIngredients
        })
    }

    const submitRecipe = (e) => {
        e.preventDefault();
        dispatch(addRecipeActions.addToLocal(details));
        console.log(e, details)
    }

    const ingredientsList = (ingredients) => {
        return ingredients.map((ingredient, i) => {
            return <div key={`ingredient${i+1}`}>
                <input 
                    required 
                    type="text"
                    name={ingredient[0]}
                    placeholder="enter ingredient name"
                    value={details.ingredients.find((item, index) => index === i)[0]}
                    onChange={(e) => {
                        setDetails({
                            ...details,
                            ingredients: details.ingredients.map((item, index) => {
                                if (index === i) {
                                    return [e.target.value, item[1]]
                                }
                                return item
                            })
                        })
                    }} />
                <input 
                    type="text" 
                    name={ingredient[0]} 
                    placeholder="enter the measure" 
                    value={details.ingredients.find((item, index) => index === i)[1]}
                    onChange={(e) => {
                        setDetails({
                            ...details,
                            ingredients: details.ingredients.map((item, index) => {
                                if (index === i) {
                                    return [item[0], e.target.value]
                                }
                                return item
                            })
                        })
                    }} />
                <button type="button" onClick={() => deleteIngredient(i)}>
                    Remove
                </button>
            </div>
        })
    }

    return (
        <form 
            className="form"
            onSubmit={(e) => submitRecipe(e)}>
            <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal}/>
            <label className="form__label" htmlFor="name">Name</label>
            <input 
                required 
                type="text" 
                name='name' 
                value={details.name}
                onChange={(e) => {
                    setDetails({
                        ...details,
                        name: e.target.value
                    })
                }}/>
            <label className="form__label" htmlFor="instructions">Instructions</label>
            <textarea 
                required
                className="form__instructions"
                name='instructions' 
                value={details.instructions}
                onChange={(e) => {
                    setDetails({
                        ...details,
                        instructions: e.target.value
                    })
                }}/>
            <div className="add-form__ingredients">
                {details.ingredients.length > 0 ? ingredientsList(details.ingredients) : ''}
                <button 
                    type="button" 
                    onClick={() => addIngredient()}>
                    Add new ingredient
                </button>
            </div>
            <button type="submit">Submit recipe</button>
        </form>
    )
}

export default EditForm;