const express = require("express");
const router = express.Router();
const { getAllRooms } = require("../middlewares/rooms");
/* GET home page. */
router.get("/", getAllRooms);

module.exports = router;
