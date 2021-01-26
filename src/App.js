import SearchInput from './components/SearchInput';
import SortSelect from './components/SortSelect';
import UserTable from './components/UserTable';
import { AppProvider } from './context/GlobalState';

function App() {
	return (
		<AppProvider>
			<div className='container mx-auto mt-10 max-w-4xl'>
				<h1 className='text-3xl font-bold tracking-tight'>Users</h1>
				<div className='flex justify-between'>
					<SearchInput />
					<SortSelect />
				</div>
				<UserTable />
			</div>
		</AppProvider>
	);
}

export default App;
