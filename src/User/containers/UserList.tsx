import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { User } from '../models';

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
        const { listNameStyle, shortNameContainer, textStyle } = styles;

        return (
            <View style={listNameStyle}>
                <View style={shortNameContainer}>
                    <Text style={textStyle}>
                        {item.firstName[0] + item.lastName[0]}
                    </Text>
                </View>

                <TouchableOpacity onPress={() => this.goToUserDetailPage(item)}>
                    <Text style={textStyle}>
                        {item.firstName + ' ' + item.lastName}
                    </Text>
                </TouchableOpacity>
            </View>
        );
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

const styles = StyleSheet.create({
    listNameStyle: {
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center'
    },
    shortNameContainer: {
        flexDirection: 'row',
        marginRight: 12,
        width: 50,
        height: 50,
        backgroundColor: 'lightblue',
        borderRadius: 100,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 18
    }
})

const mapStateToProps = (state: any) => {
    const { users } = state;   

    return { userList: users.userList.users }
}

export default connect(mapStateToProps, { 
    getUserList, 
    selectUser 
})(UserList);