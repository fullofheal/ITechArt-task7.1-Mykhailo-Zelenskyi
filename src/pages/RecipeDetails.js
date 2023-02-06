import { Link } from "react-router-dom";
import addRecipeActions from '../store/actions/addRecipeActions';
import EditForm from "../components/editForm/EditForm";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const RecipeDetails = () => {

    const {details} = useSelector(state => state.detailsReducer)
    const [editDetails, setEditDetails] = useState(details);

    useEffect(() => {
        setEditDetails(details)
    }, [details])

    return (<>
                <h2>Check the preparation instruction, and edit the content if needed</h2>
                <EditForm recipeDetails={editDetails}/>
    </>
        
    )
}

export default RecipeDetails;