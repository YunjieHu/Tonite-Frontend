
import React from 'react';
import { Image, View, StyleSheet, Text} from 'react-native';
import CustomIcon from "../assets/SVG/logo-icon-only.svg";
import CheckIcon from "../assets/SVG/check.svg";
import Button from "../Components/Auth/Button";

class CompletionScreen extends React.Component{
    submit = () =>{
      this.props.navigation.navigate('Register');
    }
    render() {
        return (
            <View style={styles.container} >
              <View style={styles.backgroundContainer}>
                <Image style={styles.backgroundImage} source={require('../assets/onboarding-with-gradient.png')} />
              </View>
              <View style={styles.logoContainer}>
                <CustomIcon style={styles.logo} width={60} height={60} />
                <Text style={styles.logoHeading}>tonite</Text>
              </View>
              <View style={styles.promptContainer}>
                  <CheckIcon style={styles.logo} width={80} height={80} />
                  <Text style = {styles.heading}>Awesome!</Text>
                  <Text style = {styles.body}>All your information has been saved.</Text>
                  <Text style = {styles.body}>Changes can be made in your profile settings</Text>
                  <Text style = {styles.body}>Now, time to find the perfect lover.</Text>
              </View>
              <Button  onPress={() => this.submit()} label={'Find Your Match'} customStyles={{ width: '100%', fontFamily: 'avenir-next', backgroundColor: 'rgba( 255, 55, 95, 1.0)', marginBottom: 0, borderRadius:0 }} ></Button>
            </View>
        )
    }   
}

export default CompletionScreen;

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
      flex: 0.80,
      justifyContent:'flex-end',
      paddingTop: 50
    },
    logo: {
      alignSelf: 'center',
      marginBottom: 20
    },
    logoHeading:{
      fontFamily: 'avenir-next-bold', 
      fontSize: 35,
      color: '#F5FFFA',
      paddingBottom: 40,
      textAlign:'center'
    },
    promptContainer: {
      width: '100%',
      flex: 1.20,
      justifyContent:'center',
      backgroundColor: '#FFF',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    heading:{

      width: '100%',
      fontFamily: 'avenir-next-bold', 
      fontSize: 32,
      color: '#000',
      textAlign: 'center'
    },
    body:{
        width: '100%',
        fontFamily: 'avenir-next', 
        fontSize: 17,
        color: '#000',
        textAlign: 'center'
    },
  });