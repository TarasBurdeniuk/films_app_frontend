import React from 'react';
import { View, Text } from 'react-native';

/**
 * @description Screen representing one film
 * @return {JSXElement}
 */
const FilmScreen = () => {
  return (
    <View>
      <Text>Film screen</Text>
    </View>
  );
};

FilmScreen.navigationOptions = () => {
  return {
    headerTitle: () => null,
  };
};

export default FilmScreen;
