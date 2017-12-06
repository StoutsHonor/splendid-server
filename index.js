const express = require('express');
const parser = require('body-parser');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const PORT = 9000;

app.use(parser.urlencoded({extended: true}))
.use(parser.json())
.use('/api', routes)
.post('/*', function(req, res) {
 console.log('Server: received POST to /*');
 res.status(201).send('server response to POST to /*');
});

//connecting mongo database
const mongoose = require('mongoose');
const keys = require('./config/keys');
const mongoLink = keys.mongoURI;
mongoose.connect(mongoLink);

//exported model
// const Hours = require('./db/models/hours');

const server = http.Server(app);
const websocket = socketio(server);
server.listen(port, function () {
  console.log(`Server: listening on ${port}`);
});