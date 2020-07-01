import React from 'react';
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import InfoIcon from "../../assets/SVG/gender-neutral.svg";

class Step3 extends React.Component {

  updateIndex (selectedIndex) {
      this.props.handleSelect('preference', selectedIndex)
  }
  render() {
    const { pref } = this.props;
    if (this.props.currentStep !== 3) { // Prop: The current step
      return null
    }
    const buttons = ['♂ Men', '♀ Women', 'Everyone' ]
    // The markup for the first name, last name and gender of the UI
    return(
          <SafeAreaView style={styles.container}>
         <View style = {styles.form}>
            <View style={styles.logoContainer}>
              <InfoIcon style={styles.logo} width={50} height={50} />
            </View>
            <Text style = {styles.heading}>Who Are You Looking For?</Text>
            <ButtonGroup
              selectedIndex={pref}
              onPress={this.updateIndex.bind(this)}
              buttons={buttons}
              containerStyle={styles.buttonGroup}
              innerBorderStyle={styles.border}
              textStyle={styles.text}
              selectedButtonStyle={styles.selected}
              selectedTextStyle={{color: 'rgba( 255, 55, 95, 1.0)',}}
          ></ButtonGroup>
          </View>
          </SafeAreaView>
    )
  }
}

export default Step3;

const styles = StyleSheet.create({
  container: {
   flex:1,
   alignItems:'center'
  },
  form:{
    flex:1,
     width: '90%',
     justifyContent: "flex-start"
  },
  heading:{
      width: '100%',
      fontFamily: 'avenir-next-bold', 
      fontSize: 30,
      color: '#000',
      paddingBottom: 20,
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
    justifyContent:'flex-start',
    alignSelf:'flex-start',
  },
  buttonGroup:{
    flexDirection:'column',
    flex: 0.6,
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
    marginVertical: 20
  },
  selected:{
    backgroundColor:'transparent',
    borderColor: 'rgba( 255, 55, 95, 1.0)',
    borderWidth: 1.2,
    borderRadius: 7,
 }
});