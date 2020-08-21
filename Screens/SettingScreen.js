import React from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {AsyncStorage} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SwitchRow  from '../Components/Setting/SwitchRow'
import SliderRow  from '../Components/Setting/SliderRow'
import ScaleSliderRow  from '../Components/Setting/ScaleSliderRow'
import Accordian  from '../Components/Setting/Accordion'

class SettingScreen extends React.Component {
    constructor () {
      super()
      this.state = {
        profileDisplay: true,
        distance: 10,
        ageRange: [25, 35],
        location: true,
        menu: [
          {
            title: 'Notifications',
            type: 'choose',
            data: [
              {key:'New Matches', caption: 'You just got a new match!', value: false},
              {key:'Messages',  caption: 'Someone sent you a message', value: false},
              {key:'Message Likes', caption: 'Someone liked your message', value: false},
              {key:'Top Picks', caption: 'Your daily top picks are ready!', value: false},
            ]
         },
         {
            title: 'Acccount Settings',
            type: 'update',
            data: [
              {key:'Phone Number', caption: '953-123-2349'},
              {key:'Email Address', caption : 'lol@gmail.com' },
            ]
         },
         {
            title: 'Contact Us',
            type: 'button',
            data: [
              {key:'Email Us!', caption: ''},
            ]
         },
         {
          title: 'Legal',
          type: 'text',
          data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
         },
         {
          title: 'Privacy Policy',
          type: 'text',
          data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
         },
         {
          title: 'Terms and Conditions',
          type: 'text',
          data: 'Lorem ipsum dolor sit'
         },

        ]
      }
    }
    
    logout = () =>{
      this.props.navigation.navigate('onboard');
    }

    clearAsyncStorage = async() => {
      AsyncStorage.clear();
    }

    handleSelect = (input, value) => {
      this.setState({ [input] : value })
    }


    renderAccordians=()=> {
      const items = [];
      for (item of this.state.menu) {
          items.push(
              <>
              <Accordian 
                  title = {item.title}
                  type = {item.type}
                  data = {item.data}
              />
              <View style={styles.hairline} />
              </>
          );
      }
      return items;
  }

    render() {
        const { profileDisplay, distance, ageRange, location } = this.state
        return (
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.toolbar}>
                <Text style = {styles.heading}>Setting</Text>
              </View>
              <View style= {styles.form}>
                <SwitchRow id= {'profileDisplay'} title= {'Show My Profile'} tooltip= {'Let others find your profile or hide it from the public'} isEnabled={profileDisplay}  handleSelect = {this.handleSelect}></SwitchRow>
                <View style={styles.hairline} />
                <SliderRow id= {'distance'} title= {'Maximum Distance'} tooltip= { Math.round(distance)+'mi'} value = {distance} min = {0} max = {50}  handleSelect = {this.handleSelect}></SliderRow>
                <View style={styles.hairline} />
                <ScaleSliderRow id= {'ageRange'} title= {'Age Range'} tooltip= { Math.round(ageRange[0])+'-'+Math.round(ageRange[1])} min = {18} max = {50} rangeMin= {ageRange[0]} rangeMax={ageRange[1]} handleSelect = {this.handleSelect}></ScaleSliderRow>
                <View style={styles.hairline} />
                <SwitchRow id= {'location'} title= {'Share My Location'} tooltip= {'Let potential matches know your current location while using the app'} isEnabled={location}  handleSelect = {this.handleSelect}></SwitchRow>
                <View style={styles.hairline} />
                { this.renderAccordians() }
              </View>


              <TouchableOpacity style={styles.button} onPress={() => this.logout()}>
                  <View style={styles.btnContainer}> 
                    <Text style={styles.btnTextStyles}>{'Log Out'}</Text>
                  </View>
                </TouchableOpacity>
                <Text style = {styles.version}>App Version v0.1</Text>
            </View>
          </ScrollView>
        );

    }
  }

  
  export default SettingScreen;

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FFF',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    toolbar: {
      flexDirection:'row',
      paddingTop: 45,
      justifyContent:'space-around',
    },
    heading:{
      fontFamily: 'avenir-next-bold', 
      fontSize: 18,
      color: '#000',
      textAlign:'center',
    },
    subheading:{
      fontFamily: 'avenir-next-bold', 
      fontSize: 16,
      color: '#000',
      textAlign:'center',
    },
    toolbarSection:{
      width: 80,
      textAlign:'center'
    },
    save:{
      fontFamily: 'avenir-next', 
      fontSize: 16,
      color: 'rgba( 255, 55, 95, 1.0)',
      textAlign:'center'
    },
    avatar:{
      marginTop: 25,
      borderRadius: 25,
      alignSelf: 'center',
      width: 125,
      height: 125,
      marginBottom: 20,
    },
    form:{
      justifyContent:'flex-start',
      paddingTop: 30
    },
    hairline:{
      backgroundColor: 'rgba( 152, 152, 157, 0.5)',
      height: 1,
      width: Dimensions.get('window').width,
      marginBottom: 10,
    },
    button:{
      width: '90%',
      backgroundColor: '#FFF',
      marginBottom: 12,
      paddingVertical: 16,
      borderRadius:5,
      borderWidth: 1,
      borderColor: 'rgba( 142, 142, 147, 0.4)',
      marginTop: 20,
    },
    btnContainer:{
      flexDirection: "row",
    },
    btnTextStyles: {
      flex:1,
      color: 'rgba( 255, 55, 95, 1.0)',
      textAlign:'center',
      marginLeft: -10
    },
    version:{
      fontFamily: 'avenir-next', 
      fontSize: 16,
      color: 'grey',
      textAlign:'center',
      paddingBottom: 20
    },
  })