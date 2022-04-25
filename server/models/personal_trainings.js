module.exports = (sequelize, DataTypes) => {
    return sequelize.define('personal_trainings', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        entitate: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        denumire: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        data: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        speaker: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        done: {
            type: DataTypes.BOOLEAN,
            allowNull:false
        },
        tema: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        speaker_feedback: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        raport: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
};