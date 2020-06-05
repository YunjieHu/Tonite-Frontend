import React from 'react';
import {  StyleSheet, View, Text, TextInput, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import data from '../Misc/Countries';
import Button from "../Components/Auth/Button";

class EmailAuthScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
        };
        this.emailRef = React.createRef();
    }

    submit = () =>{
        this.props.navigation.navigate('Transition');
    }

    handleEmailChange = (text) => {
        this.setState({
            email: text
        });
    }

    render() {
        const { email } = this.state;
        return(
            <View style={styles.container} >
                <Text style = {styles.heading}>What's Your Email?</Text>
                <Text style = {styles.body}>Since it's your first time signing in, we need your email to secure your account.</Text>
                <View style = {styles.form}>
                    <TextInput
                    style={styles.phoneNumberText}
                    value={email}  textContentType='emailAddress' 
                     onChangeText={this.handleEmailChange} keyboardType={'email-address'} ref={this.emailRef}/>
                </View>
                <Text style={styles.tooltip} >You'll need this in case you forget your account login</Text>
                <Button  onPress={() => this.submit()} label={'Continue'} customStyles={{ width: '90%', fontFamily: 'avenir-next', backgroundColor: 'rgba( 255, 55, 95, 1.0)'}} disabled={!email} ></Button>
            </View>
        );
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

export default EmailAuthScreen;