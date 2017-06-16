const ejs = require('ejs');
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const path = require('path');
const router = require('./routes');

let server;

export function start (conf) {
    app.set('trust proxy', true);
    app.set('views', path.join(__dirname, 'views'));
    app.engine('.html', ejs.renderFile);
    app.set('view engine', 'html');
    app.set('port', conf.port);
    app.use(favicon(path.join(__dirname, './public/favicon.ico')));
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(bodyParser.urlencoded({
        extended: false,
    }));
    app.use(router);
    server = http.createServer(app);
    server.listen(conf.port);
    server.on('error', onError);
    server.on('listening', onListening);
}

function onError (error) {
    if (error.syscall !== 'listen') throw error;
    switch (error.code) {
    case 'EACCES':
        console.error('requires elevated privileges');
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error('port is already in use');
        process.exit(1);
        break;
    default:
        throw error;
    }
}

function onListening () {
    console.log('Listening on ', server.address());
}
