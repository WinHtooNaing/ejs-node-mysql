const Sequelize = require('sequelize');
const sequelize = require('../utils/database')

// table schema name ka a nae eg==> post , not posts

const Post = sequelize.define("post",{
    id :{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true,
    },
    title : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    description :{
        type : Sequelize.TEXT,
        allowNull : false,
    }
});

module.exports = Post;