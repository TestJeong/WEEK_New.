import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context';

export const SafeAreaView = ({style, children, ...props}) => {
  return (
    <RNSafeAreaView style={[styles.flex, style]} {...props}>
      {children}
    </RNSafeAreaView>
  );
};
const styles = StyleSheet.create({
  flex: {flex: 1},
});