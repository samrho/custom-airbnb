require('dotenv').config();

const {
	DB_DEV_USERNAME,
	DB_DEV_PASSWORD,
	DB_DEV_DBNAME,
	DB_DEV_HOST,
} = process.env;
module.exports = {
	"development": {
		"username": DB_DEV_USERNAME,
		"password": DB_DEV_PASSWORD,
		"database": DB_DEV_DBNAME,
		"host": DB_DEV_HOST,
		"dialect": "mysql"
	},
	"test": {
		"username": "root",
		"password": null,
		"database": "database_test",
		"host": "127.0.0.1",
		"dialect": "mysql",
	},
	"production": {
		"username": "root",
		"password": null,
		"database": "database_production",
		"host": "127.0.0.1",
		"dialect": "mysql",
	}
};
