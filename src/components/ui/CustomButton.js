import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: '#2e65d2',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  wrapper: {
    borderRadius: 30,
    width: '80%',
    marginVertical: 10,
  },
});

/**
 * @description Custom button
 * @param {JSXElement} children - expected Text element
 * @param {function} onPress
 * @param {object} style - custom styles
 * @param {boolean} disabled
 * @param {function} onLongPress
 * @return {JSXElement}
 */
const CustomButton = ({ children, onPress, style, disabled, onLongPress }) => {
  const Wrapper = TouchableOpacity;

  return (
    <Wrapper disabled={disabled} style={styles.wrapper} onPress={onPress} onLongPress={onLongPress} activeOpacity={0.7}>
      <View style={[styles.button, { ...style }]}>{children}</View>
    </Wrapper>
  );
};

export default CustomButton;
