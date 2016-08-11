app.factory('Todo', ['$http', function($http){
	return {
		get: function(){
			return $http.get('api/todos').then(function(res){
				return res.data;
			});
		}, 
		create: function(newTodo){
			return $http.post('api/todos', {todo: newTodo})
			.success(function (data, status, headers, config) {
				return data;
			})
			.error(function (data, status, headers, config) {
				return {"status": false};
			});
		},
		delete: function(id){
			return $http.delete('api/todos/'+id)
			.success(function (data, status, headers, config) {
				return data;
			})
			.error(function (data, status, headers, config) {
				return {"status": false};
			});
		}
	};
}]);

app.factory('User', ['$http', function($http){
	return{
		create: function(newUser){
			return $http.post('api/users/create', {user: newUser})
			.success(function (data, status, headers, config){
				return data;
			})
			.error(function(){
				return {"status": false};
			})
		},
		
		get: function(data){
			return $http.post('api/users/get', {user: data})
		},

		checkUsername: function(name){
			return $http.get('api/users/get/'+name)
			.success(function (data, status, headers, config) {
				return data;
			})
			.error(function (data, status, headers, config) {
				return {"status": false};
			});
		}
	}
}]);