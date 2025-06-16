pipeline {
    agent {
    docker {
      image 'node:18'
      args '-u root:root' // optional if you face permission issues
    }
  }

  environment {
    NODE_ENV = "test"
  }
    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }
        stage("Test") {
            steps{
                
                sh 'npm test'
            }
        }
        stage("Build"){
            steps{
                sh 'npm run build'
            }
        }
    }
}
