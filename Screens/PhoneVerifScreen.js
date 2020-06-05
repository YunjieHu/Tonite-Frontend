import React from 'react';
import {  StyleSheet, View, Text} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import Button from "../Components/Auth/Button";
import CodeInput from 'react-native-code-input';

class PhoneVerifScreen extends React.Component {

    submit = (code) =>{
        console.log(code);
        this.props.navigation.navigate('EmailAuth');
    }
    render() {
        return(
            <KeyboardAvoidingView style={styles.container}  behavior={"padding"}>
                 <Text style = {styles.heading}>Enter Text Code</Text>
                 <Text style = {styles.body}>A code has been sent to your cellphone. Type in the code below.</Text>
                 <View style = {styles.form}>
                     <CodeInput
                        codeLength={6}
                        borderType={'underline'}
                        autoFocus={false}
                        space={6}
                        size={50}
                        inputPosition='left'
                        activeColor={'rgba(0, 0, 0, 1)'}
                        inactiveColor={'rgba(0, 0, 0, 0.3)'}
                        codeInputStyle={{ fontFamily: 'avenir-next-bold', fontSize: 25}}
                        onFulfill={(code) => this.submit(code)}
                    />
                    </View>
                    <Text style={styles.formPrompt} >Resend code</Text>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    heading:{
        width: '100%',
        fontFamily: 'avenir-next-bold', 
        fontSize: 30,
        color: '#000',
        paddingBottom: 5,
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
    form:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:100,
    },
    formPrompt:{
        flex: 1,
        color: '#000',
        textAlign:'center',
        fontFamily: 'avenir-next', 
        fontSize: 15,
        textDecorationLine: 'underline',
        textDecorationStyle: 'dotted',
      },
  });

  export default PhoneVerifScreen;