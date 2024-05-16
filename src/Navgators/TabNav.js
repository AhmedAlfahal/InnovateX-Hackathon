import React , {useState} from 'react';
import { StyleSheet ,View ,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';  
import { useTheme } from '../utils/ThemeContext';
import { useOverlay } from '../utils/OverlayFalcon';
import { useNavigation } from '@react-navigation/native';

// Import Screens
import HomeScreen from '../Screens/HomeScreen';
import Media from '../Screens/Media';
import Services from '../Screens/Services';
import HelpScreen from '../Screens/HelpScreen';
import DrawerNav from './Drawer';

const Tab = createBottomTabNavigator();
const ProfileTabIcon = ({ color, size ,vis}) => (
  <View style={styles.tabIcon}>
    <Icon name="person-circle-outline" color={color} size={size} />
    {vis &&<View style={styles.glow} />}
  </View>
);

function Tabnv() {
	 const { theme } = useTheme();
	 const { ispVisible } = useOverlay();
	 const [tabPressCount, setTabPressCount] = useState(0);
  const navigation = useNavigation();

  const onPressTab = (route) => {
    navigation.navigate(route.name);
    setTabPressCount(prevCount => prevCount + 1);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#838996',
        tabBarShowLabel: true,
        tabBarStyle: {
			backgroundColor: theme.primary,
			borderColor: 'black',
          display: 'flex',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
			headerShown : false,
			tabBarLabel : 'HOME' ,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
	    <Tab.Screen
        name="Media"
        component={Media}
        options={{
			headerShown : false,
			tabBarLabel : 'MEDIA' ,
          tabBarIcon: ({ color, size }) => (
            <Icon name="newspaper-outline" color={color} size={size} />
          ),
        }}
      />
	    <Tab.Screen
        name="Services"
        component={Services}
        options={{
			headerShown : false,
			tabBarLabel : 'SERVICES' ,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
	    <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
			headerShown : false,
			tabBarLabel : 'HELP' ,
          tabBarIcon: ({ color, size }) => (
            <Icon name="chatbubbles-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DrawerNav}
        options={{
			headerShown : false,
			tabBarLabel : 'PROFILE' ,
          tabBarIcon: ({ color, size }) => (
			<ProfileTabIcon color={color} size={size} vis = {ispVisible}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    tabIcon: {
    position: 'relative',
  },
  glow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 3,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 15, 255, 0.3)',
    zIndex: -1,
  },
});

export default Tabnv;