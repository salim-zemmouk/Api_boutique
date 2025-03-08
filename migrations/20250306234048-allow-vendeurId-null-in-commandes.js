// migrations/YYYYMMDDHHMMSS-allow-vendeurId-null-in-commandes.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Commandes', 'vendeurId', {
      type: Sequelize.INTEGER,
      allowNull: true  // Permettre NULL
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Commandes', 'vendeurId', {
      type: Sequelize.INTEGER,
      allowNull: false  // Remettre la contrainte NOT NULL si nécessaire
    });
  }
};
