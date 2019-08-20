
module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
    	name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
        },
    });
    return Burger;
}