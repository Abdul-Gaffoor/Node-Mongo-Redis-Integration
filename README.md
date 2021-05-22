# Intergrating Node-MongoDb-Redis, Containerzing them, Creating Pipeline and K8's deployment

a. Dockerise this project consists of 3 aspects
1. It has a node API project
2. It connects to Redis cache
3. It uses mongo as a database
 
 ## Deployment:

To deploy this project, run below commands.

```bash
  git clone https://github.com/Abdul-Gaffoor/Node-Mongo-Redis-Integration.git
  cd Node-Mongo-Redis-Integration
  docker-compose up -d
```
To Check the Intergration of our project, run

```bash
  docker logs <Node app name or Id>
```
We should be able to see the connection status between Node, MongoDb, and Redis.


## Jenkins Pipeline Creation:

To deploy Create Jenkins pipeline, use Jenkinsfile in pipeline. Code is available in Git repo

I used this code to create a image and pushed to docker hub registry

- [Image](https://hub.docker.com/repository/docker/gaffoor/node-from-jenkins)

## Kubernetes Deployment

To deploy our project in K8's, I used MINIUBE in my local machine and created YAML files and Yaml files are uploaded in this repo K8's folder 

we should create pods by running below commands.

```bash
  kubectl create -f <our.yaml.files>.yaml
```

we can see the status of pods by running below commands

```bash
  kubectl get pods
  kubectl describe pods
```
