angular.module('todoCtrls',[])
.controller('sliderCtrl',['$scope',function($scope){
	$scope.surname = {
		id1:'csl1',
		id2:'csl2',
		id3:'csl3',
		id4:'csl4',
	}
	$scope.username = "陈韶良",
	$scope.menu = {
		id:'action',
		name:'another action',
		func:'something else here'
	};
	
	// search
	$scope.searchFunc = false;
	$scope.search = function(){
		$scope.searchFunc = true;
	}
	$scope.searchClose = function(){
		$scope.searchFunc = false;
	}

	// 导航
	$scope.btnState=1;
	$scope.sliClick = function(state){
		$scope.btnState = state
	}

	// date




}])

.controller('HomeCtrl',['$scope',function($scope){
	$scope.btnState=1;
  	$scope.todos = [];

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

    
    

}])
.controller('AssignCtrl',['$scope',function($scope){
	$scope.btnState=1;
  	$scope.todos = [
  		{text:'Assigntest1',id:'11'},
  		{text:'Assigntest2',id:'12'}
  	];

    $scope.getTotalTodos2 = function () {
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

}])
.controller('TodayCtrl',['$scope',function($scope){
	$scope.btnState=1;
  	$scope.todos = [
  		{text:'todaytest1',id:'1'},
  		{text:'todaytest2',id:'12'},
  		{text:'todaytest3',id:'123'}
  	];

    $scope.getTotalTodos3 = function () {
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
}])
.controller('WeekCtrl',['$scope',function($scope){
	$scope.btnState=1;
  	$scope.todos = [
  		{text:'weektest1',id:'11'},
  		{text:'weektest2',id:'12'},
  		{text:'weektest3',id:'12'},
  		{text:'weektest4',id:'332'},
  		{text:'weektest4',id:'332'},
  		{text:'weektest4',id:'332'}
  		
  	];

    $scope.getTotalTodos4 = function () {
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

.controller('NiceCtrl',['$scope',function($scope){
// jindutiao
  // 进度条
  var vm = $scope.vm = {};
      vm.value = 50;
      vm.style = 'progress-bar-info';
      vm.showLabel = true;

// jinggao
      //警告类型
        vm.types = [
          'alert-success',
          'alert-info',
          'alert-warning',
          'alert-danger'
        ];

        vm.alerts = [
          {type:'alert-success',msg:'操作成功,请继续下一步!'},
          {type:'alert-danger',msg:'提交失败,修改内容并尝试重新提交!'},
        ];
        //删除单条警告
        vm.closeAlert = function (index) {
          vm.alerts.splice(index, 1);
        };
        //添加新警告
        vm.addAlert = function (type, msg) {
          if (type === undefined || msg === undefined) {
            vm.alerts.push({
              type:'alert-warning',
              msg:'类型和内容不能为空.'
            });
          } else {
            vm.alerts.push({
              type:type,
              msg:msg
            });
          } 
        };

}])

