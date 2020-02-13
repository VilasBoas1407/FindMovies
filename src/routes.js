import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home/index';
import Films from './pages/ListFilm/index'
const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Films
  })
);

export default Routes;