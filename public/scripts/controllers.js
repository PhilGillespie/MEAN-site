app.controller('todoCtrl', ['$scope', 'todoList', 'Todo', '$rootScope', function($scope, todoList, Todo, $rootScope){
	$scope.title = "To do";
	$scope.todos = todoList;

	$rootScope.$broadcast('pageSelected', "todo");

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

app.controller('aboutCtrl', ['$rootScope', function($rootScope){
	$rootScope.$broadcast('pageSelected', "about");
}]);

app.controller('stuffCtrl', ['$rootScope', function($rootScope){
	$rootScope.$broadcast('pageSelected', "stuff");
}]);

app.controller('homeCtrl', ['$rootScope', function($rootScope){
	$rootScope.$broadcast('pageSelected', "home");
}]);

app.controller('headerCtrl', ['$scope', '$rootScope', 'User', function($scope, $rootScope, User){
	$scope.login = false;
	$scope.$on('pageSelected', function(e, val){
		$scope.selected = val;
	});

	$scope.toggleLogin = function(){
		$scope.login = !$scope.login;
	}

  	$scope.toggleClick = function(){
    	$rootScope.$broadcast("toogleDiv","");
  	};

  	$scope.checkUsername = function(){
  		var name = $scope.user.username;
  		if(name.length > 0){
			User.checkUsername(name).then(function(res){
  				console.log(res.data);
  			});
  		}
  	}

  	$scope.signUp = function(){
  		var user = angular.copy($scope.user);
  		var hash = sjcl.hash.sha256.hash(user.password);
	  	user.password = sjcl.codec.hex.fromBits(hash);
  		User.create(user).then(function(res){
  			console.log(res.data);
  		});
  	}
}]);