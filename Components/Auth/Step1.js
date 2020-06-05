import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import InfoIcon from "../../assets/SVG/info.svg";

class Step1 extends React.Component {
    render() {
      const { values } = this.props;
      if (this.props.currentStep !== 1) { // Prop: The current step
        return null
      }
      // The markup for the first name, last name and gender of the UI
      return(
        <View style={styles.container} >
              <View style={styles.logoContainer}>
                <InfoIcon style={styles.logo} width={50} height={50} />
              </View>
              <Text style = {styles.heading}>Basic Information</Text>
              <Text style = {styles.body}>We're going to need a few pieces of information to get started</Text>
              <View style = {styles.form}>
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
              </View>
        </View>
      )
    }
}

export default Step1;

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor: '#FFF',
   justifyContent: 'flex-start',
   alignItems:'center'
  },
  form:{
     width: '90%',
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     marginBottom: 20,
  },
  heading:{
      width: '100%',
      fontFamily: 'avenir-next-bold', 
      fontSize: 30,
      color: '#000',
      paddingBottom: 20,
      paddingHorizontal: 15,
      textAlign:'left'
  },
  body:{
      width: '100%',
      fontFamily: 'avenir-next', 
      fontSize: 16,
      color: '#000',
      paddingHorizontal: 15,
      textAlign:'left'
  },
  logoContainer:{
    justifyContent:'flex-end',
    alignSelf:'flex-start'
  },
  logo: {
    marginHorizontal: 20
  },
  inputText:{
    flex:1,
    borderColor: 'rgba( 255, 55, 95, 1.0)', 
    borderBottomWidth: 1.2,
    fontFamily: 'avenir-next', 
    fontSize: 19,
    alignSelf:'center'
}
});