import SearchInput from './components/SearchInput';
import SortSelect from './components/SortSelect';

function App() {
	return (
		<div className='container mx-auto mt-10 max-w-4xl'>
			<h1 className='text-3xl font-bold'>Users</h1>
			<div className='flex justify-between'>
				<SearchInput />
				<SortSelect />
			</div>
		</div>
	);
}

export default App;
