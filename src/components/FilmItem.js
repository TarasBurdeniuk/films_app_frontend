import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 60,
    marginVertical: 10,
    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#e7eaee',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});

/**
 * @description Component representing one item of the list of films
 * @param {function} onPress
 * @param {string} title
 * @param {number} release
 * @return {JSX.Element}
 */
const FilmItem = ({ onPress, title, release }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text} numberOfLines={2}>
            {title}
          </Text>
        </View>
        <View>
          <Text style={styles.text}>{release}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FilmItem;
