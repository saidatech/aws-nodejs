#!/bin/bash

# Install node.js
sudo yum install python-software-properties -y
sudo yum-repository ppa:chris-lea/node.js -y
sudo yum update
sudo yum install nodejs -y

# Install nodemon
# sudo npm install nodemon -g

# Install forever module 
# https://www.npmjs.com/package/forever
sudo npm install forever -g

# Clean working folder
# sudo find /home/ec2-user/test -type f -delete
