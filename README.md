# node-fastify-mongo-api
Node.js Restful API starter template with TypeScript, Fastify, MongoDB, Jest and Swagger.

[![Build Status](https://travis-ci.com/gmarokov/node-fastify-mongo-api.svg?branch=master)](https://travis-ci.com/gmarokov/node-fastify-mongo-api)
[![Coverage Status](https://coveralls.io/repos/github/gmarokov/node-fastify-mongo-api/badge.svg?branch=master)](https://coveralls.io/github/gmarokov/node-fastify-mongo-api?branch=master)

## Requirements
1. Node.js >= 10
2. Docker

## Getting started
1. Install packages:   
`npm install`
3. Run project:   
`npm run start:dev`
4. Run ESLint with Prettier for static analysis and applying consistent code formatting:   
`npm run lint`

## Testing 
Using Jest for endpoint integration testing and swapping MongoDB with in memory mongo server. 
Code coverage report generated and consumed by [Coveralls](https://coveralls.io/).   
1. Run tests with coverage:   
`npm test`

## Documentation 
Using Swagger for the endpoints documentation. Swagger UI available at [http://localhost:3000/documentation](http://localhost:3000/documentation)
Additional Postman collection attached to repository. 