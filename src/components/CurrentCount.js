import { useContext } from 'react';
import { AppContext } from '../context/GlobalState';

export default function CurrentCount() {
	const { userDataEdited } = useContext(AppContext);
	return (
		<div>
			<p className='text-gray-400'>
				Total Count:{' '}
				<span className='text-gray-500 font-bold'>{userDataEdited.length}</span>
			</p>
		</div>
	);
}
