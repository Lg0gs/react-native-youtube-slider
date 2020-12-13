import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


const filterItems = () => {
    return ['All', 'Soundtracks', 'React routers', 'Vocal Trance', 'House Music'].map((filterItem, index) => (
        <View key={filterItem} style={[styles.item, !index && { backgroundColor: '#777' }]}>
            <Text style={[styles.itemText, !index && { color: '#fff' }]}>{filterItem}</Text>
        </View>
    ))
}


export const Filter = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ flex: 1 }}>
                {filterItems()}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee'
    },
    item: {
        height: 37,
        borderRadius: 20,
        backgroundColor: '#f4f4f4',
        borderWidth: 1,
        borderColor: 'lightgray',
        alignSelf: 'center',
        paddingHorizontal: 13,
        marginHorizontal: 5,
        justifyContent: 'center'
    },
    itemText: {
        fontSize: 17,
        fontWeight: '300'
    }
})