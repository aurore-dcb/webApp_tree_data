# Technical test :
A web application with a Java backend and a JS frontend that makes requests to an external API

## An env file is required :
- DATABASE_URL=jdbc:postgresql://localhost:5432/demo
- DATABASE_USER= ...
- DATABASE_PASSWORD= ...
- EXTERN_API_BASE_URL=https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/les-arbres
- POSTGRES_PASSWORD= ...
- POSTGRES_USER= ...
- POSTGRES_DB=mydb

## Run :
``` shell
cd demo/
docker-compose up --build
http://localhost:3000/
```
