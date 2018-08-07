const sequelize = require('sequelize');

module.exports = (db) => {
    const User = db.define('ext_user', {
        externalId : { type: sequelize.DataTypes.INTEGER } ,
        firstname: { type: sequelize.DataTypes.STRING},
        lastname: { type: sequelize.DataTypes.STRING},
        email: {type: sequelize.DataTypes.STRING, unique: true},
        role: {type: sequelize.DataTypes.ENUM(['USER','ADMIN'])}
    });

    return User;
};