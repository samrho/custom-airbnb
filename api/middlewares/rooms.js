const Room = require("../db/models").Room;

const getAllRooms = async (req, res, next) => {
	console.log(Room);
	const rooms = await Room.getAllRooms();

	if (!rooms)
		res.status(200).send({
			status: "FAIL",
			message: "data를 조회하는 데 실패하였습니다.",
		});
	res.status(200).send({
		status: "SUCCESS",
		message: "조회 성공",
		data: rooms,
	});
};

module.exports = { getAllRooms };
