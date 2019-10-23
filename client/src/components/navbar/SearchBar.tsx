import React from 'react';
import styled from 'styled-components';
const Form = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 50px;
	width: 500px;
	margin: 3px;
	align-items: center;
	align-self: center;
	border-radius: 5px;
	border: 0;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const SearchField = styled.input`
	display: flex;
	align-self: center;
	border: 0;

	font-weight: bold;
	font-size: 14px;
`;

export default () => {
	return (
		<Form>
			<SearchField></SearchField>
			<SearchField></SearchField>
		</Form>
	);
};
