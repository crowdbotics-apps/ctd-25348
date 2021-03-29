import { createStackNavigator } from "react-navigation-stack";

import Settings from "./screens/settings";
import Home from "./screens";

export default SettingsBlueprintNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Settings: { screen: Settings },
  },
  {
    initialRouteName: "Home"
  }
);
