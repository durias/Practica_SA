pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
        stage('test') {
            steps {
                sh 'mocha'
            }
        }    
         stage('run') {
            steps {
                sh 'forever stop app.js'
                sh 'forever start app.js'
            }
        }
    }
}
