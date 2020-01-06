import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo';

export default class BlackFade extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#be2025', flex: 1 }} />
                <LinearGradient 
                    colors={['rgba(0,0,0,0.8)', 'transparent']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: 300,
                    }}
                />
            </View>
        )
    }
}