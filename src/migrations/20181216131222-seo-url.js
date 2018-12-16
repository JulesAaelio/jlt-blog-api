module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface
            .addColumn('articles','seo-url',{type: Sequelize.DataTypes.STRING});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface
            .removeColumn('articles','seo-url');
    }
};