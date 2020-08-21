import React from 'react';
import {  Platform, View, Text, TextInput, Alert, StyleSheet,} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import * as Location from 'expo-location';
import Icon from "react-native-vector-icons/FontAwesome";
import Button from '../Components/Auth/Button.js';
import Step1 from '../Components/Auth/Step1.js';
import Step2 from '../Components/Auth/Step2.js';
import Step3 from '../Components/Auth/Step3.js';
import Step4 from '../Components/Auth/Step4.js';
import Step5 from '../Components/Auth/Step5.js';
import Dots from 'react-native-dots-pagination';

class RegistrationScreen extends React.Component {
    constructor(props) {
        super(props)
        // Set the initial input values
        this.state = {
          currentStep: 1, // Default is Step 1
          firstName: '', //string
          lastName: '', //string
          gender: 1,  //default is 1, max is 2, lowest is 0
          birthday: '2016-05-15', //date
          preference:1, //default is 1
          photos: [],
          location: ''
        }

      }

      handleChange = input => event => {
        this.setState({ [input] :event.nativeEvent.text })
      }
      handleSelect = (input, value) => {
        this.setState({ [input] : value })
      }

      _next() {
        let currentStep = this.state.currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 4? 5: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
      _prev() {
        let currentStep = this.state.currentStep
        // If the current step is 2,  3 or 4, then subtract one on "previous" button click
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
      }


      _back() {
        this.props.navigation.navigate('onboard');
      }

      async _end() {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          //setErrorMsg('Permission to access location was denied');
          console.log (status)
          Alert.alert(
            "Error",
            "Denying location permissions may result in limited access!",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "OK", onPress: () => this.props.navigation.navigate('Complete') }
            ],
            { cancelable: false }
          );
        }
        else{
          let location = await Location.getCurrentPositionAsync({});
          this.setState({
            location: location
          })
          //redux call goes here 
          // then redirect to new page
          this.props.navigation.navigate('Complete');
        }
      }
      
      get previousButton(){
        let currentStep = this.state.currentStep;
        // If the current step is not 1, then render the "previous" button
        if(currentStep !==1){
          return (
            <Icon name={'chevron-left'} style={styles.left} size={25} onPress={ () => this._prev() }  />
          )
        }
        // ...else return nothing
        return (
          <Icon name={'chevron-left'} onPress={() => this._back()} style={styles.left} size={25}  />
        );
      }
      
      get nextButton(){
        let currentStep = this.state.currentStep;
        // If the current step is not 5, then render the "next" button
        if(currentStep <5){
          return (
            <Button  onPress={() => this._next()} label={'Continue'} customStyles={{ alignSelf:'center', width: '90%', fontFamily: 'avenir-next', backgroundColor: 'rgba( 255, 55, 95, 1.0)'}} ></Button>  
          )
        }
        // ...else render nothing
        return (
          <Button onPress={() => this._end()} label={'Enable Location'} customStyles={{ alignSelf:'center', width: '90%', fontFamily: 'avenir-next', backgroundColor: 'rgba( 255, 55, 95, 1.0)'}} ></Button>  
        );
      }
      // Render UI will go here...
      render() {   
        const {firstName, lastName, gender, birthday, preference, photos } = this.state; 
        const values= {firstName, lastName, gender};
        return (
          <>
          <HideWithKeyboard>
          <View style={{ height: 80, marginTop: 20}}>
            {this.previousButton}
          </View>
          </HideWithKeyboard>
          <View style={styles.container}>
            <Step1 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              handleSelect = {this.handleSelect}
              values={values}
            />
            <Step2 
              currentStep={this.state.currentStep} 
              handleSelect = {this.handleSelect}
              date = {birthday}
            />
            <Step3 
              currentStep={this.state.currentStep} 
              handleSelect = {this.handleSelect}
              pref = {preference}
            />
            <Step4 
              currentStep={this.state.currentStep} 
              handleSelect = {this.handleSelect}
              photos = {photos}
            />
            <Step5 
              currentStep={this.state.currentStep} 
            />
            <HideWithKeyboard>
            {this.nextButton} 
            <Dots length={5} active={this.state.currentStep-1} passiveDotWidth={9} activeDotWidth={10}  passiveDotHeight={9} activeDotHeight={10} activeColor={'rgba( 255, 55, 95, 1.0)'} />
            </HideWithKeyboard>
          </View>
          </>
        )
      }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor: '#FFF',
   justifyContent: 'flex-end',
  },
  left:{
    marginLeft: 10,
    marginTop: 15
  }
});


export default RegistrationScreen;