import { theme } from './core/theme';
import { store } from './store';
import { View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import {
    HomeIcon,
    ShoppingCartIcon,
    UserCircleIcon,
    BuildingStorefrontIcon,
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

// Import necessary components and screens

// ...

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation, state }) {
    return (
        <DrawerContentScrollView>
            {/* Custom top view */}
            <View className="p-5" >
            {/* Add your custom content here */}
            </View>
    
            {/* Drawer items */}
            <DrawerItem
                label="Dashboard"
                icon={({ color, size }) => <HomeIcon name="home" size={size} color={color} />}
                onPress={() => navigation.navigate('Dashboard')}
                focused={state.routeNames[state.index] === 'Dashboard'} // Check if the item is active
                activeTintColor="#00B8C0" // Active screen color
                inactiveTintColor="#999999" // Inactive screens color
            />
            <DrawerItem
                label="Profile"
                icon={({ color, size }) => <UserCircleIcon name="user" size={size} color={color} />}
                onPress={() => navigation.navigate('ProfileScreen')}
                focused={state.routeNames[state.index] === 'ProfileScreen'} // Check if the item is active
                activeTintColor="#00B8C0" // Active screen color
                inactiveTintColor="#999999" // Inactive screens color
            />
            <DrawerItem
                label="Basket"
                icon={({ color, size }) => <ShoppingCartIcon name="shopping-cart" size={size} color={color} />}
                onPress={() => navigation.navigate('BasketScreen')}
                focused={state.routeNames[state.index] === 'BasketScreen'} // Check if the item is active
                activeTintColor="#00B8C0" // Active screen color
                inactiveTintColor="#999999" // Inactive screens color
            />
    
            {/* Add more DrawerItems for other screens */}
        </DrawerContentScrollView>
    );
}
  

export default function App() {
    return (
        <SafeAreaProvider>
            <ReduxProvider store={store}>
                <PaperProvider theme={theme}>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false }} >
                            <Stack.Screen name="StartScreen" component={StartScreen} />
                            <Stack.Screen name="LoginScreen" component={LoginScreen} />
                            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                            <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
                            <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
                            <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} />
                            <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
                            <Stack.Screen name="AddFirestoreData" component={AddFirestoreData} />
                            <Stack.Screen name="DashboardDrawer" component={DashboardDrawer} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </PaperProvider>
            </ReduxProvider>
        </SafeAreaProvider>
    );
}

// Wrapper component for Dashboard screen to render Drawer Navigator
function DashboardDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName="DashboardTab"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="DashboardTab"
                component={DashboardTabs}
                options={{
                headerShown: false, // Hide the header for this screen
                }}
            />
            <Drawer.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                headerShown: false, // Hide the header for this screen
                }}
            />
            <Drawer.Screen
                name="BasketScreen"
                component={BasketScreen}
                options={{
                headerShown: false, // Hide the header for this screen
                }}
            />
        </Drawer.Navigator>
    );
}


// Wrapper component for Dashboard screen to render Tab Navigator
function DashboardTabs() {
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
}
