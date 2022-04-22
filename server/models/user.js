module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        full_name: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        google_id: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        picture: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        functie: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        functie_id: {
            type: DataTypes.STRING(3),
            allowNull: true
        },
        comunitate: {
            type: DataTypes.ENUM,
            allowNull: true,
            values: ['Econosofia','Leadership Development', 'Business Club', 'International Affairs']   
        },
        first_department: {
            type: DataTypes.ENUM,
            allowNull: true,
            values: ['Business Development','Public Relations', 'Creative', 'Marketing', 'Human Resources']   
        },
        second_department: {
            type: DataTypes.ENUM,
            allowNull: true,
            values: ['Business Development','Public Relations', 'Creative', 'Marketing', 'Human Resources']   
        },
        third_department: {
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