import { useContext } from 'react';
import { AppContext } from '../context/GlobalState';

export default function UserTable() {
	const { userDataEdited } = useContext(AppContext);

	return (
		<div className='overflow-x-auto'>
			<div className='mb-4 border border-gray-300 rounded shadow overflow-hidden min-w-max'>
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
							<tr key={user.id} className={i % 2 ? 'bg-gray-100 h-12' : 'h-12'}>
								<td className='pl-4 pr-4 font-medium'>{user.name}</td>
								<td className='text-gray-500 pr-4'>
									<a
										href={`http://www.google.com/maps/place/${user.geo.lat},${user.geo.lng}`}
										target='_blank'
										rel='noopener noreferrer'
									>
										{user.address}
									</a>
								</td>
								<td className='text-gray-500 pr-4'>{user.email}</td>
								<td className='text-gray-500 pr-4'>{user.company}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
