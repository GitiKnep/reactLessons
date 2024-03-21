import * as actionType from '../actionType'

const myInitialState = {
    arrTask: []
}


export default function toDoReducer (state = myInitialState, action) {

    switch (action.type) {
        case actionType.SET_ALL_TASK:
            return {
                ...state,
                arrTask: action.payload
            }
            case actionType.DELETE_TASK:
                let copy=state.arrTask.filter(x=>x.id!= action.payload)
                return {
                    ...state,
                    arrTask: copy
                }
                case actionType.SET_ONE_TASK: 
                let copy2 = state.arrTask.map(x => { return (x.id == action.payload.id ? action.payload : x) })
                return {
                    ...state,
                    arrTask: copy2
                }
    }

    return state;

}

