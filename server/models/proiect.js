module.exports = (sequelize, DataTypes) => {
    return sequelize.define('proiect', {
        denumire: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    });
};