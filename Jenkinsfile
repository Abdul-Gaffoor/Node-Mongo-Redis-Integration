pipeline {
    agent any
    
    environment{
        registry = 'gaffoor/node-from-jenkins'
        dockerImage= ''
        registryCredential = 'Docker-hub'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Abdul-Gaffoor/Node-Mongo-Redis-Integration.git']]])
            }
        }
        
        stage('Build Docker image') {
            steps {
                script {
          dockerImage = docker.build registry
               }
            }
        }
        
        stage('Upload Image') {
            steps{
                script{
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }
        
    }
}
