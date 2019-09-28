import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const AppNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    // headerMode: "none",
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "BusinessSearch"
    }
  }
);

export default createAppContainer(AppNavigator);
