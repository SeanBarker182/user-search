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
				// Flatten the object and only store the data that we need
				const tableData = [];
				data.forEach((user) => {
					// One of the records starts with Mrs. this checks for that record and
					// verifies that it doesn't store that as the first name
					const splitName = user.name.split(' ');
					const fName = splitName[0] === 'Mrs.' ? splitName[1] : splitName[0];
					const lName = splitName[0] === 'Mrs.' ? splitName[2] : splitName[1];

					tableData.push({
						id: user.id,
						name: user.name,
						fName: fName,
						lName: lName,
						address: `${Math.floor(Math.random() * 9899 + 100)} ${
							user.address.street
						}`,
						geo: user.address.geo,
						email: user.email,
						company: user.company.name,
					});
				});
				editAppContext('userData', tableData);

				// Create a copy of the data for doing mutations and sort it alphabetically
				const sortedData = [...tableData];
				sortedData.sort((a, b) => {
					if (a.fName < b.fName) {
						return -1;
					}
					if (a.fName > b.fName) {
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
	function sortData(key, order) {
		dispatch({
			type: 'SORT_DATA',
			key: key,
			order: order,
		});
	}
	return (
		<AppContext.Provider
			value={{
				currentSort: state.currentSort,
				userData: state.userData,
				userDataEdited: state.userDataEdited,
				editAppContext,
				sortData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
