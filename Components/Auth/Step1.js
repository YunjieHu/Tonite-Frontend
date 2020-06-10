import React from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard, KeyboardAvoidingView, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import InfoIcon from "../../assets/SVG/info.svg";
import HideWithKeyboard from 'react-native-hide-with-keyboard';

class Step1 extends React.Component {
    constructor(props){
        super(props)
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        this.props.handleSelect('gender', selectedIndex)
    }
    render() {
      const { values } = this.props;
      if (this.props.currentStep !== 1) { // Prop: The current step
        return null
      }
      const buttons = ['♂ Male', '♀ Female', 'Other']
      // The markup for the first name, last name and gender of the UI
      return(
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"} keyboardVerticalOffset={
          Platform.select({
             ios: () => 0,
             android: () => -100
          })()
        } >
            <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           <View style = {styles.form}>
              <View style={styles.logoContainer}>
                <InfoIcon style={styles.logo} width={50} height={50} />
              </View>
              <Text style = {styles.heading}>Basic Information</Text>
              <Text style = {styles.body}>We're going to need a few pieces of information to get started</Text>
                    <TextInput
                    style={styles.inputText}
                    value={values.firstName} 
                    onChange={this.props.handleChange('firstName')} 
                    placeholder='John' 
                    />

                   <TextInput
                    style={styles.inputText}
                    value={values.lastName} 
                    onChange={this.props.handleChange('lastName')} 
                    placeholder='Smith' 
                  />
                  <Text style={styles.tooltip}>This will only be shared with matches.</Text>
              <Text style = {styles.subheading}>What Is Your Gender?</Text>
              <ButtonGroup
                selectedIndex={values.gender}
                onPress={this.updateIndex.bind(this)}
                buttons={buttons}
                containerStyle={styles.buttonGroup}
                innerBorderStyle={styles.border}
                textStyle={styles.text}
                selectedButtonStyle={styles.selected}
                selectedTextStyle={{color: 'rgba( 255, 55, 95, 1.0)',}}
            ></ButtonGroup>
            </View>
            </TouchableWithoutFeedback>
            </SafeAreaView>
        </KeyboardAvoidingView>
      )
    }
}

export default Step1;

const styles = StyleSheet.create({
  container: {
   flex:1,
   alignItems:'center'
  },
  form:{
    flex:1,
     width: '90%',
     justifyContent: "flex-end"
  },
  heading:{
      width: '100%',
      fontFamily: 'avenir-next-bold', 
      fontSize: 30,
      color: '#000',
      paddingBottom: 20,
      textAlign:'left'
  },
  subheading:{
    width: '100%',
    fontFamily: 'avenir-next-bold', 
    fontSize: 15,
    color: '#000',
    paddingBottom: 10,
    textAlign:'left'
  },
  body:{ 
      width: '100%',
      fontFamily: 'avenir-next', 
      fontSize: 16,
      color: '#000',
      textAlign:'left'
  },
  logoContainer:{
    justifyContent:'flex-end',
    alignSelf:'flex-start'
  },
  logo: {
  },
  inputText:{
    width: '100%',
    borderColor: 'rgba( 255, 55, 95, 1.0)', 
    borderBottomWidth: 1.2,
    fontFamily: 'avenir-next', 
    fontSize: 22,
    marginTop: 30,
 },
 tooltip:{
  width: '100%',
  color: 'rgba( 152, 152, 157, 1.0)',
  fontFamily: 'avenir-next-italic', 
  fontSize: 13,
  marginTop: 6
 },
 buttonGroup:{
  height: 50,
  marginLeft: 0,
  marginRight: 0,
  marginBottom:22,
  borderRadius: 7,
},
text: {
  fontSize: 17,
  color:'rgba( 152, 152, 157, 1.0)',
  fontWeight:'600',
},
border:{
  color:"transparent",
  borderRadius: 10,
},
selected:{
  backgroundColor:'transparent',
  borderColor: 'rgba( 255, 55, 95, 1.0)',
  borderWidth: 1.2,
  borderRadius: 7,
}
});