import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
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
  alert: {
    marginLeft: 30,
    color: 'red',
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
  const [format] = useState([
    { label: 'DVD', value: 'DVD' },
    { label: 'VHS', value: 'VHS' },
    { label: 'Blu-Ray', value: 'Blu-Ray' },
  ]);
  const refFormat = useRef();

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

  const showAlert = (alertText) => {
    Alert.alert(
      `New Film`,
      `${alertText}`,
      [
        {
          text: 'Ok',
        },
      ],
      { cancelable: false },
    );
  };

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
    const validRelease = Number(value.release) >= 1850 && Number(value.release) <= 2020;
    if (!validRelease) {
      showAlert('Not valid release');
      return;
    }
    dispatch(
      addNewFilm({
        ...value,
        stars: value.stars.split(',').map((item) => item.trim()),
        release: Number(value.release),
      }),
    );
    refFormat.current.inputRef.clear();
  };

  const { title, release, stars } = value;

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
          <View style={styles.input}>
            <RNPickerSelect ref={refFormat} onValueChange={(text) => handleOnChange(text, 'format')} items={format} />
          </View>
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
          <Text style={styles.alert}>from 1850 to 2020</Text>
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
