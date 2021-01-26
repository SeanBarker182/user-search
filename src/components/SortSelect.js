import { useState } from 'react';

export default function SortSelect() {
	const chevron = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='16'
			height='16'
			fill='currentColor'
			class='bi bi-chevron-down'
			viewBox='0 0 16 16'
		>
			<path
				fill-rule='evenodd'
				d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
			/>
		</svg>
	);
	return (
		<div className='relative mt-2 ml-3 flex-none w-4/12'>
			<select className='text-black text-opacity-75 text-lg w-full h-12 pt-4 px-4 mb-4 border border-gray-300 rounded'>
				<option value=''>First Name (A-Z)</option>
				<option value=''>First Name (Z-A)</option>
				<option value=''>Last Name (A-Z)</option>
				<option value=''>Last Name (Z-A)</option>
			</select>
			<span className='text-xs text-gray-400 absolute top-1 left-4'>
				Sort By:
			</span>
			<div className='absolute top-4 right-4'>{chevron}</div>
		</div>
	);
}
