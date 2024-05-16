import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons'; 
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import { Text, View, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useOverlay } from '../utils/OverlayFalcon';


import ProfileScreen from '../Screens/ProfileScreen';
import Notification from '../Screens/DrawerScreens/Notification';
import Aboutus from '../Screens/DrawerScreens/Aboutus';
import Catalog from '../Screens/DrawerScreens/Catalog';
import GovCharter from '../Screens/DrawerScreens/GovCharter';
import Gamify from '../Screens/DrawerScreens/Gamify';
import SettingScrean from '../Screens/DrawerScreens/Settings';
import { useTheme } from '../utils/ThemeContext';


const Drawer = createDrawerNavigator();

function DrawerNav (){
	 const { theme } = useTheme();
	const { isgVisible,istVisible} = useOverlay();

    return (
        <Drawer.Navigator 
		  initialRouteName="ProfileScreen"
			screenOptions={{
				drawerStyle: {
				borderBottomRightRadius:0,
				backgroundColor: theme.drawer,
				width: 90,
				},
				 drawerType:"permanent" ,// Ensure the drawer is always visible and not collapsible
            	drawerLockMode:"locked-open"
			}}
            // Prevent users from closing the drawer
			>
            <Drawer.Screen  name="profile" component={ProfileScreen}  
			 options={{ 
				headerShown: false,
				  drawerIcon: ({ focused, size }) => (
                           <View style={styles.drawerItem}>
                            <MaterialIcons
                                name={ 'account-circle' }
                                size={size}
                                color={'white'}
								style={{marginRight : 20}}
                            />
                            <Text style={{color: 'white',
									marginTop: 10,
									marginLeft : 10,
									fontSize: 10,
									width: 60,}}>Profile</Text>
                        </View>
                    ),
				}}/>
				 <Drawer.Screen  name="notificaton" component={Notification}  
				options={{ 
					headerShown: false,
					drawerIcon: ({ focused, size }) => (
							<View style={styles.drawerItem}>
								<AntDesign
									name={'bells'}
									size={size}
									color={'white'}
									style={{marginRight : 10}}
								/>
								<Text style={styles.drawerLabel}>Notification</Text>
							</View>
						),
					}}/>
				 <Drawer.Screen  name="catlog" component={Catalog}  
				options={{ 
					headerShown: false,
					drawerIcon: ({ focused, size }) => (
							<View style={styles.drawerItem}>
								<Icon
									name={'book-outline'}
									size={size}
									color={'white'}
									style={{marginLeft : 10}}
								/>
								<Text style={{ 
									color: 'white',
									fontSize: 10,
									marginLeft : 8}}>Service</Text>
								<Text style={{
									color: 'white',
									fontSize: 10,
								}}>Catalog</Text>
							</View>
						),
					}}/>
					 <Drawer.Screen  name="govcharter" component={GovCharter}  
				options={{ 
					headerShown: false,
					drawerIcon: ({ focused, size }) => (
							<View style={styles.drawerItem}>
								<Icon
									name={'pie-chart-outline'}
									size={size}
									color={'white'}
									style={{marginRight : 10}}
								/>
								<Text style={styles.drawerLabel}>Government</Text>
								<Text style={{
									color: 'white',
									fontSize: 10,
								}}>Charter</Text>
							</View>
						),
					}}/>
					 <Drawer.Screen  name="settingscreen" component={SettingScrean}  
				options={{ 
					headerShown: false,
					drawerIcon: ({ focused, size }) => (
							<View style={istVisible ? styles.glow : styles.drawerItem}>
								<MaterialIcons
									name={'settings-input-component'}
									size={size}
									color={'white'}
									style={{marginRight : 20}}
								/>
								<Text style={{color: 'white',
									marginTop: 10,
									marginLeft : 10,
									fontSize: 10,
									width: 60,}}>Settings</Text>
							</View>
						),
					}}/>
					 <Drawer.Screen  name="gamify" component={Gamify}  
				options={{ 
					headerShown: false,
					drawerIcon: ({ focused, size }) => (
							<View style={isgVisible ? styles.glow : styles.drawerItem}>
								<Icon
									name={'game-controller-outline'}
									size={size}
									color={'white'}
									style={{marginRight : 20}}
								/>
								<Text style={{color: 'white',
									marginTop: 10,
									marginLeft : 10,
									fontSize: 10,
									width: 60,}}>Gamify</Text>
							</View>
						),
					}}/>
					 <Drawer.Screen  name="aboutus" component={Aboutus}  
				options={{ 
					headerShown: false,
					drawerIcon: ({ focused, size }) => (
							<View style={styles.drawerItem}>
								<MaterialIcons
									name={'info-outline'}
									size={size}
									color={'white'}
									style={{marginRight : 15}}
								/>
								<Text style={{color: 'white',
									marginTop: 10,
									marginLeft : 5,
									fontSize: 10,
									width: 60,}}>About Us</Text>
							</View>
						),
					}}/>
        </Drawer.Navigator>
    );
};


const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            {/* Custom content */}
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};


const styles = StyleSheet.create({
    drawerItem: {
		//width: 35,
        flexDirection: 'column',
        alignItems: 'center',
		marginTop : 25,
		//marginLeft : 2,
    },
    drawerLabel: {
        color: 'white',
		marginTop: 10,
		fontSize: 10,
		width: 60,
    },

	 glow: {
    	flexDirection: 'column',
        alignItems: 'center',
		marginTop : 25,
    
    borderRadius: 100,
    backgroundColor: 'rgba(255, 15, 255, 0.3)',
    zIndex: -1,
  },
});

export default DrawerNav;
