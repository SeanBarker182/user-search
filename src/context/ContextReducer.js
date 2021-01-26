export default (state, action) => {
	switch (action.type) {
		// Edit a single state property
		case 'EDIT_CONTEXT':
			return {
				...state,
				[action.key]: action.payload,
			};
		default:
			return state;
	}
};
