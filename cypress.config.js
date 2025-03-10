const { defineConfig } = require("cypress");
const { sequelize } = require('./config/db'); // Assure-toi que ce chemin est correct

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Enregistrer une tâche pour synchroniser la base de données avant les tests
      on('task', {
        async 'db:sync'() {
          try {
            await sequelize.sync({ force: true }); // Synchroniser les tables (force: true réinitialise la DB)
            console.log("Base de données synchronisée");
            return null;
          } catch (error) {
            console.error("Erreur lors de la synchronisation de la base de données", error);
            throw error;
          }
        },
      });
    },
  },
};
