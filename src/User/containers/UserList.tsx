import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

// Import actions
import { getUserList, selectUser } from '../ducks';

class UserList extends Component {
    static navigationOptions = {
        title: 'Users'
    }

    constructor(props: any) {
        super(props);
        props.getUserList();
    }

    goToUserDetailPage = (user: User) => {
        this.props.selectUser(user, this.props.navigation);
    }

    renderUser = (user: any) => {
        const { item } = user;
        return <View>
            <TouchableOpacity onPress={() => this.goToUserDetailPage(item)}>
                <Text>
                    {item.firstName + ' ' + item.lastName}
                </Text>
            </TouchableOpacity>
        </View>
    }

    render() {
        const { userList } = this.props;

        if (!userList) {
            return <View><Text>Loading...</Text></View>
        }

        return (
            <View>
              <FlatList 
                data={ userList }
                renderItem={(user: any) => this.renderUser(user)}
                keyExtractor={(user, index) => index.toString()}
              />  
            </View>
        );
    }
}

const mapStateToProps = (state: any) => {
    const { users } = state;   

    return { userList: users.userList.users }
}

export default connect(mapStateToProps, { 
    getUserList, 
    selectUser 
})(UserList);