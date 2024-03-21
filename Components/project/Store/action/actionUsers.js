import * as actionType from '../actionType'
export function setAllUsers(arrUsers) {
    return {
        type: actionType.SET_ALL_USERS,
        payload: arrUsers
}
}


export function setCurrentUsers(user){
    return{
        type:actionType.SET_CURRENT_USERS,
        payload: user

    }
}