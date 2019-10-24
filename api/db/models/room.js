module.exports = (sequelize, DataTypes) => {
	const Room = sequelize.define(
		"Room",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			user_id: {
				type: DataTypes.INTEGER,
				references: {
					model: "User",
					key: "id",
				},
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			star: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			type: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			guest: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			thumbnail: {
				type: DataTypes.STRING,
			},
			bathroom: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			bedroom: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			bed: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			underscored: true,
			freezeTableName: true,
		},
	);

	Room.getAllRooms = async () => {
		return Room.findAll({
			where: {
				guest: 4,
			},
		});
	};
	return Room;
};
