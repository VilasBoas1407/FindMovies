import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home/index';
import Films from './pages/ListFilm/index'
import MoviesDate from './pages/MoviesDate/index'

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Films,
    MoviesDate
  })
);

export default Routes;