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
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			type: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			maxGuest: {
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
			bathroomCount: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			bedroomCount: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			kitchenCount: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			parkingPrice: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			isInternetAvailable: {
				type: DataTypes.BOOLEAN,
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
