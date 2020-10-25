import React from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../components/ui/CustomButton';
import TextBoldBigWhite from '../../components/ui/TextBoldBigWhite';
import { getAllFilms } from '../../actions/films';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    width: '100%',
    paddingVertical: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 30,
  },
});

/**
 * @description Main Screen
 * @return {JSXElement}
 */
const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleToAddFilm = () => {
    navigation.navigate('AddFilmScreen');
  };

  const handleToSearchFilm = () => {
    navigation.navigate('SearchScreen');
  };

  const handleToAllFilms = () => {
    dispatch(getAllFilms());
    navigation.navigate('AllFilmsScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.scrollContainer}>
          <CustomButton onPress={handleToAddFilm}>
            <TextBoldBigWhite>Add Film</TextBoldBigWhite>
          </CustomButton>
          <CustomButton onPress={handleToSearchFilm}>
            <TextBoldBigWhite>Search Film</TextBoldBigWhite>
          </CustomButton>
          <CustomButton onPress={handleToAllFilms}>
            <TextBoldBigWhite>All Films</TextBoldBigWhite>
          </CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

MainScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: () => null,
    headerLeft: () => null,
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
        <Icon style={{ marginRight: 30 }} name='search' size={30} color='#000' />
      </TouchableOpacity>
    ),
  };
};

export default MainScreen;
