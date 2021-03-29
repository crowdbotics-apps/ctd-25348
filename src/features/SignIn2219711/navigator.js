import {createStackNavigator} from 'react-navigation-stack';

import {SignIn2Container} from './screens/signIn2/signIn2.container';

import Home from './screens';

export default SignIn02BlueprintNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    SignIn2: {screen: SignIn2Container},
  },
  {
    initialRouteName: 'Home',
  },
);
