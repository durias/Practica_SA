pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
         stage('run') {
            steps {
                sh 'node app.js'
            }
        }
    }
}
