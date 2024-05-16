import React from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../utils/ThemeContext';


const image = require('../../../assests/bg.png');
const GovCharter = ({navigation}) => {
	const { theme } = useTheme();
const { t } = useTranslation();
  return (
    <View
      style={{
        flex: 1,
      }}>
		<ImageBackground source={image} resizeMode="cover" 
				style={styles.container}>
					<View style={{...StyleSheet.absoluteFillObject, backgroundColor : theme.bgoverlay}} />
		
	  	</ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default GovCharter;