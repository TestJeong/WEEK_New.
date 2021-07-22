import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from 'react-native';
import styled from 'styled-components/native';

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
  background-color: beige;
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

const MainTheme = () => {
  return (
    <Column_Btn>
      <Main_Title_View>
        <Main_Title_Text>오늘</Main_Title_Text>
        <Main_Title_Text>⏰</Main_Title_Text>
      </Main_Title_View>
      <Main_Title_Number>
        <Main_Title_Number_Text>0</Main_Title_Number_Text>
      </Main_Title_Number>
    </Column_Btn>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '50%',
  },
  separator: {
    backgroundColor: 'white',
    height: 1,
  },

  themeBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    width: '45%',
    borderRadius: 10,
  },
  themeTitle_View: {
    alignItems: 'center',
  },
  themeTitle_Text: {
    textAlign: 'left',
    fontSize: 20,
    paddingBottom: 10,
  },
  themeNumber_View: {
    justifyContent: 'center',
  },
  themeNumber_Text: {
    fontSize: 30,
  },
});

export default MainTheme;
