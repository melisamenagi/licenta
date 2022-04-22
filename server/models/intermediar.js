module.exports = (sequelize, DataTypes) => {
    return sequelize.define('intermediar', {
        member_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        strengths: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        weaknesses: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        evolutie: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        isEligible: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        functie: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        observatii: {
            type: DataTypes.STRING(200),
            allowNull: true
        }
    });
};