import React, { useRef } from 'react';
import { ImageBackground, Text, View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../utils/ThemeContext';
import { useOverlay } from '../utils/OverlayFalcon';

const image = require('../../assests/bg.png');

const HomeScreen = ({ navigation }) => {
    const { showOverlay, setDir, setMg ,setIspVisible, changeGif} = useOverlay();
    const { theme } = useTheme();
    const { t } = useTranslation();
    const glowAnimation = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.background}>
                <View style={[styles.overlay, { backgroundColor: theme.bgoverlay }]}>
                    <View style={styles.content}>
                        <Text style={styles.title}>{t("screens.home.title")}</Text>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity
                                style={[styles.button, {
                                    shadowColor: 'white',
                                }]}
                                onPress={() => {
									setMg('Press the Profile Tab');
                                    changeGif("still"); setTimeout(() => { changeGif("open");}, 0);
									setDir('game');
									setIspVisible(true);
								}}
                            >
                                <Text style={styles.buttonText}>{t("screens.home.demo1")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, {
                                    shadowColor: 'white',
                                }]}
                                onPress={() => {
                                    setMg(""); setTimeout(() => { setMg("Press the Profile Tab");}, 0);
                                    changeGif("still"); setTimeout(() => { changeGif("close_talk");}, 0);
									setDir('theme');
									setIspVisible(true);
								}}
                             
                            >
                                <Text style={styles.buttonText}>{t("screens.home.demo2")}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        color: 'white',
        fontFamily: 'bold',
        marginBottom: 50,
        textAlign: 'center',
    },
    buttonsContainer: {
        width: '80%',
        maxWidth: 200,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
        elevation: 10, // Android shadow
        shadowOffset: { width: 0, height: 4 }, // iOS shadow
        shadowOpacity: 1, // Initial opacity
        shadowRadius: 1, // Initial radius
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HomeScreen;
