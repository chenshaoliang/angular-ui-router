<<<<<<< HEAD
angular.module('wlistApp')
=======
angular.module('qinshanApp')
>>>>>>> 94fdca8c25771e9f41d1e6cbc1c9475a74649a0c
.directive('ngEnter',function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
})
// .directive('wActive',function(){
	
// })