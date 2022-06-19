FROM node:14-alpine

WORKDIR /app

COPY package.json /app

RUN npm install
RUN npm install yarn

COPY . /app

CMD ["yarn","docs:dev"]

EXPOSE 3000