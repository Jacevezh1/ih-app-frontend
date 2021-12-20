



const reducer = (globalState, action) => {

	switch (action.type) {

		case "GET_SAUCE":
		case "UPDATE_SAUCE":
			return {
				...globalState,
				singleSauce: action.payload
			}
		
		
		
		case "GET_SAUCES":
			return {
				...globalState,
				sauces: action.payload
			}

		default:
			return globalState

	}

}

export default reducer 