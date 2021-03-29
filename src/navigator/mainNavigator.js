import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings219723Navigator from '../features/Settings219723/navigator';
import UserProfile219716Navigator from '../features/UserProfile219716/navigator';
import Settings219715Navigator from '../features/Settings219715/navigator';
import Settings219713Navigator from '../features/Settings219713/navigator';
import SignIn2219711Navigator from '../features/SignIn2219711/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings219723: { screen: Settings219723Navigator },
UserProfile219716: { screen: UserProfile219716Navigator },
Settings219715: { screen: Settings219715Navigator },
Settings219713: { screen: Settings219713Navigator },
SignIn2219711: { screen: SignIn2219711Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
