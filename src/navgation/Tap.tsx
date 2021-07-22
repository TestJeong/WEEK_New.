import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ToDoStackNavigator} from './Stack';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const TapNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="HOME"
        component={ToDoStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TapNavigator;
