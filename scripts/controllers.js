angular.module('wlistApp')
.controller('sliderCtrl',['$scope','$http','todofac',function($scope,$http,todofac){

    $http.get('scripts/json/json2.json')
        .success(function(data){
            $scope.wlists = data.data;
            console.log($scope.wlists)
        })
        .error(function(err){
            console.log('err')
        })

	// search
	$scope.searchFunc = false;
	$scope.search = function(){
		$scope.searchFunc = true;
	}
	$scope.searchClose = function(){
		$scope.searchFunc = false;
	}

	// 导航
	$scope.btnState=100;
	$scope.sliClick = function(state){
		$scope.btnState = state
	}

    $scope.totals = todofac.total;
    console.log($scope.totals);

}])

.controller('HomeCtrl',['$scope','$http','JsonSer','task','adds','AddTask','todofac',
    function($scope,$http,JsonSer,task,adds,AddTask,todofac){
	
    $scope.wlists = task.data;
    console.log($scope.wlists);

    $scope.totals = todofac.total;
    console.log($scope.totals);

// adds
    $scope.addserver = {};
    $scope.add = {};
    $scope.addserver['adds'] = adds;
     // console.log($scope.addserver[])
    $scope.addtask = function(){
        console.log(333)
        AddTask.create($scope.add).then(function(result){
            $location.path();
            console.log(222)
        },function(err){
            console.log(err);
        })
    }
    

}])
.controller('AssignCtrl',['$scope','todofac',function($scope,todofac){
	
  	$scope.todos = [
  		{text:'Assigntest1',id:'11'},
  		{text:'Assigntest2',id:'12'}
  	];


}])
.controller('TodayCtrl',['$scope',function($scope){
	
  	$scope.todos = [
  		{text:'todaytest1',id:'1'},
  		{text:'todaytest2',id:'12'},
  		{text:'todaytest3',id:'123'}
  	];

}])
.controller('WeekCtrl',['$scope',function($scope){

  	$scope.todos = [
  		{text:'weektest1',id:'11'},
  		{text:'weektest2',id:'12'},
  		{text:'weektest3',id:'12'},
  		{text:'weektest4',id:'332'},
  		{text:'weektest4',id:'332'},
  		{text:'weektest4',id:'332'}
  		
  	];

    // $scope.getTotalTodos4 = function () {
    //     return $scope.todos.length;
    // };

    // $scope.clearCompleted = function () {
    //     $scope.todos = $scope.todos.filter(function(todo){
    //         return !todo.done;
    //     })
    // };

    // $scope.addTodo = function () {
    //     if($scope.formTodoText.trim().length){
    //         $scope.todos.push({text:$scope.formTodoText, done:false});
    //         $scope.formTodoText = '';
    //     }
    // };
}])
.controller('RegisterCtrl',['$scope',function($scope){
    var vm = $scope.vm = {
            show_error: true,
            show_type: 2,
            user: {}
        };

        vm.submit = function (basic_form) {
            vm.show_error = true;
            basic_form.$setDirty();
            if(basic_form.$valid){
                alert(basic_form.$valid);
            }
        };

        vm.change_show_type = function (form) {
            if (vm.show_type == 2) {
                vm.show_error = false;
            } else {
                vm.show_error = true;
            }
            
            // 重置表单
            vm.user = {};
            form.$setPristine();
        }

}])

.controller('shareCtrl',['$scope',function($scope){

}])

