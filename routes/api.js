var express = require('express');
var router = express.Router();
var todo = require('../api/todo');
var users = require('../api/users');

router.route('/todos')
	.get(function(req, res){
		todo.get(function(todos){
			res.send(todos);
		});
	})

	.post(function(req, res){
		todo.save(req.body, function(todo){
			res.send(todo);
		});
	});

router.route('/todos/:id')
	.delete(function(req, res){
		todo.delete(req.params.id, function(todos){
			res.send(todos);
		});
		//console.log(req.params.id);
	});

router.route('/users/create')
	.post(function(req, res){
		users.create(req.body.user, function(user){
			res.send(user);
		});
	});

router.route('/users/get')
	.post(function(req, res){
		users.get(req.body, function(user){
			res.send(user);
		});
	});

router.route('/users/get/:name')
	.get(function(req, res){
		users.checkUsername(req.params.name, function(val){
			res.send(val);
		});
	});

module.exports = router;