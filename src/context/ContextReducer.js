export default (state, action) => {
	switch (action.type) {
		// Edit a single state property
		case 'EDIT_CONTEXT':
			return {
				...state,
				[action.key]: action.payload,
			};
		case 'SORT_DATA':
			const sortedData = [...state.userDataEdited];
			if (action.order === 'asc') {
				sortedData.sort((a, b) => {
					if (a[action.key] < b[action.key]) {
						return -1;
					}
					if (a[action.key] > b[action.key]) {
						return 1;
					}
					return 0;
				});
			} else {
				sortedData.sort((a, b) => {
					if (b[action.key] < a[action.key]) {
						return -1;
					}
					if (b[action.key] > a[action.key]) {
						return 1;
					}
					return 0;
				});
			}
			return {
				...state,
				userDataEdited: sortedData,
			};
		default:
			return state;
	}
};
