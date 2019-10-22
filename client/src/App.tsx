import React from 'react';
import logo from './logo.svg';
import './App.scss';
import App2 from './pages/Main';
import NavBar from './components/navbar/NavBar';
const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar></NavBar>
			</header>
			<section></section>
		</div>
	);
};

export default App;
