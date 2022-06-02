import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import VerificationScreen from "./src/sceens/VerificationScreen";
import DetailScreen from './src/sceens/DetailScreen';
import Signup from './src/sceens/Signup/Signup';

const Stack = createStackNavigator();

const App = ()=> {
  return (
    <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false
                    }}>
                        <Stack.Screen name={"signupScreen"} component={Signup} options={{ title: "Login"}}/>
                        <Stack.Screen name={"VerificationScreen"} component={VerificationScreen} options={{ title: "OTP"}}/>
                        <Stack.Screen name={"DetailScreen"} component={DetailScreen} options={{ title: "Details"}}/>

                    </Stack.Navigator>
                </NavigationContainer>
  );
}

export default App
