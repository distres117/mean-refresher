const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
require('./models');

let conn;

module.exports = ()=>{
    if (!conn){
        conn = mongoose.connect('mongodb://localhost/todoDb');
    }
    return conn;
}