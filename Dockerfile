FROM node:14.16.1-alpine3.13

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /usr/src/app/app

RUN npm install

WORKDIR /usr/src/app

ENV BACKEND_URL=http://cb-api:3050
ENV PORT=3000

EXPOSE 3000

CMD ["npm","start"]