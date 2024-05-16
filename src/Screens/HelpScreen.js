import React, { useRef, useEffect } from 'react';
import { ImageBackground, View, StyleSheet, Animated } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../utils/ThemeContext';

const image = require('../../assests/bg.png');

const HelpScreen = ({navigation}) => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={image} resizeMode="cover" style={styles.container}>
                
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: theme.bgoverlay }} />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
    },
    containers: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    falconContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    falconImage: {
        width: 100,
        height: 100,
        marginRight: 5,
    },
});

export default HelpScreen;
