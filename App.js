import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './store'
import { Provider as ReduxProvider } from 'react-redux';
import { theme } from './core/theme'

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  RestaurantScreen,
} from './screens'
import BasketScreen from './screens/BasketScreen';

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
                <Stack.Screen name='BasketScreen' component={BasketScreen} options={{ presentation: 'modal' }}/>
                <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
              </Stack.Navigator>
            </ReduxProvider>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
