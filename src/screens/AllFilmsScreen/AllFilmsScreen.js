import React from 'react';
import { Text, View } from 'react-native';

/**
 * @description Screen representing the list of all films
 * @return {JSXElement}
 */
const AllFilmsScreen = () => {
  return (
    <View>
      <Text>AllFilmsScreen</Text>
    </View>
  );
};

AllFilmsScreen.navigationOptions = () => {
  return {
    headerTitle: () => null,
  };
};

export default AllFilmsScreen;
