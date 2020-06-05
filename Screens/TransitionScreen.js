
import React from 'react';
import { Image, View, StyleSheet, Text} from 'react-native';
import CustomIcon from "../assets/SVG/logo-icon-only.svg";
import HookUpIcon from "../assets/SVG/bottoms-up.svg";
import Button from "../Components/Auth/Button";

class TransitionScreen extends React.Component{
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
                  <HookUpIcon style={styles.logo} width={80} height={80} />
                  <Text style = {styles.heading}>Hook Up Tonite</Text>
                  <Text style = {styles.body}>Sometimes, all you need is a good time.</Text>
                  <Text style = {styles.body}>We've created a safe space for that to</Text>
                  <Text style = {styles.body}>happen.</Text>
                  <Text style = {styles.body}>First, we need a little bit of information.</Text>
              </View>
              <Button  onPress={() => this.submit()} label={'Continue'} customStyles={{ width: '100%', fontFamily: 'avenir-next', backgroundColor: 'rgba( 255, 55, 95, 1.0)', marginBottom: 0, borderRadius:0 }} ></Button>
            </View>
        )
    }   
}

export default TransitionScreen;

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