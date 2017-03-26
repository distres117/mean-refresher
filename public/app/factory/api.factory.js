function Task(title) {
    this.title = title;
    this.done = false;
}

function List(id, title) {
    this.id = id;
    this.title = title;
    this.tasks = [];
}
app.factory('ApiFactory', function ($http) {
    var lists = [];
    var listId = 0;

    function getList(id) {
        return lists.filter(function (l) {
            return id === l.id
        })[0];
    }
    return {
        currentList:null,
        createTask: function (listId, title) {
            var list = getList(listId);
            if (list) {
                var task = new Task(title);
                list.tasks.push(task);
                return task;
            }
            console.error('list not found');
        },
        createList: function (title) {
            var list = new List(listId++, title);
            lists.push(list);
            return list;
        },
        deleteList: function(id){
            var list = getList(id);
            lists.splice(lists.indexOf(list),1);
        },
        getLists: function(){
            return lists;
        }
    }
})

