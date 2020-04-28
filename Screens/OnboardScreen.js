import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import CustomRoundedButton from '../Components/General/CustomRoundButton';
import * as Facebook from 'expo-facebook';
import CustomIcon from "../assets/SVG/logo-icon-only.svg";

class OnboardScreen extends React.Component {
  constructor(props) {
    super(props);
  
      this.state = {
        isLoggedin : false,
        setLoggedinStatus : false,
        userData : null,
        setUserData : null,
        isImageLoading : false,
        setImageLoadStatus : false,
    }
  }


  facebookLogIn = async () => {
    try {
      await Facebook.initializeAsync('2611432352403660');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('2611432352403660', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
          .then(response => response.json())
          .then(data => {
            setLoggedinStatus(true);
            setUserData(data);
          })
          .catch(e => console.log(e))
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }


  signUp = () =>{
    this.props.navigation.navigate('signup');
  }
  
  login = () =>{
    this.props.navigation.navigate('login');
  }

  render() {
        return (
            <View style={styles.container} >
              <View style={styles.backgroundContainer}>
                    <Image style={styles.backgroundImage} source={require('../assets/sign-in-bg.png')} />
              </View>
              <CustomIcon style={styles.logo} width={120} height={120} />
              <View style={styles.form}>
                <CustomRoundedButton  text='Login With FACEBOOK' onPress={this.facebookLogIn} />
                <CustomRoundedButton  text='LOGIN' onPress={this.login}/>
              </View>
            </View>
        );
  }
}

export default OnboardScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  backgroundContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }, 
  backgroundImage: {
    flex: 1, 
    width: null, 
    height: null,
    resizeMode: 'cover'
  },
  logo: {
    flex:1,
    alignSelf: 'center',
  },
  form: {
    width: '80%'
  },
  textStyle:{
    flex:1,
    justifyContent:'center',
  },
});