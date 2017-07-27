FROM node:latest

RUN apt-get -yq update && \
    apt-get -yq clean && \
    apt-get -yq autoclean && \
    curl -o- -L https://yarnpkg.com/install.sh | bash

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ARG registry
ADD ./service/ /usr/src/app
RUN yarn
EXPOSE 3000