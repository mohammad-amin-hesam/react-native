import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";

const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    // headerMode: "none",
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs"
    }
  }
);

const App = createAppContainer(AppNavigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
