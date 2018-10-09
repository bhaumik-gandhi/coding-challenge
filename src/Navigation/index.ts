import { createStackNavigator } from 'react-navigation';

import UserList from '../User/containers/UserList';
import UserDetail from '../User/containers/UserDetail'

const MainStack = createStackNavigator({
    UserList
})

const RootStack = createStackNavigator(
    {
        Users: MainStack,
        UserDetail
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);

export default RootStack;