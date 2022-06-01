import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "./src/sceens/Login/Login";
import VerificationScreen from "./src/sceens/VerificationScreen";
import DetailScreen from './src/sceens/DetailScreen';

const Stack = createStackNavigator();

const App = ()=> {
  return (
    <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false
                    }}>
                        <Stack.Screen name={"loginScreen"} component={Login} options={{ title: "Login"}}/>
                        <Stack.Screen name={"VerificationScreen"} component={VerificationScreen} options={{ title: "OTP"}}/>
                        <Stack.Screen name={"DetailScreen"} component={DetailScreen} options={{ title: "Details"}}/>

                    </Stack.Navigator>
                </NavigationContainer>
  );
}

export default App
