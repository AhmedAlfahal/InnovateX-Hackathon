import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Image, useWindowDimensions } from 'react-native';
import BubbleChat from '../utils/BubbleChat';

const Close_Wings = require('../../assests/Close_Wings.gif');
const Open_Wings = require('../../assests/Open_Wings.gif');
const Close_Wings_Talk = require('../../assests/Close_Wings_Talk.gif');
const Open_Wings_Talk = require('../../assests/Open_Wings_Talk.gif');
const still = require('../../assests/still.png');

const Falcon = ({ navigation ,msg, gifName}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    let timer1 = null;
    let timer2 = null;

    const [currentGif, setCurrentGif] = useState('Close_Wings');

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
        if (gifName && gifs[gifName]) {
            setCurrentGif(gifName);
        }
        if (timer1) clearTimeout(timer1);
        if (timer2) clearTimeout(timer2);
        if (gifName === 'open') {
            timer1 = setTimeout(() => {
                setCurrentGif('open_talk');
                timer2 = setTimeout(() => {
                    setCurrentGif('close');
                }, 4000); // Change the GIF to 'close' after 5 seconds
                return () => clearTimeout(timer2); 
            }, 800); // Change the GIF to 'open_talk' after 0.8 second
            return () => {
                if (timer1) clearTimeout(timer1);
                if (timer2) clearTimeout(timer2);
            };
        }
        if (gifName === 'close_talk') {
            timer1 = setTimeout(() => {
                setCurrentGif('still');
            }, 4000); // Change the GIF to 'open_talk' after 4 secondS
            return () => clearTimeout(timer1);
        }
    }, [gifName]);
    // Create a map of GIFs
    const gifs = {
        'close': Close_Wings,
        'open': Open_Wings,
        'close_talk': Close_Wings_Talk,
        'open_talk': Open_Wings_Talk,
        'still': still
    };

return (
    <Animated.View style={[styles.overlay, { opacity: fadeAnim }]} pointerEvents="box-none">
        <View style={styles.falconContainer} pointerEvents="box-none">
            {msg && <BubbleChat message= {msg} isSender={true}  pointerEvents="box-none"/>}
            {gifs[currentGif] &&  <Animated.Image source={gifs[currentGif]} resizeMode="contain" style={[styles.falconImage]}  pointerEvents="box-none"/>}
        </View>
        {/* Add more Animated.View components with falcon and BubbleChat inside for additional messages */}
    </Animated.View>
);
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 0,
        paddingBottom: 40,
		 pointerEvents: 'box-none', 
    },
    falconContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        pointerEvents: 'box-none', 
    },
    falconImage: {
        width: 300,
        height: 200,
        marginLeft: 50, 
    },
});

export default Falcon;