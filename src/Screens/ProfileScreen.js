import React, { useEffect } from 'react';
import { ImageBackground, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';  
import { useTheme } from '../utils/ThemeContext';
import { useOverlay } from '../utils/OverlayFalcon';

const ProfileScreen = ({ navigation }) => {
    const { theme } = useTheme();
    const image = require('../../assests/bg.png');
    const { t } = useTranslation(); 
    const { setMg, setIsgVisible, dir ,setIspVisible,setIstVisible} = useOverlay();

    useEffect(() => {
          setIspVisible(false);
      if(dir === 'game')
      {
        setMg('Press on the left Gamify');
        setIsgVisible(true);
      }
      if(dir === 'theme')
      {
        setMg('Press on the left Settings');
        setIstVisible(true);
      }
      }, []);

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={image} resizeMode="cover" style={styles.container}>
                <View style={[styles.overlay, { backgroundColor: theme.bgoverlay }]}/>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={'person-circle-outline'} color={'white'} size={100} />
                    <Text style={{ fontSize: 30, color: 'orange' }}>
                        {t('Profile Screen')}
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('VolHelp')}>
                        <Text style={styles.buttonText}>{t('Get Help from volunteer')}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
});

export default ProfileScreen;
