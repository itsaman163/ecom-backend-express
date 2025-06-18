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
                bat 'docker build -t ecom-backend-express:1.0 .'
            }
        }


        stage('Docker Push to Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-cred',
                    usernameVariable: 'DOCKER_HUB_USER',
                    passwordVariable: 'DOCKER_HUB_PASS'
                )]) {
                    bat 'docker login -u %DOCKER_HUB_USER% -p %DOCKER_HUB_PASS%'
                    bat 'docker tag ecom-backend-express:1.0 %DOCKER_HUB_USER%/ecom-backend-express:1.0'
                    bat 'docker push %DOCKER_HUB_USER%/ecom-backend-express:1.0'
                    bat 'docker logout'
                }
            }
        }
        stage('Deploy to Render') {
            steps {
                withCredentials([string(credentialsId: 'render-api-token', variable: 'RENDER_API_TOKEN')]) {
                    bat '''
                    curl -X POST https://api.render.com/deploy/srv-d18ql7buibrs73duk83g?key=WASdNhVRP84 ^
                      -H "Accept: application/json" ^
                      -H "Authorization: Bearer %RENDER_API_TOKEN%" ^
                      -H "Content-Type: application/json" ^
                      -d "{}"
                    '''
                }
            }
        }

    }
}
