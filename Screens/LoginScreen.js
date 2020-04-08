import React from 'react';
import {connect} from 'react-redux';
import { Platform, Image, StyleSheet, View, Text } from 'react-native';
import Button from "../Components/Auth/Button";
import FormInput from "../Components/Auth/FormInput";
import Notification from "../Components/Auth/Notification";
import logo from "../assets/logo.png";
import {KeyboardAvoidingView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { loginAction } from '../Actions';


class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
      emailTouched: false,
      passwordTouched: false,
      showNotification: false,
      initialRun: true,
      spinner: false,
    };
    this.passRef = React.createRef();
  }

  handleCloseNotification = () =>{
    this.setState({ showNotification: false });
  }

  handleEmailChange = (email) => {
    this.setState({email:email});
  }

  handlePasswordChange = (password) => {
    this.setState({password: password});
  }

  handleEmailSubmitPress = () => {
    if (this.passRef.current) {
      this.passRef.current.focus();
    }
  };

  handleEmailBlur = () => {
    this.setState({ emailTouched: true });
  };

  handlePasswordBlur = () => {
    this.setState({ passwordTouched: true });
  };

  login = (e) => {
    e.preventDefault();
    let email = this.state.email;
    let pass = this.state.password;
    if (email && pass){
        const payload = {
            email, pass
        };
        this.props.dispatch(loginAction(payload));
        this.setState({ initialRun:true});
          this.setState({
            spinner: true
          });
    }
  }
  
  signUp = () =>{
    this.props.navigation.navigate('signup');
  }

  forgotPassword = () =>{
    this.props.navigation.navigate('forgot');
  }

  componentDidUpdate(){
    if (this.props.login){
      const status = this.props.login.status
      if (status === 'success'){
        setTimeout(() => { this.props.navigation.navigate('main')}, 1500 )
      }
      else{
        if (this.state.showNotification ===false && this.state.initialRun === true ){
          setTimeout(() => {this.setState({spinner: false, showNotification: true, initialRun:false})}, 1500)
        }
      }
    }
  }


  render() {  
      const {
        email,
        password,
        emailTouched,
        passwordTouched,
        showNotification
      } = this.state;
      const notificationMarginTop = showNotification ? 0 : 10;

      let emailError; 
      if (!email && emailTouched)
        emailError = 'Email is required';
      else{
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && email) 
          emailError="Must be valid email";
        else
          emailError = null;
      }
      
      const passwordError =
      !password && passwordTouched
        ? 'Password is required'
        : undefined;
      return (
        <KeyboardAvoidingView style={styles.container} behavior={"padding"} >
          <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
          <Image source={logo} style={styles.logo} />
          <View style={styles.form}>
            <FormInput 
            value={this.state.email} 
            onChangeText={this.handleEmailChange} 
            onSubmitEditing={this.handleEmailSubmitPress}
            onBlur={this.handleEmailBlur}
            placeholder={'Email'}
            autoCorrect={false}
            keyboardType="email-address"
            error={emailError}
            blurOnSubmit={Platform.OS === 'ios'}
            />
            <FormInput 
            ref={this.passRef}
            value={this.state.password}
            onChangeText={this.handlePasswordChange} 
            placeholder={'Password'}
            secureTextEntry={true}
            returnKeyType="done"
            onBlur={this.handlePasswordBlur}
            error={passwordError}
            />
            <Button label={'LOGIN'} onPress={this.login} disabled={!email || !password || emailError !== null }/>
            <View style={{flexDirection:"row"}}>
              <View style={styles.textStyle}>
                <Text 
                style={{
                  justifyContent: 'flex-start',
                   color: '#F5FFFA'
                  }}
                  onPress={this.forgotPassword}
                >Forgot?</Text>
              </View>
              <View style={styles.textStyle}>
                <Text 
                style={{
                  justifyContent: 'flex-end',
                  color: '#F5FFFA',
                  textAlign:'right'}}
                  onPress={this.signUp}
                >Don't have an account?</Text>
              </View>
            </View>
          </View>
          <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}> 
            <Notification
            showNotification={showNotification}
            handleCloseNotification={this.handleCloseNotification}
            type="Error"
            message="Those credentials don't look right."
            />
          </View>
        </KeyboardAvoidingView>
      );
    }
  }
  

  const styles = StyleSheet.create({
    container: {
     flex:1,
     backgroundColor: '#2E8B57',
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
    notificationWrapper: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    spinnerTextStyle: {
      color: '#FFF'
    },
  });

  const mapStateToProps = (store) => {
    return{
      login: store.login.response
    }
  };

  export default connect(mapStateToProps)(LoginScreen);