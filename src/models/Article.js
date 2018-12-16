const sequelize = require('sequelize');

module.exports = (db) => {
    const Article = db.define('article', {
        title : { type: sequelize.DataTypes.STRING },
        sample: {type: sequelize.DataTypes.TEXT},
        content: {type: sequelize.DataTypes.TEXT},
        illustration: {type: sequelize.DataTypes.STRING},
        'seo-url': {type: sequelize.DataTypes.STRING},
        'full-seo-url' : {
            type: sequelize.VIRTUAL,
            get () {
                return this.getDataValue('id') + '-' + this.getDataValue('seo-url');
            }
        }
    });

    return Article;
};