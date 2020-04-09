import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomRoundedButton from '../Components/General/CustomRoundButton';

class OnboardScreen extends React.Component {
  signUp = () =>{
    this.props.navigation.navigate('signup');
  }
  
  login = () =>{
    this.props.navigation.navigate('login');
  }

  render() {
        return (
            <View style={styles.container} >
              <View style={styles.form}>
                <CustomRoundedButton  text='SIGNUP' onPress={this.signUp}/>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    flex:1,
    width: '50%',
    resizeMode: "contain",
    alignSelf: 'center'
  },
  form: {
    flex:1,
    justifyContent:'center',
    width: '80%'
  },
  textStyle:{
    flex:1,
    justifyContent:'center',
  },
});