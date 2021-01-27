import { useState, useContext } from 'react';
import { AppContext } from '../context/GlobalState';

export default function SearchInput() {
	const [focused, setFocused] = useState(false);
	const [searchText, setSearchText] = useState('');

	const { userData, editAppContext } = useContext(AppContext);

	const notFocused =
		'text-lg text-gray-400 absolute pointer-events-none ease-in duration-150 top-3 left-4';
	const isFocused =
		'text-xs text-gray-400 absolute pointer-events-none ease-in duration-150 top-1 left-4';

	function handleChange(e) {
		setSearchText(e.target.value);

		// Check if any of the values in the userData array start with the value of the input
		const results = userData.filter((obj) =>
			Object.keys(obj).some((key) => {
				// Verify that the value is a string so we're not searching on things like the id
				if (typeof obj[key] === 'string') {
					return obj[key]
						.toLowerCase()
						.startsWith(e.target.value.toLowerCase());
				} else {
					return false;
				}
			})
		);

		editAppContext('userDataEdited', results);
	}

	return (
		<div className='relative mt-2 md:flex-grow'>
			<input
				value={searchText}
				onChange={handleChange}
				onFocus={() => setFocused(true)}
				onBlur={() => {
					if (searchText === '') setFocused(false);
				}}
				className='text-black text-opacity-75 text-lg w-full h-12 pt-4 px-4 mb-4 border border-gray-300 rounded'
			/>
			<span className={focused ? isFocused : notFocused}>
				{window.innerWidth > 450
					? 'Search by name, email address, or company.'
					: 'Search'}
			</span>
		</div>
	);
}
