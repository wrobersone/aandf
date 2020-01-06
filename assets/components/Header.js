import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { WebBrowser } from 'expo';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (
            <View style={styles.header}>
                <Image 
                source={require('../images/download.png')}
                style={styles.logo} />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      paddingTop: 80,
    },
    logo: {
      width: 60,
      height: 50,
    },
    header: {
      height: 80,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
});  