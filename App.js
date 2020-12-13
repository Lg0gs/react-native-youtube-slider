import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { useValue } from 'react-native-reanimated';

import { Header } from './components/Header/Header';
import { Filter } from './components/Filter/Filter';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';


export const App = () => {
    const [item, setItem] = useState({
        img: '',
        title: '',
        view: 0,
        publisherName: '',
        date: '',
        publisherImg: ''
    });
    const state = useValue(State.UNDETERMINED);

    const updateVideoUrl = itm => {
        state.setValue(State.BEGAN);
        setItem(itm)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <Filter />
            <Content setVideo={updateVideoUrl} />
            <Footer
                state={state}
                item={item} />
        </SafeAreaView>
    )
}