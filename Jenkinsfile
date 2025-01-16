pipeline{
    agent { label 'test' }
    stages{
        stage("Clone Code"){
            steps{
                git url: "https://github.com/sunnyshinde123/Weather_App_By_React.git", branch: "$branch"
                echo "github repo clone succssfully"
            }
        }
        
        stage("Build & Test"){
            steps{
                sh "docker build -t react-app:latest ."
                echo "docker image build successfully"
            }
        }
        
        stage("Push To Dockerhub"){
            steps{
                withCredentials([usernamePassword(credentialsId:"dockerhubcred", usernameVariable: "dockerUser", passwordVariable:"dockerPass")]){
                    sh "echo $dockerPass | docker login -u ${env.dockerUser} --password-stdin"
                    sh "docker image tag react-app:latest ${env.dockerUser}/react-app:latest"
                    sh "docker push ${env.dockerUser}/react-app:latest"
                    echo "Image Push to hub successfully"
                }
            }
        }
        
        stage("Deploy"){
            steps{
                sh "docker run -d -p 5173:5173 react-app:latest"
                echo "Application Deploy Successfully"
            }
        }
    }
}
