const Sequelize = require('sequelize'); // to install mysql2 and sequelize

const sequelize = new Sequelize("node-ejs","root","",{
    host : 'localhost',
    dialect : 'mysql'
});

module.exports = sequelize;