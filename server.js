const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    db = require('./db'),
    path = require('path'),
    mongoose = require('mongoose'),
    List = mongoose.model('List'),
    Task = mongoose.model('Task');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('bower_components'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/api/lists/:id/tasks',(req,res)=>{
    List.findById(req.params.id).populate('tasks')
    .then(tasks =>{
        res.json(tasks);
    })
});
app.get('/api/lists/:id',(req,res)=>{
    List.findById(req.params.id)
    .then(list =>{
        res.json(list);
    }) 
});
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

db().then(()=>{
    console.log('Db is connected');
    app.listen(3000,()=>{
        console.log('Server is running...');
    })
})