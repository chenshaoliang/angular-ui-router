function TodoCtrl($scope) {
    $scope.todos = [
        {text:'Learn AngularJS', done:false},
        {text:'Build an app', done:false}
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function () {
        $scope.todos = $scope.todos.filter(function(todo){
            return !todo.done;
        })
    };

    $scope.addTodo = function () {
        if($scope.formTodoText.trim().length){
            $scope.todos.push({text:$scope.formTodoText, done:false});
            $scope.formTodoText = '';
        }
    };
}

