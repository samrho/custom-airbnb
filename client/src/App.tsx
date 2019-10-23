import React, { useState, Fragment } from "react";
import "./styles/App.scss";
import NavBar from "./components/navbar/NavBar";
import DatePicker from "./components/DatePicker";
import FilterBar from "./components/filter/FilterBar";

const App: React.FC = () => (
	<Fragment>
		<NavBar></NavBar>
		<FilterBar></FilterBar>
		<DatePicker />
	</Fragment>
);

export default App;
