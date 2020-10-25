import React from 'react';
import { Text, View } from 'react-native';

/**
 * @description Screen representing form for searching film by title and star, and list of searched film
 * @return {JSXElement}
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
