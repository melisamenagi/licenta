module.exports = (sequelize, DataTypes) => {
    return sequelize.define('member_info', {
        email: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        functie: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        comunitate: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        departamente: {
            type: DataTypes.ENUM,
            allowNull: true,
            values: ['Business Development','Public Relations', 'Creative', 'Marketing', 'Human Resources']   
        },
        proiect: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    });
};