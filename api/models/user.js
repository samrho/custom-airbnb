module.exports = (sequelize, DataTypes) => {
	let user = sequelize.define(
		"User",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
			email: {
				field: "email",
				type: DataTypes.STRING(50),
				unique: true,
				allowNull: false,
			},
			user_password: {
				type: DataTypes.STRING(30),
				allowNull: false,
			},
		},
		{
			timestamps: false,
			underscored: true,
			freezeTableName: true,
		},
	);
	return user;
};
