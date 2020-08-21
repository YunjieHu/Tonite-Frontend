import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import InfoIcon from "../../assets/SVG/photos.svg";
import PhotoPicker from './PhotoPicker.js'
import { ScrollView } from 'react-native-gesture-handler';

class Step4 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      hasCameraPermission: null,
      images: [],
      size: 1,
      }
    }

    async componentDidMount() {
     }

    accessRequest = async() => { 
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      this.setState({ hasCameraPermission: status === "granted" });
    }
    addImage = (value) => {
      this.setState({ images : [...this.state.images, value] })
      this.setState({size: this.state.images.length+1});
      this.props.handleSelect('photos', this.state.images)
    }

    removeImage = (value) => {
      let array = this.state.images;
      let index = array.indexOf(value)
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({images: array});
      }
      this.setState({size: this.state.images.length});
      this.props.handleSelect('photos', this.state.images)

    }

    render() {
          const { hasCameraPermission, size, images} = this.state;
          let rows = this.state.images.map(( item, i ) =>{
              return(
                <PhotoPicker  key={i} image ={item} addImage = {this.addImage} removeImage={this.removeImage} />
              )
          });
          //render only if it is step 4
          if (this.props.currentStep !== 4) { // Prop: The current step
            return null
          }
          if (hasCameraPermission === null) {
            this.accessRequest();
            return (
              <SafeAreaView style={styles.container}>
                 <View style = {styles.form}>
                    <View style={styles.logoContainer}>
                      <InfoIcon style={styles.logo} width={50} height={50} />
                    </View>
                    <Text style = {styles.heading}>Add Your Photos</Text>
                  </View>
              </SafeAreaView>
              );
           }
           else if (hasCameraPermission === false) {
            return (
              <SafeAreaView style={styles.container}>
                 <View style = {styles.form}>
                    <View style={styles.logoContainer}>
                      <InfoIcon style={styles.logo} width={50} height={50} />
                    </View>
                    <Text style = {styles.heading}>Access Denied!</Text>
                    <Text style = {styles.subheading}>To use Tonite, you'll need to grant access to your device's storage, at least while using the app.</Text>
                    <Text style = {styles.subheading}>iOS</Text>
                    <Text style = {styles.body}>Open your iOS settings &gt; Tonite &gt; Storage</Text>
                    <Text style = {styles.subheading}>Android</Text>
                    <Text style = {styles.body}>Open your phone's Settings &gt; Apps &gt; Tonite &gt; Permissions &gt; Storage</Text>
                    <Text style = {styles.subheading}>Alternatively</Text>
                    <TouchableOpacity style ={styles.errorButton} onPress={() => this.accessRequest()}>
                       <Text style={styles.errorText}>Try again</Text>
                    </TouchableOpacity>
                  </View>
              </SafeAreaView>
              )
            ;
           }
           else {
            return(
              <SafeAreaView style={styles.container}>
              <View style = {styles.form}>
                <View style={styles.logoContainer}>
                  <InfoIcon style={styles.logo} width={50} height={50} />
                </View>
                <Text style = {styles.heading}>Add Your Photos</Text>
                <Text style = {styles.body}>The more pictures you add, the better we can match you with someone special!</Text>
                  <ScrollView>
                  <View  style={styles.albumContainer}>
                      {rows}
                      
                      { images.length <= size ? <PhotoPicker image ={null} addImage = {this.addImage} removeImage={this.removeImage} /> : null}
                      { images.length < 6? <Text style={styles.tooltip}>We suggest 6 photos but add as many as you can</Text>: null}
                    </View>
                  </ScrollView>
              </View>
            </SafeAreaView>
          )
          }
    }
}

export default Step4;

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
    paddingBottom: 8,
    paddingTop: 4,
    textAlign:'left'
  },
  tooltip:{
    width: '100%',
    color: 'rgba( 152, 152, 157, 1.0)',
    fontFamily: 'avenir-next-italic', 
    fontSize: 13,
    marginTop: 6
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
 albumContainer:{
   marginTop: 10,
   flexDirection:'row',
   flex: 1,
   flexWrap:'wrap'
 },
 errorButton:{
   backgroundColor: 'rgba( 255, 55, 95, 1.0)',
   padding:10,
   width: 100,
   borderRadius:5,
   textAlign: 'center'
 },
 errorText:{
  fontSize:15,
	color: '#ffffff',
  textAlign: 'center',
 }
});