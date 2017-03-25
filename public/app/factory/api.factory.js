app.factory('ApiFactory', function($http){
    return {
        fetchTasks: function(listId){
            return $http.get('/api/lists/'+ listId +'/tasks' );
        }
    }
})