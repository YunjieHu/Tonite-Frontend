import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from "../Components/Auth/Button";
import FormInput from "../Components/Auth/FormInput";

class OnboardScreen extends React.Component {

    render() {
        return (
            <View style={styles.container} >
              <View style={styles.form}>
                <Button label={'LOGIN'}/>
                <Button label={'REGISTER'}/>
              </View>
            </View>
        );
    }
}

export default OnboardScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
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
});