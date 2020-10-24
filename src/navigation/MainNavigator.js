import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainScreen from '../screens/MainSreen/MainScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import AddFilmScreen from '../screens/AddFilmScreen/AddFilmScreen';
import FilmScreen from '../screens/FilmScreen/FilmScreen';
import AllFilmsScreen from '../screens/AllFilmsScreen/AllFilmsScreen';

/**
 * @description Main stack navigation
 */
const MainNavigator = createStackNavigator(
  {
    MainScreen,
    SearchScreen,
    AddFilmScreen,
    FilmScreen,
    AllFilmsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowColor: 'transparent',
      },
      headerTitleStyle: {
        fontSize: 20,
      },
      headerTintColor: '#000',
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
          <Icon style={{ marginRight: 30 }} name='home' size={30} color='#fff' />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: '100%',
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon name='caret-left' size={40} color='#fff' />
        </TouchableOpacity>
      ),
    }),
  },
);

export default MainNavigator;
