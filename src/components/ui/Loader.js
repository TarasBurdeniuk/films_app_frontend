import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Loader = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size='large' color='#2e65d2' />
    </View>
  );
};

export default Loader;
