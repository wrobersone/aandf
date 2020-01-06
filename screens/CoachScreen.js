import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { WebBrowser } from 'expo';

class CoachScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.titleText}>Alive & Free is what we want you to be, and here are some Coachisms that will keep you FREE!</Text>
                <View style={styles.bodyContainer}>
                <Text style={styles.bodyText}>What works works, what don't work don't work, and it don't make sense
                to do stuff that don't work.</Text>
          
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>To do some things you want to do, you're going to have to do some 
                    things you don't want to do well.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.highlighted}>We're not all related, but we're all family.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>All you need to do is turn right and keep straight.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>If you can't raise the children, then what else matters?</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.highlighted}>You're only one bad decision away.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>What you spend your time doing is what you get good at.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>You may not be able to do anything about the family you're in,
                    but you can do everything about the family you start.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.highlighted}>Don't let your circumstances dictate your behavior.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>There's no excuse for bad manners.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Some get it right away, some get it sooner or later, and some never
                    get it. We don't know who's who, that's why we give it to everybody.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.highlighted}>What's important is how you handle your business on a day to day basis.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>You can't do right things the wrong way. (There's no right way to do wrong).</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>It doesn't matter what name you're called, it's the one you answer to that matters.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.highlighted}>What others say about me is none of my business.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Hurting people, hurt people.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Success is the best revenge.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.highlighted}>How well you listen determines how long you live.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>You've got to believe your right is stronger than their wrong.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>If you are willing to do things right, people are willing to help you.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.highlighted}>Dare to be different.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>Good advice, bad example causes confusion.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.bodyText}>You might get by, but you won't get away.</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.midContainer}>
                    <Text style={styles.quoteText}>"...and remember, always pay attention to your background music." - Ms. Estell</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
            </View>
        );
    }
}

export default CoachScreen;

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
        fontWeight: 'bold'
    },
    contentContainer: {
        paddingHorizontal: 2,
        margin: 2,
    },
    highlighted: {
        fontSize: 17,
        color: 'rgba(120,120,120, 1)',
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
        textDecorationLine: 'underline'
    },
    titleText: {
        fontSize: 20,
        color: 'rgba(190,37,32, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold'
    },
});