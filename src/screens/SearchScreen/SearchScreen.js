import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getFilmById, searchFilm } from '../../actions/films';
import FilmItem from '../../components/FilmItem';
import Loader from '../../components/ui/Loader';

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
  alertEmpty: {
    alignSelf: 'center',
  },
});

/**
 * @description Screen representing form for searching film by title and star, and list of searched film
 * @return {JSXElement}
 */
const SearchScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState({
    title: '',
    star: '',
  });
  const [disabled, setDisabled] = useState(true);
  const { isLoading, searchedFilms } = useSelector((state) => state.films);
  const dispatch = useDispatch();

  useEffect(() => {
    const notEmpty = Object.values(inputValue).some((item) => item.trim() !== '');
    if (notEmpty) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputValue]);

  const handleOnChange = (text, name) => {
    setInputValue({ ...inputValue, [name]: text });
  };

  const handleSearch = () => {
    const star = inputValue.star.trim() ? inputValue.star.split(',').map((item) => item.trim()) : [];
    dispatch(
      searchFilm({
        title: inputValue.title.trim(),
        star,
      }),
    );
  };

  const handlePress = (id) => {
    dispatch(getFilmById(id));
    navigation.navigate('FilmScreen');
  };

  const RenderItem = ({ item }) => {
    return <FilmItem title={item.title} release={item.release} onPress={() => handlePress(item._id)} />;
  };

  const { title, star } = inputValue;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
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
          <Text style={styles.name}>Star:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleOnChange(text, 'star')}
            value={star}
            maxLength={200}
          />
        </View>
        <Button title='Search' onPress={handleSearch} disabled={disabled} />
      </View>
      {/* eslint-disable-next-line no-nested-ternary */}
      {isLoading ? (
        <Loader />
      ) : searchedFilms.length ? (
        <View>
          <FlatList data={searchedFilms} renderItem={RenderItem} keyExtractor={(item) => item._id.toString()} />
        </View>
      ) : (
        <View style={styles.alertEmpty}>
          <Text style={styles.name}>List is empty</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

SearchScreen.navigationOptions = () => {
  return {
    headerTitle: () => null,
  };
};

export default SearchScreen;
