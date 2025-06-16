pipeline {
    agent any
    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }
stage("Debug") {
    steps {
        bat 'echo Current workspace:'
        bat 'cd'
        bat 'dir'
        bat 'echo --- Listing all files ---'
        bat 'dir /s /b'
        bat 'type Dockerfile'
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
               bat 'docker build -f ./Dockerfile -t ecom-backend-express:1.0 .'
            }
        }
    }
}
