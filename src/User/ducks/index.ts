import { GET_USER_LIST } from '../types';
import gqlClient from '../../GraphQL';
import { GET_USERS } from '../queries'

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