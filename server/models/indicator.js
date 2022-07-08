module.exports = (sequelize, DataTypes) => {
    return sequelize.define('indicator', {
        indicator: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['eNPS','EES','ESI']   
        },
        entitate: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        ended: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        }
    });
};