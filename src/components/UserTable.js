import { useContext } from 'react';
import { AppContext } from '../context/GlobalState';

export default function UserTable() {
	const { userDataEdited } = useContext(AppContext);

	return (
		<div className='mb-4 border border-gray-300 rounded shadow overflow-hidden'>
			<table className='table-auto w-full'>
				<thead>
					<tr className='bg-gray-100 border-b border-gray-300 h-12 text-left text-sm text-gray-500 text-sm tracking-wider'>
						<th className='pl-4 font-medium'>NAME</th>
						<th className='font-medium'>ADDRESS</th>
						<th className='font-medium'>EMAIL</th>
						<th className='font-medium'>COMPANY NAME</th>
					</tr>
				</thead>
				<tbody>
					{userDataEdited.map((user, i) => (
						<tr className={i % 2 ? 'bg-gray-100 h-12' : 'h-12'}>
							<td className='pl-4 font-medium'>{user.name}</td>
							{/* The API doesn't return an address number so this randomly generates one */}
							<td className='text-gray-500'>
								{Math.floor(Math.random() * 9899 + 100)} {user.address.street}
							</td>
							<td className='text-gray-500'>{user.email}</td>
							<td className='text-gray-500'>{user.company.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
