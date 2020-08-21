import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {AsyncStorage} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
    constructor () {
      super()
        this.state = {
          gender: 1,
          pref: 1
        }
        this.updateGender = this.updateGender.bind(this)
        this.updatePref = this.updatePref.bind(this)
    }

    updateGender(gender) {
      this.setState({gender})
    }

    updatePref (pref){
      this.setState({pref})
    }
    render() {
        const genders = ['♂ Male', '♀ Female', 'Other'];
        const prefs = ['Men', 'Women', 'Everyone'];
        const { gender, pref } = this.state
        return (
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.toolbar}>
                <View style={styles.toolbarSection}></View>
                <Text style = {styles.heading}>Profile</Text>
                <View style={styles.toolbarSection}>
                  <TouchableOpacity><Text style = {styles.save}>Save</Text></TouchableOpacity>
                </View>
              </View>
              <View style= {styles.form}>
                <Image style={styles.avatar} source={{ uri: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png'}}></Image>
                <TouchableOpacity style={styles.button}>
                  <View style={styles.btnContainer}> 
                    <Text style={styles.btnTextStyles}>{'View Public Profile'}</Text>
                  </View>
                </TouchableOpacity>
                <View style= {styles.panel}>
                  <Text style={styles.subheading}>{'First Name'}</Text>
                  <Text style={styles.body}>{'John'}</Text>
                  <View style={styles.hairline} />
                  <Text style={styles.subheading}>{'Last Name'}</Text>
                  <Text style={styles.body}>{'Dyson'}</Text>
                  <View style={styles.hairline} />
                  <Text style={styles.subheading}>{'Job Title'}</Text>
                  <Text style={styles.body}>{'Botanist'}</Text>
                  <View style={styles.hairline} />
                  <Text style={styles.subheading}>{'School'}</Text>
                  <Text style={styles.body}>{'New York University'}</Text>
                  <View style={styles.hairline} />
                  <Text style={styles.subheading}>{'About'}</Text>
                  <Text style={styles.body}>{'I am a beautiful person.'}</Text>
                  <View style={styles.hairline} />
                  <Text style={styles.subheading}>{'What is my gender?'}</Text>
                  <ButtonGroup 
                    onPress={this.updateGender}
                    selectedIndex={gender}
                    buttons={genders}
                    containerStyle={styles.buttonGroup}
                    innerBorderStyle={styles.border}
                    textStyle={styles.text}
                    selectedButtonStyle={styles.selected}
                    selectedTextStyle={{color: 'rgba( 255, 55, 95, 1.0)',}}
                ></ButtonGroup>
                <Text style={styles.subheading}>{'Who am I looking for?'}</Text>
                  <ButtonGroup
                    selectedIndex={pref}
                    onPress={this.updatePref}
                    buttons={prefs}
                    containerStyle={styles.buttonGroup}
                    innerBorderStyle={styles.border}
                    textStyle={styles.text}
                    selectedButtonStyle={styles.selected}
                    selectedTextStyle={{color: 'rgba( 255, 55, 95, 1.0)',}}
                ></ButtonGroup>
                </View>
              </View>
            </View>
            </ScrollView>
        );

    }
  }

  
  export default HomeScreen;

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
      justifyContent: 'space-between',
    },
    heading:{
      fontFamily: 'avenir-next-bold', 
      fontSize: 18,
      color: '#000',
      textAlign:'center',
      flex: 1
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
      width: '90%',
      justifyContent:'flex-start'
    },
    panel:{
      alignItems:'flex-start'
    },
    button:{
      width: '100%',
      backgroundColor: '#FFF',
      marginBottom: 12,
      paddingVertical: 16,
      borderRadius:5,
      borderWidth: 1,
      borderColor: 'rgba( 142, 142, 147, 0.4)'
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
    subheading:{
      fontFamily: 'avenir-next', 
      fontSize: 16,
      color: 'rgba( 152, 152, 157, 1.0)',
      paddingBottom: 10,
   },
   body:{
    fontFamily: 'avenir-next', 
    fontSize: 16,
    color: '#000',
    paddingBottom: 5,
   },
   hairline:{
    borderBottomColor: "rgba( 152, 152, 157, 0.5)", 
    borderBottomWidth: StyleSheet.hairlineWidth, 
    alignSelf:'stretch',
    marginBottom: 10,
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
  })