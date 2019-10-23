import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
const LinkGroup = styled.div`
	display: flex;
	margin-left: auto;
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
	float: right;
	display: flex;
`;
const Ul = styled.ul`
	margin: 0;
`;

const Li = styled.li`
	display: inline-flex;
	margin-top: 30px;
	margin-right: 20px;
`;

const BtnList = [
	{
		url: '/',
		content: '호스트가 되어 보세요',
	},
	{
		url: '/help',
		content: '도움말',
	},
	{
		url: '/register',
		content: '회원 가입',
	},
	{
		url: '/login',
		content: '로그인',
	},
];
const LinkWrapper = () => {
	const Buttons = BtnList.map((element) => {
		return (
			<Li>
				<StyledLink to={element.url}>{element.content}</StyledLink>
			</Li>
		);
	});
	return (
		<LinkGroup>
			<Router>
				<Nav>
					<Ul>{Buttons}</Ul>
				</Nav>
			</Router>
		</LinkGroup>
	);
};

export default LinkWrapper;
