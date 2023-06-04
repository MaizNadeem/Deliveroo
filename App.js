import { theme } from './core/theme'
import { store } from './store'
import { Provider as ReduxProvider } from 'react-redux';
import { Provider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
} from './screens'

import AddFirestoreData from './firebase/AddFirestoreData';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
      <Provider theme={theme} >
        <NavigationContainer>
            <ReduxProvider store={store}>
              <Stack.Navigator 
                initialRouteName="StartScreen" 
                screenOptions={{ headerShown: false, }} >
                    <Stack.Screen name="StartScreen" component={StartScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                    <Stack.Screen name='Dashboard' component={Dashboard} />
                    <Stack.Screen name='RestaurantScreen' component={RestaurantScreen} />
                    <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
                    <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} />
                    <Stack.Screen name='BasketScreen' component={BasketScreen} />
                    <Stack.Screen name='DeliveryScreen' component={DeliveryScreen} />
                    <Stack.Screen name='AddFirestoreData' component={AddFirestoreData} />
              </Stack.Navigator>
            </ReduxProvider>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}