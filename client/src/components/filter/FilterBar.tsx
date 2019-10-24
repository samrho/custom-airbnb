import React from "react";
import styled from "styled-components";
import FilterBtn from "./FilterBtn";
type T = {
	id: string;
	name: string;
};

const FilterBarWrapper = styled.div`
	display: flex;

	padding: 8px 0 8px 20px;
	flex-direction: row;
	justify-content: left;
	border-bottom: 1px solid #e4e4e4;
`;

const filterList: Array<T> = [
	{
		id: "date",
		name: "날짜",
	},
	{
		id: "personnel",
		name: "인원",
	},
	{
		id: "type",
		name: "숙소 유형",
	},
	{
		id: "price",
		name: "가격",
	},
	{
		id: "addFilter",
		name: "필터 추가하기",
	},
];

const Filters = filterList.map((filter) => {
	return <FilterBtn name={filter.name} />;
});
const FilterBar: React.FC = () => {
	return <FilterBarWrapper>{Filters}</FilterBarWrapper>;
};

export default FilterBar;
