FROM node:16.14-alpine 

RUN npm add -g pnpm

WORKDIR /electricity-meter-seller-frontend

ENV PATH /electricity-meter-seller-frontend/node_modules/.bin:$PATH

COPY ./package.json /electricity-meter-seller-frontend/

RUN npm install --force

COPY . .

# RUN  npm rebuild esbuild

RUN npm run build

EXPOSE 6000

CMD ["npm","run","preview"]