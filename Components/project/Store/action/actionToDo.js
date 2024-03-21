import * as actionType from '../actionType'
export function setAllTask(arrTask) {
    return {
        type: actionType.SET_ALL_TASK,
        payload:arrTask
}
}


export function deleteTask(idTask){
    return{
        type:actionType.DELETE_TASK,
        payload:idTask

    }
}
export function setOneTask(task){
    return{
        type:actionType.SET_ONE_TASK,
        payload:task

    }
}