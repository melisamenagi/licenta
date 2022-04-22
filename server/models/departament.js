module.exports = (sequelize, DataTypes) => {
    return sequelize.define('departament', {
        denumire: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    });
};