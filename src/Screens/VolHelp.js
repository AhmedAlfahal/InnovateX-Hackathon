import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';

const VolHelp = ({ navigation }) => {
    const { t } = useTranslation();
    const logo = require('../../assests/police.jpg'); 

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.text}>{t('Calling our volunteers to help you .....')}</Text>
			<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>{t('Share Screen')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>{t('Go Back')}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5', 
    },
    logo: {
        width: 150, 
        height: 150, 
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
});

export default VolHelp;
