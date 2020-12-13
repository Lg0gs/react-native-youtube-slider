import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


const icons = [
    {
        icn: require('../../../assets/images/like.png'),
        title: '61 K'
    },
    {
        icn: require('../../../assets/images/dislike.png'),
        title: '12.2 K'
    },
    {
        icn: require('../../../assets/images/share.png'),
        title: 'Share'
    },
    {
        icn: require('../../../assets/images/download.png'),
        title: 'Download'
    },
    {
        icn: require('../../../assets/images/plus.png'),
        title: 'Save'
    }
]


export const Statistics = () => {
    return (
        <View style={styles.container}>
            {icons.map(icon => (
                <View key={icon.title} style={styles.iconContainer}>
                    <Image
                        source={icon.icn}
                        resizeMode="contain"
                        style={{ width: 25, height: 25 }} />
                    <Text style={{ fontSize: 11, marginTop: 5 }}>{icon.title}</Text>
                </View>
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 70,
        marginLeft: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})