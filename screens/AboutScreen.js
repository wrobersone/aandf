import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import Banner from '../assets/components/Banner';
import Content from '../assets/components/Content';

class AboutScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Banner />
        <Content />
              
      </ScrollView>
    )
  }
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#000',
      justifyContent: 'center',
      paddingHorizontal: 2,
    },
});