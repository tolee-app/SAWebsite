# base image is nodejs based on alpine
FROM node:lts-alpine
# label image
LABEL org.opencontainers.image.source=https://github.com/SportsAppIN/SAWebsite
# set node env as production
ENV NODE_ENV production
# specify port for access
EXPOSE 8000
# install dumb-init system to prevent starting nodejs as process id 1
RUN apk add dumb-init
# create app directory
WORKDIR /usr/src/sa-website
# copy package.json to app directory
COPY package.json package.json
# install packages
RUN npm install --production=true
# copy source code to app directory and make 'node' user as owner of directory
COPY --chown=node:node . .
# switch user to 'node' from 'root'
USER node
# start application
CMD ["dumb-init", "npm", "start"]
