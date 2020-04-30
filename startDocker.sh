#! /bin/bash
set -e

#Remove docker container if already exists
docker rm -f ad_web || true

#Build docker image ad_web
docker build -t ad_web .

# Create and run docker container ad_web
docker run -it -d -p3000:3000 --name ad_web ad_web