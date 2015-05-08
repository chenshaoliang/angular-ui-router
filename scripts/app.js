angular.module('wlistApp',['ngRoute','todoCtrls'])

.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
}])

.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/register.html',
		controller:'RegisterCtrl'
	})
	.when('/home',{
		templateUrl:'views/home.html',
		controller:'HomeCtrl'
	})
	.when('/assigned',{
		templateUrl:'views/my-list.html',
		controller:'AssignCtrl'
	})
	.when('/today',{
		templateUrl:'views/today.html',
		controller:'TodayCtrl'
	})
	.when('/week',{
		templateUrl:'views/week.html',
		controller:'WeekCtrl'
	})
	.when('/nice',{
		templateUrl:'views/ng-nice.html',
		controller:'NiceCtrl'
	})
	.otherwise({redirectTo: '/'});
}])



