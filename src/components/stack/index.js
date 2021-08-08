import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useCallback, useContext} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import CustomMyHeader from '../../navgation/CustomHeader';
import {SafeAreaView} from '../../navgation/SafeAreaView';

const secondStackNav = () => {
  const navgation = useNavigation();

  const goBack = useCallback(() => {
    navgation.canGoBack && navgation.goBack();
  }, []);
  return (
    <SafeAreaView>
      <CustomMyHeader
        title={'Custom Stack TEST'}
        Left={() => <Icon name="home" size={30} onPress={goBack} />}
        Right={() => <Icon name="close" size={30} />}
      />
      <View>
        <Text>asdfasdfasdf</Text>
      </View>
    </SafeAreaView>
  );
};

export default secondStackNav;
