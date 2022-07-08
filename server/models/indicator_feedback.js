module.exports = (sequelize, DataTypes) => {
    return sequelize.define('indicator_feedback', {
        indicator_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        scor: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
};