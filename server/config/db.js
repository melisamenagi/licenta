const Sequelize = require("sequelize");
const configuration = require("../configuration.json");

const db = 
    process.env.NODE_ENV === "production"
        ? configuration.production.db
        : configuration.development.db;
const sequelize =  new Sequelize(db.database, db.username, db.password, {
    dialect: db.dialect,
    host: db.host,
    define: {
        timestamps: false,
        freezeTableName: true
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected');
    })
    .catch((e) => console.log(e));

sequelize.sync({alter: true}).then(() => {
    console.log("All models were syncronized successfully")
})

module.exports = sequelize;
