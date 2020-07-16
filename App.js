import React , { useState } from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import { createSwitchNavigator , createBottomTabNavigator, createAppContainer, StackActions,NavigationActions, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from "./Store";
import  TabBar  from './Components/TabBar/TabBar';

import onboardScreen from './Screens/OnboardScreen';
import PhoneAuthScreen from './Screens/PhoneAuthScreen';
import PhoneVerifScreen from './Screens/PhoneVerifScreen';
import EmailAuthScreen from './Screens/EmailAuthScreen';
import TransitionScreen from './Screens/TransitionScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import ForgotPasswordScreen from './Screens/ForgotPassScreen';
import CompletionScreen from './Screens/CompletionScreen';

import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import MessengerScreen from './Screens/MessengerScreen';

import * as Facebook from 'expo-facebook';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


const fetchFonts = () => {
  return Font.loadAsync({
  'avenir-next': require('./assets/fonts/AvenirNext-Regular.ttf'),
  'avenir-next-bold': require('./assets/fonts/AvenirNext-Bold.ttf'),
  'avenir-next-italic': require('./assets/fonts/AvenirNext-Italic.ttf'),
  });
  };

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
      login:  createStackNavigator({
        PhoneAuth: {
          screen:PhoneAuthScreen,
          navigationOptions: ({ navigation }) => ({
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              backgroundColor: 'transparent',
            },
            headerLeft: (
              <Icon name={'chevron-left'} style={{marginLeft: 10}} size={22}  onPress={() => navigation.navigate('onboard')}/>

            )
          }) 
        },
        PhoneVerif: {
          screen:PhoneVerifScreen,
          navigationOptions: ({ navigation: { goBack }  }) => ({
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              backgroundColor: 'transparent',
            },
            headerLeft: (
              <Icon name={'chevron-left'} style={{marginLeft: 10}} size={22}  onPress={() => goBack()}/>
            )
          }) 
        },EmailAuth: {
          screen:EmailAuthScreen,
          navigationOptions: ({ navigation }) => ({
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              backgroundColor: 'transparent',
            },
            headerLeft: (
              <Icon name={'chevron-left'} style={{marginLeft: 10}} size={22}  onPress={() => navigation.navigate('onboard')}/>
            )
          }) 
        },
      }),
      signup: createStackNavigator({ 
        Transition: {
          screen:TransitionScreen, 
          navigationOptions: {
            header: null,
          } 
        },
        Register: {
          screen:RegistrationScreen, 
          navigationOptions: {
            header: null,
          } 
        },
        Complete: {
          screen:CompletionScreen, 
          navigationOptions: {
            header: null,
          } 
        },
      }),

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
  const [dataLoaded, setDataLoaded] = useState(false);
  const store = configureStore();
  //load in the font
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
          <AppContainer />
      </Provider>
  );
}
