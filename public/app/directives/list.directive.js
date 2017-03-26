app.directive('listDir', function(){
    return{
        scope:{},
        templateUrl: '/app/directives/partials/list-partial.html',
        controller:function($scope, ApiFactory, $rootScope){
            $scope.getCurrent = function(){
                return ApiFactory.currentList;
            }
            $rootScope.$on('addTask', function(){
                var id = $scope.getCurrent().id;
                var title = $scope.newTask.title;
                if (title && id !== null)
                    ApiFactory.createTask(id,title);
            });
        }
    }
})
.filter('completed', function(){
    return function(input,isComplete){
        return input.filter(function(i){
            return i.done === isComplete;
        })
    }
})