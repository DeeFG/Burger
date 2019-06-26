

module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        text: {
            type: DataTypes.STRING,
            validate: {
                notNull: true, //from documentation
                len: [1, 140]  ///from dicumanetation
            }
        },
        devour: {
            type: DataTypes.BOOLEAN,
            validate: {
                //   notNull: true,
            },
            defaultValue: false
        }

    });
}