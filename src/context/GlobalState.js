import React, { createContext, useReducer, useEffect } from 'react';
import ContextReducer from './ContextReducer';

// Initial state
const initialState = {
	currentSort: 1,
	userData: [],
	userDataEdited: [],
};

// Create context
export const AppContext = createContext(initialState);

// Provider component
export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ContextReducer, initialState);

	// Pulls the user data and stores it under our global context
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				editAppContext('userData', data);
				const sortedData = [...data];
				sortedData.sort(function (a, b) {
					if (a.name < b.name) {
						return -1;
					}
					if (a.name > b.name) {
						return 1;
					}
					return 0;
				});
				editAppContext('userDataEdited', sortedData);
			})
			.catch((err) => console.log(err));
	}, []);

	// Actions
	function editAppContext(key, val) {
		dispatch({
			type: 'EDIT_CONTEXT',
			key: key,
			payload: val,
		});
	}
	return (
		<AppContext.Provider
			value={{
				currentSort: state.currentSort,
				userData: state.userData,
				userDataEdited: state.userDataEdited,
				editAppContext,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
