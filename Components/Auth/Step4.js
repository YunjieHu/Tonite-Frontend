import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Button, Image} from 'react-native';
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
            return <View />
           }
           else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
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
 }
});