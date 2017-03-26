const mongoose = require('mongoose'),
    db = require('./index'),
    List = mongoose.model('List'),
    Task = mongoose.model('Task');

db()
.then(()=>{
    return mongoose.connection.db.dropDatabase();
})
.then(()=>{
   return List.create({title:'Test list'}); 
})
.then(list=>{
    return Promise.all([
        Task.create({title:'Do the laundry'}),
        Task.create({title:'Walk the dog'})
    ]);
})
.then(()=>{
    console.log('Db seeded...');
    process.exit(0);
});