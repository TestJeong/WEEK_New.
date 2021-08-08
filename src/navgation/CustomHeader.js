import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const CustomMyHeader = ({title, Left, Right, viewStyle, titleStyle}) => {
  return (
    <View style={[styles.view, viewStyle]}>
      {Left && Left()}
      <View style={styles.flex}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
      {Right && Right()}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {fontSize: 20, fontWeight: '500', textAlign: 'center'},
  flex: {flex: 1, backgroundColor: 'transparent'},
});

export default CustomMyHeader;
