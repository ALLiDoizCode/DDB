'use strict';

const Hapi = require('@hapi/hapi');
const Handler = require('./RouteHandler');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({method: 'GET', path: '/getPaymentInformation', handler: Handler.getPaymentInformation});
    server.route({method: 'GET', path: '/getUser', handler: Handler.getUser});
    server.route({method: 'POST', path: '/createUser', handler: Handler.createUser});
    server.route({method: 'PUT', path: '/updateUser', handler: Handler.updateUser});
    server.route({method: 'DELETE', path: '/deleteUser', handler: Handler.deleteUser});

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

