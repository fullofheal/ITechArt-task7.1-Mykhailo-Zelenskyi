const initialState = {
    details: null,
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
            };
        case 'ADD_BLANK':
            return {
                ...state,
                details: {
                    id: '',
                    country: '',
                    category: '',
                    instructions: '',
                    name: '',
                    tags: '',
                    ingredients: [['','']],
                    picture: '',
                    video: ''
                }
            };
        default:
            return state;
    }
    
}

export default addRecipeReducer;