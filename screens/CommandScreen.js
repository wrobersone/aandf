import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
// import { LinearGradient } from 'expo';

class CommandScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.titleText}>At Risk & Unaware?</Text>
            <Text style={styles.titleText}>Are you living by these?</Text>
                <View style={styles.bodyContainer}>
                <Text style={styles.bodyText}>Thou shalt not snitch</Text>
          
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Thou shalt handle thy business</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Thou shalt do what thy gotta do</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Thou shalt get girls/get a man</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Thou shalt not be no punk</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Thou shalt get thy respect</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Thou shalt get thy money on</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Thou shalt put in work</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Thou shalt carry a gun for protection</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Thou shalt recruit</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Thou shalt be down for thy set/hood/crew</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Thou shalt be down for thy homeboy/homegirl right or wrong</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.quoteText}>"If you find yourself thinking like this...stop 
                    and check yourself before you wreck yourself!" - Jack Jacqua</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
            </View>
        );
    }
}

export default CommandScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingHorizontal: 2,
    },
    bodyContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
        padding: 10,
        marginTop: 20,
    },
    bodyText: {
        fontSize: 17,
        color: 'rgba(0,0,0, 1)',
        lineHeight: 24,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    contentContainer: {
        paddingHorizontal: 2,
        margin: 2,
    },
    highlighted: {
        fontSize: 18,
        color: 'rgba(255,255,255, 1)',
        lineHeight: 24,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    introContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    midContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    quoteText: {
        fontSize: 17,
        color: 'rgba(190,32,37, 1)',
        lineHeight: 24,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 20,
        color: 'rgba(190,37,32, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
});