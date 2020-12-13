import React from 'react';
import { Image, StyleSheet, View } from 'react-native';


export const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/logo.png')}
                resizeMode="contain"
                style={styles.logo} />
            <View style={styles.actions}>
                <Image
                    source={require('../../assets/images/chromecast.png')}
                    resizeMode="contain"
                    style={styles.chromecast} />
                <Image
                    source={require('../../assets/images/video.png')}
                    resizeMode="contain"
                    style={styles.chromecast} />
                <Image
                    source={require('../../assets/images/search.png')}
                    resizeMode="contain"
                    style={styles.chromecast} />
                <Image
                    source={{ uri: 'https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/122870637_350363562862010_3933229291478053616_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=YVPLQ1XqCiYAX8VNwUx&_nc_ht=scontent.ftbs5-1.fna&oh=f6c888f140776a3e95dca8428db79465&oe=5FFC7A09' }}
                    resizeMode="cover"
                    style={[styles.chromecast, { borderRadius: 15 }]} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 50
    },
    logo: {
        width: '25%',
        height: '100%',
        marginLeft: 20
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
        marginRight: 20
    },
    chromecast: {
        width: 25,
        height: 25
    }
})