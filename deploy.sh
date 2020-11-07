#!/bin/bash

# move path
cd /home/ubuntu/docker/deploy

# docker image build
docker build -t exhibition-client ./images/exhibition-client

# excute deploy.sh
./deploy.sh exhibition-client