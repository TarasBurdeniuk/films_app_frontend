import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, SafeAreaView, StyleSheet, Button, Alert } from 'react-native';
import Loader from '../../components/ui/Loader';
import { deleteFilm } from '../../actions/films';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  info: {
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: '800',
  },
  release: {
    paddingLeft: 20,
    fontSize: 16,
  },
  format: {
    paddingLeft: 20,
    fontSize: 16,
  },
  star: {
    paddingLeft: 20,
    fontSize: 16,
    color: '#06224e',
  },
  name: {
    fontSize: 18,
    color: '#123ee2',
  },
  delete: {
    backgroundColor: 'red',
    width: '40%',
    marginTop: 30,
    borderRadius: 10,
  },
});

/**
 * @description Screen representing one film
 * @return {JSXElement}
 */
const FilmScreen = ({ navigation }) => {
  const { currentFilm, isLoading } = useSelector((state) => state.films);

  const dispatch = useDispatch();
  if (isLoading) {
    return <Loader />;
  }

  const returnAndDelete = (id) => {
    dispatch(deleteFilm(id));
    navigation.goBack();
  };

  const handleDelete = (id) => {
    Alert.alert(
      'Delete film',
      'Do you want delete film?',
      [
        {
          text: 'Yes',
          onPress: () => returnAndDelete(id),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentFilm && (
        <View style={styles.info}>
          <Text style={styles.name}>Title:</Text>
          <Text style={styles.title}>{currentFilm.title}</Text>
          <Text style={styles.name}>Release:</Text>
          <Text style={styles.release}>{currentFilm.release}</Text>
          <Text style={styles.name}>Format:</Text>
          <Text style={styles.format}>{currentFilm.format}</Text>
          <View>
            <Text style={styles.name}>Stars:</Text>
            {currentFilm.stars.map((star, index) => (
              <Text style={styles.star} key={`${star}_${index.toString()}`}>
                {star}
              </Text>
            ))}
          </View>
          <Button color='red' onPress={() => handleDelete(currentFilm._id)} title='Delete' />
        </View>
      )}
    </SafeAreaView>
  );
};

FilmScreen.navigationOptions = () => {
  return {
    headerTitle: () => null,
  };
};

export default FilmScreen;
