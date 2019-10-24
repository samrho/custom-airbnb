import React, { Fragment, useState, useEffect } from "react";
import OuterCard from "../card/Card";
import styled from "styled-components";
const RoomCount = styled.div`
	padding: 20px 20px 10px 20px;
	font-size: 20px;
	font-weight: bold;
`;
const MainContainer = () => {
	const [rooms, setRooms] = useState([]);

	const getAllRooms = () => {
		fetch("http://localhost:3001/rooms")
			.then((res) => res.json())
			.then((data) => setRooms(data.data))
			.catch((e) => {
				console.log(e);
			});
	};
	const roomElements: any = rooms.map((room: any) => {
		return <OuterCard key={room.id} data={room} />;
	});
	useEffect(getAllRooms, []);
	return (
		<Fragment>
			<RoomCount>{rooms.length}개의 숙소</RoomCount>

			{roomElements}
		</Fragment>
	);
};

export default MainContainer;
