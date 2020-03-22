import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Loading from "./screens/Loading";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";

import * as firebase from "firebase";

import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
} from "react-native-dotenv";

var firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: Home
});

const AuthStack = createStackNavigator({
  Login: Login,
  Register: Register
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);
