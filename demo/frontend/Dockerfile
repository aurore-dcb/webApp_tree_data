FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g live-server && npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]