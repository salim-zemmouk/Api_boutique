pipeline {
    agent {
        docker {
            image 'cypress/included:10.0.0' // Utilise l'image Docker officielle avec Cypress
            args '-u root:root'  // Pour donner des droits d'administrateur (au cas où il y aurait des problèmes de permission)
        }
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Installer les dépendances du projet
                    sh 'npm ci'
                }
            }
        }
        stage('Run Cypress Tests') {
            steps {
                script {
                    // Exécuter les tests Cypress
                    sh 'npx cypress run'
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