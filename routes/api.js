var express = require('express');
var router = express.Router();
var api = require('../api/todo');

router.route('/todos')
	.get(function(req, res){
		api.get(function(todos){
			res.send(todos);
		});
	})

	.post(function(req, res){
		api.save(req.body, function(todo){
			res.send(todo);
		});
	});

router.route('/todos/:id')
	.delete(function(req, res){
		api.delete(req.params.id, function(todos){
			res.send(todos);
		});
		//console.log(req.params.id);
	});

module.exports = router;