import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import { useTheme } from '../utils/ThemeContext';
import { useOverlay } from '../utils/OverlayFalcon';
import { useFocusEffect } from '@react-navigation/native';
import { colors } from '../utils/colors';

const SignUp = ({navigation}) => {
	const buttonStyle = { marginTop: 30, marginBottom: 20 }; 
	const { showOverlay, hideOverlay ,setMg, changeGif} = useOverlay();
	const { theme, setTheme } = useTheme();
	 useFocusEffect(
        React.useCallback(() => {
            hideOverlay(); 
			setTheme(colors.light);
        }, [])
    );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
		<View style={{...StyleSheet.absoluteFillObject, backgroundColor : theme.bgoverlay}} />
      <Text
	  	style={{
			fontSize : 50,
			textShadowColor : 'blue',
			textShadowRadius : 3,
			color : 'black',
		}}
	  >Welcome</Text>
		<View style={buttonStyle}>

		 <Button
			title="Go to APP Home"
			onPress={() =>{
				setMg('Hello Welcome user');
				changeGif("open");
				showOverlay();
				navigation.navigate('Tabnv', {screen: 'Home'})
			}
			}
		/>
		</View>
		<View style={buttonStyle}>
		 <Button
			title="Visual Impairment"
			onPress={() =>{
				setMg('We have detected TalkBack and High Contrast is enabled. Speech Recognization and Black And White Mode has been enabled.');
				changeGif("close_talk");
				setTheme(colors.dark);
				showOverlay();
				navigation.navigate('Tabnv', {screen: 'Home'})
			}
			}
		/>
		</View>
		<View style={buttonStyle}>

		 <Button
			title="Proactive Service"
			onPress={() =>{
				setMg('Hello User, Your vechicle Registration is due in 2 days. Please renew it.');
				changeGif("open")
				showOverlay();
				navigation.navigate('Tabnv', {screen: 'Home'})
			}
			}
		/>
		</View>
	  
    </View>
  );
};

export default SignUp;