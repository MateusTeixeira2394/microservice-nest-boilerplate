# Microservice Nest Boilerplate

## 🚩 Description

Boilerplate built in [Nestjs](https://nestjs.com/) that creates a microservice using [Adapter & Port Architecture](https://medium.com/the-software-architecture-chronicles/ports-adapters-architecture-d19f2d476eca) fast with built-in features the like:

- [Typeorm](https://typeorm.io) with [Postgresql](https://www.postgresql.org/);
- Cache module with [Redis](https://redis.io);
- Message Queue with [BullMQ](https://docs.bullmq.io/);
- HTTP module to access external apis;
- ORM with MongoDB;

## ⚙️ Project setup

- The API was developed in [Nestjs](https://nestjs.com/), using the best practices of the framework focusing in a microservice architecture.
- The API uses the [Postgresql](https://www.postgresql.org/) to persist data;
- To ensure the code quality this project has used the [Jest](https://jestjs.io/) library to make unit and integration tests.

## ⚒️ Compile and run the project

```bash
# install all the dependencies
$ npm install

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

🚨 **Warn**: The endpoint to check the swagger documentation is [/documentation](http://localhost:3000/documentation).

🚨 **Warn**: You must be sure that the postgres is running correctly before to run this api.

## 🐳 Compile and run the project by Docker Compose

If you have the [Docker](https://www.docker.com/) installed in you machine you can automate all processes of configuration, including:

- Compilation;
- Database migration;
- Environment Variables configuration;
- Postgres container installation;

In the root folder, run:

```bash
# build docker images
$ docker-compose build

# run all the docker containers
$ docker-compose up -d
```

## 🔎 Run tests

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## 🛢️ Database

```bash

# generate a new migration
db:migration:generate name=<MigrationName>

# run all migrations
db:migration:run

# revert the last migration
db:migration:revert

```

## Pattern 📂

This project follows the [DDD (Domain Driven Design)](https://fullcycle.com.br/domain-driven-design/) with [Adapter & Port Architecture](https://medium.com/the-software-architecture-chronicles/ports-adapters-architecture-d19f2d476eca):

- /src
  - /domains
    - /users
    - /orders
    - /insert new domains here...
  - /infra
    - /config
    - /database
    - /messageQueue
    - /cache
    - /http
    - /shared
