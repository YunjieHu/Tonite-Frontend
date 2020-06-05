import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Step3 extends React.Component {
    render() {
      if (this.props.currentStep !== 3) { // Prop: The current step
        return null
      }
      // The markup for the Step 3 UI
      return(
        <View style={styles.container} >
            <Text>step 3</Text>
        </View>
      )
    }
}

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
  infoContainer:{
      flex: 0.3
  },
  info:{
      fontFamily: 'avenir-next', 
      fontSize: 20,
  },
  tooltip:{
      fontFamily: 'avenir-next', 
      fontSize: 13,
      color: 'rgba( 152, 152, 157, 1.0)',
      width: '90%',
      paddingBottom: 16
  },
  phoneNumberText:{
      flex:1,
      borderColor: 'rgba( 255, 55, 95, 1.0)', 
      borderBottomWidth: 1.2,
      fontFamily: 'avenir-next', 
      fontSize: 19,
  }
});

export default Step3;