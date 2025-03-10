describe("Tests API Commandes", () => {
  let produitId;

  beforeEach(() => {
    cy.task('db:sync');
    // Créer un produit avant de tester la commande
    cy.request({
        method: 'POST',
        url: 'http://localhost:9000/api/produits',
        headers: {"Content-Type":"application/json"},
        body:
            {
            "name": "Produit A",
            "price": 19.99,
            "stock": 50
            },
    }).then((response) => {
      produitId = response.body.id;
    });
  });

  it("devrait créer une commande avec succès", () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:9000/api/commandes',
      body: {
        "clientId": 1,
        "produitId": 1,
        "quantity": 2
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.commande.total).to.eq(19.99*2);
    });
  });

  it("devrait retourner une erreur si le produit n'existe pas", () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:9000/api/commandes',
      body: {
        clientId: 1,
        produitId: 9999, // ID fictif de produit
        quantity: 2
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq('Produit non trouvé');
    });
  });

  it("devrait retourner une erreur si le stock est insuffisant", () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:9000/api/commandes',
      body: {
        clientId: 1,
        produitId: produitId,
        quantity: 100
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('Stock insuffisant');
    });
  });

  it("devrait récupérer toutes les commandes avec succès", () => {
    cy.request('GET', 'http://localhost:9000/api/commandes').then((response) => {
      expect(response.status).to.eq(200);
      expect(Array.isArray(response.body)).to.eq(true);
      expect(response.body.length).to.be.greaterThan(0);
    });
  });
});