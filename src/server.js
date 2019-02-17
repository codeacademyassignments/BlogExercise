const hapi = require('hapi');

const server = hapi.server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});


server.route({
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  method: 'POST',
  path: '/createPost',
  handler: (request, h) => {
    console.log(request);
    console.log(request.payload);
    return h.response('success');
  },

});

server.start();
console.log(`Server running at: ${server.info.uri}`);
