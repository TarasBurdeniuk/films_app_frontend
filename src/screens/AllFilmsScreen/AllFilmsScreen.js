import React from 'react';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/ui/Loader';
import FilmItem from './FilmItem';
import { getFilmById } from '../../actions/films';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

/**
 * @description Screen representing the list of all films
 * @return {JSX.Element}
 */
const AllFilmsScreen = ({ navigation }) => {
  const { allFilms, isLoading } = useSelector((state) => state.films);

  const dispatch = useDispatch();

  if (isLoading && !allFilms) {
    return <Loader />;
  }

  const handlePress = (id) => {
    dispatch(getFilmById(id));
    navigation.navigate('FilmScreen');
  };

  const RenderItem = ({ item }) => {
    return <FilmItem title={item.title} release={item.release} onPress={() => handlePress(item._id)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList data={allFilms} renderItem={RenderItem} keyExtractor={(item) => item._id.toString()} />
      </View>
    </SafeAreaView>
  );
};

AllFilmsScreen.navigationOptions = () => {
  return {
    headerTitle: () => null,
  };
};

export default AllFilmsScreen;
