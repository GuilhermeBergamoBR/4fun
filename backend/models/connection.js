const Sequelize = require('sequelize');

const sequelize = new Sequelize('4fun', 'root', '1234', {
	host: 'localhost',
	dialect: 'mysql',
});

sequelize
	.authenticate()
	.then(() => {
		console.log('connected successfully');
	})
	.catch(err => {
		console.log('unable to connect', err);
	});

module.exports = sequelize;
