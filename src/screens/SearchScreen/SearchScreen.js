import React from 'react';
import { Text, View } from 'react-native-web';

/**
 * @description Screen representing form for searching film by title and star, and list of searched film
 * @return {JSX.Element}
 */
const SearchScreen = () => {
  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  );
};

SearchScreen.navigationOptions = () => {
  return {
    headerTitle: () => null,
  };
};

export default SearchScreen;
