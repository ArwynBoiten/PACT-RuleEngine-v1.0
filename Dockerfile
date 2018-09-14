FROM alpine:latest

# Update
RUN apk add --update nodejs-current-npm

# Install app dependencies
COPY package.json /src/package.json
RUN cd /src; npm install

# Bundle app source
COPY . /src

EXPOSE  3020
CMD ["/usr/bin/node", "/src/src/api/server.js"]