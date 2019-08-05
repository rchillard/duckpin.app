# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /usr/src/app

# copy package.json into the container
COPY src/package*.json ./

# install dependencies
RUN npm install

# copy source code into container
COPY src/. .

# expose port
EXPOSE 3000

# run node process
CMD [ "node", "index.js" ]