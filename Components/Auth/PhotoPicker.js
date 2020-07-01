import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';



class PhotoPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    getPhotoLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: 'Images',
          allowsEditing: true,
          aspect: [1, 1]
        });
        if (!result.cancelled) {
          this.props.addImage(result.uri);
        }
    }

    removePhotoLibrary = () => {
        this.props.removeImage(this.props.image);
    }

    render(){
        const { image } = this.props;
        return(
        <View style={{flexBasis: '33.333%'}}>
            <View style={styles.imagePreviewContainer}>
            {image ? (
                <>
                <Image source={{ uri: image }} style={{ flex: 1}} />
                <TouchableOpacity 
                    onPress={this.removePhotoLibrary.bind(this)}
                    style ={styles.removeButton}>
                    <Icon name="times"  size={17} />
                </TouchableOpacity>
                </>
            ) : (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                    onPress={this.getPhotoLibrary.bind(this)} >
                        <Icon
                            name="plus-circle"
                            size={40}
                            color={"#d3d3d3"}
                        />
                    </TouchableOpacity>
                </View>
            )}
            </View>
        </View>
        );
    }
}

export default PhotoPicker;

const styles = StyleSheet.create({
 imagePreviewContainer: {
  width: Dimensions.get("window").width/3.8,
  height: Dimensions.get("window").width/3.8,
  borderWidth: 1,
  borderRadius: 8,
  borderStyle: 'dashed',
  borderColor:'#d3d3d3',
  marginRight: 30,
  marginBottom: 17
 },
 removeButton:{
    width: 20,
    height: 20 ,
    backgroundColor: 'white',
    borderWidth:0.1,
    borderRadius: 50,
    justifyContent:"center",
    alignItems:'center',
    position: 'absolute',
    right: -5,
    top: -5,
    position: 'absolute'
 }
});