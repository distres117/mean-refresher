app.directive('taskDir', function(){
    return {
        templateUrl: '/app/directives/partials/task-partial.html',
        scope:{
            task:'='
        },
        controller:function($scope, ApiFactory){
            
        }
    }
})