pipeline {
    agent any
    stages {
        stage('Build docker image') { 
            steps {
                echo 'Hello Jenkins'
                sh 'docker build -t haorui215/jenkins-react .' 
            }
        }
    }
}