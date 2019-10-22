import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface IProps {}

function useWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleSize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleSize);
		return () => {
			window.removeEventListener('resize', handleSize);
		};
	});
	return width;
}
const Layout: React.FC = (props, { children }: any) => {
	const width = useWindowWidth();
	const Button = styled.button`
		background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
		color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
		font-size: 1.5rem;
		border: 1px solid palevioletred;
		border-radius: 3px;
		padding: 0.25em 0.5em;
	`;
	return <div></div>;
};

export default Layout;
