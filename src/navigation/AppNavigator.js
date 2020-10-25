import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';

/**
 * @description Navigation for application
 */
export default createAppContainer(
  createSwitchNavigator(
    {
      Main: MainNavigator,
    },
    {
      initialRouteName: 'Main',
    },
  ),
);
