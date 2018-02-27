import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Home from "./screens/home/";
import SideBar from "./screens/sidebar";
import SettingsScreen from "./screens/settings";

import Header from "./screens/Header/";
import Header1 from "./screens/Header/1";
import Header2 from "./screens/Header/2";

const Drawer = DrawerNavigator(
  // Configure routes that access slider menu
  {
    Home: { screen: Home },
    Header: { screen: Header },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  // Configure routes that not access slider menu
  {
    Drawer: { screen: Drawer },
    SettingsScreen: { screen: SettingsScreen },
    
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
