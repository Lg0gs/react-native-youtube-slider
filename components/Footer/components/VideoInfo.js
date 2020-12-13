import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const VideoInfo = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.tag}>#ForgedInFire</Text>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.statisticContainer}>
                <Text style={{ color: 'rgb(100, 100, 100)' }}>{item.view}</Text>
                <Text style={{ color: 'rgb(100, 100, 100)', marginLeft: 10 }}>{item.date}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginLeft: '5%',
        marginTop: 30
    },
    tag: {
        color: 'rgb(73, 111, 255)',
        fontWeight: '400',
        fontSize: 17
    },
    title: {
        color: 'rgb(37, 37, 37)',
        fontWeight: '400',
        fontSize: 17,
        marginTop: 10
    },
    statisticContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    }
})