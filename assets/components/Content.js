import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
// import { WebBrowser } from 'expo';
import CustomImage from './CustomImage';


export default class Content extends React.Component {
    render() {
        return (
            <View style={styles.content}>

                <View style={styles.col2}>
                    <CustomImage imageSource={require('../images/alumni/barbecue.jpg')} />
                </View>    
                <View style={styles.col1}>
                    <CustomImage imageSource={require('../images/alumni/dope.jpg')} />
                </View>
                <View style={styles.contentBanner}>
                    <CustomImage imageSource={require('../images/alumni/olskool.png')} />
                </View>
                <View style={styles.col1}>
                    <CustomImage imageSource={require('../images/staff/first10.jpg')} />
                </View>    
                <View style={styles.col2}>
                    <CustomImage imageSource={require('../images/staff/coach.jpg')} />
                </View>
                <View style={styles.contentBanner}>
                    <CustomImage imageSource={require('../images/alumni/benefactors.jpg')} />
                </View>
                <View style={styles.col2}>
                    <CustomImage imageSource={require('../images/undergrad/class3.jpg')} />
                </View>    
                <View style={styles.col1}>
                    <CustomImage imageSource={require('../images/alumni/kwanzaa.jpg')} />
                </View>
                <View style={styles.contentBanner}>
                    <CustomImage imageSource={require('../images/staff/shamann.jpg')} />
                </View>
                <View style={styles.col1}>
                    <CustomImage imageSource={require('../images/alumni/grad.png')} />
                </View>    
                <View style={styles.col2}>
                    <CustomImage imageSource={require('../images/undergrad/class.jpg')} />
                </View>
                <View style={styles.contentBanner}>
                <CustomImage imageSource={require('../images/alumni/alumni.jpeg')} />
                </View>
                <View style={styles.col2}>
                    <CustomImage imageSource={require('../images/staff/co18.jpeg')} />
                </View>    
                <View style={styles.col1}>
                    <CustomImage imageSource={require('../images/alumni/orig.jpg')} />
                </View>
                <View style={styles.contentBanner}>
                    <CustomImage imageSource={require('../images/radio.jpg')} />
                </View>
                <View style={styles.col1}>
                    <CustomImage imageSource={require('../images/alumni/golf.jpg')} />
                </View>    
                <View style={styles.col2}>
                    <CustomImage imageSource={require('../images/staff/andrestefan.jpg')} />
                </View>
                <View style={styles.contentBanner}>
                <CustomImage imageSource={require('../images/staff/30th.jpg')} />
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 1,
        backgroundColor: '#000',
    },
    col1: {
        flex: 1,
        padding: 1,
    },
    col2: {
        flex: 2,
        padding: 1,
    },
    contentBanner: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
    },
});  