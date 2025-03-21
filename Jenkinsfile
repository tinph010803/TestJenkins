pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Lấy mã nguồn từ Git
                git branch: 'main', url: 'https://github.com/tinph010803/TestJenkins'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Cài đặt các dependency của Node.js
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Chạy unit tests với Jest
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Triển khai ứng dụng, có thể là deploy lên server hoặc Docker
                echo 'Deploying the Node.js application...'
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
