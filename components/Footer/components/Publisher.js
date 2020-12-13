import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export const Publisher = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    source={item.publisherImg}
                    resizeMode="cover"
                    style={{ width: 40, height: 40 }} />
                <View style={styles.infoContainer}>
                    <Text style={{ fontSize: 17, fontWeight: '400' }}>HISTORIC</Text>
                    <Text style={{ fontSize: 14, color: '#444' }}>7.1 M Subscribers</Text>
                </View>
            </View>
            <Text style={styles.subscrText}>SUBSCRIBE</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    imgContainer: {
        width: '50%',
        height: '100%',
        marginLeft: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoContainer: {
        marginLeft: 10,
        height: 35,
        justifyContent: 'space-between'
    },
    subscrText: {
        fontSize: 17,
        fontWeight: '500',
        marginRight: '5%',
        color: 'rgb(127, 24, 35)'
    }
})