import React, { useRef } from 'react';
import { Image, Text, Dimensions, StyleSheet } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, {
    useValue,
    Clock,
    event,
    useCode,
    eq,
    and,
    not,
    clockRunning,
    startClock,
    stopClock,
    block,
    set,
    interpolate,
    cond,
    spring,
    greaterThan,
    Extrapolate,
    add
} from 'react-native-reanimated';

import { BottomNav } from './components/BottomNav';
import { PlayerActions } from './components/PlayerActions';
import { VideoInfo } from './components/VideoInfo';
import { Statistics } from './components/Statistics';
import { Publisher } from './components/Publisher';


const { width, height } = Dimensions.get('window');
const PLAYER_DEST_WIDTH = width / 2.7;


export const Footer = (props) => {
    const { item } = props;

    const clock = useRef(new Clock()).current;
    const gestureState = useValue(State.UNDETERMINED);
    const offset = useValue(0);

    const animState = {
        finished: useValue(0),
        position: useValue(height - 50),
        velocity: useValue(10),
        time: useValue(0)
    };

    const animConfig = {
        damping: 40,
        mass: 1,
        stiffness: 400,
        overshootClamping: true,
        restSpeedThreshold: 1,
        restDisplacementThreshold: .5,
        toValue: useValue(0)
    }

    const onGestureEvent = event([
        {
            nativeEvent: ({ state, translationY }) => block([
                set(gestureState, state),
                cond(
                    eq(state, State.ACTIVE), [
                        set(animState.position, add(offset, translationY))
                    ]
                ),
                cond(
                    eq(state, State.END), [
                        set(animState.finished, 0),
                        set(animState.time, 0),
                        set(animConfig.toValue, cond(greaterThan(translationY, height / 2), [height - 130, set(offset, height - 130)], [0, set(offset, 0)])),
                        startClock(clock),
                    ],
                )
            ])
        },
    ]);

    const showSlider = () => {
        return block([
            cond(
                and(not(clockRunning(clock))), [
                    set(animState.time, 0),
                    set(animConfig.toValue, 0),
                    startClock(clock),
                ]
            )
        ])
    }

    useCode(() => [
        cond(
            clockRunning(clock), [
                spring(clock, animState, animConfig),
            ]
        ),
        cond(
            animState.finished, [
                stopClock(clock),
            ]
        ),
        cond(
            eq(props.state, State.BEGAN), [
                showSlider(),
            ]
        ),
    ], [props.state]);

    const playerHeight = interpolate(animState.position, {
        inputRange: [0, height - 130],
        outputRange: [180, 80],
        extrapolate: Extrapolate.CLAMP
    });

    const playerWidth = interpolate(animState.position, {
        inputRange: [0, height - 170, height - 130],
        outputRange: [width, width, PLAYER_DEST_WIDTH],
        extrapolate: Extrapolate.CLAMP
    });

    const actionOpacity = interpolate(animState.position, {
        inputRange: [0, height - 170, height - 130],
        outputRange: [0, 0, 1],
        extrapolate: Extrapolate.CLAMP
    });

    const translateActions = interpolate(animState.position, {
        inputRange: [0, height - 170, height - 130],
        outputRange: [width - PLAYER_DEST_WIDTH, width - PLAYER_DEST_WIDTH, 0],
        extrapolate: Extrapolate.CLAMP
    });

    const contentOpacity = interpolate(animState.position, {
        inputRange: [0, height - 170, height - 130],
        outputRange: [1, .2, 0],
        extrapolate: Extrapolate.CLAMP
    });

    return (
        <>
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onGestureEvent}>
                <Animated.View style={[styles.container, {transform: [{ translateY: animState.position }] }]}>
                    <Animated.Image
                        source={item.img}
                        resizeMode="cover"
                        style={{ width: playerWidth, height: playerHeight }} />
                    <Animated.View style={{ flexDirection: 'row', position: 'absolute', top: 0, right: 0, width: (width - width / 2.7), height: 80, backgroundColor: '#fff', opacity: actionOpacity, transform: [{ translateX: translateActions }], justifyContent: 'center', alignItems: 'center' }}>
                        <PlayerActions item={item} />
                    </Animated.View>
                    <Animated.View style={{ opacity: contentOpacity }}>
                        <VideoInfo item={item} />
                        <Statistics />
                        <Publisher item={item} />
                        <Text style={styles.comments}>Comments 2.9K</Text>
                        <Image
                            source={require('../../assets/images/reklama.jpg')}
                            resizeMode="contain"
                            style={styles.reklama} />
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>
            <BottomNav sliderPosition={animState.position} />
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height,
        backgroundColor: '#fff',
        position: 'absolute',
    },
    comments: {
        fontSize: 19,
        fontWeight: '500',
        marginLeft: '5%',
        marginTop: 20,
        color: 'rgb(132, 132, 132)'
    },
    reklama: {
        width: '92%',
        marginLeft: '4%',
        height: 300,
        marginTop: -20
    }
})
