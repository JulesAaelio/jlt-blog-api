const sequelize = require('sequelize');

module.exports = (db) => {
    const Article = db.define('article', {
        title : { type: sequelize.DataTypes.STRING },
        sample: {type: sequelize.DataTypes.TEXT},
        content: {type: sequelize.DataTypes.TEXT},
        illustration: {type: sequelize.DataTypes.STRING}
    });

    return Article;
};