import { GET_USER_LIST } from '../types';

const INITIAL_STATE = {
    userList: []
}

export default (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case GET_USER_LIST:
            return { ...state, userList: action.payload }
        default:
            return state;
    }
}