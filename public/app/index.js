var app = angular.module("app", []);

app.component('mainDir', {
        templateUrl: '/app/directives/partials/main-partial.html',
        controller: function($rootScope){
            this.createTask = function(){
                $rootScope.$broadcast('addTask');
            }
        }
});