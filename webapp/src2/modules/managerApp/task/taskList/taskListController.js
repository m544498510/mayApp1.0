/**
 * Created by May on 2016/3/15.
 */
define("taskListController",["taskListService"],function (taskListService) {
    return {
        queryTaskList:queryTaskList
    };
dasd
    function queryTaskList (){

        taskListService.queryTaskList();
    }
});
