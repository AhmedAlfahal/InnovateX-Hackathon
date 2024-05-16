import React, {useEffect} from 'react';
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../utils/ThemeContext';
import { useOverlay } from '../../utils/OverlayFalcon';

const image = require('../../../assests/bg.png');
const Gamify = ({navigation}) => {
	const {setMg, setIsgVisible, dir} = useOverlay();

	const { theme } = useTheme();
const { t } = useTranslation();

useEffect(() => {
		if(dir === 'game')
		{
			setMg('You can play Now')
			setIsgVisible(false);
		}
    }, []);

  const handleGameSelection = (gameName) => {
    navigation.navigate(gameName);
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
		<ImageBackground source={image} resizeMode="cover" 
				style={styles.container}>
					<View style={{...StyleSheet.absoluteFillObject, backgroundColor : theme.bgoverlay}} />
			<View style={styles.menuContainer}>
			<TouchableOpacity onPress={() => handleGameSelection('Memorygm')} style={styles.menuButton}>
				<Text style={styles.menuButtonText}>{t('Memory Card Game')}</Text>
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
   menuContainer: {
	marginVertical:40,
    alignItems: 'center',
  },
  menuButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  menuButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Gamify;