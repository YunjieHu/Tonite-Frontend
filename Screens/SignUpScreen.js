import React from 'react';
import {connect} from 'react-redux';
import { Platform, StyleSheet, View, Text, Image } from 'react-native';
import Button from "../Components/Auth/Button";
import FormInput from "../Components/Auth/FormInput";
import Notification from "../Components/Auth/Notification";
import {KeyboardAvoidingView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import logo from "../assets/Create_an_Account.jpg";
import { signUpAction } from '../Actions';
import zxcvbn from 'zxcvbn';

class SignUpScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName:'',
        lastName:'',
        username:'',
        email: '',
        password:'',
        score:'',
        firstNameTouched: false,
        lastNameTouched: false,
        usernameTouched: false,
        emailTouched: false,
        passwordTouched: false,
        showNotification: false,
        initialRun: true,
        spinner: false,
      };
      this.lastNameRef = React.createRef();
      this.usernameRef = React.createRef();
      this.emailRef = React.createRef();
      this.passRef = React.createRef();
    }
    
    handleCloseNotification = () =>{
      this.setState({ showNotification: false });
    }
    
    handleFirstNameChange = (fname) => {
      this.setState({firstName:fname});
    }

    handleLastNameChange = (lname) => {
      this.setState({lastName:lname});
    }

    handleUserNameChange = (username) => {
      this.setState({username:username});
    }

    handleEmailChange = (email) => {
      this.setState({email:email});
    }
  
    handlePasswordChange = (password) => {
      const score = zxcvbn(password).score;
      this.setState({password: password, score: score});
    }


    register = (e) =>{
      e.preventDefault();
      let firstName = this.state.firstName;
      let lastName = this.state.lastName;
      let username = this.state.username;
      let email = this.state.email;
      let pass = this.state.password;
      let score = this.state.score;
      if (firstName && lastName && username && email && pass && score >= 3){
          const payload = {
              firstName, lastName, username, email, pass
          };
          this.props.dispatch(signUpAction(payload));
          this.setState({ initialRun:true});
            this.setState({
              spinner: true
            });
      }
    }

    signIn = () =>{
      this.props.navigation.navigate('login');
    }

    handleFirstNameSubmitPress = () => {
      if (this.lastNameRef.current){
        this.lastNameRef.current.focus();
      }
    }
    handleLastNameSubmitPress = () => {
      if (this.usernameRef.current){
        this.usernameRef.current.focus();
      }
    }
    handleUserNameSubmitPress = () => {
      if (this.emailRef.current){
        this.emailRef.current.focus();
      }
    }
    handleEmailSubmitPress = () => {
      if (this.passRef.current) {
        this.passRef.current.focus();
      }
    };


    handleFirstNameBlur = () => {
      this.setState({ firstNameTouched: true });
    };

    handleLastNameBlur = () => {
      this.setState({ lastNameTouched: true });
    };

    handleUserNameBlur = () => {
      this.setState({ userNameTouched: true });
    };

    handleEmailBlur = () => {
      this.setState({ emailTouched: true });
    };
  
    handlePasswordBlur = () => {
      this.setState({ passwordTouched: true });
    };


    componentDidUpdate(){
      if (this.props.registration){
        const status = this.props.registration.status
        if (status === 'success'){
          setTimeout(() => { this.props.navigation.navigate('login')}, 1500 )
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
        firstName,
        lastName,
        username,
        email,
        score,
        password,
        firstNameTouched,
        lastNameTouched,
        usernameTouched,
        emailTouched,
        passwordTouched,
        showNotification
      } = this.state;
      const notificationMarginTop = showNotification ? 0 : 10;


      const firstNameError =
      !firstName && firstNameTouched
        ? 'First Name is required'
        : undefined;

      const lastNameError =
      !lastName && lastNameTouched
        ? 'Last Name is required'
        : undefined;

      let usernameError;
      if (!username && usernameTouched)
        usernameError = 'Userame is required';
      else{
        if (/[^0-9a-zA-Z]/.test(username))
          usernameError = 'Username must be alphanumeric';
        else 
          usernameError = null;
      }

      let emailError; 
      if (!email && emailTouched)
        emailError = 'Email is required';
      else{
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && email)
          emailError="Must be valid email";
        else
          emailError = null;
      }

      let passwordError;
      if (!password && passwordTouched)
        passwordError =  'Password is required';
      else{
        if (password && score <= 2)
          passwordError =  'Password is too weak';
        else
        passwordError = null;
      }
    

      return (
        <KeyboardAvoidingView style={styles.container} behavior={"padding"} >
           <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          /> 
          <View style={styles.form}>
            <Image source={logo} style={styles.logo} />
            <FormInput  
            onChangeText={this.handleFirstNameChange} 
            onSubmitEditing={this.handleFirstNameSubmitPress}
            onBlur={this.handleFirstNameBlur}
            value={this.state.firstName}
            autoCorrect={false}
            placeholder={'First Name'}
            error={firstNameError}
            blurOnSubmit={Platform.OS === 'ios'}
            />
            <FormInput 
            ref={this.lastNameRef}
            onChangeText={this.handleLastNameChange} 
            onSubmitEditing={this.handleLastNameSubmitPress}
            onBlur={this.handleLastNameBlur}
            value={this.state.lastName}
            autoCorrect={false}
            placeholder={'Last Name'}
            error={lastNameError}
            blurOnSubmit={Platform.OS === 'ios'}
            />
            <FormInput 
            ref={this.usernameRef}
            onChangeText={this.handleUserNameChange} 
            onSubmitEditing={this.handleUserNameSubmitPress}
            onBlur={this.handleUserNameBlur}
            value={this.state.username}
            autoCorrect={false}
            placeholder={'Username'}
            error={usernameError}
            blurOnSubmit={Platform.OS === 'ios'}
            />
            <FormInput 
            ref={this.emailRef}
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

           <Button label={'LOGIN'} onPress={this.register} disabled={!firstName || !lastName || !username || !email || !password || emailError !== null || score <= 2}/>
            <View style={{flexDirection:"row"}}>
              <View style={styles.textStyle}>
                <Text 
                style={{
                  justifyContent: 'flex-end',
                  color: '#F5FFFA',
                  textAlign:'right'}}
                  onPress={this.signIn}
                >Already have an account?</Text>
              </View>
            </View>
          </View>
          <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}> 
            <Notification
            showNotification={showNotification}
            handleCloseNotification={this.handleCloseNotification}
            type="Error"
            message="Your username is already taken!"
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
      flex:0.8,
      width: '100%',
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    header:{
      fontSize:24,
      color: '#F5FFFA',
      flex:1,
      borderBottomColor: '#199187',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    form: {
      flex:1,
      justifyContent:'flex-start',
      width: '80%',
      marginTop:'0%'
    },
    textStyle:{
      flex:1,
      alignItems: 'center',
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
      registration: store.register.response
    }
  };
  
  export default connect(mapStateToProps)(SignUpScreen);