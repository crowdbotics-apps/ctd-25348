import { createStackNavigator } from "react-navigation-stack";

import Profile1 from "./screens/profile1";
import Profile2 from "./screens/profile2";
import Profile3 from "./screens/profile3";
import SlideShow from "./screens/slideShow";

import Home from "./screens";

export default ProfilesBlueprintNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Profile1: { screen: Profile1 },
    Profile2: { screen: Profile2 },
    Profile3: { screen: Profile3 },
    SlideShow: { screen: SlideShow },


  },
  {
    initialRouteName: "Home"
  }
);
