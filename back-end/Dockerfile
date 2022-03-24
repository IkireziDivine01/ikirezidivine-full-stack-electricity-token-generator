FROM node:16.14-alpine

WORKDIR /electricity-meter-seller-backend

COPY ./package.json /electricity-meter-seller-backend

RUN npm install -g npm@8.5.5

RUN npm install --force

COPY . .

EXPOSE 7000

CMD [ "npm","start:debug"]