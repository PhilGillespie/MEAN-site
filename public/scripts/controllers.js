app.controller('todoCtrl', ['$scope', 'todoList', 'Todo', function($scope, todoList, Todo){
	$scope.title = "To do";
	$scope.todos = todoList;

	$scope.addTodo = function(){
		Todo.create($scope.newTodo).then(function(res){
			$scope.todos.push(res.data);
			$scope.newTodo = null;
		});
	}

	$scope.deleteTodo = function(id){
		Todo.delete(id).then(function(res){
			$scope.todos = res.data;
		});
	}
}]);