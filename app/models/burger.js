

module.exports = function(sequelize, DataTypes){

	var burgers = sequelize.define("burgers", {
		text: {
			type: DataTypes.STRING,
			allownull: false,
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			allownull: false,
			defaultValue: false
		}
	});
	return burgers;
}