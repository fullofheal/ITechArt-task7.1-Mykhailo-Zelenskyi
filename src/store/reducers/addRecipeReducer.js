const initialState = {
    details: '',
    id: '',
    loading: false,
    error: null
};

function addRecipeReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_FETCHING': 
            return {
                ...state,
                loading: true
            };
        case 'ADD_FETCHED': 
            return {
                ...state,
                details: action.payload,
                loading: false
            };
        case 'ADD_FETCHING_ERROR': 
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
    
}

export default addRecipeReducer;