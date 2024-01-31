def createVersion() {
    // result 20240131161412_22
    return new Date().format('yyyyMMddHHmmss') + "_${env.BUILD_ID}"
}

pipeline {
    agent any
    environment {
        _version = createVersion()
    }
    stages {
        stage ('Clone repository') {
            steps {
                checkout scm
            }
        }
        stage('Build docker image') { 
            steps {
                echo 'Hello Jenkins'
                sh 'docker build -t haorui215/jenkins-react:${_version} .' 
            }
        }
    }
}