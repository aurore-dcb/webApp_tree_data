FROM node:14-alpine

WORKDIR /app

COPY package.json ./

RUN npm install -g live-server && npm install

COPY . .

RUN npm install --save @ui5/webcomponents

COPY ui5.yaml /app/ui5.yaml

EXPOSE 8080

CMD ["npm", "start"]