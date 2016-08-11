var mongoose = require('mongoose');
Schema = mongoose.Schema;

var TodoSchema = new Schema({
    todo: String
});

mongoose.model('Todo', TodoSchema);
var Todo = mongoose.model('Todo');

exports.get = function(cb){
    Todo.find(function(err, todos) {
        cb(todos);
    });
}

exports.save = function(data, cb){
	//console.log(req);
	var todo = new Todo(data);
    todo.save(function(err, entry) {
    	if(err)
    		console.log(err);
    	else
        	cb(entry);
    });
}    

exports.delete = function(id, cb){
	Todo.remove({_id: id}, function(err){
		if(err){
			console.log(err);
		}
		else{
		    Todo.find(function(err, todos) {
        		cb(todos);
    		});
		}
	})
}