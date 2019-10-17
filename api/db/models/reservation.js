module.exports = (sequelize, DataTypes) => {
	const reservation = sequelize.define(
		"Reservation",
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
					key: 'id'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			},
			room_id: {
				type: DataTypes.INTEGER,
				references: {
					model: 'Room',
					key: 'id'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			},
			kid_count: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			baby_count: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			adult_count: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			start_date: {
				type: DataTypes.DATE(6),
			},
			end_date: {
				type: DataTypes.DATE(6),
			}

		}, {
			timestamps: false,
			underscored: true,
			freezeTableName: true,
		});
	return reservation;
};