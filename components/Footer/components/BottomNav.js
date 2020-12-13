/* eslint react/prop-types: 1 */
import React from 'react';
import { Dimensions, Image } from 'react-native';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';


const { height } = Dimensions.get('window');


export const BottomNav = ({ sliderPosition }) => {
    const translateY = interpolate(sliderPosition, {
        inputRange: [0, height - 120],
        outputRange: [50, 0],
        extrapolate: Extrapolate.CLAMP
    });

    const opacity = interpolate(sliderPosition, {
        inputRange: [0, height - 120],
        outputRange: [.3, 1],
        extrapolate: Extrapolate.CLAMP
    });

    return (
        <Animated.View
            style={{
                width: '100%',
                height: 50,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#fff',
                position: 'absolute',
                bottom: 0,
                opacity,
                transform: [{ translateY }],
            }}>
            <Image
                source={require('../../../assets/images/home.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
            />
            <Image
                source={require('../../../assets/images/compass.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
            />
            <Image
                source={require('../../../assets/images/subscribe.png')}
                resizeMode="contain"
                style={{ width: 27, height: 27 }}
            />
            <Image
                source={require('../../../assets/images/notification.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
            />
            <Image
                source={require('../../../assets/images/play.png')}
                resizeMode="contain"
                style={{ width: 28, height: 28 }}
            />
        </Animated.View>
    )
}