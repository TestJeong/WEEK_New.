import React, {useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/home';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import secondStackNav from '../components/stack';
import type {StackNavigationOptions} from '@react-navigation/stack';
import {useNavigationHorizontalInterpolator} from '../hooks/useNavgationHorizontallnterpolator';

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptionStyle: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerShown: false,
  /*   headerTitleStyle: {fontWeight: 400}, */
};

const ToDoStackNavigator = () => {
  const interpolator = useNavigationHorizontalInterpolator();

  const leftOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal',
      cardStyleInterpolator: interpolator,
    }),
    [],
  );
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} options={{}} />
      <Stack.Screen
        name="Second"
        component={secondStackNav}
        options={leftOptions} //TS
      />
    </Stack.Navigator>
  );
};

export {ToDoStackNavigator};
