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
               bat 'docker build -f ./Dockerfile -t ecom-backend-express:1.0 .'
            }
        }
        stage('Docker Push to Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: '5c292fe6-9c52-4495-95dc-9a7e7bbc75a6', usernameVariable: 'DOCKER_HUB_USER', passwordVariable: 'DOCKER_HUB_PASS')]) {
                    bat 'docker login -u %DOCKER_HUB_USER% -p %DOCKER_HUB_PASS%'
                    bat "docker tag ecom-backend-express:1.0 aman163kumar/ecom-backend-express:1.0"
                    bat "docker push aman163kumar/ecom-backend-express:1.0"
                    bat "docker logout"
                }
            }
        }
    }
}
