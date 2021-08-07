import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import HomeScreen from '../components/home';
import {StyleSheet, Text, TextInput, View} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptionStyle: StackNavigationOptions = {
  headerTitleAlign: 'center',
  /*   headerTitleStyle: {fontWeight: 400}, */
};

const ToDoStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen name="Second" component={} /> */}
    </Stack.Navigator>
  );
};

export {ToDoStackNavigator};
