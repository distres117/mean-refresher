const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:mongoose.Schema.Types.String,
    importance:mongoose.Schema.Types.Number,
    completed:mongoose.Schema.Types.Boolean
});
mongoose.model('Task', taskSchema);

const listSchema = new mongoose.Schema({
    title: mongoose.Schema.Types.String,
    tasks: [{type:mongoose.Schema.Types.ObjectId, ref: taskSchema}]
});
mongoose.model('List', listSchema);