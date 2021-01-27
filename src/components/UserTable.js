import { useContext } from 'react';
import { AppContext } from '../context/GlobalState';

export default function UserTable() {
	const { userDataEdited } = useContext(AppContext);

	return (
		<div className='mb-4 border border-gray-300 rounded shadow'>
			<table className='table-fixed'>
				<thead>
					<tr className='bg-gray-100 text-left'>
						<th className='w-1/2 ...'>Title</th>
						<th className='w-1/4 ...'>Author</th>
						<th className='w-1/4 ...'>Views</th>
					</tr>
				</thead>
				<tbody>
					{userDataEdited.map((user, i) => (
						<tr className={i % 2 ? 'bg-gray-100' : 'bg-gray-50'}>
							<td>{user.name}</td>
							<td>{user.address.street}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
