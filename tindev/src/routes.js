import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Main from "./pages/Main";
import Login from "./pages/login";

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main
  })
);
