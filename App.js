import { theme } from './core/theme';
import { store } from './store';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import {
    HomeIcon,
    ShoppingCartIcon,
    UserCircleIcon,
    BuildingStorefrontIcon,
    MenuIcon,
} from 'react-native-heroicons/solid'

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

import SideHeader from './core/SideHeader';
import AddFirestoreData from './firebase/AddFirestoreData';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => {
          // Implement your logout logic here
        }}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
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
              <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
              <Stack.Screen
                name="AddFirestoreData"
                component={AddFirestoreData}
              />
              <Stack.Screen name="DashboardTab" options={{ headerShown: false }}>
                {() => (
                    <Tab.Navigator 
                        initialRouteName='Dashboard' 
                        screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarActiveTintColor: '#00B8C0', // Color of the active tab
                        tabBarInactiveTintColor: '#999999', // Color of inactive tabs
                        tabBarLabelStyle: { display: 'none' }, // Hide the tab labels
                        tabBarStyle: {
                            backgroundColor: '#ffffff', // Background color of the tab bar
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
                )}
              </Stack.Screen>
              <Stack.Screen name="DashboardSide" options={{ headerShown: false }}>
                {() => (
                    <Drawer.Navigator
                        initialRouteName="Dashboard"
                        drawerContent={CustomDrawerContent}
                        screenOptions={{
                            header: ({ navigation }) => (
                              <SideHeader navigation={navigation} />
                            ),
                            drawerIcon: ({ focused }) => (
                              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <MenuIcon size={24} color={focused ? '#00B8C0' : '#999999'} />
                              </TouchableOpacity>
                            ),
                        }}
                    >
                        <Drawer.Screen name="Dashboard" component={Dashboard} />
                    </Drawer.Navigator>
                )}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}