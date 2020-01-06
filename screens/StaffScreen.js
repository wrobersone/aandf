import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

class StaffScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.titleText}>Our Mission: To keep young people alive & free, unharmed by violence, and free from incarceration.</Text>
              <View style={styles.bodyContainer}>
              
                <Image
                  source={require('../assets/images/staff/leadership.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                />
                <Text style={styles.main}>Leadership Academy Life Skills</Text>
              </View>
              <View style={styles.bodyContainer}>
                  <Image
                source={require('../assets/images/staff/demetramath.jpg')}
                style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                />
                <Text style={styles.main}>Leadership Academy - Math</Text>
              </View>
              <View style={styles.bodyContainer}>
                  <Image
                source={require('../assets/images/staff/familymeeting.jpg')}
                style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                />
                <Text style={styles.main}>Family Meeting - Dr. Marshall</Text>
              </View>
              <View style={styles.bodyContainer}>
                <Image
                source={require('../assets/images/radio.jpg')}
                style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                />
                <Text style={styles.main}>Street Soldiers Radio</Text>
              </View>
              <View style={styles.bodyContainer}>
                  <Image
                  source={require('../assets/images/staff/trainingins.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                  />
                  <Text style={styles.main}>Training Institute</Text>
              </View>
              <View style={styles.bodyContainer}>
                <Image
                  source={require('../assets/images/alumni/bbq.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                  />
                  <Text style={styles.main}>Alumni BBQ & Friends</Text>
                </View>
                <View style={styles.bodyContainer}>
                  <Image
                  source={require('../assets/images/alumni/Benefactors-Reception.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                  />
                  <Text style={styles.main}>Benefactors Reception</Text>
                </View>
                <View style={styles.bodyContainer}>
                  <Image
                    source={require('../assets/images/undergrad/careerday.jpg')}
                    style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                />
                  <Text style={styles.main}>Career Day</Text>
                </View>
                <View style={styles.bodyContainer}>
                  <Image
                  source={require('../assets/images/alumni/kwanzaa2.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                  />
                  <Text style={styles.main}>Kwanzaa Celebration</Text>
                </View>
              
              <View style={styles.bodyContainer}>
                    <Image
                  source={require('../assets/images/staff/Jackday.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 2, borderRadius: 50 }}
                  />
                  <Text style={styles.main}>Jack Jacqua Day</Text>
              </View>
            </ScrollView>
            </View>
        );
    }
}

export default StaffScreen;

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
    contentContainer: {
        paddingHorizontal: 2,
        margin: 2,
    },
    link: {
      fontSize: 16,
      color: 'rgba(255,255,0, 1)',
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
        fontSize: 16,
        color: 'rgba(190,37, 32, 1)',
        lineHeight: 24,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});