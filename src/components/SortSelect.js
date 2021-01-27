import { useState, useContext } from 'react';
import { AppContext } from '../context/GlobalState';

export default function SortSelect() {
	const [select, setSelect] = useState({ key: 'name', order: 'asc' });
	const { sortData } = useContext(AppContext);

	const chevron = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='16'
			height='16'
			fill='currentColor'
			className='bi bi-chevron-down'
			viewBox='0 0 16 16'
		>
			<path
				fillRule='evenodd'
				d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
			/>
		</svg>
	);
	function handleChange(e) {
		// Assign the value to the local state
		setSelect(e.target.value);

		// Split the value into an array and pass as params to the global sort function
		const splitValues = e.target.value.split(' ');
		sortData(splitValues[0], splitValues[1]);
	}
	return (
		<div className='relative mt-2 md:ml-3 md:flex-none md:w-4/12'>
			<select
				value={select}
				onChange={handleChange}
				className='text-black text-opacity-75 text-lg w-full h-12 pt-4 px-4 mb-4 border border-gray-300 rounded'
			>
				<option value='fName asc'>First Name (A-Z)</option>
				<option value='fName desc'>First Name (Z-A)</option>
				<option value='lName asc'>Last Name (A-Z)</option>
				<option value='lName desc'>Last Name (Z-A)</option>
				<option value='email asc'>Email (A-Z)</option>
				<option value='email desc'>Email (Z-A)</option>
				<option value='company asc'>Company (A-Z)</option>
				<option value='company desc'>Company (Z-A)</option>
			</select>
			<span className='text-xs text-gray-400 absolute top-1 left-4'>
				Sort By:
			</span>
			<div className='absolute top-4 right-4'>{chevron}</div>
		</div>
	);
}
