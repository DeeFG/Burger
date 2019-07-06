

module.exports = function(sequelize, DataTypes){

	var Burgers = sequelize.define("burgers", {
		burgerName: {
			type: DataTypes.STRING,
			allownull: false,
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			allownull: false,
			defaultValue: false,
        },
	});
	return Burgers;
}