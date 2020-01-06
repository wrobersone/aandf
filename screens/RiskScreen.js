import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

class RiskScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.titleText}>Are you experiencing these?</Text>
                <View style={styles.bodyContainer}>
                    <Text style={styles.main}>Unhealthy Environment/Family</Text>
                    <Image
                  source={require('../assets/images/gallery/unhealthy.jpg')}
                  style={{ width: 300, height: 200 }}
                  />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.main}>Destructive Language</Text>
                    <Image
                  source={require('../assets/images/gallery/rage.png')}
                  style={{ width: 300, height: 200 }}
                  />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.main}>Guns - Alcohol - Drugs</Text>
                    <Image
                  source={require('../assets/images/gallery/beer.jpg')}
                  style={{ width: 300, height: 200, borderRadius: 50, resizeMode: 'contain' }}
                  />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.main}>Negative View of Women</Text>
                    <Image
                  source={require('../assets/images/gallery/negative.jpg')}
                  style={{ width: 300, height: 200 }}
                  />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.main}>"I don't give a f*** attitude!"</Text>
                    <Image
                  source={require('../assets/images/gallery/odog.jpg')}
                  style={{ width: 300, height: 200 }}
                  />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.main}>Fearship vs. Friendship</Text>
                    <Image
                  source={require('../assets/images/gallery/fearship.jpg')}
                  style={{ width: 300, height: 200 }}
                  />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.main}>Material Values over People</Text>
                    <Image
                  source={require('../assets/images/gallery/material.jpg')}
                  style={{ width: 300, height: 200 }}
                  />
                </View>
            </ScrollView>
            </View>
        );
    }
}

export default RiskScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'slategrey',
      justifyContent: 'center',
      paddingHorizontal: 2,
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
    main: {
        fontSize: 16,
        color: 'rgba(255,255,255, 1)',
        lineHeight: 24,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 20,
        color: 'rgba(255, 255, 255, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
});