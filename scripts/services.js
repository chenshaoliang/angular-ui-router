angular.module('todoServices',[])
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

