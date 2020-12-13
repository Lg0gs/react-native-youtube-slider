/* eslint react/prop-types: 1 */
import React from 'react';
import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import data from './data';

const { height } = Dimensions.get('window');


export const Content = ({ setVideo }) => {
    const renderItem = ({ item, index }) => {
        return (
            <Pressable style={styles.item} onPress={setVideo.bind(null, item)}>
                {index > 0 && <View style={styles.divider} />}
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={styles.img} />
                <View style={styles.dataContainer}>
                    <Image
                        source={item.publisherImg}
                        resizeMode="contain"
                        style={styles.publisherAvatar} />
                    <View style={styles.titleContainer}>
                        <Text
                            numberOfLines={2}
                            style={styles.title}>{item.title}</Text>
                        <View style={styles.publisherName_Views}>
                            <Text style={{ color: '#777' }}>{item.piblisherName}</Text>
                            <View style={styles.dot} />
                            <Text style={{ color: '#777' }}>{item.view}</Text>
                            <View style={styles.dot} />
                            <Text style={{ color: '#777' }}>{item.date}</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height - 175
    },
    item: {
        width: '100%',
        height: 350,
        marginBottom: 20
    },
    divider: {
        width: '100%',
        height: 10,
        backgroundColor: '#eee'
    },
    img: {
        width: '100%',
        height: 250
    },
    dataContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 100
    },
    publisherAvatar: {
        width: 50,
        height: 50,
        marginTop: 15,
        marginLeft: 10,
        borderRadius: 25
    },
    titleContainer: {
        width: '85%',
        marginTop: 15,
        marginHorizontal: 10
    },
    title: {
        fontSize: 16,
        color: '#202020'
    },
    publisherName_Views: {
        marginTop: 5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#aaa',
        marginHorizontal: 3
    }
})