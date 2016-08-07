app.factory('Todo', function($http){
    var service = {};
	service.get = function(){
		return $http.get('api/todos').then(function(res){
			return res.data;
		});
	}, 
	service.create = function(newTodo){
		return $http.post('api/todos', {todo: newTodo})
		.success(function (data, status, headers, config) {
			return data;
		})
		.error(function (data, status, headers, config) {
			return {"status": false};
		});
	},
	service.delete = function(id){
		return $http.delete('api/todos/'+id)
		.success(function (data, status, headers, config) {
			return data;
		})
		.error(function (data, status, headers, config) {
			return {"status": false};
		});
	}
	return service;
});