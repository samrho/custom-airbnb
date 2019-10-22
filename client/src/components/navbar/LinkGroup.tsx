import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
const LinkGroup = styled.div`
	display: flex;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	font-size: 1rem;
	color: #484848;
	&:hover {
		color: black;
	}
`;
const Nav = styled.nav`
	display: flex;
`;
const Ul = styled.ul`
	margin: 0;
`;

const Li = styled.li`
	display: inline-flex;
	margin-top: 30px;
	margin-right: 10px;
`;

const LinkWrapper = () => {
	return (
		<LinkGroup>
			<Router>
				<Nav>
					<Ul>
						<Li>
							<StyledLink to="/">Home</StyledLink>
						</Li>
						<Li>
							<StyledLink to="/about">about</StyledLink>
						</Li>
						<Li>
							<StyledLink to="/users">users</StyledLink>
						</Li>
					</Ul>
				</Nav>
			</Router>
		</LinkGroup>
	);
};

const Home = () => <h4>Home</h4>;
const About = () => <h4>About</h4>;
const Users = () => <h4>Users</h4>;

export default LinkWrapper;
