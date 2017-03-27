app.component('listDir', {
        templateUrl: '/app/directives/partials/list-partial.html',
        controller:function(ApiFactory, $rootScope){
            var self = this;
            this.getCurrent = getCurrent;
            this.invalid = function(){
                return listForm.title.$dirty && listForm.title.$invalid;
            }
            $rootScope.$on('addTask', function(){
                var id = getCurrent().id;
                var title = self.newTask.title;
                if (title && id !== null)
                    ApiFactory.createTask(id,title);
            });
            function getCurrent(){
                return ApiFactory.currentList;
            }
        }
})
.filter('completed', function(){
    return function(input,isComplete){
        if (!input)
            return;
        return input.filter(function(i){
            return i.done === isComplete;
        })
    }
})