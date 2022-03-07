FROM node:16.3.0-alpine

WORKDIR /usr/src/app

Run npm install -g npm@8.5.3

COPY api/package.json ./

RUN npm install

COPY api/ .

EXPOSE 9000

CMD ["node", "server.js"]