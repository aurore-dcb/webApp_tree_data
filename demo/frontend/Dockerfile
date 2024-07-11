FROM node:14-alpine

WORKDIR /app

RUN npm install -g live-server && npm install

COPY . .

EXPOSE 8080

CMD ["live-server", "--port=8080", "--host=0.0.0.0", "--open=index.html"]