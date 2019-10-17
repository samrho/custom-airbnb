module.exports = (sequelize, DataTypes) => {
	const room = sequelize.define(
		"Room",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
			user_id: {
				type: DataTypes.INTEGER,
				references: {
					model: 'User',
					key: 'id',
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			type: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			max_guest: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			country: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			city: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			bathroom_count: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			bedroom_count: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			kitchen_count: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			parking_price: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			is_internet_available: {
				type: DataTypes.TINYINT,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			underscored: true,
			freezeTableName: true,
		}
	);
	return room;
};
