import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import RiskScreen from './RiskScreen';

class RulesScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.titleText}>Are you following these?</Text>
              <View style={styles.bodyContainer}>
              <Text style={styles.main}>1. There is nothing more valuable than an individual's life.</Text>
        
              <View style={styles.introContainer}>
                <View style={styles.contentContainer}>
                  <Text style={styles.main}>2. Respect comes from within.</Text>
                </View>
              </View>
              <View style={styles.introContainer}>
                  <View style={styles.contentContainer}>
                  <Text style={styles.main}>3. Change begins with the individual.</Text>
                  </View>
              </View>
              <View style={styles.introContainer}>
                  <View style={styles.contentContainer}>
                  <Text style={styles.main}>4. A friend will never lead you to danger.</Text>
                  </View>
              </View>
              
            </View>

            <Text style={styles.titleText}>Are you experiencing these?</Text>
                <View style={styles.bodyContainer}>
                    <Text style={styles.main}>Unhealthy Environment/Family</Text>
                    <Image
                  source={require('../assets/images/gallery/unhealthyfam.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                  />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.main}>Destructive Language</Text>
                    <Image
                  source={require('../assets/images/gallery/mean.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50, resizeMode: 'center' }}
                  />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.main}>Guns - Alcohol - Drugs</Text>
                    <Image
                  source={require('../assets/images/gallery/alcohol.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                  />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.main}>Negative View of Women</Text>
                    <Image
                  source={require('../assets/images/gallery/vow.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                  />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.main}>"I don't give a f*** attitude!"</Text>
                    <Image
                  source={require('../assets/images/gallery/idgaf.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                  />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.main}>Fearship vs. Friendship</Text>
                    <Image
                  source={require('../assets/images/gallery/destruct.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                  />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.main}>Material Values over People</Text>
                    <Image
                  source={require('../assets/images/gallery/material.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                  />
                </View>
            </ScrollView>
            </View>
        );
    }
}

export default RulesScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
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
    button: {
      backgroundColor: '#fff',
      borderRadius: 8,
    },
    contentContainer: {
        paddingHorizontal: 2,
        margin: 2,
    },
    main: {
        fontSize: 17,
        color: 'rgba(0,0,0, 1)',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 20,
        color: 'rgba(190, 37, 32, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
});