import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Components/SplashScreen';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';
import Dashboard from './Components/Dashboard';
import Gallery from './Components/Gallery';
import Checkout from './Components/Checkout';
import Success from './Components/Success';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Awotelo Fashion" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Registration" component={RegistrationForm} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
