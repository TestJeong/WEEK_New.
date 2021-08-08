import React, {useState, useEffect, useCallback, useContext} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {testcode} from '../../reducers/catagory';
import MainTheme from './mainTheme';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppContext} from '../../../App';
import {Context} from '../../store/context';
import {useNavigation} from '@react-navigation/native';

const TitleText = styled.Text`
  font-size: 20px;

  margin-bottom: 25px;
`;

const CategoryTitleText = styled.Text`
  font-size: 20px;

  margin-bottom: 15px;
`;

const PlusText = styled.Text`
  font-size: 15px;
  margin-left: 10px;
`;

const FlatListView = styled.FlatList`
  background-color: #f8e6cb;
  border-radius: 10px;
  padding: 0px 0px 0px 20px;
`;

const Main_Container = styled.View`
  height: 48%;
  justify-content: flex-end;
`;

const Column_View = styled.View`
  flex-direction: row;
  height: 30%;
  justify-content: space-between;
  margin-bottom: 35px;
`;

const Column_Btn = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  width: 45%;
  border-radius: 10px;
`;

const Plus_Category_Btn = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

const Main_Title_Number = styled.View`
  justify-content: center;
`;

const Main_Title_Number_Text = styled.Text`
  font-size: 30px;
`;

const Main_Title_View = styled.View`
  align-items: center;
`;

const Main_Title_Text = styled.Text`
  text-align: left;
  font-size: 20px;

  padding-bottom: 10px;
`;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {count, contextDispatch} = useContext(Context);
  const navigation = useNavigation();

  useEffect(() => {
    /* console.log('asdf', count); */
    /* dispatch(testcode(14)); */
  }, []);

  const onClicks = useCallback(() => {
    /* contextDispatch({type: 'INCREASE', value: count + 1}); */
    navigation.navigate('Second');
  }, []);

  return (
    <SafeAreaView style={{flex: 1, margin: 10}}>
      <Main_Container>
        <TitleText>MY WEEK</TitleText>
        <Button title="asdf" onPress={onClicks} />

        <Column_View>
          <MainTheme />
          <MainTheme />
        </Column_View>

        <Column_View>
          <MainTheme />
          <MainTheme />
        </Column_View>
      </Main_Container>
      <View style={styles.container}>
        <CategoryTitleText>CATEGORY</CategoryTitleText>
        <FlatListView
          keyExtractor={(item, index) => '#' + index}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          data={null}
          renderItem={null}
        />
        <Plus_Category_Btn>
          <Icon name="pluscircleo" size={25} />
          <PlusText>카테고리 추가</PlusText>
        </Plus_Category_Btn>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '55%',
  },
  separator: {
    backgroundColor: 'white',
    height: 1,
  },
});

export default HomeScreen;
