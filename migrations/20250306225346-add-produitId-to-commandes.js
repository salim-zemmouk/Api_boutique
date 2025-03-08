// migrations/YYYYMMDDHHMMSS-add-produitId-to-commandes.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Commandes', 'produitId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Produits',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Commandes', 'produitId');
  }
};