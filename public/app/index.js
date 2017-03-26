var app = angular.module("app", []);

app.directive('mainDir', function(){
    return {
        templateUrl: '/app/directives/partials/main-partial.html',
        controller: function($scope, $rootScope){
            $scope.createTask = function(){
                $rootScope.$broadcast('addTask');
            }
        }
    }
});