import CurrentCount from './components/CurrentCount';
import SearchInput from './components/SearchInput';
import SortSelect from './components/SortSelect';
import UserTable from './components/UserTable';
import { AppProvider } from './context/GlobalState';

function App() {
	return (
		<AppProvider>
			<div className='container mx-auto px-4 mt-10 max-w-5xl font-sans'>
				<h1 className='text-3xl font-bold tracking-tight'>Users</h1>
				<div className='md:flex justify-between'>
					<SearchInput />
					<SortSelect />
				</div>
				<UserTable />
				<CurrentCount />
			</div>
		</AppProvider>
	);
}

export default App;
