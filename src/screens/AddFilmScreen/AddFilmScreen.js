import React from 'react';
import { View, Text } from 'react-native';

/**
 * @description Screen representing form for add new film
 * @return {JSXElement}
 */
const AddFilmScreen = () => {
  return (
    <View>
      <Text>AddFilmScreen</Text>
    </View>
  );
};

AddFilmScreen.navigationOptions = () => {
  return {
    headerTitle: () => null,
  };
};

export default AddFilmScreen;
