import * as actionType from '../actionType'

const myInitialState = {
    arrUsers: [],
    currentUsers: null
}


export default function usersReducer (state = myInitialState, action) {

    switch (action.type) {
        case actionType.SET_ALL_USERS:
            return {
                ...state,
                arrUsers: action.payload
            }
            case actionType.SET_CURRENT_USERS:
                    return {
                        ...state,
                       currentUsers:action.payload,               
                    }
    }

    return state;

}

