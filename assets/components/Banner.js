import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Banner extends React.Component {
    render() {

        // const { navigate } = this.props.navigation;
        return (
            <Image source={require('../images/alumni/30year.jpg')}
                style={styles.banner} />
        );
    }
}

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: 201,
        alignItems: 'center',
        justifyContent: 'center',
    }
});  