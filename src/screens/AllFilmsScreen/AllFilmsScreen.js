import React from 'react';
import { Text, View } from 'react-native-web';

/**
 * @description Screen representing the list of all films
 * @return {JSX.Element}
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
