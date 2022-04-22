module.exports = (sequelize, DataTypes) => {
    return sequelize.define('training', {
        entitate: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        denumire: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        data: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        speaker: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    });
};