import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export const PlayerActions = ({ item }) => {
    return (
        <>
            <View style={styles.infoContainer}>
                <Text
                    style={styles.title}
                    numberOfLines={1}>
                    {item.title}
                </Text>
                <Text
                    style={styles.publisherName}
                    numberOfLines={1}>
                    {item.publisherName}
                </Text>
            </View>
            <View style={styles.actionsContainer}>
                <Image
                    source={require('../../../assets/images/pause.png')}
                    resizeMode="contain"
                    style={{ height: 15, width: 15 }} />
                <Image
                    source={require('../../../assets/images/cancel.png')}
                    resizeMode="contain"
                    style={{ height: 17, width: 17 }} />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    infoContainer: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        marginBottom: 3,
        width: '80%',
        fontWeight: '300'
    },
    publisherName: {
        marginTop: 3,
        width: '80%',
        fontSize: 11,
        color: '#777'
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50%',
        height: '100%'
    }
})