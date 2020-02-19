# node-fastify-mongo-api
NodeJS Restful API starter template with TypeScript, Fastify, MongoDB, Jest and Swagger.

[![Build Status](https://travis-ci.com/gmarokov/node-fastify-mongo-api.svg?branch=master)](https://travis-ci.com/gmarokov/node-fastify-mongo-api)
[![Coverage Status](https://coveralls.io/repos/github/gmarokov/node-fastify-mongo-api/badge.svg?branch=master)](https://coveralls.io/github/gmarokov/node-fastify-mongo-api?branch=master)

## Requirements
1. Docker
2. NodeJS >= 10

## Getting started
1. Install packages:   
`npm install`
3. Run project:   
`npm run start:dev`
4. Run ESLint with Prettier for static analysis and applying consistent code formatting:   
`npm run lint`

## Testing 
Using Jest for endpoint integration testing and swaping MongoDB with in memory. 
Code coverage report generated and consumed by [Coveralls](https://coveralls.io/).   
`npm test`

## Documentation 
Using Swagger for the endpoints documentation. Swagger UI available at [http://localhost:3000/documentation](http://localhost:3000/documentation)