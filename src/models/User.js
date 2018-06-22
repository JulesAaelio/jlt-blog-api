const sequelize = require('sequelize');

module.exports = (db) => {
    const User = db.define('user', {
        externalId : { type: sequelize.DataTypes.INTEGER } ,
        role: {type: sequelize.DataTypes.ENUM(['USER','ADMIN'])}
    });

    return User;
};