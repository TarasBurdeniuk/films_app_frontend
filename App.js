import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

/**
 * @description Main component which representing application
 * @return {JSX.Element}
 */
function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

export default App;
