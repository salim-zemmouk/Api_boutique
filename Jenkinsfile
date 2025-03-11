pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Récupérer le code depuis le dépôt Git
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Installer Node.js et les dépendances du projet
                    sh 'npm ci' // Utilise 'npm ci' pour une installation propre des dépendances
                }
            }
        }
        stage('Run Cypress Tests') {
            steps {
                script {
                    // Exécuter les tests Cypress
                    sh 'npx cypress run'  // ou 'npm run cypress' si tu as un script défini dans package.json
                }
            }
        }
    }
    post {
        success {
            echo 'Tests Cypress terminés avec succès !'
        }
        failure {
            echo 'Les tests Cypress ont échoué !'
        }
    }
}