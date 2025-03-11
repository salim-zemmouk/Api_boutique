pipeline {
    agent {
        docker {
            image 'cypress/included:10.0.0' // Utilise l'image Docker officielle avec Cypress
            args '-u root:root'  // Pour donner des droits d'administrateur (au cas où il y aurait des problèmes de permission)
        }
    }
    stages {
        stage('Check Docker') {
            steps {
                script {
                    // Test si Docker est accessible
                    sh 'docker --version'
                }
            }
        }
        stage('Checkout') {
            steps {
                checkout scm  // Récupère le code source depuis le dépôt Git
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