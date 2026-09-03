const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Reflex Delivery System API',
    description: 'Interactive API documentation for delivery management',
  },
  host: 'reflex-delivery-system-chi.vercel.app',
  schemes: ['https'],
};

const outputFile = './swagger-output.json';
const routes = ['./server.js']; // Points strictly to server.js to prevent duplicate route listings

swaggerAutogen(outputFile, doc, routes);