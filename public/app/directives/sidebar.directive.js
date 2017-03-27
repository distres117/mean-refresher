app.component('sidebarDir', {
        templateUrl: '/app/directives/partials/sidebar-partial.html',
        controller:function($scope, ApiFactory){
            var self = this;
            this.setCurrent = function(list){
                ApiFactory.currentList = list;
            }
            this.lists = ApiFactory.getLists;
            this.makeList = function(){
                ApiFactory.createList(self.newList.title);
                self.newList.title = '';
            }
            this.removeList = ApiFactory.deleteList;
        }
});