import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  default: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
  },
});

const TextBoldBigWhite = ({ children, style }) => (
  <Text numberOfLines={1} allowFontScaling={false} style={{ ...styles.default, ...style }}>
    {children}
  </Text>
);

export default TextBoldBigWhite;
