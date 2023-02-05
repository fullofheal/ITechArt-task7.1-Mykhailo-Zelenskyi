const initialState = {
    recipesList: [],
    loading: false,
    error: null
};

function localRecipesReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_LOCAL': 
            return {
                ...state,
                recipesList: [...state.recipesList, action.payload]
            };
        default:
            return state;
    }
    
}

export default localRecipesReducer;