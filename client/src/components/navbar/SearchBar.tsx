import React from 'react';
import styled from 'styled-components';
const Form = styled.form`
	display: flex;
	width: 80%;
`;
const SearchField = styled.input`
	width: 50%;
	border: 1px solid black;
	border-radius: 3px;
`;
export default () => {
	return (
		<Form>
			<SearchField></SearchField>
		</Form>
	);
};
