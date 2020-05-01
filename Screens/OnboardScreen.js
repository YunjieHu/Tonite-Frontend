import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import Button from "../Components/Auth/Button";
import * as Facebook from 'expo-facebook';
import CustomIcon from "../assets/SVG/logo-icon-only.svg";
import FacebookIcon from "../assets/SVG/Icon-facebook.svg";
import GoogleIcon from "../assets/SVG/Icon-google.svg";
import PhoneIcon from "../assets/SVG/Icon-phone.svg"; 

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
              <View style={styles.logoContainer}>
              <CustomIcon style={styles.logo} width={90} height={90} />
              <Text style={styles.heading}>tonite</Text>
              </View>
              <View style={styles.form}>
                <View style={styles.textStyle}>
                  <Text 
                  style={styles.formPrompt}
                  >Create Your Account</Text>
                </View>
                <Button  label={'Sign in With Facebook'} customStyles={{backgroundColor: 'rgba( 59, 89, 152, 0.8)'}} onPress={this.facebookLogIn} >
                    <FacebookIcon width={40} height={20} />
                </Button>
                <Button  label={'Sign in With Google'} customStyles={{backgroundColor: 'rgba( 222, 82, 70, 1.0)'}} > 
                    <GoogleIcon width={40} height={20} />
                </Button>
                <Button  label={'Sign in with Phone Number'} customStyles={{backgroundColor: 'rgba( 62, 62, 62, 0.8)'}} onPress={this.login}>
                    <PhoneIcon width={40} height={20} />
                </Button>
                <View style={styles.textStyle}>
                  <Text 
                  style={styles.formPrompt}
                  >Trouble Logging In?</Text>
                </View>
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
  logoContainer:{
    flex: 1,
    justifyContent:'flex-end'
  },
  logo: {
    flex:1,
    alignSelf: 'center',
  },
  heading:{
    fontFamily: 'avenir-next-bold', 
    fontSize: 48,
    color: '#F5FFFA',
    paddingBottom: 40,
    textAlign:'center'
  },
  form: {
    width: '90%',
    flex: 0.9,
    justifyContent:'flex-start'
  },
  formPrompt:{
    color: '#F5FFFA',
    textAlign:'center',
    fontFamily: 'avenir-next', 
    fontSize: 15,
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    marginBottom: 30,
  },
  textStyle:{
  },
});