const stateDefault = {
    arrTask: [
        {taskName: ''}
    ]
}

export const TaskReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_ALL_TASK': {

            return {...state}
        }
            
        case 'MODIFY_TASK': {
            
            return {...state}
        }

        case 'DELETE_TASK': {
            
            return {...state}
        }

        case 'COMPLETE_TASK': {
            
            return {...state}
        }
    
        default: return state;
           
    }
}