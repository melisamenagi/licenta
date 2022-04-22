module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comunitate', {
        denumire: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    });
};