pipeline {
    agent any
    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }

        stage("Test") {
            steps {
                bat 'npm install'
                bat 'npm test'
            }
        }

        stage("Build") {
            steps {
                bat 'npm run build'
            }
        }
        stage("Build Image") {
            steps {
               bat 'docker build -t ecom-backend-express:1.0 -f ./path/to/Dockerfile .'
            }
        }
    }
}
