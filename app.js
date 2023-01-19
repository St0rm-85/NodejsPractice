//const { create } = require('domain');
//const routes = require('./routes');

const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {});

const server = http.createServer(app);

server.listen(3000);