import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from './utils/ThemeContext';
import './localization/i18n';
//IMPORT SCREENS
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SignUp from './Screens/SignUp';
import Memorygm from './Screens/Memorygm';
import VolHelp from './Screens/VolHelp';
import {OverlayProvider} from './utils/OverlayFalcon';

//import Navigators
import Tabnv from './Navgators/TabNav';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <OverlayProvider>
          <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen
              name="Tabnv"
              component={Tabnv}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Welcome'}}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen
              options={{headerShown: false}}
              name="SignUp"
              component={SignUp}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Memorygm"
              component={Memorygm}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="VolHelp"
              component={VolHelp}
            />
          </Stack.Navigator>
        </OverlayProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
