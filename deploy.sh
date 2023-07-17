#!/bin/bash

# Variables
ECR_REGISTRY="678229030360.dkr.ecr.us-east-1.amazonaws.com"
ECR_REPOSITORY="front-end"

# Pull the Docker image from ECR
docker pull ${ECR_REGISTRY}/${ECR_REPOSITORY}:latest

# Stop and remove any running containers
docker stop $(docker ps -q)
docker rm $(docker ps -aq)

# Start a new container with the updated image
docker run -d -p 80:80 ${ECR_REGISTRY}/${ECR_REPOSITORY}:latest
