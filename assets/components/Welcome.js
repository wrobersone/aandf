import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import HomeScreen from '../../screens/HomeScreen';

export default class Welcome extends React.Component {
    render() {
        return (
            <ScrollView>
                <HomeScreen />
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
});
  