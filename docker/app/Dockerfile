FROM node:16.3.0-alpine

WORKDIR /usr/src/app

Run npm install -g npm@8.5.3

COPY app/package.json .

RUN npm install

COPY app/ .

EXPOSE 3000

CMD ["npm", "start"]