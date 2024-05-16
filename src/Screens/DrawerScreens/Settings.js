import React , {useEffect ,useState}from 'react';
import {ImageBackground, Text, View, Button, TouchableOpacity , StyleSheet, Switch} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../utils/ThemeContext';
import { colors } from '../../utils/colors';
import { useOverlay } from '../../utils/OverlayFalcon';


const SettingScrean = ({navigation, route}) => {
	const { theme, setTheme } = useTheme();
	const { dir,showOverlay, hideOverlay ,setMg, istVisible,setIstVisible, changeGif} = useOverlay();
	const toggleTheme = () => {
    const newTheme = theme === colors.light ? colors.dark : colors.light;
    setTheme(newTheme);
 	 };
	useEffect(() => {
		if(dir === 'theme')
		{
			setMg('You can change the Theme now from the Settings')
			setIstVisible(false);

			const time = setTimeout(() => {
          
        }, 5000); // 5 seconds

        return () => clearTimeout(time); 
		}
    }, []);
	const { t, i18n } = useTranslation(); //i18n instance
	  const [isFalconEnabled, setIsFalconEnabled] = useState(true);
	 const toggleFalconSwitch = () => {
		if(isFalconEnabled)
		{
			hideOverlay();
		}else{
			showOverlay();
		}
		setIsFalconEnabled(previousState => !previousState)
	};

	const image = require('../../../assests/bg.png');
  return (
    <View
      style={{
        flex: 1,
      }}>
		<ImageBackground source={image} resizeMode="cover" 
				style={styles.container}>
						<View style={{...StyleSheet.absoluteFillObject, backgroundColor : theme.bgoverlay}} />
		      <View style={styles.content}>
                    <View style={i18n.language === "en" ? styles.languageContainer : styles.languageContainerr}>
						<Text style={{ paddingTop:10 , color : 'white'}}>{t("screens.lang.langu")}</Text>
                        <TouchableOpacity onPress={() => i18n.changeLanguage("en")} style={[styles.languageButton, i18n.language === "en" && styles.selectedLanguage]}>
                            <Text style={styles.languageButtonText}>{t("screens.lang.english")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => i18n.changeLanguage("ar")} style={[styles.languageButton, i18n.language === "ar" && styles.selectedLanguage]}>
                            <Text style={styles.languageButtonText}>{t("screens.lang.arabic")}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={toggleTheme} style={[styles.toggleButton, istVisible && styles.glow]}>
                        <Text style={styles.toggleButtonText}>{theme === colors.light ? t("screens.set.mode.dark") : t("screens.set.mode.light")}</Text>
                    </TouchableOpacity>
					 <View style={i18n.language === "en" ? styles.switchContainer : styles.switchContainerR}>
                        <Text style={i18n.language === "en" ? styles.switchLabel : styles.switchLabelr}>{t("screens.set.useFalcon")}</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isFalconEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleFalconSwitch}
                            value={isFalconEnabled}
                        />
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
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    languageContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
	 languageContainerr: {
        flexDirection: 'row-reverse',
        marginBottom: 20,
    },
    languageButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    selectedLanguage: {
        backgroundColor: '#673ab7',
    },
    languageButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    toggleButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    toggleButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
	 switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
	 switchContainerR: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginTop: 20,
    },
    switchLabel: {
        color: 'white',
        marginRight: 10,
        fontSize: 16,
    },
	 switchLabelr: {
        color: 'white',
        marginLeft: 10,
        fontSize: 16,
    },

	 glow: {
        shadowColor:'white',
        elevation: 10, // Android shadow
        shadowOffset: { width: 0, height: 4 }, // iOS shadow
        shadowOpacity: 1, // Initial opacity
        shadowRadius: 1, // Initial radius
    },
});
export default SettingScrean;