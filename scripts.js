function TodoCtrl($scope) {

	//Get Todo DEMO List
	$scope.todos = [
		{text: 'Get this Coded up for Moxley Stratton', done:false},         
		{text: 'Find out if Peter Lee writes PHP too', done:false},
		{text: 'Discover how many more Tattoos does Mattyi have', done:false},
		{text: 'Find out how Seve pronounces his name', done:false},
		{text: 'Get a good conversation going with Taurie', done:false}
	];
	
	//Get Todo Count
	$scope.getTotalTodos = function () {
		return $scope.todos.length;
	};
  
	//Add Todo
	$scope.addTodo = function () {
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
	};
	
	//Delete Todo
	$scope.delTodo = function(item){ 
		//var index = $scope.todos[item];
		$scope.todos.splice(item,1);     
	};
	
	//Clear Todo
	$scope.clearCompleted = function () {
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;
		});
	};
};