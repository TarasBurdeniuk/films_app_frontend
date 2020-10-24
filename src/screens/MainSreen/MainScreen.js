import React from 'react';
import { View, Text } from 'react-native';

/**
 * @description Main Screen
 * @return {JSX.Element}
 */
const MainScreen = () => {
  return (
    <View>
      <Text>Main screen</Text>
    </View>
  );
};

MainScreen.navigationOptions = () => {
  return {
    headerTitle: () => null,
  };
};

export default MainScreen;
