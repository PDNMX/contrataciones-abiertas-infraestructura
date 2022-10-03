FROM node:14-alpine

MAINTAINER Sergio Rodríguez <sergio.rdzsg@gmail.com>

COPY . /edca-capturador
WORKDIR /edca-capturador

# Install NPM modules and bower components
RUN npm install \
  && npm install -g bower \
  && npm install -g pm2 \
  && cd public \
  && bower --allow-root install

EXPOSE 3000

CMD ["pm2-runtime", "/edca-capturador/bin/www"]
