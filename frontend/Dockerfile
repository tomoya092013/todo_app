FROM node:16-alpine3.15 as frontend_dev

WORKDIR /home/app

RUN apk update
RUN apk add git
RUN apk add openssh-server

USER node
EXPOSE 3000
