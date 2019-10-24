import React, { useState } from "react";
import styled from "styled-components";

interface FilterProps {
	name: string;
}
const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => (props.active ? "#FFF" : "#484848")};
	background: ${(props) => (props.active ? "#398288" : "#FFF")};
	margin: 3px;
	height: 20px;
	font-size: 14px;
	padding: 5px 10px;
	width: fit-content;
	border: 1px solid #dde0e0;
	border-radius: 5px;
	cursor: pointer;
`;

const Modal = styled.div`
	position: absolute;
	width: 300px;
	height: 300px;
	background: palevioletred;
`;
const FilterBtn: React.SFC<FilterProps> = (props) => {
	const [active, setActive] = useState(false);
	const toggle = () => setActive(!active);
	return (
		<Button active={active} onClick={toggle}>
			{props.name}
			{/* <Modal></Modal> */}
		</Button>
	);
};
FilterBtn.defaultProps = {
	name: "test",
};

export default FilterBtn;
