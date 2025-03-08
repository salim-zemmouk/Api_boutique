'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      // Table Vendeurs
      queryInterface.createTable('Vendeurs', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),

      // Table Clients
      queryInterface.createTable('Clients', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: true
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),

      // Table Produits
      queryInterface.createTable('Produits', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        price: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        stock: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),

      // Table Commandes
      queryInterface.createTable('Commandes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        clientId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Clients',
            key: 'id'
          },
          allowNull: false
        },
        vendeurId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Vendeurs',
            key: 'id'
          },
          allowNull: true
        },
        total: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        dateCommande: {
          type: Sequelize.DATE,
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable('Vendeurs'),
      queryInterface.dropTable('Clients'),
      queryInterface.dropTable('Produits'),
      queryInterface.dropTable('Commandes')
    ]);
  }
};
