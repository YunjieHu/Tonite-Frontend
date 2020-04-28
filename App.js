import React from 'react';
import { View, Image, Left} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { createSwitchNavigator , createBottomTabNavigator, createAppContainer, StackActions,NavigationActions, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from "./Store";
import  TabBar  from './Components/TabBar/TabBar';

import onboardScreen from './Screens/OnboardScreen';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ForgotPasswordScreen from './Screens/ForgotPassScreen'

import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import MessengerScreen from './Screens/MessengerScreen';

import * as Facebook from 'expo-facebook';



const profile = createStackNavigator({
  profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null,
    } 
  },
});

const AppStackNavigator = createSwitchNavigator({
  loginFlow: { 
    screen: createSwitchNavigator({
      onboard: {screen: onboardScreen },
      login:  { screen: LoginScreen  },
      signup: { screen: SignUpScreen },
      forgot: { screen: ForgotPasswordScreen}
    })
  },
  mainFlow: {
    screen: createBottomTabNavigator({
      main: { 
        screen: HomeScreen, 
        navigationOptions: () => {
          return {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="home" size={25} color={tintColor} />
            )
          }
        }
      },
      chat:{
        screen:MessengerScreen,
        navigationOptions: () => {
          return {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="comments" size={25} color={tintColor} />
            )
          }
        }
      },
      profileTab:{
        screen:profile,
        params:{
          profileID:'user'
        },
        navigationOptions: () => {
          return {
            tabBarIcon: ({ tintColor }) => (
              <Icon name='user' size={25} color={tintColor} />
            ),
              tabBarOnPress: ({ navigation }) => {
                const resetAction = StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'profile' ,params: {
                    profileID: '',
                  }, })],
                });
                navigation.dispatch(resetAction);
              }
          }
        }
      }
    }, {
      tabBarOptions: { showLabel: false , activeTintColor: "green", inactiveTintColor: "grey"},

      tabBarComponent: (props) =><TabBar {...props} />,
      } ,
    )
  }
});


const AppContainer = createAppContainer(AppStackNavigator);

export default function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
          <AppContainer />
      </Provider>
  );
}
