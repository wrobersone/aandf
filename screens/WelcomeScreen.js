import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, ScrollView } from 'react-native';
import { WebBrowser } from 'expo';
import Header from '../assets/components/Header';

class WelcomeScreen extends Component {
    render() {
      return (
        <ImageBackground 
          source={require('../assets/images/AF_Logo_Tagline.jpg')}
          style={styles.wallpaper}>
          <Header />
          
          <View style={styles.container}>
            <ScrollView>
              <View style={styles.button}>
              <Button title="Alive & Free Rx" 
                      onPress={() => this.props.navigation.navigate('Home')}/>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      );
    }
  }

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    introContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    bodyContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
        padding: 10,
        marginTop: 20,
    },
    contentContainer: {
        paddingHorizontal: 2,
        margin: 2,
    },
    link: {
      fontSize: 16,
      color: 'rgba(255,0,0, 1)',
      lineHeight: 24,
      textAlign: 'center',
      fontStyle: 'italic',
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
    main: {
        fontSize: 16,
        color: 'rgba(0,0,0, 1)',
        lineHeight: 24,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 20,
        color: 'rgba(0,0, 0, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
});