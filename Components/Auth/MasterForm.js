import React from 'react';
import {  Platform, View, Text, TextInput, StyleSheet } from 'react-native';
import Button from './Button.js';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class MasterForm extends React.Component {
    constructor(props) {
        super(props)
        // Set the initial input values
        this.state = {
          currentStep: 1, // Default is Step 1
          email: '',
          username: '',
          password: '', 
        }
        // Bind the submission to handleChange() 
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })    
      }
      
      // Trigger an alert on form submission
      handleSubmit = (event) => {
        event.preventDefault()
        const { email, username, password } = this.state
        alert(`Your registration detail: \n 
          Email: ${email} \n 
          Username: ${username} \n
          Password: ${password}`)
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
            <Button  onPress={() => this._prev()} label={'Continue'} customStyles={{ width: '90%', fontFamily: 'avenir-next', backgroundColor: 'rgba( 255, 55, 95, 1.0)'}} ></Button>
          )
        }
        // ...else return nothing
        return null;
      }
      
      get nextButton(){
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if(currentStep <3){
          return (
            <Button  onPress={() => this._next()} label={'Continue'} customStyles={{ width: '90%', fontFamily: 'avenir-next', backgroundColor: 'rgba( 255, 55, 95, 1.0)'}} ></Button>  
          )
        }
        // ...else render nothing
        return null;
      }
      // Render UI will go here...
      render() {    
        return (
            <>
            <Step1 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
            />
            <Step2 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
            />
            <Step3 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
            />
            {this.previousButton}
            {this.nextButton} 
            </>
        )
      }
}


export default MasterForm;