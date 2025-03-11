# Utiliser l’image officielle de Jenkins LTS
FROM jenkins/jenkins:lts

# Passer en mode root pour installer Node.js
USER root

# Installer Node.js et npm (version 18)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Vérifier les versions installées
RUN node -v && npm -v

# Redémarrer en tant qu’utilisateur Jenkins
USER jenkins