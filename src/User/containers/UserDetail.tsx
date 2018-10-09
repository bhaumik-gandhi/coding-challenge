import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

class UserDetail extends Component {
    render() {
        const { user } = this.props;

        return (
            <View>
                <Text>{ user.firstName + ' ' + user.lastName }</Text>
            </View>
        );
    }
}

const mapStateToProps = (state: any) => {
    const { selectedUser } = state.users;

    return { user: selectedUser }
}

export default connect(mapStateToProps)(UserDetail);