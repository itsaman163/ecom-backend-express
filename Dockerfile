FROM node:latest

WORKDIR /apps

ADD . .

RUN npm install

CMD [ "node", "./src/app.js" ]
