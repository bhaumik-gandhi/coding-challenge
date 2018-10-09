import { GET_USER_LIST, SELECT_USER } from '../types';

const INITIAL_STATE = {
    userList: [],
    selectedUser: {}
}

export default (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case GET_USER_LIST:
            return { ...state, userList: action.payload }

        case SELECT_USER: 
            return { ...state, selectedUser: action.payload }
            
        default:
            return state;
    }
}