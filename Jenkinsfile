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

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
