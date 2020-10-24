import React from 'react';
import { View, Text } from 'react-native-web';

/**
 * @description Screen representing one film
 * @return {JSX.Element}
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
