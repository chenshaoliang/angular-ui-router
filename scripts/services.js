angular.module('wlistApp')
.factory('JsonSer',['$q','$resource', function( $q, $resource){
    return $resource('scripts/json/json2.json', {id: '@id'},{

        update:{
            method: "GET",
            transformResponse: function(data, headerFn) {
                // console.log(data);
                return JSON.parse(data);
            }
        }
   });

}])
.factory('DownService', ['$q','JsonSer', function($q, JsonSer){
    return function() {
        var delay = $q.defer();

        JsonSer.update(function(data){
            delay.resolve(data);
        }, function(data){
            delay.reject('Unable');
        })
        return delay.promise;
    };
}])


.factory('AddId', ['$http','$q', function($http, $q){
    return function() {
        var delay = $q.defer();
        $http.get('scripts/json/json2.json')
            .success(function(data){
                console.log(data);
                delay.resolve(data);
            })
            .error(function(data){
                delay.reject('Failed');
            });
        return delay.promise;
    }
}])
.factory('AddTask', ['$http', '$q', function($http, $q){
    var create = function(data) {
        var delay = $q.defer();
        $http({
            method: 'POST',
            url: 'scripts/json/json2.json',
            data: data
        }).success(function(data){
            delay.resolve({'code': 200});
        }).error(function(data){
            delay.reject('Failed')
        });
        return delay.promise;
    };

    return {
        create: create
    }
}])

.factory('todofac',function(){
    var s = {
        total: 0, 
        get: function(){
            return s.total;
        },
        set: function(num) {
            s.total = num;
        }
    };
    return s;
})

