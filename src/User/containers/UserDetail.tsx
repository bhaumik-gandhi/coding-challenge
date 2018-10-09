import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Address } from '../models';

class UserDetail extends Component {

    renderAddress(address: Address) {
        const { firstLine, city, country, geo } = address;
        const { lat, lon } = geo;

        return (
            <View>
                {this.renderUserDetail('Address', firstLine)}
                {this.renderUserDetail('City', city)}
                {this.renderUserDetail('Country', country)}
                {this.renderUserDetail('Lat', lat)}
                {this.renderUserDetail('Lon', lon)}
            </View>
        )
    }

    renderUserDetail(label: string, value: string | number) {
        const { textStyle, textContainer, labelContainer } = styles;

        return <View style={ textContainer }>
            <Text style={[ textStyle, labelContainer ]}>{label + ': '}</Text>
            <Text style={ textStyle }>{value}</Text>
        </View>
    }

    render() {
        const { user, navigation } = this.props;
        const { 
            container, 
            textContainer, 
            detailContainer,
            nameText,
            buttonStyle,
            nameContainer
        } = styles;

        return (
            <View style={container}>
                <View style={ detailContainer}>
                    <View style={[ textContainer,nameContainer ]}>
                        <Text style={ nameText }>
                            { user.firstName + ' ' + user.lastName }
                        </Text>
                    </View>
                    {this.renderUserDetail('Phone', user.phone.replace(/-/g, ' '))}
                    {this.renderUserDetail('Email', user.email)}
                    {this.renderAddress(user.address)}
                </View>

                <View style={buttonStyle}>
                    <Button
                        title='Go Back'
                        onPress={ () => navigation.goBack() }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    detailContainer: {
        marginTop: 25
    },
    nameContainer: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    nameText: {
        fontSize: 24,
        fontWeight: '900'
    },
    textContainer: {
        flexDirection: 'row',
        padding: 5
    },
    textStyle: {
        fontSize: 16
    },
    buttonStyle: {
        flex: 1,
        marginTop: 10
    },
    labelContainer: {
        width: 100,
        fontWeight: '600'
    }
});

const mapStateToProps = (state: any) => {
    const { selectedUser } = state.users;

    return { user: selectedUser }
}

export default connect(mapStateToProps)(UserDetail);