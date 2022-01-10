/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import InformationScreen from './src/screens/InformationScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ErrorScreen from './src/screens/ErrorScreen';
import DoneScreen from './src/screens/DoneScreen';
import OutofnoodleScreen from './src/screens/OutofnoodleScreen';

 const Stack = createStackNavigator();
 
 export default function App(){
   return (
     <NavigationContainer>
       <Stack.Navigator 
          screenOptions={{
          headerShown: false}}>
            <Stack.Screen name="Home" component={WelcomeScreen} />
            <Stack.Screen name="Information" component={InformationScreen} /> 
            <Stack.Screen name="Done" component={DoneScreen} />
            <Stack.Screen name="Error" component={ErrorScreen} />
            <Stack.Screen name="Out" component={OutofnoodleScreen} />  
      </Stack.Navigator>
     </NavigationContainer>
   );
 };
