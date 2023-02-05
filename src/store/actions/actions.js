
const RecipesActions = {
	recipeFetching: () => {
		return {
			type: 'RECIPE_FETCHING'
		}
	},
	recipeFetched: (data) => {
		return {
			type: 'RECIPE_FETCHED',
			payload: data
		}
	},
	recipeFetchingError: (error) => {
		return {
			type: 'RECIPE_FETCHING_ERROR',
			payload: error
		}
	}
}

export default RecipesActions;