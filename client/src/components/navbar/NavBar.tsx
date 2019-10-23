import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import LinkWrapper from './LinkGroup';
import SearchBar from './SearchBar';
const NavBar = () => {
	const NavBarWrapper = styled.div`
		display: flex;
		position: sticky;
		flex-direction: row;
		justify-content: left;
		border-bottom: 1px solid #e4e4e4;
	`;

	const LogoWrapper = styled.div`
		padding: 20px;
	`;

	return (
		<NavBarWrapper>
			<LogoWrapper>
				<Logo type="logo"></Logo>
			</LogoWrapper>
			<SearchBar></SearchBar>
			<LinkWrapper></LinkWrapper>
		</NavBarWrapper>
	);
};

export default NavBar;
