import { useState } from 'react';

export default function SearchInput() {
	const [focused, setFocused] = useState(false);
	const [searchText, setSearchText] = useState('');

	const notFocused =
		'text-lg text-gray-400 absolute pointer-events-none ease-in duration-150 top-2 left-4 whitespace-nowrap overflow-hidden';
	const isFocused =
		'text-xs text-gray-400 absolute pointer-events-none ease-in duration-150 top-1 left-4 whitespace-nowrap overflow-hidden';

	return (
		<div className='relative mt-2'>
			<input
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				onFocus={() => setFocused(true)}
				onBlur={() => {
					if (searchText === '') setFocused(false);
				}}
				className='text-black text-opacity-75 text-lg w-full h-10 pt-4 px-4 mb-4 border border-gray-300 rounded'
			/>
			<span className={focused ? isFocused : notFocused}>
				Search by name, email address, or company.
			</span>
		</div>
	);
}
