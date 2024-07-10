FROM node:14-alpine

WORKDIR /app

RUN npm install -g live-server && npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]