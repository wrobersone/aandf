import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { WebBrowser } from 'expo';

class StaffScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.titleText}>The Prescription to End Violence and Change Lives</Text>
              <View style={styles.bodyContainer}>
              <Image
                source={require('../assets/images/staff/club.jpg')}
                style={{ width: 300, height: 200, borderWidth: 3, borderRadius: 50 }}
                />
                <Button 
                  onPress={this._infoPressButtonAsync}
                  style={styles.button} 
                  title="Alive & Free Omega" 
                />
              </View>
              <View style={styles.bodyContainer}>
                  <Image
                    source={require('../assets/images/staff/cofounders.jpg')}
                    style={{ width: 300, height: 250, borderWidth: 3, borderRadius: 50 }}
                  />
                  <Text style={styles.name}>Jack Jacqua & Dr. Joseph Marshall, Co-Founders</Text>
                  
                </View>

                <View style={styles.bodyContainer}>
                  <Image
                    source={require('../assets/images/staff/andre_aikins.jpg')}
                    style={{ width: 300, height: 200, borderWidth: 3, borderRadius: 50 }}
                  />
                  <Text style={styles.position}>Mr. Andre' Aikins</Text>
                  <Text style={styles.position}>Operations Manager</Text>
                </View>

                <View style={styles.bodyContainer}>
                <Image
                  source={require('../assets/images/staff/ladye.jpg')}
                  style={{ width: 300, height: 250, borderWidth: 3, borderRadius: 50 }}
                  />
                  <Text style={styles.name}>Ms. Deborah Estell</Text>
                  <Text style={styles.name}>Leadership Academy Coordinator</Text>
                </View>
                <View style={styles.bodyContainer}>
                <Image
                  source={require('../assets/images/staff/demetra.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 3, borderRadius: 50 }}
                />
                  <Text style={styles.position}>Ms. Demetra Jones</Text>
                  <Text style={styles.position}>Math Instructor</Text>
                </View>
                <View style={styles.bodyContainer}>
                <Image
                  source={require('../assets/images/staff/mrsp.png')}
                  style={{ width: 300, height: 250, borderWidth: 3, borderRadius: 50 }}
                />
                  <Text style={styles.name}>Mrs. Debra Patterson</Text>
                  <Text style={styles.name}>Administration Manager</Text>
                </View>
                
                <View style={styles.bodyContainer}>
                  <Image
                  source={require('../assets/images/staff/af_ann.jpg')}
                  style={{ width: 300, height: 200, borderWidth: 3, borderRadius: 50 }}
                  />
                  <Text style={styles.position}>Ms. Ann Bassette</Text>
                  <Text style={styles.position}>Multimedia & Development Coordinator</Text>
                </View>
                <View style={styles.bodyContainer}>
                <Image
                  source={require('../assets/images/staff/evangela_brewster.png')}
                  style={{ width: 300, height: 250, borderWidth: 3, borderRadius: 50 }}
                />
                  <Text style={styles.name}>Ms. Evangela Brewster</Text>
                  <Text style={styles.name}>Administrative Assistant</Text>
                </View>
            </ScrollView>
            </View>
        );
    }
    _infoPressButtonAsync = async () => {
      let result = await WebBrowser.openBrowserAsync('https://vimeo.com/241928578');
      this.setState({ result });
    };
}


export default StaffScreen;

const styles = StyleSheet.create({
    container: {
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
      color: 'blue',
      padding: 2,
    },
    contentContainer: {
        paddingHorizontal: 2,
        margin: 2,
    },
    infoText: {
      fontSize: 16,
      color: 'rgba(0,0,255, 1)',
      lineHeight: 24,
      textAlign: 'center',
      textDecorationLine: 'underline'
    },
    name: {
        fontSize: 16,
        color: 'rgba(190,37,32, 1)',
        lineHeight: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    position: {
      fontSize: 16,
      color: 'rgba(0,0,0, 1)',
      lineHeight: 24,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    titleText: {
        fontSize: 24,
        color: 'rgba(190,37, 22, 1)',
        lineHeight: 24,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});