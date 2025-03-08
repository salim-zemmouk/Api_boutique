// migrations/YYYYMMDDHHMMSS-add-quantity-to-commandes.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Commandes', 'quantity', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Commandes', 'quantity');
  }
};
