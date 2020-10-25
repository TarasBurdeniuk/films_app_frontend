import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, Button, Alert } from 'react-native';
import { addNewFilm, clearAlert } from '../../actions/films';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
});

/**
 * @description Screen representing form for add new film
 * @return {JSXElement}
 */
const AddFilmScreen = () => {
  const [value, setValue] = useState({
    title: '',
    format: '',
    release: '',
    stars: '',
  });
  const [disabled, setDisabled] = useState(true);
  const { alert } = useSelector((state) => state.films);
  const dispatch = useDispatch();

  useEffect(() => {
    const notEmpty = Object.values(value).every((item) => item.trim() !== '');
    const isInteger = Number.isInteger(+value.release) && +value.release !== 0;
    if (notEmpty && isInteger) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);

  const clearValue = () => {
    dispatch(clearAlert());
    setValue({
      title: '',
      format: '',
      release: '',
      stars: '',
    });
  };

  if (alert) {
    Alert.alert(
      `New Film`,
      `${alert}`,
      [
        {
          text: 'Ok',
          onPress: () => clearValue(),
        },
      ],
      { cancelable: false },
    );
  }

  const handleOnChange = (text, name) => {
    setValue({ ...value, [name]: text });
  };

  const handleSave = () => {
    dispatch(
      addNewFilm({
        ...value,
        stars: value.stars.split(',').map((item) => item.trim()),
        release: Number(value.release),
      }),
    );
  };

  const { title, format, release, stars } = value;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View>
          <Text style={styles.name}>Title:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleOnChange(text, 'title')}
            value={title}
            maxLength={200}
          />
        </View>
        <View>
          <Text style={styles.name}>Format:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleOnChange(text, 'format')}
            value={format}
            maxLength={10}
          />
        </View>
        <View>
          <Text style={styles.name}>Release:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleOnChange(text, 'release')}
            keyboardType='decimal-pad'
            value={release}
            maxLength={4}
          />
        </View>
        <View>
          <Text style={styles.name}>Stars:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleOnChange(text, 'stars')}
            value={stars}
            multiline
          />
        </View>
        <Button title='Save' onPress={handleSave} disabled={disabled} />
      </ScrollView>
    </SafeAreaView>
  );
};

AddFilmScreen.navigationOptions = () => {
  return {
    headerTitle: () => null,
  };
};

export default AddFilmScreen;
