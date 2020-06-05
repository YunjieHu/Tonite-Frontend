import React from 'react';
import {  Platform, View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Button from '../Components/Auth/Button.js';
import Step1 from '../Components/Auth/Step1.js';
import Step2 from '../Components/Auth/Step2.js';
import Step3 from '../Components/Auth/Step3.js';

class RegistrationScreen extends React.Component {
    constructor(props) {
        super(props)
        // Set the initial input values
        this.state = {
          currentStep: 1, // Default is Step 1
          firstName: '',
          lastName: '',
          gender: '', 
        }

      }

      handleChange = input => event => {
        this.setState({ [input] :event.nativeEvent.text })
        console.log(this.state.firstName)
      }

      _next() {
        let currentStep = this.state.currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
      _prev() {
        let currentStep = this.state.currentStep
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
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
          <Icon name={'chevron-left'} style={styles.left} size={25}  />
        );
      }
      
      get nextButton(){
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if(currentStep <3){
          return (
            <Button  onPress={() => this._next()} label={'Continue'} customStyles={{ alignSelf:'center', width: '90%', fontFamily: 'avenir-next', backgroundColor: 'rgba( 255, 55, 95, 1.0)'}} ></Button>  
          )
        }
        // ...else render nothing
        return (
          <Button label={'Continue'} customStyles={{ width: '90%', fontFamily: 'avenir-next', backgroundColor: 'rgba( 255, 55, 95, 1.0)'}} ></Button>  
        );
      }
      // Render UI will go here...
      render() {   
        const {firstName, lastName, gender } = this.state; 
        const values= {firstName, lastName, gender}
        return (
          <>
          <View style={{ height: 80, marginTop: 20}}>
            {this.previousButton}
          </View>
          <View style={styles.container}>
            <Step1 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              values={values}
            />
            <Step2 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
            />
            <Step3 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
            />
            {this.nextButton} 
            <Text>{this.state.currentStep}</Text>
          </View>
          </>
        )
      }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor: '#FFF',
   justifyContent: 'flex-start',
  },
  left:{
    marginLeft: 10,
    marginTop: 15
  }
});


export default RegistrationScreen;