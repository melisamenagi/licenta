module.exports = (sequelize, DataTypes) => {
    return sequelize.define('training_feedback', {
        training_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tema: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        speaker: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        raport: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
};