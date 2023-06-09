import { theme } from './core/theme';
import { store } from './store';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
    HomeIcon,
    ShoppingCartIcon,
    UserCircleIcon,
    BuildingStorefrontIcon,
    Bars3Icon,
} from 'react-native-heroicons/solid';

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  RestaurantScreen,
  BasketScreen,
  PreparingOrderScreen,
  DeliveryScreen,
  ProfileScreen,
  AllStoresScreen,
} from './screens';

import firebase from 'firebase/compat';
import SideHeader from './core/SideHeader';
import AddFirestoreData from './firebase/AddFirestoreData';
import useFirestoreData from './hooks/UseFirestoreData';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const db = firebase.firestore();

export default function App() {

    const [navigationType, setNavigationType] = useState('drawer');

    const navigationTypeFirestore = useFirestoreData('NavigationType');
    
    useEffect(() => {
      if (navigationTypeFirestore.length > 0) {
        const storedNavigationType = navigationTypeFirestore[0].navigationType;
        setNavigationType(storedNavigationType);
      }
    }, [navigationTypeFirestore]);    

  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="StartScreen"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen
                name="RestaurantScreen"
                component={RestaurantScreen}
              />
              <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
              />
              <Stack.Screen
                name="PreparingOrderScreen"
                component={PreparingOrderScreen}
              />
              <Stack.Screen
                name="DeliveryScreen"
                component={DeliveryScreen}
              />
              <Stack.Screen
                name="AddFirestoreData"
                component={AddFirestoreData}
              />
              <Stack.Screen
                name="Dashboard"
                component={DashboardWrapper} // Use a wrapper component for Dashboard screen
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );

  // Wrapper component for Dashboard screen to conditionally render either Tab or Drawer navigator
  function DashboardWrapper() {
    if (navigationType === 'tab') {
      return (
        <Tab.Navigator
          initialRouteName="Dashboard"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#00B8C0',
            tabBarInactiveTintColor: '#999999',
            tabBarLabelStyle: { display: 'none' },
            tabBarStyle: {
              backgroundColor: '#ffffff',
              height: 60,
            },
            tabBarIcon: ({ color }) => {
              if (route.name === 'Dashboard') {
                return <HomeIcon color={color} size={24} />;
              } else if (route.name === 'BasketScreen') {
                return <ShoppingCartIcon color={color} size={24} />;
              } else if (route.name === 'ProfileScreen') {
                return <UserCircleIcon color={color} size={24} />;
              } else if (route.name === 'AllStoresScreen') {
                return <BuildingStorefrontIcon color={color} size={24} />;
              }
            },
          })}
        >
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="AllStoresScreen" component={AllStoresScreen} />
          <Tab.Screen name="BasketScreen" component={BasketScreen} />
          <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
      );
    } else {
      return (
        <Drawer.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            header: ({ navigation }) => <SideHeader navigation={navigation} />,
            drawerIcon: ({ focused }) => (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Bars3Icon
                    name="menu" // Specify the name of the icon here
                    size={24}
                    color={focused ? '#00B8C0' : '#999999'}
                  />
                </TouchableOpacity>
              ),              
          }}
        >
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
          <Drawer.Screen name="BasketScreen" component={BasketScreen} />
        </Drawer.Navigator>
      );
    }
  }
}
