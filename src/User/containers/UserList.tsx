import React, { Component } from 'react';
import { 
    View, Text, FlatList, 
    TouchableOpacity, StyleSheet, Button 
} from 'react-native';
import { connect } from 'react-redux';

import { User } from '../models';

// Import actions
import { getUserList, selectUser } from '../ducks';

class UserList extends Component {
    static navigationOptions = {
        title: 'Users'
    }

    // constructor(props: any) {
    //     super(props);        
    // }

    componentDidMount() {
        this.props.getUserList();
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
            <View style={{ flex: 1 }}>
                <FlatList 
                    data={ userList }
                    renderItem={(user: any) => this.renderUser(user)}
                    keyExtractor={(user, index) => index.toString()}
                />

                <Button 
                    onPress={this.props.getUserList} 
                    title='Fetch Another' 
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
        marginRight: 14,
        width: 50,
        height: 50,
        backgroundColor: 'lightblue',
        borderRadius: 100,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 18
    }
})

const mapStateToProps = (state: any) => {
    const { users } = state;
    let userList;
    
    if (users.userList.users) {
         // Short user list via firstName
        userList = users.userList.users.sort((a: User, b: User) => a.firstName.localeCompare(b.firstName));
    } 

    return { userList };
}

export default connect(mapStateToProps, { 
    getUserList, 
    selectUser 
})(UserList);