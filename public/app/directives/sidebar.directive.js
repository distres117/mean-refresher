app.directive('sidebarDir', function(){
    return {
        scope:{},
        templateUrl: '/app/directives/partials/sidebar-partial.html',
        controller:function($scope, ApiFactory){
            $scope.setCurrent = function(list){
                ApiFactory.currentList = list;
            }
            $scope.lists = ApiFactory.getLists;
            $scope.makeList = function(){
                ApiFactory.createList($scope.newList.title);
                $scope.newList.title = '';
            }
            $scope.removeList = ApiFactory.deleteList;
        }
    };
});