import React from 'react';
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';
import LocationIcon from "../../assets/SVG/location.svg";

class Step5 extends React.Component {
  constructor(props){
    super(props)
}


setDate(date) {
  this.props.handleSelect('birthday', date)
}

render() {
  const { date } = this.props;
  if (this.props.currentStep !== 5) { // Prop: The current step
    return null
  }
  // The markup for the first name, last name and gender of the UI
  return(
      <SafeAreaView style={styles.container}>
        <View style = {styles.form}>
            <View style={styles.logoContainer}>
              <LocationIcon style={styles.logo} width={50} height={50} />
            </View>
            <Text style = {styles.heading}>Where Are You?</Text>
            <Text style = {styles.body}>Enable your location so you can meet up with your matches.</Text>
          </View>
      </SafeAreaView>
  )
}
}


export default Step5;

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
    justifyContent:'flex-start',
    alignSelf:'flex-start'
  },
});