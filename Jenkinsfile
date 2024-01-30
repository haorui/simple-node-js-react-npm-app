pipeline {
    agent {
        docker {
            image 'node:20.11.0-alpine3.19' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build docker image') { 
            steps {
                sh 'docker build -t haorui215/jenkins-react .' 
            }
        }
    }
}