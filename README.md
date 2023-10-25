# node-fastify-mongo-api
Node.js Restful API starter template with TypeScript, Fastify, MongoDB, Jest and Swagger.

[![Build status](https://github.com/gmarokov/node-fastify-mongo-api/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/gmarokov/node-fastify-mongo-api/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/gmarokov/node-fastify-mongo-api/badge.svg?branch=main)](https://coveralls.io/github/gmarokov/node-fastify-mongo-api?branch=main)

## Requirements
1. Node.js >= 10
2. Docker

## Getting started
1. Install packages:   
`npm install`

3. Run project:   
`npm run start:dev`

## Testing 
Using Jest for endpoint integration testing and swapping MongoDB with In Memory Mongo server. 
Code coverage report generated and consumed by [Coveralls](https://coveralls.io/).   
1. Run tests with coverage:   
`npm run test`

## Additional information
- Pre-commit hook is configured to run ESLint and Prettier before each commit with Husky.
- Debug configuration for VS Code is included.

## Documentation 
Using Swagger for the endpoints documentation. Swagger UI available at [http://localhost:3000/docs](http://localhost:3000/docs).   
Additional Postman collection attached to repository. 
