import React from 'react';
import './styles/App.scss';
import NavBar from './components/navbar/NavBar';
import DatePicker from './components/DatePicker';
import FilterBar from './components/filter/FilterBar';
const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar></NavBar>
				<FilterBar></FilterBar>
				<DatePicker></DatePicker>
			</header>
			<section></section>
		</div>
	);
};

export default App;
