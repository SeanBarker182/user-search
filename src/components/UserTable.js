import React from 'react';

export default function UserTable() {
	return (
		<div className='mb-4 border border-gray-300 rounded shadow'>
			<table className='table-fixed'>
				<thead>
					<tr className='bg-gray-100'>
						<th className='w-1/2 ...'>Title</th>
						<th className='w-1/4 ...'>Author</th>
						<th className='w-1/4 ...'>Views</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Intro to CSS</td>
						<td>Adam</td>
						<td>858</td>
					</tr>
					<tr className='bg-gray-100'>
						<td>
							A Long and Winding Tour of the History of UI Frameworks and Tools
							and the Impact on Design
						</td>
						<td>Adam</td>
						<td>112</td>
					</tr>
					<tr>
						<td>Intro to JavaScript</td>
						<td>Chris</td>
						<td>1,280</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
