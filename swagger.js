const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Reflex Delivery System API',
    description: 'Interactive API documentation for delivery management',
  },
  host: 'reflex-delivery-system-chi.vercel.app',
  basePath: '/api/v1',
  schemes: ['https'],
};

const outputFile = './swagger-output.json';
const routes = ['./deliveryRoutes.js'];

swaggerAutogen(outputFile, routes, doc);