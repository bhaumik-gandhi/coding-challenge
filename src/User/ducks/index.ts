import { GET_USER_LIST, SELECT_USER } from '../types';
import gqlClient from '../../GraphQL';
import { GET_USERS } from '../queries'
import { User } from '../models';


// Get users from mock graphql
export const getUserList = () => {
    return async (dispatch: any) => {
        try {
            const usersData = await gqlClient.query({
                query: GET_USERS
            });

            dispatch({
                type: GET_USER_LIST,
                payload: usersData.data
            })
        } catch (e) {
            console.error(e);
        }
    }
}

// Select user action
export const selectUser = (user: User, navigation: any)=> {
    return (dispatch: any) => {
        dispatch({
            type: SELECT_USER,
            payload: user
        });
        
        navigation.navigate('UserDetail', {});
    }
}