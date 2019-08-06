const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');


mongoose.connect('mongodb+srv://usuario:usuario@cluster0-ehilu.mongodb.net/zack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(3333);