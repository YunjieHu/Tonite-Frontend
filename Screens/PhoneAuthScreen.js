import React from 'react';
import {  StyleSheet, View, Text, TextInput, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import data from '../Misc/Countries';
import Button from "../Components/Auth/Button";

    const defaultCode = data.filter(
    obj => obj.name === 'United States'
    )[0].code


    const defaultDial = data.filter(
        obj => obj.name === 'United States'
        )[0].dial_code

class PhoneAuthScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: defaultCode,
            dial_code: defaultDial,
            phone:'',
            modalVisible: false,
        };
        this.phoneRef = React.createRef();
    }

    handlePhoneChange = (text) => {
        var cleaned = ('' + text).replace(/\D/g, '')
        var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            var intlCode = (match[1] ? '' : ''),
                number = [intlCode, match[2], '-', match[3], '-', match[4]].join('');

            this.setState({
                phone: number
            });

            return;
        }

        this.setState({
            phone: text
        });
    }

    showModal() {
        this.setState({ modalVisible: true })
    }

    hideModal() {
        this.setState({ modalVisible: false });
        this.phoneRef.current.focus();
    }

    async selectCountry(country) {  // Get data from Countries.js  
        const countryData = await data  
        try {
          // Get the country code
          const countryDial = await countryData.filter(
            obj => obj.name === country
          )[0].dial_code    // Get the country code
          const countryCode = await countryData.filter(
            obj => obj.name === country
          )[0].code    // Update the state then hide the Modal
          this.setState({ dial_code: countryDial, code: countryCode })
          await this.hideModal()
        }
        catch (err) {
          console.log(err)
        }
    }

    submit = () =>{
        this.props.navigation.navigate('PhoneVerif');
      }

    render() {
        const { phone } = this.state;
        const countryData = data;
        return(
            <KeyboardAvoidingView style={styles.container} behavior={"padding"} >
                <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 7, marginTop: 80 }}>
                    {/* Render the list of countries */}
                    <FlatList
                        data={countryData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={
                        ({ item }) =>
                            <TouchableWithoutFeedback onPress={() => this.selectCountry(item.name)}>
                            <View style={styles.countryStyle}>
                                <Text style={styles.textStyle}>
                                {item.flag} {item.name} ({item.dial_code})
                                </Text>
                            </View>
                            </TouchableWithoutFeedback>
                        }
                    />
                    </View>
                    <TouchableOpacity
                    onPress={() => this.hideModal()}
                    style={styles.closeButtonStyle}>
                    <Text style={styles.textStyle}>
                        Cancel
                    </Text>
                    </TouchableOpacity>
                </View>
                </Modal>

                <Text style = {styles.heading}>What's Your Number?</Text>
                <View style = {styles.form}>
                    <View  style={styles.infoContainer} ><Text style={styles.info} onPress={() => this.showModal()}>{this.state.code + ' ' + this.state.dial_code}</Text></View>
                    <TextInput
                    style={styles.phoneNumberText}
                    value={phone}  textContentType='telephoneNumber' 
                    dataDetectorTypes='phoneNumber'  onChangeText={this.handlePhoneChange} keyboardType={'phone-pad'} ref={this.phoneRef}/>
                </View>
                <Text style={styles.tooltip} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                <Button  onPress={() => this.submit()} label={'Continue'} customStyles={{ width: '90%', fontFamily: 'avenir-next', backgroundColor: 'rgba( 255, 55, 95, 1.0)'}} disabled={!phone} ></Button>
            </KeyboardAvoidingView>
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
    infoContainer:{
        flex: 0.3
    },
    info:{
        fontFamily: 'avenir-next', 
        fontSize: 20,
    },
    tooltip:{
        fontFamily: 'avenir-next', 
        fontSize: 14,
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

export default PhoneAuthScreen;