/**
 * Created by May on 2016/3/15.
 */
define("taskListController",["taskListService"],function (taskListService) {
    cono
    return {
        queryTaskList:queryTaskList
    };

    function queryTaskList (){

        taskListService.queryTaskList();
    }
});
